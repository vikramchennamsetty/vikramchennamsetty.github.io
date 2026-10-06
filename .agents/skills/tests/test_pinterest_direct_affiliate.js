/**
 * Test Suite for elevate-pinterest-direct-affiliate Skill System
 * Validates existence, schemas, QA checks, tracking CSV, and independence.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const baseDir = path.resolve(__dirname, '../../../');

function checkFile(relPath) {
  const fullPath = path.join(baseDir, relPath);
  assert.ok(fs.existsSync(fullPath), `File missing: ${relPath}`);
  console.log(`[PASS] Verified file exists: ${relPath}`);
}

function runTests() {
  console.log('=== RUNNING PINTEREST DIRECT AFFILIATE TEST SUITE ===\n');

  // 1. Skill & QA files
  checkFile('.agents/skills/elevate-pinterest-direct-affiliate/SKILL.md');
  checkFile('.agents/skills/elevate-pinterest-direct-affiliate-qa/SKILL.md');

  // 2. Data files
  checkFile('.agents/data/pinterest-affiliate-products.md');
  checkFile('.agents/data/pinterest-affiliate-product-scoring.md');
  checkFile('.agents/data/pinterest-affiliate-pin-formats.md');
  checkFile('.agents/data/pinterest-affiliate-campaign-tracker.csv');
  checkFile('.agents/data/pinterest-affiliate-research.md');

  // 3. Template files
  checkFile('.agents/templates/pinterest-direct-affiliate-creative.md');
  checkFile('.agents/templates/amazon-affiliate-pin.md');

  // 4. Verify Router
  const routerPath = path.join(baseDir, '.agents/skills/SKILL-ROUTER.md');
  const routerContent = fs.readFileSync(routerPath, 'utf8');
  assert.ok(routerContent.includes('DIRECT AMAZON AFFILIATE PIN'), 'Router missing DIRECT AMAZON AFFILIATE PIN section');
  assert.ok(routerContent.includes('elevate-pinterest-direct-affiliate'), 'Router missing elevate-pinterest-direct-affiliate skill reference');
  console.log('[PASS] Verified SKILL-ROUTER.md integration');

  // 5. Verify Tag in Amazon Template
  const templatePath = path.join(baseDir, '.agents/templates/amazon-affiliate-pin.md');
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  assert.ok(templateContent.includes('tag=elevateliv00e-20'), 'Amazon template missing elevateliv00e-20 tag');
  console.log('[PASS] Verified tag=elevateliv00e-20 in Amazon template');

  // 6. Verify Tracker CSV Header and Destination Isolation
  const trackerPath = path.join(baseDir, '.agents/data/pinterest-affiliate-campaign-tracker.csv');
  const trackerContent = fs.readFileSync(trackerPath, 'utf8');
  assert.ok(trackerContent.includes('DESTINATION_TYPE'), 'Tracker CSV missing DESTINATION_TYPE column');
  assert.ok(trackerContent.includes('DIRECT_AFFILIATE'), 'Tracker CSV missing DIRECT_AFFILIATE rows');
  assert.ok(!trackerContent.includes('elevatelivingco.me/'), 'Direct affiliate tracker contains article link leakage!');
  console.log('[PASS] Verified Tracker CSV schema & destination type isolation');

  console.log('\n=== ALL DIRECT AFFILIATE TESTS PASSED (6/6) ===');
}

runTests();
