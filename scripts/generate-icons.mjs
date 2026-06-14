import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");
const svgBuffer = readFileSync(resolve(publicDir, "icon.svg"));

async function generate() {
  // favicon-32x32.png
  await sharp(svgBuffer).resize(32, 32).png().toFile(`${publicDir}/favicon-32x32.png`);
  console.log("✓ favicon-32x32.png");

  // favicon-16x16.png
  await sharp(svgBuffer).resize(16, 16).png().toFile(`${publicDir}/favicon-16x16.png`);
  console.log("✓ favicon-16x16.png");

  // apple-touch-icon.png (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile(`${publicDir}/apple-touch-icon.png`);
  console.log("✓ apple-touch-icon.png");

  // og-icon.png (512x512 for social/PWA)
  await sharp(svgBuffer).resize(512, 512).png().toFile(`${publicDir}/icon-512.png`);
  console.log("✓ icon-512.png");

  // favicon.ico — 32x32 embedded in ICO format
  // Sharp doesn't output .ico natively; use 32x32 PNG renamed as fallback
  // Browsers that support SVG favicons will use icon.svg instead
  await sharp(svgBuffer).resize(32, 32).png().toFile(`${publicDir}/favicon.png`);
  console.log("✓ favicon.png (use as favicon.ico fallback)");

  console.log("\nAll icons generated.");
}

generate().catch(console.error);
