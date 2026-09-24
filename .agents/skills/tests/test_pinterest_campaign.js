const fs = require('fs');
const path = require('path');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

const skillsDir = path.join(__dirname, '..');

// 1. Verify Core Skills
const requiredSkills = [
  'elevate-pinterest-seo',
  'elevate-pinterest-pin-design',
  'elevate-pinterest-growth',
  'elevate-social-scheduling',
  'elevate-social-analytics'
];

requiredSkills.forEach(skill => {
  const skillPath = path.join(skillsDir, skill, 'SKILL.md');
  const exists = fs.existsSync(skillPath);
  assert(exists, `Skill file exists: ${skill}/SKILL.md`);
});

// 2. Verify Canonical Reference Record
const refRecordPath = path.join(skillsDir, 'elevate-pinterest-pin-design', 'references', 'HIGH_PERFORMANCE_PIN_REFERENCE.md');
assert(fs.existsSync(refRecordPath), 'Reference file exists: HIGH_PERFORMANCE_PIN_REFERENCE.md');

// 3. Verify Router Integration
const routerPath = path.join(skillsDir, 'SKILL-ROUTER.md');
assert(fs.existsSync(routerPath), 'SKILL-ROUTER.md exists');

// 4. Verify V2 Campaign Manifest & Destination-Continuity Guardrail
const manifestV2Path = path.join(skillsDir, 'elevate-pinterest-integration', 'CASE-20260920-001-PINTEREST-MANIFEST-V2.json');
assert(fs.existsSync(manifestV2Path), 'V2 Campaign Manifest JSON exists');

if (fs.existsSync(manifestV2Path)) {
  const manifest = JSON.parse(fs.readFileSync(manifestV2Path, 'utf8'));
  
  assert(manifest.CASE_ID === 'CASE-20260920-001', 'CASE_ID matches CASE-20260920-001');
  assert(manifest.ARTICLE_ID === 'ART-ENTRYWAY-SMALL-SPACE-001', 'ARTICLE_ID matches ART-ENTRYWAY-SMALL-SPACE-001');
  assert(manifest.DESTINATION_URL === 'https://elevatelivingco.me/small-apartment-entryway-organization-guide.html', 'Destination URL is exact canonical article URL');
  assert(Array.isArray(manifest.PINS) && manifest.PINS.length === 5, 'Manifest contains exactly 5 V2 Pins');

  let prevPublishTime = null;

  // Unsupported terms for Case #001 (mirror as primary product solution)
  const unsupportedTerms = ['light-boosting mirrors', 'mood mirror', '4-step formula containing a mirror'];

  manifest.PINS.forEach((pin, index) => {
    assert(pin.PIN_ID !== manifest.ARTICLE_ID, `Pin #${index + 1} PIN_ID (${pin.PIN_ID}) isolated from ARTICLE_ID`);
    assert(pin.TITLE.length <= 100, `Pin #${index + 1} Title length (${pin.TITLE.length}) <= 100 chars`);
    assert(pin.DESCRIPTION.length <= 500, `Pin #${index + 1} Description length (${pin.DESCRIPTION.length}) <= 500 chars`);
    assert(pin.AI_MODIFIED === true, `Pin #${index + 1} AI_MODIFIED flag is set to true`);
    assert(pin.ASPECT_RATIO === '2:3', `Pin #${index + 1} Aspect Ratio is 2:3`);
    assert(pin.DIMENSIONS === '1000x1500', `Pin #${index + 1} Dimensions are 1000x1500`);
    assert(pin.PUBLISH_STATE === 'NOT_PUBLISHED', `Pin #${index + 1} PUBLISH_STATE is NOT_PUBLISHED`);
    assert(pin.SCHEDULE_STATE === 'PROPOSED_TEST_CADENCE', `Pin #${index + 1} SCHEDULE_STATE is PROPOSED_TEST_CADENCE`);
    assert(pin.SAVEABLE_STATE.startsWith('SAVEABLE'), `Pin #${index + 1} passes Saveability Gate`);
    assert(pin.CLICK_THROUGH_STATE.startsWith('CLICK_THROUGH_JUSTIFIED'), `Pin #${index + 1} passes Click-Through Gate`);
    assert(pin.DESTINATION_CONTINUITY_STATE === 'PASS_FULLY_SUPPORTED_ARTICLE_THEMES', `Pin #${index + 1} passes Destination-Continuity Gate`);
    assert(fs.existsSync(pin.IMAGE_PATH), `Pin #${index + 1} Image file exists on disk: ${pin.IMAGE_FILENAME}`);

    // Destination-Continuity check: reject unsupported primary product recommendations
    unsupportedTerms.forEach(term => {
      const termInTitle = pin.TITLE.toLowerCase().includes(term);
      const termInDesc = pin.DESCRIPTION.toLowerCase().includes(term);
      const termInOverlay = pin.OVERLAY_TEXT.toLowerCase().includes(term);
      assert(!termInTitle && !termInDesc && !termInOverlay, `Pin #${index + 1} contains 0 unsupported product recommendations ("${term}")`);
    });

    // Check 72h schedule spacing
    const currentTime = new Date(pin.PROPOSED_PUBLISH_TIME).getTime();
    if (prevPublishTime) {
      const diffHours = (currentTime - prevPublishTime) / (1000 * 60 * 60);
      assert(diffHours >= 71.9, `Pin #${index + 1} Schedule spacing (${diffHours.toFixed(1)}h) respects 72-hour URL separation rule`);
    }
    prevPublishTime = currentTime;
  });
}

console.log(`\nValidation Summary: ${passCount} PASSED, ${failCount} FAILED.`);
if (failCount > 0) {
  process.exit(1);
}
