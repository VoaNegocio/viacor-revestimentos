import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');

// Configuration - aggressive quality for web performance
const config = {
    // WebP quality (60-75 is sweet spot for photos with good visual quality)
    quality: 65,
    // Max widths by usage context
    heroMaxWidth: 1600,       // Hero/background images
    galleryMaxWidth: 800,     // Gallery thumbnails (shown at ~300-600px)
    showroomMaxWidth: 1000,   // Showroom carousel images
    promoMaxWidth: 600,       // Promo card images (shown in small carousel)
    logoMaxWidth: 300,        // Brand logos
    avatarMaxWidth: 100,      // Avatar images (shown at 56px)
};

// Categorize images by their usage for proper sizing
const imageCategories = {
    hero: ['img1', 'viacor-hero1', 'showroom5'],
    showroom: ['showroom1', 'showroom2', 'showroom3', 'showroom4'],
    promo: ['promo1', 'promo2', 'promo3', 'promo4'],
    avatar: ['claudiapereto', 'sayuri', 'elcio', 'monica', 'fernanda'],
    logo: ['portinari', 'castelato', 'castellato', 'eliane', 'atlas', 'viacor-logo', 'logo-viacor'],
};

function getMaxWidth(filename) {
    const name = filename.toLowerCase();
    for (const [category, patterns] of Object.entries(imageCategories)) {
        if (patterns.some(p => name.includes(p))) {
            return config[`${category}MaxWidth`] || config.galleryMaxWidth;
        }
    }
    return config.galleryMaxWidth;
}

async function optimizeFile(inputPath, outputPath, maxWidth) {
    try {
        const pipeline = sharp(inputPath);
        const metadata = await pipeline.metadata();

        const width = Math.min(maxWidth, metadata.width || maxWidth);

        await pipeline
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: config.quality, effort: 6 })
            .toFile(outputPath);

        const inputSize = fs.statSync(inputPath).size;
        const outputSize = fs.statSync(outputPath).size;
        const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

        console.log(`  ✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB, -${savings}%)`);
    } catch (error) {
        console.error(`  ❌ Error: ${path.basename(inputPath)}: ${error.message}`);
    }
}

async function optimizeDirectory(directory, label) {
    if (!fs.existsSync(directory)) {
        console.log(`⚠️  Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    if (imageFiles.length === 0) {
        console.log(`⏭️  ${label}: No JPG/PNG files to convert`);
        return;
    }

    console.log(`\n📁 ${label} (${imageFiles.length} files)`);

    for (const file of imageFiles) {
        const inputPath = path.join(directory, file);
        const name = path.basename(file, path.extname(file));
        const outputPath = path.join(directory, `${name}.webp`);
        const maxWidth = getMaxWidth(name);

        await optimizeFile(inputPath, outputPath, maxWidth);
    }
}

async function reOptimizeWebP(directory, label) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);
    const webpFiles = files.filter(f => /\.webp$/i.test(f));

    // Only re-optimize webp files that are > 150KB (likely oversized)
    const oversized = [];
    for (const file of webpFiles) {
        const filePath = path.join(directory, file);
        const size = fs.statSync(filePath).size;
        if (size > 150 * 1024) { // > 150KB
            oversized.push({ file, path: filePath, size });
        }
    }

    if (oversized.length === 0) return;

    console.log(`\n🔄 Re-optimizing ${oversized.length} oversized WebP in ${label}`);

    for (const item of oversized) {
        const name = path.basename(item.file, '.webp');
        const maxWidth = getMaxWidth(name);
        const tempPath = item.path + '.tmp';

        try {
            const pipeline = sharp(item.path);
            const metadata = await pipeline.metadata();
            const width = Math.min(maxWidth, metadata.width || maxWidth);

            await pipeline
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: config.quality, effort: 6 })
                .toFile(tempPath);

            const newSize = fs.statSync(tempPath).size;

            // Only replace if actually smaller
            if (newSize < item.size) {
                fs.renameSync(tempPath, item.path);
                const savings = ((1 - newSize / item.size) * 100).toFixed(1);
                console.log(`  ✅ ${item.file}: ${(item.size / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${savings}%)`);
            } else {
                fs.unlinkSync(tempPath);
                console.log(`  ⏭️  ${item.file}: Already optimal (${(item.size / 1024).toFixed(0)}KB)`);
            }
        } catch (error) {
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            console.error(`  ❌ ${item.file}: ${error.message}`);
        }
    }
}

async function main() {
    console.log('🚀 Via Cor Performance Optimizer');
    console.log('================================\n');

    // 1. Convert all JPG/PNG to WebP across all directories
    await optimizeDirectory(path.join(publicDir, 'fotos'), 'fotos');
    await optimizeDirectory(path.join(publicDir, 'promocao'), 'promocao');
    await optimizeDirectory(path.join(publicDir, 'marcas'), 'marcas');
    await optimizeDirectory(path.join(publicDir, 'avatars'), 'avatars');
    await optimizeDirectory(publicDir, 'public (root)');

    // 2. Re-optimize oversized WebP files
    await reOptimizeWebP(path.join(publicDir, 'fotos'), 'fotos');
    await reOptimizeWebP(path.join(publicDir, 'promocao'), 'promocao');

    // 3. Summary
    console.log('\n================================');
    console.log('✨ Optimization complete!');
    console.log('\n📌 Next steps:');
    console.log('   - Verify images look good visually');
    console.log('   - Update PromoCarousel.jsx to use .webp instead of .jpg');
    console.log('   - Consider removing original JPG/PNG files to save disk space');
}

main();
