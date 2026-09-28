---
name: elevate-pinterest-image-qa
description: Advanced 2-pass adversarial visual QA audit, Pinterest mobile legibility test, and bounded regeneration loop for generated Pin images.
version: 2.0
scope: pinterest-image-qa-audit
risk: low
---

# Elevate Pinterest Image QA Skill (V2.0 — Adversarial & Mobile Quality Control)

## 1. PURPOSE
Provides an unyielding, 2-pass Quality Assurance engine that audits generated Pin images against high-end interior editorial standards (Architectural Digest / Elle Decor level realism). Enforces an **Adversarial QA Pass**, **Pinterest Mobile Viewing Test**, strict **Critical Failure Halt Rules**, and a **Bounded Regeneration Loop**.

---

## 2. PASS 1: 16-POINT VISUAL QA SCORECARD

Evaluate each image on a 1–10 scale:

| # | Audit Category | Criteria & Evaluation Rules | Target Score |
| :-: | :--- | :--- | :-: |
| 1 | **Photorealism** | Zero CGI, 3D render, or plastic appearance; looks like an authentic photograph | $\ge 9/10$ |
| 2 | **Architectural Realism** | Plausible room scale, straight vertical lines, realistic ceiling/window alignment | $\ge 9/10$ |
| 3 | **Furniture Proportions** | Human-scale chair, table, and shelf dimensions relative to room height | $\ge 9/10$ |
| 4 | **Perspective Accuracy** | Believable camera angle (24mm–50mm perspective); no distorted wide-angle warp | $\ge 9/10$ |
| 5 | **Lighting Physics** | Directional daylight or lamp glow with natural light falloff and soft bounce | $\ge 9/10$ |
| 6 | **Shadow Accuracy** | Shadows match primary light sources; furniture is cleanly grounded on floor | $\ge 9/10$ |
| 7 | **Material Quality** | Wood shows realistic grain, metals show patina, fabrics show tactile weave | $\ge 9/10$ |
| 8 | **Zero Object Duplication** | No weirdly cloned books, lamps, or identical duplicate decor items | $\ge 9/10$ |
| 9 | **Zero Object Deformation** | No melted legs, bent shelves, warped glass, or malformed ceramics | $\ge 9/10$ |
| 10 | **Zero Text Artifacts** | Zero fake gibberish AI text, signatures, logos, or watermarks | $\ge 9/10$ |
| 11 | **Composition & Balance** | Strong focal point, intentional framing, clear room identity | $\ge 9/10$ |
| 12 | **Pinterest 2:3 Suitability** | Natively composed in 2:3 vertical aspect ratio (1000x1500px framing) | $\ge 9/10$ |
| 13 | **Text-Safe Zone** | Upper or lower 30% contains lower-contrast space for text overlay | $\ge 9/10$ |
| 14 | **Visual Hierarchy** | Eye naturally flows from focal hero object to supporting styling details | $\ge 9/10$ |
| 15 | **Niche Relevance** | Visual elements strictly match target aesthetic (Dark Academia, Small Space, etc.) | $\ge 9/10$ |
| 16 | **Editorial Quality** | Professional interior styling suitable for high-converting Pinterest campaigns | $\ge 9/10$ |

---

## 3. PASS 2: ADVERSARIAL QA & MOBILE TEST

### A. Adversarial AI-Detection Audit
Ask explicitly: *"What would make this image look AI-generated?"*
Audit specifically for:
- [ ] Repeated book spines or identical cloned book titles
- [ ] Malformed chair/table legs or impossible furniture joints
- [ ] Warped or sagging shelf lines
- [ ] Impossible glass reflections or conflicting shadow angles
- [ ] Floating books, lamps, or wall decor
- [ ] Distorted window panes or bent architectural moldings
- [ ] Fake text fragments or gibberish typography
- [ ] Plasticky, CGI-smooth material textures
- [ ] Excessive, unnatural symmetry or artificial perfection

### B. Pinterest Mobile Viewing Test (375px legibility)
Evaluate rendered image at 375px width (mobile viewport):
- [ ] **Focal Clarity:** Hero object is instantly recognizable.
- [ ] **Room Recognition:** Room archetype (Study, Entryway, Living Room) is clear at a glance.
- [ ] **Visual Clutter Check:** Image is clean and uncluttered when scaled down.
- [ ] **Contrast & Impact:** Strong visual contrast pulls attention in the mobile feed.

---

## 4. CRITICAL FAILURE HALT RULES & SCORING THRESHOLDS

### Quality Score Scale:
- **9.0 – 10.0:** **Production Quality** (Approved for scheduling).
- **8.0 – 8.9:** **Acceptable** (Minor review; approved if no critical defects).
- **< 8.0:** **REGENERATE** (Prompt revision required).

### Critical Failure Automatic Regeneration Triggers:
If ANY of the following 7 Critical Failures occur, the image status is **AUTOMATIC REGENERATE**, regardless of average score:
1. Obvious CGI / 3D render / plastic appearance.
2. Distorted architectural lines or sagging shelves.
3. Severely distorted furniture legs or floating objects.
4. Fake AI text, gibberish lettering, or watermarks.
5. Inconsistent/conflicting shadow physics.
6. Incorrect product identity when a specific product was required.
7. Unusable text-safe zone (cluttered or high-contrast background under text zone).

---

## 5. BOUNDED REGENERATION LOOP PROTOCOL

When an image triggers a `REGENERATE` status:
1. Record exact defect rationale in the creative manifest.
2. Adjust prompt parameters (enhance material physics, add specific negative prompt exclusions, or refine lighting direction).
3. Execute `generate_image` retry.
4. Maximum Regeneration Attempts: **3 attempts per concept**. If 3 attempts fail, switch visual concept archetype.
