/**
 * Market Trend, Pinterest & 3D Intelligence Integration Test Suite
 * Asserts contract compliance, authentication fallback, state transitions, and production safety.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const GoogleTrendsAdapter = require('../elevate-market-trend-intelligence/src/google_trends_adapter');
const PinterestTrendsAdapter = require('../elevate-market-trend-intelligence/src/pinterest_trends_adapter');
const TrendFusionEngine = require('../elevate-market-trend-intelligence/src/trend_fusion_engine');
const PinterestIntegrationLayer = require('../elevate-pinterest-integration/src/pinterest_integration_layer');

function runTests() {
  console.log('=== ELEVATE V4.7 INTEGRATION TEST SUITE ===\n');

  // Test 1: GoogleTrendsAdapter Contract
  console.log('[TEST 1] Testing GoogleTrendsAdapter...');
  const googleResult = GoogleTrendsAdapter.fetchTrendRecord({ query: 'entryway shoe storage' });
  assert.strictEqual(googleResult.source, 'GOOGLE_TRENDS');
  assert.strictEqual(googleResult.interest_evidence.is_absolute_volume, false, 'Must never represent relative index as absolute volume');
  assert.strictEqual(googleResult.interest_evidence.index_unit, 'RELATIVE_0_TO_100');
  assert.ok(googleResult.interest_evidence.relative_index >= 0 && googleResult.interest_evidence.relative_index <= 100);
  console.log('✔ GoogleTrendsAdapter passed.\n');

  // Test 2: PinterestTrendsAdapter Auth Fallback
  console.log('[TEST 2] Testing PinterestTrendsAdapter without API Token...');
  const oldToken = process.env.PINTEREST_ACCESS_TOKEN;
  delete process.env.PINTEREST_ACCESS_TOKEN;
  const pinteresNoAuth = PinterestTrendsAdapter.fetchPinterestTrendRecord({ keyword: 'entryway ideas' });
  assert.strictEqual(pinteresNoAuth.evidence_state, 'UNAVAILABLE_AUTH_REQUIRED');
  assert.strictEqual(pinteresNoAuth.error_code, 'PINTEREST_AUTH_MISSING');
  
  console.log('[TEST 2b] Testing PinterestTrendsAdapter with Mocked Token...');
  process.env.PINTEREST_ACCESS_TOKEN = 'mock_token_12345';
  const pinterestWithAuth = PinterestTrendsAdapter.fetchPinterestTrendRecord({ keyword: 'entryway ideas' });
  assert.strictEqual(pinterestWithAuth.evidence_state, 'VERIFIED');
  assert.ok(pinterestWithAuth.trend_metrics.growth_mom);
  console.log('✔ PinterestTrendsAdapter passed.\n');

  // Test 3: TrendFusionEngine Synthesis
  console.log('[TEST 3] Testing TrendFusionEngine...');
  const fusionResult = TrendFusionEngine.synthesizeTrendRecord({ query: 'narrow foyer flip drawer' });
  assert.ok(fusionResult.FUSION_ID.startsWith('FUSION-US-'));
  assert.ok(Array.isArray(fusionResult.classifications));
  assert.ok(['PROMISING_OPPORTUNITY', 'SEASONAL_LEAD', 'SUSTAINED_STAPLE', 'INSUFFICIENT_EVIDENCE'].includes(fusionResult.opportunity_evaluation));
  console.log('✔ TrendFusionEngine passed.\n');

  // Test 4: PinterestIntegrationLayer Lifecycle & CTA Spec
  console.log('[TEST 4] Testing PinterestIntegrationLayer Draft & Transition...');
  delete process.env.PINTEREST_ACCESS_TOKEN;
  const draftPin = PinterestIntegrationLayer.createDraftPin({
    title: 'Small Apartment Entryway Shoe Storage',
    description: 'Narrow flip drawer shoe cabinet setup for compact foyers.',
    destinationUrl: 'https://elevatelivingco.me/small-apartment-entryway-organization-guide.html',
    imageUrl: 'https://m.media-amazon.com/images/I/81BOmpt4b4L._AC_SL500_.jpg',
    boardKey: 'ENTRYWAY_SOLUTIONS'
  });
  assert.strictEqual(draftPin.lifecycle_state, 'DRAFT');
  assert.strictEqual(draftPin.profile_url, 'https://in.pinterest.com/elevateliving_co/');

  const failedPublish = PinterestIntegrationLayer.transitionState(draftPin, 'PUBLISHED');
  assert.strictEqual(failedPublish.evidence_state, 'UNAVAILABLE_AUTH_REQUIRED');

  process.env.PINTEREST_ACCESS_TOKEN = 'mock_token_12345';
  const successPublish = PinterestIntegrationLayer.transitionState(draftPin, 'PUBLISHED');
  assert.strictEqual(successPublish.lifecycle_state, 'PUBLISHED');
  assert.strictEqual(successPublish.evidence_state, 'VERIFIED');

  const ctaSpec = PinterestIntegrationLayer.getFollowCTAComponentSpec();
  assert.strictEqual(ctaSpec.profile_url, 'https://in.pinterest.com/elevateliving_co/');
  console.log('✔ PinterestIntegrationLayer passed.\n');

  // Test 5: Three.js Editorial Hero Documentation Contract
  console.log('[TEST 5] Testing 3D Hero Skill Contract...');
  const heroSkillPath = path.join(__dirname, '../elevate-3d-editorial-hero/SKILL.md');
  assert.ok(fs.existsSync(heroSkillPath), '3D Hero SKILL.md must exist');
  const heroSkillContent = fs.readFileSync(heroSkillPath, 'utf8');
  assert.ok(heroSkillContent.includes('Non-Blocking LCP'), 'Hero skill must define non-blocking LCP rule');
  assert.ok(heroSkillContent.includes('prefers-reduced-motion'), 'Hero skill must include reduced motion compliance');
  console.log('✔ 3D Hero Skill contract passed.\n');

  // Restore env
  if (oldToken) {
    process.env.PINTEREST_ACCESS_TOKEN = oldToken;
  } else {
    delete process.env.PINTEREST_ACCESS_TOKEN;
  }

  console.log('==================================================');
  console.log('ALL V4.7 INTELLIGENCE INTEGRATION TESTS PASSED 100%');
  console.log('==================================================');
}

runTests();
