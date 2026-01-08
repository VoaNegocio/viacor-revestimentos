import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const fotosDir = path.resolve(publicDir, 'fotos');

// Configuration
const config = {
    quality: 80,
    heroMaxWidth: 1920,
    galleryMaxWidth: 1200,
};

// Files that are likely hero/backgrounds and should be larger
const heroImages = ['img1.jpg', 'viacor-hero1.jpg', 'img3.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'];

async function optimizeDir(directory) {
    if (!fs.existsSync(directory)) {
        console.log(`Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(directory, file);
            const ext = path.extname(file);
            const name = path.basename(file, ext);
            const outputPath = path.join(directory, `${name}.webp`);

            console.log(`Optimizing: ${file}...`);

            try {
                let pipeline = sharp(inputPath);
                const metadata = await pipeline.metadata();

                let width = config.galleryMaxWidth;

                // Keep larger size for hero/background images
                // Also check file name for 'showroom' to keep them reasonable but not massive
                if (
                    heroImages.includes(file) ||
                    (metadata.width > 2000 && !file.includes('showroom'))
                ) {
                    width = config.heroMaxWidth;
                }

                // If original is smaller, don't upscale
                if (metadata.width < width) {
                    width = metadata.width;
                }

                await pipeline
                    .resize({ width: width, withoutEnlargement: true })
                    .webp({ quality: config.quality })
                    .toFile(outputPath);

                console.log(`Saved to ${outputPath} (width: ${width})`);
            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        }
    }
}

async function main() {
    console.log('Starting optimization...');
    await optimizeDir(fotosDir);
    await optimizeDir(publicDir);
    console.log('Optimization complete!');
}

main();
