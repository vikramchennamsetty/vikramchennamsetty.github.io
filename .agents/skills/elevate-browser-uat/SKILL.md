---
name: elevate-browser-uat
description: >-
  Executes real browser User Acceptance Testing (UAT), mandatory 3-state reporting, 8-viewport responsive automation, 
  URL query parameter testing (?utm_source=chatgpt.com), SVG/3D widget verification, and visual screenshots.
version: 4.0
triggers:
  - Performing pre-deployment validation on HTML/CSS/JS frontend changes.
  - Verifying real rendering, computed styles, mobile drawer behavior, or link clickability.
  - Auditing console errors, network failures, query parameters (?utm_source=...), or visual regressions.
scope: browser-uat-and-visual-qa
risk: high
source:
  type: external-upgraded
  version: 4.0
  adapted_from: "sickn33/agentic-awesome-skills (playwright-skill, webapp-testing, verification-before-completion)"
  license: MIT
---

# Elevate Browser UAT & Visual Verification Skill (V4.0)

## Purpose
Enforces real browser runtime testing for all production modifications, guaranteeing zero console errors, zero layout overflow, zero broken affiliate links, URL parameter resilience, and verified computed visual rendering across desktop and mobile viewports.

---

## MANDATORY THREE-STATE REPORTING & HARD STOP

All browser verification results MUST be reported using one of three explicit states:

1. **`PASS`**: Real browser execution completed cleanly with 0 errors and verified visual presentation.
2. **`FAIL`**: Real browser execution identified console errors, network 404s, layout shifts, or broken links.
3. **`NOT EXECUTED`**: Browser automation was not run (e.g. environment tools unavailable).

### Critical Hard Stop Rules:
- **`NOT EXECUTED` IS NEVER EQUIVALENT TO `PASS`.**
- If browser automation environment is unavailable, the agent MUST report:
  `BROWSER_UAT_NOT_EXECUTED`
  and **STOP** task completion. Static HTML file checking alone is strictly invalid for interactive or visual verification.

---

## Phase 15 — Viewport & Parameter Test Matrix

### 1. 8-Viewport Responsive Grid
All frontend changes MUST be verified across the standard 8 viewports:

| Viewport Width | Device Category | Verification Target |
|---|---|---|
| **375px** | Mobile Compact (iPhone SE) | Single-column layout, zero horizontal scrollbar, mobile menu drawer toggle. |
| **390px** | Mobile Standard (iPhone 13/14) | Typography scaling, product card button alignment. |
| **412px** | Mobile Android Standard | Image aspect ratio integrity, CTA tap target sizing ($\ge 44\text{px}$). |
| **430px** | Mobile Max (iPhone Max) | Grid transition readiness, card padding. |
| **768px** | Tablet Vertical (iPad) | 2-column grid reflow, navigation font size. |
| **1024px** | Tablet Horizontal / Laptop | Header link spacing, Shop The Look sidebar dock. |
| **1280px** | Desktop Standard | Multi-column grid, max-width container bounds. |
| **1440px** | Desktop Wide / Widescreen | Footer grid alignment, high-resolution imagery crispness. |

### 2. URL Parameter & Query String Test (MANDATORY)
Test pages under both standard URLs and parameter-appended URLs:
- **Standard URL:** `https://elevatelivingco.me/dark-academia-apartment-decor-2026.html`
- **UTM Parameter URL:** `https://elevatelivingco.me/dark-academia-apartment-decor-2026.html?utm_source=chatgpt.com`

*Assertion:* Verify that appending query parameters does NOT break JavaScript execution, tracking handlers, canonical link tags, or CSS styling rendering.

---

## Interactive Element & Widget Verification

- **Affiliate Anchors:** Click CTA buttons; verify target tab opens (`target="_blank"`), `rel="sponsored nofollow"` is present, and destination matches `trackAffiliate` URL.
- **SVG & 3D Widgets:** Verify SVG diagrams scale fluidly across all 8 viewports and 3D scenes degrade cleanly under WebGL context loss.
- **Reduced Motion:** Emulate `prefers-reduced-motion: reduce` in browser settings; verify all CSS/JS animations freeze or convert to static reveals.
- **Console & Network Cleanliness:** Assert 0 uncaught JavaScript runtime errors and 0 missing network 404 resource errors.

---

## Related Skills
- `elevate-regression-prevention`: Manages protected system surfaces and pre-push deployment gates.
- `elevate-design-system`: Defines component contracts and token interfaces.
- `elevate-affiliate-compliance`: Enforces commercial link structure and tracking parity.
