---
name: elevate-systematic-debugging
description: >-
  Enforces a mandatory 9-step root-cause debugging methodology, requiring reproduction before fixing, 
  and prohibiting symptom patching, guesswork, or destructive file rewrites.
version: 4.0
triggers:
  - Diagnosing or fixing any runtime failure, layout breakage, missing style, or script error.
  - Resolving affiliate link navigation issues, missing stylesheet links, or tracking mismatches.
  - Investigating bug reports, failed test cases, or visual regressions.
scope: systematic-debugging-and-root-cause-analysis
risk: critical
source:
  type: internal-upgraded
  version: 4.0
  adapted_from: "sickn33/agentic-awesome-skills (systematic-debugging)"
  license: MIT
---

# Elevate Systematic Debugging Skill (V4.0)

## Purpose
Establishes a rigorous 9-step debugging methodology requiring reproduction prior to fixing, eliminating symptom patching, guesswork, content deletion, or destructive mass-rewrites.

---

## HARD STOP: NO FIX WITHOUT REPRODUCTION

> [!CAUTION]
> **THE AGENT MUST NOT APPLY ANY CODE FIX WITHOUT FIRST REPRODUCING THE BUG AND CAPTURING EMPIRICAL FAILURE EVIDENCE.**

---

## The Mandatory 9-Step Debugging Sequence

When an issue or test failure is encountered, Antigravity MUST follow these 9 steps in exact order:

```
[1. REPRODUCE BUG CONSISTENTLY]
               ↓
[2. CAPTURE LOG & COMPUTED EVIDENCE]
               ↓
[3. ISOLATE VARIABLES & TARGET NODE]
               ↓
[4. IDENTIFY TRUE ROOT CAUSE]
               ↓
[5. CREATE REPRODUCIBLE FAILING TEST]
               ↓
[6. IMPLEMENT MINIMAL SURGICAL FIX]
               ↓
[7. RERUN FAILING TEST → VERIFY PASS]
               ↓
[8. RUN BROADER REPO REGRESSION]
               ↓
[9. DOCUMENT LESSON IN _LEARNING/ AND UPDATE SKILLS]
```

---

## Detailed Protocol Guidelines

1. **REPRODUCE BUG CONSISTENTLY:** Consistently trigger the issue in browser UAT or script runtime.
2. **CAPTURE LOG & COMPUTED EVIDENCE:** Extract full un-truncated error logs, network tracebacks, or computed CSS properties. Never hypothesize without log data.
3. **ISOLATE VARIABLES & TARGET NODE:** Narrow down the exact file, stylesheet link, line number, or DOM element causing the defect.
4. **IDENTIFY TRUE ROOT CAUSE:** Trace upstream CSS inheritance, JS execution order, or missing stylesheet imports to identify WHY the contract broke.
5. **CREATE REPRODUCIBLE FAILING TEST:** Write an assertion script that fails while the bug is present.
6. **IMPLEMENT MINIMAL SURGICAL FIX:** Apply the smallest target fix to resolve the root cause. Do NOT mass-rewrite an entire article or file to solve a localized bug.
7. **RERUN FAILING TEST → VERIFY PASS:** Confirm the failing test now passes cleanly.
8. **RUN BROADER REPO REGRESSION:** Execute the full audit to ensure no secondary regressions were introduced.
9. **DOCUMENT LESSON & SKILL UPDATE:**
   - Record post-mortem lesson in `.agents/skills/_learning/LESSONS.md`.
   - Update `.agents/skills/_learning/FAILURE-PATTERNS.md` if a new failure pattern emerged.
   - Invoke `elevate-skill-evolution` to update relevant skill guardrails.

---

## Guardrails & Prohibited Behaviors
- **NO FIX WITHOUT REPRODUCTION:** Never modify code without first reproducing the failure.
- NEVER mass-rewrite a completed article file to solve a localized layout bug.
- NEVER wrap broken functions in silent `try/catch` blocks or add `return false;` hacks.
- NEVER delete editorial prose, ASINs, or products to make tests pass.

---

## Related Skills
- `elevate-skill-evolution`: Manages the permanent learning loop and lesson registry.
- `elevate-regression-prevention`: Prevents secondary breakages across protected interfaces.
- `elevate-browser-uat`: Provides real browser error logs and visual screenshot evidence.
