const fs = require('fs');
const https = require('https');
const http = require('http');
const url = require('url');

const file = process.argv[2] || 'small-living-room-decor-ideas.html';
if (!fs.existsSync(file)) {
  console.error(`File ${file} does not exist.`);
  process.exit(1);
}

const content = fs.readFileSync(file, 'utf8');
const imgMatches = [...content.matchAll(/<img\s+([^>]+)>/gi)];

const images = [];
imgMatches.forEach((m, idx) => {
  const tag = m[1];
  const src = (tag.match(/src=["']([^"']+)["']/) || [])[1];
  const alt = (tag.match(/alt=["']([^"']*)["']/) || [])[1];
  if (src && !src.startsWith('${')) {
    images.push({ idx: idx + 1, src, alt });
  }
});

console.log(`=== RUNNING REMOTE & LOCAL MEDIA HEALTH CHECK: ${file} (${images.length} images) ===\n`);

function checkHttp(targetUrl) {
  return new Promise(resolve => {
    try {
      const u = url.parse(targetUrl);
      const client = u.protocol === 'https:' ? https : http;
      const req = client.request({
        method: 'HEAD',
        host: u.host,
        path: u.path,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      }, res => {
        resolve(res.statusCode);
      });
      req.on('error', err => resolve('ERROR: ' + err.message));
      req.setTimeout(6000, () => {
        req.destroy();
        resolve('TIMEOUT');
      });
      req.end();
    } catch (e) {
      resolve('EXCEPTION: ' + e.message);
    }
  });
}

(async () => {
  let failCount = 0;
  for (const img of images) {
    if (img.src.startsWith('http')) {
      const code = await checkHttp(img.src);
      if (code === 200) {
        console.log(`[PASS] Img ${img.idx}: HTTP ${code} -> ${img.src}`);
      } else {
        failCount++;
        console.log(`[FAIL] Img ${img.idx}: HTTP ${code} -> ${img.src} (alt="${img.alt}")`);
      }
    } else {
      const localPath = img.src.startsWith('/') ? img.src.substring(1) : img.src;
      if (fs.existsSync(localPath)) {
        console.log(`[PASS] Img ${img.idx}: DISK OK -> ${img.src}`);
      } else {
        failCount++;
        console.log(`[FAIL] Img ${img.idx}: DISK MISSING -> ${img.src} (Checked: ${localPath})`);
      }
    }
  }

  console.log(`\n=== MEDIA AUDIT FINISHED: ${images.length - failCount} PASSED, ${failCount} FAILED ===\n`);
  if (failCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
})();
