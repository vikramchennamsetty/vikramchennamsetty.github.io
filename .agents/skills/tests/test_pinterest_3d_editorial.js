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

// 1. Verify New Skill Exists
const newSkillPath = path.join(skillsDir, 'elevate-pinterest-3d-editorial', 'SKILL.md');
assert(fs.existsSync(newSkillPath), 'New skill file exists: elevate-pinterest-3d-editorial/SKILL.md');

if (fs.existsSync(newSkillPath)) {
  const content = fs.readFileSync(newSkillPath, 'utf8');
  assert(content.includes('name: elevate-pinterest-3d-editorial'), 'New skill has correct frontmatter name');
  assert(content.includes('version: 1.0.0'), 'New skill has version 1.0.0');
}

// 2. Verify Pin 6 3D Manifest & Image Identity Parity
const manifest3DPath = path.join(skillsDir, 'elevate-pinterest-3d-editorial', 'CASE-20260920-001-PIN-06-3D-MANIFEST.json');
assert(fs.existsSync(manifest3DPath), 'Pin 6 3D Manifest JSON exists');

if (fs.existsSync(manifest3DPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifest3DPath, 'utf8'));

  assert(manifest.CASE_ID === 'CASE-20260920-001', 'CASE_ID matches CASE-20260920-001');
  assert(manifest.PIN_ID === 'PIN-CASE001-V2-06', 'PIN_ID matches PIN-CASE001-V2-06');
  assert(manifest.PIN_EXPERIMENT_ID === 'EXP-CASE001-3D-001', 'PIN_EXPERIMENT_ID matches EXP-CASE001-3D-001');
  assert(manifest.FORMAT === '3D_EDITORIAL', 'FORMAT is 3D_EDITORIAL');
  assert(manifest.IMAGE_FILENAME === 'pinterest_case001_v2_pin6_3d_editorial.jpg', 'IMAGE_FILENAME is pinterest_case001_v2_pin6_3d_editorial.jpg');
  assert(manifest.IMAGE_FILENAME === path.basename(manifest.IMAGE_PATH), 'IMAGE_FILENAME strictly equals basename(IMAGE_PATH)');
  assert(!manifest.IMAGE_PATH.includes('pin5'), 'Pin 6 IMAGE_PATH is decoupled from Pin 5 asset');
  assert(fs.existsSync(manifest.IMAGE_PATH), 'Pin 6 image file exists on disk at IMAGE_PATH');
  assert(manifest.PUBLISH_STATE === 'NOT_PUBLISHED', 'PUBLISH_STATE is NOT_PUBLISHED');
  assert(manifest.SCHEDULE_STATE === 'NOT_SCHEDULED', 'SCHEDULE_STATE is NOT_SCHEDULED');
}

console.log(`\nValidation Summary: ${passCount} PASSED, ${failCount} FAILED.`);
if (failCount > 0) {
  process.exit(1);
}
