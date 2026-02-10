import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "../public/images/ph-outline-map.png");
const outputPath = path.join(__dirname, "../public/images/ph-outline-map-transparent.png");

async function removeBg() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Get raw pixel data with alpha channel
  const raw = await image.ensureAlpha().raw().toBuffer();

  const pixels = Buffer.from(raw);
  const threshold = 200; // Pixels whiter than this become transparent

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // If pixel is near-white, make it fully transparent
    if (r > threshold && g > threshold && b > threshold) {
      pixels[i + 3] = 0; // Set alpha to 0
    }
  }

  await sharp(pixels, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log("Done! Transparent PNG saved to", outputPath);
  console.log("Image dimensions:", width, "x", height);
}

removeBg().catch(console.error);
