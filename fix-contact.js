const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
if (!fs.existsSync(filePath)) {
  console.error('Contact page not found');
  process.exit(1);
}
const content = fs.readFileSync(filePath, 'utf8');
const cleaned = content.replace(/mailto:[\w@\.\-]+/g, 'mailto:contact@globalnet.example');
fs.writeFileSync(filePath, cleaned, 'utf8');
console.log('Contact page email links fixed.');
