import https from 'https';
import fs from 'fs';
import path from 'path';

const SAVE_DIR = 'D:\\doll creaion page\\public\\assets\\skylar-layers';
const JS_DIR = 'D:\\doll creaion page\\ag-js-bundles';
fs.mkdirSync(SAVE_DIR, { recursive: true });
fs.mkdirSync(JS_DIR, { recursive: true });

function downloadText(url) {
  return new Promise((resolve, reject) => {
    let data = '';
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadText(res.headers.location).then(resolve).catch(reject);
      }
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode)); return; }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    req.on('error', err => { try { fs.unlinkSync(dest); } catch(e) {} reject(err); });
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Extract all script src URLs from the saved HTML
const html = fs.readFileSync('D:\\doll creaion page\\ag.html', 'utf8');

// Find all script URLs
const scriptUrls = new Set();

// Pattern 1: full URLs in src=""
const fullSrcPattern = /src="(https?:\/\/[^"]+\.js[^"]*)"/g;
let m;
while ((m = fullSrcPattern.exec(html)) !== null) scriptUrls.add(m[1]);

// Pattern 2: relative paths in src=""  
const relSrcPattern = /src="(\/_nuxt\/[^"]+\.js)"/g;
while ((m = relSrcPattern.exec(html)) !== null) scriptUrls.add('https://www.americangirl.com' + m[1]);

// Pattern 3: /a/ prefixed paths (Nuxt 3 style)
const nuxtPattern = /["'](\/[^"']+\.js)["']/g;
while ((m = nuxtPattern.exec(html)) !== null) {
  if (m[1].includes('chunk') || m[1].includes('bundle') || m[1].includes('_nuxt') || m[1].includes('assets')) {
    scriptUrls.add('https://www.americangirl.com' + m[1]);
  }
}

console.log(`Found ${scriptUrls.size} JS bundle URLs to search`);

const collectedUrls = new Map();

function extractFromCode(code, sourceLabel) {
  let found = 0;
  // Pattern: bltXXX/VERSIONXXX/FILENAME.png inside the cyo-ag-contentstack path
  const regex = /(blt[a-f0-9]{16})\/([a-f0-9]{24})\/([A-Za-z0-9_\-]+\.png)/g;
  while ((m = regex.exec(code)) !== null) {
    const blt = m[1], ver = m[2], file = m[3];
    const url = `https://images.mattel.net/image/upload/w_1090,c_scale/f_auto/q_auto:best/cyo-ag-contentstack/${blt}/${ver}/${file}`;
    if (!collectedUrls.has(file)) {
      collectedUrls.set(file, url);
      console.log(`  [${sourceLabel}] ${file}`);
      found++;
    }
  }
  return found;
}

// Also extract from already-saved HTML
console.log('\nSearching HTML...');
extractFromCode(html, 'HTML');

// Download and search each JS bundle
let bundleCount = 0;
for (const url of scriptUrls) {
  bundleCount++;
  const fileName = url.split('/').pop().split('?')[0];
  const localPath = path.join(JS_DIR, fileName + '.js');
  
  try {
    let code;
    if (fs.existsSync(localPath)) {
      code = fs.readFileSync(localPath, 'utf8');
    } else {
      process.stdout.write(`[${bundleCount}/${scriptUrls.size}] Fetching ${fileName}... `);
      code = await downloadText(url);
      fs.writeFileSync(localPath, code);
      console.log(`OK (${Math.round(code.length/1024)}KB)`);
    }
    const found = extractFromCode(code, fileName);
    if (found === 0 && code.length < 1000) console.log(`  Small/empty bundle, skipping`);
  } catch(e) {
    console.log(`  FAILED: ${e.message}`);
  }
}

// Also try fetching the main JS chunk that contains the CYO config
// The AG CYO app is likely a separate app bundle
console.log('\n\nTrying to find AG CYO app bundle...');
const possibleBundles = [
  'https://www.americangirl.com/a/create-your-own/create',
  'https://www.americangirl.com/_nuxt/cyo.js',
  'https://www.americangirl.com/a/create-your-own/js/app.js',
  'https://www.americangirl.com/a/create-your-own/js/chunk-vendors.js',
];

for (const url of possibleBundles) {
  try {
    process.stdout.write(`Trying ${url}... `);
    const code = await downloadText(url);
    if (code.length > 5000) {
      console.log(`OK (${Math.round(code.length/1024)}KB)`);
      extractFromCode(code, 'extra-' + url.split('/').pop());
    } else {
      console.log(`Too small (${code.length}B)`);
    }
  } catch(e) { console.log(`FAIL: ${e.message}`); }
}

console.log(`\n\nTotal unique CYO images found: ${collectedUrls.size}`);

const manifest = {};
for (const [k, v] of collectedUrls) manifest[k] = v;
fs.writeFileSync('D:\\doll creaion page\\cyo-manifest.json', JSON.stringify(manifest, null, 2));
console.log('Saved manifest to cyo-manifest.json');

// Download all layer images
let count = 0;
for (const [fileName, url] of collectedUrls) {
  count++;
  const dest = path.join(SAVE_DIR, fileName);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`[${count}/${collectedUrls.size}] Skip (exists): ${fileName}`);
    continue;
  }
  try {
    console.log(`[${count}/${collectedUrls.size}] Downloading ${fileName}`);
    await downloadFile(url, dest);
    await sleep(100);
  } catch(e) {
    console.log(`  FAIL: ${e.message}`);
  }
}

console.log('\nAll done! Images saved to:', SAVE_DIR);
