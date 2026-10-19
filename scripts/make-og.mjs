// Writes public/og-1200x630.png, the link-preview image: the Mallasa photo, darkened, with the
// name and place on it. Social networks do not render SVG, so it is a PNG. Run: npm run og
import sharp from 'sharp';

const W = 1200, H = 630;
const text = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#10251a" opacity="0.62"/>
  <text x="72" y="300" font-family="Helvetica Neue, Arial, sans-serif" font-size="84" font-weight="800" fill="#fffdf8">Ernesto Rivera</text>
  <text x="72" y="372" font-family="Helvetica Neue, Arial, sans-serif" font-size="34" fill="#d8e2d9">Software engineering · open tools for communities</text>
  <text x="72" y="540" font-family="Helvetica Neue, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="3" fill="#d8e2d9">MALLASA · LA PAZ · BOLIVIA</text>
</svg>`;

await sharp('src/assets/mallasa.jpg')
  .resize(W, H, { fit: 'cover' })
  .composite([{ input: Buffer.from(text) }])
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile('public/og-1200x630.png');
console.log('public/og-1200x630.png written');
