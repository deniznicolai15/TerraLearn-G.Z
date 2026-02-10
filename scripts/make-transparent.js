import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "../public/images/ph-outline-map.png");
const outputPath = path.join(__dirname, "../public/images/ph-outline-map-transparent.png");

async function main() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log("Input dimensions:", metadata.width, "x", metadata.height);

  // Get raw pixel data
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log("Channels:", info.channels, "Size:", info.width, "x", info.height);

  // Make light pixels (white/near-white and the checkered gray) transparent
  // Keep only dark pixels (the outline strokes)
  const threshold = 200; // pixels brighter than this become transparent
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Calculate brightness
    const brightness = (r + g + b) / 3;

    if (brightness > threshold) {
      // Make light pixels fully transparent
      pixels[i + 3] = 0;
    } else {
      // Make dark pixels fully opaque black (the outlines)
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      pixels[i + 3] = 255;
    }
  }

  await sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log("Saved transparent map to:", outputPath);
}

main().catch(console.error);
