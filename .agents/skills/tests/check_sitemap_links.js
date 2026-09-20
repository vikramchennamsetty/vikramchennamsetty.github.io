const fs = require('fs');
const assert = require('assert');

console.log('=== VALIDATING SITEMAP & INTERNAL CLUSTER LINKS ===');

// 1. Sitemap validation
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
assert.ok(sitemap.includes('https://elevatelivingco.me/small-apartment-entryway-organization-guide.html'), 'Sitemap missing new article URL');
const matches = sitemap.match(/<loc>https:\/\/elevatelivingco\.me\/small-apartment-entryway-organization-guide\.html<\/loc>/g) || [];
assert.strictEqual(matches.length, 1, `Expected exactly 1 sitemap entry, found ${matches.length}`);
assert.ok(!sitemap.includes('elevatelivingco.com'), 'Found elevatelivingco.com in sitemap');
assert.ok(!sitemap.includes('/articles/'), 'Found /articles/ in sitemap');
console.log('[PASS] sitemap.xml registered small-apartment-entryway-organization-guide.html exactly once with valid HTTPS domain');

// 2. Cluster link validation
const moodyArticle = fs.readFileSync('5-moody-entryway-ideas-luxury-on-budget.html', 'utf8');
assert.ok(moodyArticle.includes('/small-apartment-entryway-organization-guide.html'), '5-moody-entryway-ideas-luxury-on-budget.html missing link to new article');
assert.ok(moodyArticle.includes('Small Apartment Entryway Organization Guide'), 'Missing anchor text in cluster link');
assert.ok(fs.existsSync('small-apartment-entryway-organization-guide.html'), 'Target file small-apartment-entryway-organization-guide.html does not exist');
console.log('[PASS] 5-moody-entryway-ideas-luxury-on-budget.html -> small-apartment-entryway-organization-guide.html cluster link verified');

console.log('=== SITEMAP & CLUSTER LINK VALIDATION COMPLETE: ALL PASSED ===');
