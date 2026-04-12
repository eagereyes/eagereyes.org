import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import probe from 'probe-image-size';

const __dirname = dirname(fileURLToPath(import.meta.url));
const photosPath = join(__dirname, '..', 'content', 'photos.json');

const galleries = JSON.parse(await readFile(photosPath, 'utf-8'));

let updated = 0;

for (const gallery of galleries) {
    for (let i = 0; i < gallery.photos.length; i++) {
        const row = gallery.photos[i];
        const photos = Array.isArray(row) ? row : [row];
        for (const photo of photos) {
            if (photo.width && photo.height) continue;
            process.stdout.write(`Fetching ${photo.src} ... `);
            const result = await probe(photo.src);
            photo.width = result.width;
            photo.height = result.height;
            console.log(`${result.width}x${result.height}`);
            updated++;
        }
    }
}

if (updated > 0) {
    await writeFile(photosPath, JSON.stringify(galleries, null, 4) + '\n');
    console.log(`\nUpdated ${updated} photo(s) in content/photos.json`);
} else {
    console.log('All photos already have dimensions.');
}
