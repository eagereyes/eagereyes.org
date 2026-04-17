import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const posts = JSON.parse(await readFile(join(root, 'content', 'posts.json'), 'utf-8'));
const renderPosts = posts.filter(p => p.featuredImage?.render);

const FIGURE_RE = /^\s*<figure>[\s\S]*?<\/figure>\s*/;
let stripped = 0;
let skipped = 0;

for (const post of renderPosts) {
    const year = post.date.slice(0, 4);
    const path = join(root, 'content', 'blog', year, `${post.slug}.md`);
    const content = await readFile(path, 'utf-8');
    if (!content.trimStart().startsWith('<figure>')) {
        skipped++;
        continue;
    }
    await writeFile(path, content.replace(FIGURE_RE, ''));
    stripped++;
}

console.log(`Stripped: ${stripped}  Skipped (no leading figure): ${skipped}`);
