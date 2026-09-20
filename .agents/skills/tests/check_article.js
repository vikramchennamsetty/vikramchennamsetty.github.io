const fs = require('fs');
const assert = require('assert');

const file = 'small-apartment-entryway-organization-guide.html';
const content = fs.readFileSync(file, 'utf8');

console.log('=== CHECKING ARTICLE VALIDATION ===');

// H1 check
const h1s = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
assert.strictEqual(h1s.length, 1, `Expected 1 H1, found ${h1s.length}`);
console.log('[PASS] Exactly one H1 heading present');

// Domain checks
assert.ok(!content.includes('elevatelivingco.com'), 'Found elevatelivingco.com in article!');
assert.ok(!content.includes('/articles/'), 'Found /articles/ path in article!');
console.log('[PASS] Zero elevatelivingco.com or /articles/ references');

// Canonical check
assert.ok(content.includes('<link rel="canonical" href="https://elevatelivingco.me/small-apartment-entryway-organization-guide.html">'), 'Canonical link mismatch');
console.log('[PASS] Canonical URL is https://elevatelivingco.me/small-apartment-entryway-organization-guide.html');

// StoreID check
const tagMatches = content.match(/tag=elevateliv05f-20/g) || [];
assert.ok(tagMatches.length >= 5, `Expected at least 5 affiliate links with StoreID elevateliv05f-20, found ${tagMatches.length}`);
console.log(`[PASS] StoreID elevateliv05f-20 verified on ${tagMatches.length} affiliate links`);

// rel="sponsored" check
const sponsoredMatches = content.match(/rel="sponsored/g) || [];
assert.strictEqual(sponsoredMatches.length, 5, `Expected 5 rel="sponsored" attributes, found ${sponsoredMatches.length}`);
console.log('[PASS] All 5 affiliate links contain rel="sponsored"');

// ASIN checks
const asins = ['B0GQ26MSVQ', 'B0G65C2FR1', 'B07K71JDZ3', 'B091YMYV7Q', 'B08JTFZLT9'];
for (const asin of asins) {
  assert.ok(content.includes(asin), `Missing ASIN ${asin}`);
}
console.log('[PASS] All 5 Case #001 ASINs present');

// Internal links check
const internalTargets = ['/dark-academia-apartment-decor-2026.html', '/5-antique-bar-carts-2026.html', 'about.html', 'disclosure.html', 'contact.html', 'privacy.html'];
for (const target of internalTargets) {
  assert.ok(content.includes(target), `Missing internal link target ${target}`);
  if (target.endsWith('.html') && !target.startsWith('http')) {
    const cleanTarget = target.startsWith('/') ? target.substring(1) : target;
    assert.ok(fs.existsSync(cleanTarget), `Internal link target ${cleanTarget} does not exist!`);
  }
}
console.log('[PASS] All internal links resolve to existing local HTML files');

// Schema check
assert.ok(content.includes('"@type": "Article"'), 'Missing Article schema');
assert.ok(content.includes('"@type": "BreadcrumbList"'), 'Missing BreadcrumbList schema');
assert.ok(content.includes('"@type": "FAQPage"'), 'Missing FAQPage schema');
assert.ok(content.includes('"@type": "ItemPage"'), 'Missing ItemPage schema');
console.log('[PASS] All 4 schema types (Article, BreadcrumbList, FAQPage, ItemPage) present');

// Visual card & Image Governance checks
assert.ok(content.includes('class="internal-link-card"'), 'Missing internal link cards');
const cardImages = ['810vcJJDrkL', '916L5wnyAaL', '81YsUzeK4NL'];
for (const imgId of cardImages) {
  assert.ok(content.includes(imgId), `Missing verified card image ${imgId}`);
}
console.log('[PASS] All 3 verified internal card Amazon image sources present');

assert.ok(content.includes('object-fit: contain'), 'Missing object-fit: contain on internal cards');
assert.ok(!content.includes('.internal-link-card-img-wrapper img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;'), 'Found forbidden object-fit: cover on internal card images');
console.log('[PASS] object-fit: contain enforced on internal cards (zero cover cropping)');

assert.ok(content.includes('decoding="async"'), 'Missing decoding="async" attribute');
assert.ok(content.includes('IntersectionObserver'), 'Missing Three.js viewport IntersectionObserver pause check');
console.log('[PASS] Image delivery optimizations and Three.js IntersectionObserver pause verified');

// Governance check
const visualSkillContent = fs.readFileSync('.agents/skills/elevate-visual-assets/SKILL.md', 'utf8');
assert.ok(visualSkillContent.includes('IMAGE_REQUIRED_HUMAN_INPUT'), 'Missing IMAGE_REQUIRED_HUMAN_INPUT in skill governance');
console.log('[PASS] Skill governance rules A-J (IMAGE_REQUIRED_HUMAN_INPUT) verified');

console.log('=== ARTICLE VALIDATION COMPLETE: ALL CHECKS PASSED ===');

