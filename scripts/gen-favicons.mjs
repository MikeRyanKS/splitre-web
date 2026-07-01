import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../public/icon.svg");
const pub = path.join(__dirname, "../public");

const svgBuf = fs.readFileSync(src);

async function gen(size, outName) {
  const buf = await sharp(svgBuf).resize(size, size).png().toBuffer();
  fs.writeFileSync(path.join(pub, outName), buf);
  console.log(`✓ ${outName} (${size}x${size})`);
  return buf;
}

// Generate PNG variants
const [p16, p32, p180, p512] = await Promise.all([
  gen(16, "favicon-16x16.png"),
  gen(32, "favicon-32x32.png"),
  gen(180, "apple-touch-icon.png"),
  gen(512, "icon-512.png"),
]);

// favicon.png (32x32)
fs.writeFileSync(path.join(pub, "favicon.png"), p32);
console.log("✓ favicon.png (32x32)");

// Build a minimal ICO file containing 16x16 and 32x32 PNGs
// ICO format: ICONDIR header + ICONDIRENTRY[] + PNG data
function buildIco(pngs) {
  const count = pngs.length;
  // Each ICONDIRENTRY is 16 bytes; ICONDIR header is 6 bytes
  const headerSize = 6 + count * 16;
  let offset = headerSize;

  const entries = pngs.map(({ buf, size }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width (0 = 256)
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2);  // color count
    entry.writeUInt8(0, 3);  // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    offset += buf.length;
    return entry;
  });

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = ICO
  header.writeUInt16LE(count, 4); // image count

  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
}

const icoBuf = buildIco([
  { buf: p16, size: 16 },
  { buf: p32, size: 32 },
]);
fs.writeFileSync(path.join(pub, "favicon.ico"), icoBuf);
console.log("✓ favicon.ico (16x16 + 32x32)");
