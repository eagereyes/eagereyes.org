import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const blogMetaPath = join(root, 'content', 'blog-meta.json');
const posts = JSON.parse(await readFile(blogMetaPath, 'utf-8'));

// Build slug → meta index map
const bySlug = new Map(posts.map((p, i) => [p.slug, i]));

// Find all markdown files
const blogDir = join(root, 'content', 'blog');
const years = (await readdir(blogDir, { withFileTypes: true }))
    .filter(d => d.isDirectory())
    .map(d => d.name);

let matched = 0;
let mismatch = 0;
let noMeta = 0;
let noFigure = 0;

const FIGURE_RE = /^\s*<figure>([\s\S]*?)<\/figure>/;
const IMG_SRC_RE = /<img[^>]+src="([^"]+)"/;

for (const year of years.sort()) {
    const files = (await readdir(join(blogDir, year)))
        .filter(f => f.endsWith('.md') && !f.includes('+++'));

    for (const file of files) {
        const slug = file.replace(/\.md$/, '');
        const idx = bySlug.get(slug);
        if (idx === undefined) {
            noMeta++;
            continue;
        }

        const content = await readFile(join(blogDir, year, file), 'utf-8');
        const figureMatch = content.match(FIGURE_RE);
        if (!figureMatch) {
            noFigure++;
            continue;
        }

        const figureBody = figureMatch[1];
        const srcMatch = figureBody.match(IMG_SRC_RE);
        if (!srcMatch) {
            noFigure++;
            continue;
        }

        const figureSrc = srcMatch[1];
        const meta = posts[idx];

        if (!meta.featuredImage) {
            console.log(`NO_FEATURED_IMAGE  ${slug}  figure: ${figureSrc}`);
            mismatch++;
            continue;
        }

        if (meta.featuredImage.src !== figureSrc) {
            console.log(`MISMATCH  ${slug}`);
            console.log(`  featured: ${meta.featuredImage.src}`);
            console.log(`  figure:   ${figureSrc}`);
            mismatch++;
            continue;
        }

        // Match — set render: true
        meta.featuredImage.render = true;
        matched++;
    }
}

await writeFile(blogMetaPath, JSON.stringify(posts, null, 4) + '\n');

console.log(`\nDone.`);
console.log(`  render: true set:  ${matched}`);
console.log(`  src mismatch:      ${mismatch}`);
console.log(`  no leading figure: ${noFigure}`);
console.log(`  no meta entry:     ${noMeta}`);
