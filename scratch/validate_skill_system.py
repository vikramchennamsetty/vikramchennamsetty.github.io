import os

skill_file = '.agents/skills/elevate-search-visibility/SKILL.md'
lessons_file = '.agents/skills/_learning/LESSONS.md'

with open(skill_file, 'r', encoding='utf-8') as f:
    skill_content = f.read()

with open(lessons_file, 'r', encoding='utf-8') as f:
    lessons_content = f.read()

# Verify lifecycle stages
stages = [
    'PRE_PUBLISH_AUDIT',
    'PRODUCTION_RELEASE',
    'LIVE_TECHNICAL_VERIFICATION',
    'SEARCH_CONSOLE_DISCOVERY',
    'URL_INSPECTION',
    'INDEXING_REQUEST',
    'INDEXING_OBSERVATION',
    'SEARCH_APPEARANCE_OBSERVATION',
    'PERFORMANCE_QUERY_OBSERVATION',
    'REASSESSMENT'
]
for stage in stages:
    assert stage in skill_content, f"Missing lifecycle stage: {stage}"

# Verify GSC evidence states
gsc_states = [
    'GSC_NOT_CHECKED',
    'GSC_LIVE_TEST_PENDING',
    'GSC_LIVE_TEST_PASS',
    'GSC_LIVE_TEST_BLOCKED',
    'GSC_INDEXING_REQUESTED',
    'GSC_INDEXED',
    'GSC_NOT_INDEXED',
    'GSC_EXCLUDED',
    'GSC_CRAWLED_NOT_INDEXED',
    'GSC_DISCOVERED_NOT_INDEXED',
    'GSC_CANONICAL_CONFLICT',
    'GSC_CRAWL_ERROR',
    'GSC_UNKNOWN'
]
for state in gsc_states:
    assert state in skill_content, f"Missing GSC state: {state}"

# Verify distinction categories
distinctions = [
    'TECHNICAL_ELIGIBILITY',
    'GOOGLE_DISCOVERY',
    'GOOGLE_INDEXING',
    'SEARCH_APPEARANCE',
    'SEARCH_PERFORMANCE'
]
for d in distinctions:
    assert d in skill_content, f"Missing distinction category: {d}"

# Verify Case #001 learnings in LESSONS.md
assert 'Lesson 005' in lessons_content, 'Lesson 005 missing from LESSONS.md'
assert 'Small Apartment Entryway Organization Guide (Case #001)' in lessons_content, 'Case #001 missing in LESSONS.md'

print(">>> ALL SKILL-SYSTEM VALIDATION TESTS PASSED PERFECTLY! <<<")
