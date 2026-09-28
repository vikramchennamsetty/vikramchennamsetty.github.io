---
name: elevate-pinterest-image-qa
description: Visual quality assurance audit for generated Pinterest Pin images. Evaluates photorealism, architectural scale, furniture proportions, material realism, lighting physics, 2:3 aspect ratio suitability, and text-safe zones.
version: 1.0
scope: pinterest-image-qa-audit
risk: low
---

# Elevate Pinterest Image QA Skill (V1.0)

## 1. PURPOSE
Evaluates generated Pinterest visual assets against high-end interior editorial standards (Architectural Digest / Elle Decor level realism). Ensures generated images carry zero AI artifacts, correct spatial proportions, plausible physics, and clean text-safe overlay areas.

---

## 2. THE 16-POINT VISUAL QA SCORECARD

Every generated image asset MUST be evaluated across these 16 audit categories on a 1–10 scale:

| # | Audit Category | Criteria & Evaluation Rules | Minimum Score |
| :-: | :--- | :--- | :-: |
| 1 | **Photorealism** | Zero CGI, 3D render, or plastic appearance; looks like an authentic photograph | $\ge 8/10$ |
| 2 | **Architectural Realism** | Plausible room scale, straight vertical lines, realistic ceiling/window alignment | $\ge 8/10$ |
| 3 | **Furniture Proportions** | Human-scale chair, table, and shelf dimensions relative to room height | $\ge 8/10$ |
| 4 | **Perspective Accuracy** | Believable camera angle (24mm–50mm perspective); no distorted wide-angle warp | $\ge 8/10$ |
| 5 | **Lighting Physics** | Directional daylight or lamp glow with natural light falloff and soft bounce | $\ge 8/10$ |
| 6 | **Shadow Accuracy** | Shadows match primary light sources; furniture is cleanly grounded on floor | $\ge 8/10$ |
| 7 | **Material Quality** | Wood shows realistic grain, metals show patina, fabrics show tactile weave | $\ge 8/10$ |
| 8 | **Zero Object Duplication** | No weirdly cloned books, lamps, or identical duplicate decor items | $\ge 8/10$ |
| 9 | **Zero Object Deformation** | No melted legs, bent shelves, warped glass, or malformed ceramics | $\ge 8/10$ |
| 10 | **Zero Text Artifacts** | Zero fake gibberish AI text, signatures, logos, or watermarks | $\ge 8/10$ |
| 11 | **Composition & Balance** | Strong focal point, intentional framing, clear room identity | $\ge 8/10$ |
| 12 | **Pinterest 2:3 Suitability** | Natively composed in 2:3 vertical aspect ratio (1000x1500px framing) | $\ge 8/10$ |
| 13 | **Text-Safe Zone** | Upper or lower 30% contains lower-contrast space for text overlay | $\ge 8/10$ |
| 14 | **Visual Hierarchy** | Eye naturally flows from focal hero object to supporting styling details | $\ge 8/10$ |
| 15 | **Niche Relevance** | Visual elements strictly match target aesthetic (Dark Academia, Small Space, etc.) | $\ge 8/10$ |
| 16 | **Editorial Quality** | Professional interior styling suitable for high-converting Pinterest campaigns | $\ge 8/10$ |

---

## 3. DECISION RULES & ACTION THRESHOLDS

- **Target Score:** $\ge 9/10$ across categories.
- **PASS:** All 16 categories $\ge 8/10$, with overall average $\ge 8.5/10$. Asset is approved for publication/scheduling.
- **REGENERATE:** If ANY critical category scores $< 8/10$, the image MUST BE REGENERATED with an updated prompt or negative prompt adjustments.
- **REVISE:** If composition is valid but requires text overlay adjustment or minor cropping, flag for revision.
