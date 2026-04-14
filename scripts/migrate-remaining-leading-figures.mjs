import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const files = [
    'content/blog/2008/spss-viz-designer.md',
    'content/blog/2008/swing-states.md',
    'content/blog/2009/data-gov-browser.md',
    'content/blog/2009/new-sister-site-eagerears.md',
    'content/blog/2010/conference-acceptance-rates.md',
    'content/blog/2010/itunes-10-billion-song-downloads-visualization.md',
    'content/blog/2010/the-rise-and-fall-of-swivel.md',
    'content/blog/2013/means.md',
    'content/blog/2013/review-chabris-simons-invisible-gorilla.md',
];

const metaPath = join(root, 'content/blog-meta.json');
const meta = JSON.parse(await readFile(metaPath, 'utf-8'));

let updated = 0;

for (const relPath of files) {
    const filePath = join(root, relPath);
    const content = await readFile(filePath, 'utf-8');

    if (!content.startsWith('<figure')) {
        console.log(`SKIP (no leading figure): ${relPath}`);
        continue;
    }

    // Strip the leading <figure>...</figure> block (single-line or multi-line)
    const stripped = content.replace(/^<figure>[\s\S]*?<\/figure>\n+/, '');

    // Find slug from path: content/blog/<year>/<slug>.md
    const slug = relPath.split('/').pop().replace(/\.md$/, '');
    const postIndex = meta.findIndex(p => p.slug === slug);

    if (postIndex < 0) {
        console.log(`SKIP (not found in meta): ${relPath}`);
        continue;
    }

    // Set render: true on the existing featuredImage (keep src/width/height already in meta)
    if (!meta[postIndex].featuredImage) {
        console.log(`SKIP (no featuredImage in meta): ${relPath}`);
        continue;
    }

    meta[postIndex].featuredImage = { ...meta[postIndex].featuredImage, render: true };
    await writeFile(filePath, stripped);
    updated++;
    console.log(`Updated: ${relPath}`);
}

await writeFile(metaPath, JSON.stringify(meta, null, 4));
console.log(`\nDone. Updated ${updated} files.`);
