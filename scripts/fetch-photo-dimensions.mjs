import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import probe from 'probe-image-size';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function fetchDimensions(url) {
    const result = await probe(url);
    return { width: result.width, height: result.height };
}

// --- photos.json: gallery photos and featuredImages ---

const photosPath = join(__dirname, '..', 'content', 'photos.json');
const galleries = JSON.parse(await readFile(photosPath, 'utf-8'));
let photosUpdated = 0;

for (const gallery of galleries) {
    // Migrate featuredImage string → object
    if (typeof gallery.featuredImage === 'string') {
        gallery.featuredImage = { src: gallery.featuredImage };
    }
    if (!gallery.featuredImage.width || !gallery.featuredImage.height) {
        process.stdout.write(`Fetching ${gallery.featuredImage.src} ... `);
        const dims = await fetchDimensions(gallery.featuredImage.src);
        Object.assign(gallery.featuredImage, dims);
        console.log(`${dims.width}x${dims.height}`);
        photosUpdated++;
    }

    for (const row of gallery.photos) {
        const photos = Array.isArray(row) ? row : [row];
        for (const photo of photos) {
            if (photo.width && photo.height) continue;
            process.stdout.write(`Fetching ${photo.src} ... `);
            const dims = await fetchDimensions(photo.src);
            photo.width = dims.width;
            photo.height = dims.height;
            console.log(`${dims.width}x${dims.height}`);
            photosUpdated++;
        }
    }
}

await writeFile(photosPath, JSON.stringify(galleries, null, 4) + '\n');
console.log(`Updated ${photosUpdated} image(s) in content/photos.json`);

// --- blog-meta.json: featuredImages ---

const blogMetaPath = join(__dirname, '..', 'content', 'blog-meta.json');
const posts = JSON.parse(await readFile(blogMetaPath, 'utf-8'));
let blogUpdated = 0;

for (const post of posts) {
    if (!post.featuredImage) continue;

    // Migrate string → object
    if (typeof post.featuredImage === 'string') {
        post.featuredImage = { src: post.featuredImage };
    }
    if (!post.featuredImage.width || !post.featuredImage.height) {
        process.stdout.write(`Fetching ${post.featuredImage.src} ... `);
        const dims = await fetchDimensions(post.featuredImage.src);
        Object.assign(post.featuredImage, dims);
        console.log(`${dims.width}x${dims.height}`);
        blogUpdated++;
    }
}

await writeFile(blogMetaPath, JSON.stringify(posts, null, 4) + '\n');
console.log(`Updated ${blogUpdated} image(s) in content/blog-meta.json`);
