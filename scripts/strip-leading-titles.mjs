import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'content', 'blog');

const years = (await readdir(blogDir, { withFileTypes: true }))
    .filter(d => d.isDirectory())
    .map(d => d.name);

let stripped = 0;
let skipped = 0;

for (const year of years.sort()) {
    const files = (await readdir(join(blogDir, year)))
        .filter(f => f.endsWith('.md') && !f.includes('+++'));

    for (const file of files) {
        const path = join(blogDir, year, file);
        const content = await readFile(path, 'utf-8');
        if (!content.startsWith('#')) { skipped++; continue; }
        await writeFile(path, content.replace(/^#[^\n]*\n+/, ''));
        stripped++;
    }
}

console.log(`Stripped: ${stripped}  Skipped: ${skipped}`);
