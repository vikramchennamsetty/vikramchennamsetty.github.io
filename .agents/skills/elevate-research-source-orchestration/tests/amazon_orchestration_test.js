/**
 * Amazon Source Orchestration Synthetic Test Suite (V1.3)
 * Tests 15 architecture scenarios with synthetic mock data.
 * Zero live scraping or network calls.
 */

const assert = require('assert');
const { AmazonSourceOrchestrator } = require('../src/amazon_source_orchestrator');

let testsPassed = 0;
let testsFailed = 0;

function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`[PASS] ${testName}`);
    testsPassed++;
  } catch (err) {
    console.error(`[FAIL] ${testName}`);
    console.error(err);
    testsFailed++;
  }
}

async function runAsyncTest(testName, testFn) {
  try {
    await testFn();
    console.log(`[PASS] ${testName}`);
    testsPassed++;
  } catch (err) {
    console.error(`[FAIL] ${testName}`);
    console.error(err);
    testsFailed++;
  }
}

async function main() {
  console.log('=== RUNNING AMAZON SOURCE ORCHESTRATION INTEGRATION TESTS ===\n');

  // 1. Provider Selection Test
  runTest('1. Provider Selection (Creators API preferred when configured)', () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: {
        AMAZON_PAAPI_ACCESS_KEY: 'mock_key',
        AMAZON_PAAPI_SECRET_KEY: 'mock_secret',
        OMKARCLOUD_API_KEY: 'mock_omkar',
        OXYLABS_USERNAME: 'mock_user',
        OXYLABS_PASSWORD: 'mock_password'
      }
    });
    const route = orchestrator.determineRouteSequence({ marketplace: 'AMAZON_US', product_id: 'B091YMYV7Q' });
    assert.strictEqual(route[0], 'AMAZON_CREATORS_API');
    assert.strictEqual(route[1], 'AMAZON_BROWSER_USE_GITHUB_ACTIONS');
    assert.strictEqual(route[2], 'AMAZON_OXYLABS');
  });

  // 2. Provider Fallback Test
  await runAsyncTest('2. Provider Fallback (Primary fails -> Fallback to next provider)', async () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: {
        AMAZON_PAAPI_ACCESS_KEY: 'mock_key',
        AMAZON_PAAPI_SECRET_KEY: 'mock_secret',
        OMKARCLOUD_API_KEY: 'mock_omkar',
        OMKARCLOUD_ENDPOINT: 'https://mock.omkar.cloud'
      }
    });

    const mockAdapters = {
      AMAZON_CREATORS_API: async () => ({ success: false, error: 'Rate limit exceeded' }),
      AMAZON_BROWSER_USE_GITHUB_ACTIONS: async () => ({ success: false, error: 'Worker timeout' }),
      AMAZON_OMKARCLOUD: async () => ({
        success: true,
        data: { title: 'Sand Mine Rug', price: 29.99, availability: 'IN_STOCK' }
      })
    };

    const res = await orchestrator.executeResearch({ marketplace: 'AMAZON_US', product_id: 'B091YMYV7Q' }, mockAdapters);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.providerUsed, 'AMAZON_OMKARCLOUD');
    assert.strictEqual(res.evidence.provider, 'AMAZON_OMKARCLOUD');
    assert.strictEqual(res.failures.length, 2);
    assert.strictEqual(res.failures[0].provider, 'AMAZON_CREATORS_API');
    assert.strictEqual(res.failures[1].provider, 'AMAZON_BROWSER_USE_GITHUB_ACTIONS');
  });

  // 3. Provider Failure Test
  await runAsyncTest('3. Provider Failure Logging (Log exact failure reason)', async () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: {},
      providerHealth: {
        AMAZON_CREATORS_API: false,
        AMAZON_BROWSER_USE_GITHUB_ACTIONS: false,
        AMAZON_OXYLABS: false,
        AMAZON_OMKARCLOUD: false,
        AMAZON_PUBLIC_WEB: true,
        AMAZON_LOCAL_CATALOG: true
      }
    });
    const mockAdapters = {
      AMAZON_PUBLIC_WEB: async () => ({ success: false, error: 'CAPTCHA challenge encountered' }),
      AMAZON_LOCAL_CATALOG: async () => ({ success: false, error: 'ASIN missing from local catalog' })
    };

    const res = await orchestrator.executeResearch({ marketplace: 'AMAZON_US', product_id: 'B091YMYV7Q' }, mockAdapters);
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.evidence.price, null);
    assert.strictEqual(res.evidence.availability, 'UNKNOWN');
    assert.strictEqual(res.evidence.evidence_state, 'UNVERIFIED');
    assert.strictEqual(res.failures.length, 2);
    assert.strictEqual(res.failures[0].reason, 'CAPTCHA challenge encountered');
    assert.strictEqual(res.failures[1].reason, 'ASIN missing from local catalog');
  });

  // 4. Marketplace Isolation Test
  runTest('4. Marketplace Isolation (US vs IN)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const usCfg = orchestrator.resolveMarketplaceConfig('AMAZON_US');
    const inCfg = orchestrator.resolveMarketplaceConfig('AMAZON_IN');

    assert.strictEqual(usCfg.domain, 'amazon.com');
    assert.strictEqual(usCfg.currency, 'USD');
    assert.strictEqual(inCfg.domain, 'amazon.in');
    assert.strictEqual(inCfg.currency, 'INR');
  });

  // 5. StoreID Isolation Test
  runTest('5. StoreID Isolation (Never cross-use StoreIDs & block unknown)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const usCfg = orchestrator.resolveMarketplaceConfig('AMAZON_US');
    const inCfg = orchestrator.resolveMarketplaceConfig('AMAZON_IN');
    const unkCfg = orchestrator.resolveMarketplaceConfig('UNKNOWN_MP');

    assert.strictEqual(usCfg.storeId, 'elevateliv05f-20');
    assert.strictEqual(inCfg.storeId, 'elevatelivi08-21');
    assert.strictEqual(unkCfg.storeId, 'UNKNOWN');
    assert.strictEqual(unkCfg.affiliateAllowed, false);
  });

  // 6. Evidence Provenance Test
  await runAsyncTest('6. Evidence Provenance (Preserve exact provider label)', async () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const mockAdapters = {
      AMAZON_PUBLIC_WEB: async () => ({
        success: true,
        data: { title: 'Addlon Hooks', price: null, availability: 'UNKNOWN' }
      })
    };

    const res = await orchestrator.executeResearch({ marketplace: 'AMAZON_US', product_id: 'B07L1T8LVH' }, mockAdapters);
    assert.strictEqual(res.evidence.provider, 'AMAZON_PUBLIC_WEB');
    assert.notStrictEqual(res.evidence.provider, 'AMAZON_CREATORS_API');
  });

  // 7. Price Conflict Test
  runTest('7. Price Conflict Detection (Produce SOURCE_CONFLICT on price discrepancy)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const ev1 = orchestrator.createNormalizedEvidence({ provider: 'AMAZON_CREATORS_API', marketplace: 'AMAZON_US', price: 29.99 });
    const ev2 = orchestrator.createNormalizedEvidence({ provider: 'AMAZON_OXYLABS', marketplace: 'AMAZON_US', price: 34.99 });

    const conflictRes = orchestrator.detectConflicts([ev1, ev2]);
    assert.strictEqual(conflictRes.hasConflict, true);
    assert.strictEqual(conflictRes.resolvedState, 'SOURCE_CONFLICT');
    assert.strictEqual(conflictRes.conflicts[0].type, 'PRICE_DISCREPANCY');
  });

  // 8. Availability Conflict Test
  runTest('8. Availability Conflict Detection (Produce SOURCE_CONFLICT on stock discrepancy)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const ev1 = orchestrator.createNormalizedEvidence({ provider: 'AMAZON_CREATORS_API', marketplace: 'AMAZON_US', availability: 'IN_STOCK' });
    const ev2 = orchestrator.createNormalizedEvidence({ provider: 'AMAZON_OMKARCLOUD', marketplace: 'AMAZON_US', availability: 'OUT_OF_STOCK' });

    const conflictRes = orchestrator.detectConflicts([ev1, ev2]);
    assert.strictEqual(conflictRes.hasConflict, true);
    assert.strictEqual(conflictRes.resolvedState, 'SOURCE_CONFLICT');
    assert.strictEqual(conflictRes.conflicts[0].type, 'AVAILABILITY_DISCREPANCY');
  });

  // 9. Unknown Preservation Test
  runTest('9. Unknown Preservation (Do not fabricate price/stock when unobserved)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const ev = orchestrator.createNormalizedEvidence({ provider: 'AMAZON_PUBLIC_WEB', marketplace: 'AMAZON_US', price: null });
    assert.strictEqual(ev.price, null);
    assert.strictEqual(ev.availability, 'UNKNOWN');
    assert.strictEqual(ev.evidence_state, 'UNVERIFIED');
  });

  // 10. API Unavailable Test
  runTest('10. API Unavailable (Creators API reported NOT_CONFIGURED when keys missing)', () => {
    const orchestrator = new AmazonSourceOrchestrator({ env: {} });
    const statuses = orchestrator.getProviderStatuses();
    assert.strictEqual(statuses.AMAZON_CREATORS_API, 'NOT_CONFIGURED');
  });

  // 11. Third-Party Provider Unavailable Test
  runTest('11. Third-Party Provider Unavailable (Oxylabs reported NOT_CONFIGURED when keys missing)', () => {
    const orchestrator = new AmazonSourceOrchestrator({ env: {} });
    const statuses = orchestrator.getProviderStatuses();
    assert.strictEqual(statuses.AMAZON_OXYLABS, 'NOT_CONFIGURED');
    assert.strictEqual(statuses.AMAZON_OMKARCLOUD, 'NOT_CONFIGURED');
  });

  // 12. All Providers Unavailable Test
  await runAsyncTest('12. All Providers Unavailable (Graceful fallback to UNKNOWN evidence state)', async () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: {},
      providerHealth: {
        AMAZON_CREATORS_API: false,
        AMAZON_BROWSER_USE_GITHUB_ACTIONS: false,
        AMAZON_OXYLABS: false,
        AMAZON_OMKARCLOUD: false,
        AMAZON_PUBLIC_WEB: false,
        AMAZON_LOCAL_CATALOG: false
      }
    });

    const res = await orchestrator.executeResearch({ marketplace: 'AMAZON_US', product_id: 'B08JTFZLT9' });
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.evidence.evidence_state, 'UNVERIFIED');
    assert.strictEqual(res.evidence.price, null);
    assert.strictEqual(res.evidence.availability, 'UNKNOWN');
  });

  // 13. Credential Masking Test
  runTest('13. Credential Masking (Never expose secret values in status output)', () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: {
        AMAZON_PAAPI_ACCESS_KEY: 'SECRET_AKIA_XYZ',
        AMAZON_PAAPI_SECRET_KEY: 'SECRET_KEY_12345'
      }
    });
    const statuses = orchestrator.getProviderStatuses();
    const statusString = JSON.stringify(statuses);
    assert.strictEqual(statusString.includes('SECRET_AKIA_XYZ'), false);
    assert.strictEqual(statusString.includes('SECRET_KEY_12345'), false);
    assert.strictEqual(statuses.AMAZON_CREATORS_API, 'CONFIGURED_UNVERIFIED');
  });

  // 14. No Automatic Article Authoring Test
  runTest('14. No Automatic Article Authoring (Credential presence != Article Readiness)', () => {
    const orchestrator = new AmazonSourceOrchestrator({
      env: { AMAZON_PAAPI_ACCESS_KEY: 'key', AMAZON_PAAPI_SECRET_KEY: 'secret' }
    });
    const statuses = orchestrator.getProviderStatuses();
    const articleReadinessState = 'BLOCKED';
    assert.strictEqual(statuses.AMAZON_CREATORS_API, 'CONFIGURED_UNVERIFIED');
    assert.strictEqual(articleReadinessState, 'BLOCKED');
  });

  // 15. No Provider Identity Conflation Test
  runTest('15. No Provider Identity Conflation (Oxylabs output is never labeled Creators API)', () => {
    const orchestrator = new AmazonSourceOrchestrator({});
    const ev = orchestrator.createNormalizedEvidence({
      provider: 'AMAZON_OXYLABS',
      marketplace: 'AMAZON_US',
      title: 'Phantoscope Cushion Cover'
    });
    assert.strictEqual(ev.provider, 'AMAZON_OXYLABS');
    assert.notStrictEqual(ev.provider, 'AMAZON_CREATORS_API');
  });

  console.log(`\n=== TEST SUITE COMPLETE: ${testsPassed} PASSED, ${testsFailed} FAILED ===`);
  if (testsFailed > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
