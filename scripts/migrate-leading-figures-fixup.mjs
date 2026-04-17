import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import probe from 'probe-image-size';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const blogMetaPath = join(root, 'content', 'posts.json');
const posts = JSON.parse(await readFile(blogMetaPath, 'utf-8'));
const bySlug = new Map(posts.map((p, i) => [p.slug, i]));

// 1. WordPress crop variants — featuredImage is full-res, figure was a -730xNNN crop.
//    Just set render: true; the full-res image will be used instead.
const wpCropSlugs = [
    'tapestry-2014-announced',
    '4-good-reasons-for-bad-papers',
    'the-vis-sports-authority',
    'wtfviz-thumbsupviz-and-helpmeviz',
];
for (const slug of wpCropSlugs) {
    const idx = bySlug.get(slug);
    posts[idx].featuredImage.render = true;
    console.log(`render: true  ${slug}`);
}

// 2. No featuredImage — fetch dimensions from figure src and add featuredImage.
const noFeatured = [
    { slug: 'square-pie-charts', src: 'https://media.eagereyes.org/media/attachments/squarepie.png', alt: 'Square Pie Chart from Diagrams Collection' },
    { slug: 'above-all-do-no-harm',  src: 'https://media.eagereyes.org/media/2011/soccer-teaser.jpg', alt: '' },
];
for (const { slug, src, alt } of noFeatured) {
    const idx = bySlug.get(slug);
    process.stdout.write(`Fetching ${src} ... `);
    const result = await probe(src);
    console.log(`${result.width}x${result.height}`);
    posts[idx].featuredImage = { src, width: result.width, height: result.height, alt, render: true };
}

await writeFile(blogMetaPath, JSON.stringify(posts, null, 4) + '\n');
console.log('\nDone.');
