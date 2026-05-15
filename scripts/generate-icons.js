const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const mkdir = (p) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
};

const crc32 = (buf) => {
  let crc = ~0;
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return ~crc >>> 0;
};

const createChunk = (type, data) => {
  const typeBuf = Buffer.from(type, 'ascii');
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const chunk = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(chunk), 0);
  return Buffer.concat([length, chunk, crc]);
};

const writePng = (width, height, filePath, baseColor) => {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);
  const ihdrChunk = createChunk('IHDR', ihdr);

  const rowBytes = 1 + width * 4;
  const raw = Buffer.alloc(rowBytes * height);
  for (let y = 0; y < height; y++) {
    const row = raw.subarray(y * rowBytes, (y + 1) * rowBytes);
    row[0] = 0;
    for (let x = 0; x < width; x++) {
      const ratio = (x + y) / (width + height - 2);
      const r = Math.round(baseColor[0] * (1 - ratio * 0.2));
      const g = Math.round(baseColor[1] * (1 - ratio * 0.2));
      const b = Math.round(baseColor[2] * (1 - ratio * 0.2));
      const idx = 1 + x * 4;
      row[idx] = r;
      row[idx + 1] = g;
      row[idx + 2] = b;
      row[idx + 3] = 255;
    }
  }

  const idatChunk = createChunk('IDAT', zlib.deflateSync(raw));
  const iendChunk = createChunk('IEND', Buffer.alloc(0));
  fs.writeFileSync(filePath, Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]));
};

mkdir(path.join(__dirname, '..', 'public', 'icons'));
writePng(192, 192, path.join(__dirname, '..', 'public', 'icons', 'icon-192.png'), [201, 168, 76]);
writePng(512, 512, path.join(__dirname, '..', 'public', 'icons', 'icon-512.png'), [201, 168, 76]);

const pngData = fs.readFileSync(path.join(__dirname, '..', 'public', 'icons', 'icon-192.png'));
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(16, 0);
entry.writeUInt8(16, 1);
entry.writeUInt8(0, 2);
entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(pngData.length, 8);
entry.writeUInt32LE(6 + 16, 12);
fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.ico'), Buffer.concat([icoHeader, entry, pngData]));
console.log('Generated public/favicon.ico and public/icons/icon-192.png, public/icons/icon-512.png');
