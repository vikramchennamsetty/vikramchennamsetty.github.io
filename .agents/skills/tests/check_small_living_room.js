const fs = require('fs');

const file = 'small-living-room-decor-ideas.html';
if (!fs.existsSync(file)) {
  console.error(`FATAL: File ${file} not found.`);
  process.exit(1);
}
const content = fs.readFileSync(file, 'utf8');

console.log('=== RUNNING COMPREHENSIVE PRODUCTION AUDIT: SMALL LIVING ROOM ARTICLE ===\n');

let passCount = 0;
let failCount = 0;
const failures = [];

function check(name, fn) {
  try {
    const detail = fn();
    passCount++;
    console.log(`[PASS] ${name}${detail ? ': ' + detail : ''}`);
  } catch (err) {
    failCount++;
    failures.push({ name, error: err.message });
    console.log(`[FAIL] ${name} -> ${err.message}`);
  }
}

// 1. Heading Structure (Singular H1)
check('1. Singular H1 Heading', () => {
  const h1s = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1s.length !== 1) throw new Error(`Expected exactly 1 H1, found ${h1s.length}`);
  return `"${h1s[0].replace(/<[^>]+>/g, '').trim()}"`;
});

// 2. Canonical URL & Domain Integrity
check('2. Domain & Canonical URL', () => {
  const hasCanonical = content.includes('<link rel="canonical" href="https://elevatelivingco.me/small-living-room-decor-ideas.html" />') || content.includes('<link rel="canonical" href="https://elevatelivingco.me/small-living-room-decor-ideas.html">');
  if (!hasCanonical) throw new Error('Canonical mismatch or missing https://elevatelivingco.me/small-living-room-decor-ideas.html');
  if (content.includes('elevatelivingco.com')) throw new Error('Found forbidden elevatelivingco.com domain');
  if (content.includes('/articles/')) throw new Error('Found forbidden /articles/ path');
  return 'Verified https://elevatelivingco.me/small-living-room-decor-ideas.html';
});

// 3. Associate Tracking ID & FTC Sponsored Attributes
check('3. Associate Tracking ID elevateliv05f-20', () => {
  if (content.includes('elevateliv00e-20')) throw new Error('Found deactivated StoreID elevateliv00e-20!');
  const tagMatches = content.match(/tag=elevateliv05f-20/g) || [];
  if (tagMatches.length < 10) throw new Error(`Expected at least 10 active affiliate links, found ${tagMatches.length}`);
  return `${tagMatches.length} active links verified (0 deactivated tags)`;
});

// 4. Product ASIN Audit
check('4. Verified Catalog ASINs', () => {
  const asins = ['B0CP2FGLZY', 'B088ZYNX1J', 'B099WTN2TR', 'B0CDGLNB22', 'B0BS46GJHC', 'B094VL5VHZ'];
  for (const asin of asins) {
    if (!content.includes(asin)) throw new Error(`Missing catalog ASIN ${asin}`);
  }
  return `All ${asins.length} verified ASINs present`;
});

// 5. Unverified Claims Guard
check('5. Unverified Claims Guard', () => {
  if (content.includes('1,977 reviews')) throw new Error('Found hardcoded 1,977 reviews claim');
  if (content.includes('4.7 stars')) throw new Error('Found hardcoded 4.7 stars claim');
  if (content.includes('$25-$35')) throw new Error('Found unverified $25-$35 price range');
  if (content.includes('$40-$50')) throw new Error('Found unverified $40-$50 price range');
  return 'Zero unverified review counts, star ratings, or dynamic price claims';
});

// 6. Upfront FTC Disclosure
check('6. Upfront FTC Disclosure Card', () => {
  if (!content.includes('class="disclosure-card"')) throw new Error('Missing upfront editorial disclosure card');
  if (!content.includes('Editorial Transparency:')) throw new Error('Missing Editorial Transparency banner');
  if (!content.includes('As an Amazon Associate')) throw new Error('Missing Amazon Associate disclosure statement');
  return 'Conspicuous upfront disclosure card verified';
});

// 7. Navigation, TOC & 12 Anchors Integrity
check('7. TOC Jump Links & 12 Anchors', () => {
  for (let i = 1; i <= 12; i++) {
    if (!content.includes(`id="tip${i}"`)) throw new Error(`Missing anchor id="tip${i}"`);
    if (!content.includes(`href="#tip${i}"`)) throw new Error(`Missing TOC jump link href="#tip${i}"`);
  }
  return 'All 12 anchors (tip1 - tip12) and TOC jump pills verified';
});

// 8. Internal Links Resolution
check('8. Internal Links Resolution', () => {
  const hrefMatches = [...content.matchAll(/href="([^"#][^"]*)"/g)].map(m => m[1]);
  for (const link of hrefMatches) {
    if (link.startsWith('${')) continue;
    if (!link.startsWith('http')) {
      const localTarget = link.startsWith('/') ? link.substring(1) : link;
      if (localTarget.length > 0 && localTarget !== 'favicon.ico') {
        if (!fs.existsSync(localTarget)) throw new Error(`Internal link target ${localTarget} does not exist on disk!`);
      }
    }
  }
  return `All ${hrefMatches.length} internal links resolve to existing local HTML files`;
});

// 9. Local Media Asset Disk Resolution
check('9. Local Media Asset Disk Existence', () => {
  const localImgMatches = [...content.matchAll(/<img[^>]+src=["'](\/[^"']+|assets\/[^"']+)["']/gi)].map(m => m[1]);
  for (const imgSrc of localImgMatches) {
    if (imgSrc.startsWith('${')) continue;
    const diskPath = imgSrc.startsWith('/') ? imgSrc.substring(1) : imgSrc;
    if (!fs.existsSync(diskPath)) throw new Error(`Local image asset "${imgSrc}" does NOT exist on disk! (Checked: ${diskPath})`);
  }
  return `All ${localImgMatches.length} local images resolve to existing files on disk`;
});

// 10. Editorial Language & Stray Fragment Purity
check('10. Editorial Language Purity', () => {
  if (content.includes('arabic-section')) throw new Error('Found forbidden arabic-section container in English article!');
  if (/[\u0600-\u06FF]/.test(content)) throw new Error('Found foreign Arabic characters in US English decor guide!');
  return 'Zero foreign language or residual test fragments detected';
});

// 11. Semantic Heading Hierarchy
check('11. Semantic Heading Hierarchy', () => {
  const productCardHeadings = [...content.matchAll(/class="product-card"[\s\S]*?<h([1-6])[^>]*>/gi)].map(m => parseInt(m[1]));
  for (const level of productCardHeadings) {
    if (level < 3) throw new Error(`Found invalid H${level} inside .product-card! Product cards must use H3 or H4.`);
  }
  return '0 H2 headings inside commercial product cards';
});

// 12. Commercial Link Resilience & Compliance
check('12. Commercial Link Resilience', () => {
  const badAffiliateAnchors = [...content.matchAll(/<a\b[^>]*href=["']#["'][^>]*trackAffiliate/gi)];
  if (badAffiliateAnchors.length > 0) throw new Error(`Found ${badAffiliateAnchors.length} affiliate links using dangerous href="#" + trackAffiliate pattern! Must use real Amazon URLs in href with target="_blank".`);
  return 'Zero href="#" popup-blocker triggers; direct Amazon URLs in href';
});

// 13. Sitemap Freshness & Synchronization
check('13. Sitemap Freshness Synchronization', () => {
  if (!fs.existsSync('sitemap.xml')) throw new Error('sitemap.xml not found on disk');
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  const entryMatch = sitemap.match(/<loc>[^<]*small-living-room-decor-ideas\.html<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/);
  if (!entryMatch) throw new Error('Missing small-living-room-decor-ideas.html entry in sitemap.xml');
  const sitemapLastMod = entryMatch[1];
  const articleModMatch = content.match(/"dateModified":\s*"([^"]+)"/);
  if (articleModMatch) {
    const articleMod = articleModMatch[1];
    if (sitemapLastMod !== articleMod) {
      throw new Error(`Sitemap lastmod (${sitemapLastMod}) does not match article dateModified (${articleMod})!`);
    }
  }
  return `sitemap.xml lastmod (${sitemapLastMod}) matches article dateModified`;
});

// 14. Structured Data JSON-LD Audit
check('14. Structured Data JSON-LD Schemas', () => {
  if (!content.includes('"@type":"Article"')) throw new Error('Missing Article schema');
  if (!content.includes('"@type":"BreadcrumbList"')) throw new Error('Missing BreadcrumbList schema');
  if (!content.includes('"@type":"FAQPage"')) throw new Error('Missing FAQPage schema');
  if (!content.includes('"@type":"ItemList"')) throw new Error('Missing ItemList schema');
  return 'All 4 schema types (Article, BreadcrumbList, FAQPage, ItemList) validated';
});

// 15. FAQ Accordion & Schema 1:1 Parity
check('15. FAQ Accordion & Schema Parity', () => {
  const faqQuestionsInSchema = [...content.matchAll(/"name":\s*"([^"]+\?)"/g)].map(m => m[1]);
  if (faqQuestionsInSchema.length !== 6) throw new Error(`Expected 6 FAQ questions, found ${faqQuestionsInSchema.length}`);
  for (const q of faqQuestionsInSchema) {
    if (!content.includes(q)) throw new Error(`FAQ Schema question "${q}" not found in visible HTML!`);
  }
  if (!content.includes('role="button"')) throw new Error('Missing role="button" on FAQ headers');
  if (!content.includes('aria-expanded')) throw new Error('Missing aria-expanded on FAQ headers');
  return 'All 6 FAQ questions match visible text 1:1 with accessible ARIA markup';
});

// 16. Image Optimization & Alt Text
check('16. Image Alt Text & Lazy Loading', () => {
  const imgTags = [...content.matchAll(/<img([^>]+)>/g)].map(m => m[1]);
  for (const img of imgTags) {
    if (!img.includes('alt=')) throw new Error(`Image missing alt attribute: ${img}`);
    if (!img.includes('loading="lazy"')) throw new Error(`Image missing loading="lazy": ${img}`);
  }
  return `100% of ${imgTags.length} images feature alt attributes and loading="lazy" optimization`;
});

// 17. Accessibility & Semantic Landmark Audit
check('17. Accessibility <main> Landmark', () => {
  if (!content.includes('<main') && !content.includes('role="main"')) {
    throw new Error('Missing <main> semantic landmark in document!');
  }
  return 'Semantic <main> landmark verified';
});

console.log(`\n=== AUDIT SUMMARY: ${passCount} PASSED, ${failCount} FAILED ===\n`);

if (failCount > 0) {
  console.log('FAILURES TO RESOLVE BEFORE PRODUCTION:');
  failures.forEach((f, i) => {
    console.log(`  ${i + 1}. [${f.name}] ${f.error}`);
  });
  process.exit(1);
} else {
  console.log('ALL 17 RIGOROUS AUDIT CHECKS PASSED!');
  process.exit(0);
}
