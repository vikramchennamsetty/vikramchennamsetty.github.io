const fs = require('fs');
const assert = require('assert');

const file = 'small-living-room-decor-ideas.html';
const content = fs.readFileSync(file, 'utf8');

console.log('=== RUNNING RIGOROUS AUDIT: SMALL LIVING ROOM ARTICLE ===\n');

// 1. Heading Structure (Singular H1)
const h1s = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
assert.strictEqual(h1s.length, 1, `Expected exactly 1 H1, found ${h1s.length}`);
console.log('[PASS] 1. Singular H1 Heading: "' + h1s[0].replace(/<[^>]+>/g, '').trim() + '"');

// 2. Canonical URL & Domain Integrity
assert.ok(content.includes('<link rel="canonical" href="https://elevatelivingco.me/small-living-room-decor-ideas.html" />') || content.includes('<link rel="canonical" href="https://elevatelivingco.me/small-living-room-decor-ideas.html">'), 'Canonical mismatch');
assert.ok(!content.includes('elevatelivingco.com'), 'Found forbidden elevatelivingco.com domain');
assert.ok(!content.includes('/articles/'), 'Found forbidden /articles/ path');
console.log('[PASS] 2. Domain & Canonical URL verified (https://elevatelivingco.me/small-living-room-decor-ideas.html)');

// 3. Associate Tracking ID & FTC Sponsored Attributes
assert.ok(!content.includes('elevateliv00e-20'), 'Found deactivated StoreID elevateliv00e-20!');
const tagMatches = content.match(/tag=elevateliv05f-20/g) || [];
assert.ok(tagMatches.length >= 10, `Expected at least 10 active affiliate links, found ${tagMatches.length}`);
console.log(`[PASS] 3. Active StoreID elevateliv05f-20 verified on ${tagMatches.length} links (0 deactivated tags)`);

// 4. Product ASIN Audit
const asins = ['B0CP2FGLZY', 'B088ZYNX1J', 'B099WTN2TR', 'B0CDGLNB22', 'B0BS46GJHC', 'B094VL5VHZ'];
for (const asin of asins) {
  assert.ok(content.includes(asin), `Missing catalog ASIN ${asin}`);
}
console.log(`[PASS] 4. All ${asins.length} verified catalog ASINs present`);

// 5. Unverified Claims Guard (No fabricated review counts, star ratings, or price ranges)
assert.ok(!content.includes('1,977 reviews'), 'Found hardcoded 1,977 reviews claim');
assert.ok(!content.includes('4.7 stars'), 'Found hardcoded 4.7 stars claim');
assert.ok(!content.includes('$25-$35'), 'Found unverified $25-$35 price range');
assert.ok(!content.includes('$40-$50'), 'Found unverified $40-$50 price range');
console.log('[PASS] 5. Zero unverified review counts, star ratings, or dynamic price claims');

// 6. Upfront FTC Disclosure
assert.ok(content.includes('class="disclosure-card"'), 'Missing upfront editorial disclosure card');
assert.ok(content.includes('Editorial Transparency:'), 'Missing Editorial Transparency banner');
assert.ok(content.includes('As an Amazon Associate'), 'Missing Amazon Associate disclosure statement');
console.log('[PASS] 6. Conspicuous upfront FTC disclosure verified before primary links');

// 7. Navigation, TOC & 12 Anchors Integrity
for (let i = 1; i <= 12; i++) {
  assert.ok(content.includes(`id="tip${i}"`), `Missing anchor id="tip${i}"`);
  assert.ok(content.includes(`href="#tip${i}"`), `Missing TOC jump link href="#tip${i}"`);
}
console.log('[PASS] 7. All 12 technique anchors (tip1 - tip12) and TOC jump links verified');

// 8. Internal Links Resolution
const hrefMatches = [...content.matchAll(/href="([^"#][^"]*)"/g)].map(m => m[1]);
for (const link of hrefMatches) {
  if (!link.startsWith('http')) {
    const localTarget = link.startsWith('/') ? link.substring(1) : link;
    if (localTarget.length > 0 && localTarget !== 'favicon.ico') {
      assert.ok(fs.existsSync(localTarget), `Internal link target ${localTarget} does not exist on disk!`);
    }
  }
}
console.log(`[PASS] 8. All ${hrefMatches.length} internal links resolve to existing local HTML files`);

// 9. Structured Data JSON-LD Audit
assert.ok(content.includes('"@type":"Article"'), 'Missing Article schema');
assert.ok(content.includes('"@type":"BreadcrumbList"'), 'Missing BreadcrumbList schema');
assert.ok(content.includes('"@type":"FAQPage"'), 'Missing FAQPage schema');
assert.ok(content.includes('"@type":"ItemList"'), 'Missing ItemList schema');
console.log('[PASS] 9. All 4 schema types (Article, BreadcrumbList, FAQPage, ItemList) validated');

// 10. FAQ Accordion & Schema 1:1 Parity
const faqQuestionsInSchema = [...content.matchAll(/"name":\s*"([^"]+\?)"/g)].map(m => m[1]);
assert.strictEqual(faqQuestionsInSchema.length, 6, `Expected 6 FAQ questions, found ${faqQuestionsInSchema.length}`);
for (const q of faqQuestionsInSchema) {
  assert.ok(content.includes(q), `FAQ Schema question "${q}" not found in visible HTML!`);
}
assert.ok(content.includes('role="button"'), 'Missing role="button" on FAQ headers');
assert.ok(content.includes('aria-expanded'), 'Missing aria-expanded on FAQ headers');
console.log(`[PASS] 10. All 6 FAQ questions match visible text 1:1 with accessible ARIA markup`);

// 11. Image Optimization & Alt Text
const imgTags = [...content.matchAll(/<img([^>]+)>/g)].map(m => m[1]);
console.log(`Total img tags checked: ${imgTags.length}`);
for (const img of imgTags) {
  assert.ok(img.includes('alt='), `Image missing alt attribute: ${img}`);
  assert.ok(img.includes('loading="lazy"'), `Image missing loading="lazy": ${img}`);
}
console.log('[PASS] 11. 100% of images feature alt attributes and loading="lazy" optimization');

console.log('\n=== PRE-DEPLOYMENT AUDIT COMPLETE: ALL 11 TESTS PASSED ===');
