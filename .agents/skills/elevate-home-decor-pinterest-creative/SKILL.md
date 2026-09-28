---
name: elevate-home-decor-pinterest-creative
description: >-
  Master creative direction, architectural interior photography, vertical 2:3 Pinterest composition,
  visual diversity enforcement, and image generation pipeline V2 for ElevateLivingCo home decor content.
version: 2.0
scope: pinterest-creative-direction-and-image-generation
risk: low
---

# Elevate Home Decor Pinterest Creative Skill (V2.0 — Advanced Visual Engine)

## 1. AUTHORITATIVE BACKEND RULE
Native Google Antigravity `generate_image(Prompt, ImageName, AspectRatio, ImagePaths)` is the **sole authoritative image-generation capability** for ElevateLivingCo.
- **Rule:** DO NOT install third-party CLI wrappers, OpenClaw skill packages, or external image-generation APIs. Visual quality improvements MUST be achieved through prompt architecture, visual style profiles, reference image rules, material physics, and adversarial QA.

---

## 2. THE 8 VISUAL CONCEPT TYPES

Before generating any image asset, Antigravity MUST map the keyword intent to one of 8 distinct visual concept types:

1. **HERO ROOM (A):** Full-room architectural interior photograph showing spatial layout and atmosphere.
2. **STYLED VIGNETTE (B):** Intimate close-up composition around a console, desk, bookshelf, coffee table, or nightstand.
3. **FUNCTIONAL SPACE (C):** Demonstrates decor and furniture working in a real, functional room environment.
4. **DETAIL SHOT (D):** Premium macro focus on material textures, brass patina, book spines, ceramics, and lighting glow.
5. **SMALL-SPACE SOLUTION (E):** Highlighting spatial efficiency, leggy furniture, wall-mounted decor, or narrow clearances.
6. **PRODUCT-IN-ROOM (F):** Staging a real affiliate product naturally inside a plausible, human-scaled interior context.
7. **ARCHITECTURAL VIEW (G):** Emphasizing room symmetry, high ceilings, arched doorways, moldings, or window framing.
8. **LIFESTYLE EDITORIAL (H):** Subtle human touch or lived-in elements (e.g., open book with fountain pen, steaming ceramic mug).

---

## 3. CAMPAIGN VISUAL DIVERSITY ENFORCEMENT

When generating a 5-Pin campaign for a single article:
- **Pin 1 (Primary Keyword):** Concept A (Hero Room / Functional Space) — 24mm/28mm wide lens, eye level.
- **Pin 2 (Secondary Keyword):** Concept B (Styled Vignette) — 50mm lens, desk or bookshelf focus.
- **Pin 3 (Practical Use-Case):** Concept E (Small-Space Solution) — 35mm lens, layout focus.
- **Pin 4 (Aesthetic/Editorial):** Concept G (Architectural View / Lighting Scene) — 28mm lens, lighting focus.
- **Pin 5 (Niche/Long-Tail):** Concept D (Detail Shot / Product Focus) — 50mm close lens.

> [!CAUTION]
> **NO REPETITIVE COMPOSITIONS:**
> No two Pins in the same campaign may share the same camera focal length, focal object, lighting arrangement, crop, or text-safe zone position.

---

## 4. MATERIAL REALISM & PHOTOGRAPHY Vocabulary

### A. Photography & Camera Engine
- **Camera Heights:** Eye level, slightly elevated (15° down angle), seated eye level, detail eye level.
- **Lenses:** 24mm (Architectural), 28mm (Interior Editorial), 35mm (Lifestyle Interior), 50mm (Detail Vignette).
- **Perspective:** Straight vertical architectural lines, clean convergence, zero fisheye or wide-angle distortion.
- **Lighting Physics:** Dominant directional daylight fill + warm 2700K ambient lamp pool with soft bounce.

### B. Material Realism Specifications
- **Wood:** Solid dark walnut / natural oak showing directional wood grain, subtle pores, satin finish.
- **Brass:** Antique brushed brass showing subtle patina, non-harsh specular highlights.
- **Marble:** White Carrara / cream travertine with natural, non-repeating grey veining.
- **Leather:** Full-grain vintage oxblood / cognac leather showing subtle creasing and warm specular sheen.
- **Velvet:** Rich directional pile velvet showing soft highlight catchlights.
- **Ceramic:** Matte stoneware / glazed ceramic with organic surface variation.
- **Glass:** Clear glass with realistic transmission and subtle environmental reflection.

---

## 5. STYLE-SPECIFIC GENERATION FORMULAS

### Dark Academia Formula
- **Room:** Home study / reading library.
- **Materials:** Solid dark walnut, oxblood leather, antique brass, heavy clothbound paper.
- **Lighting:** Warm 2700K banker lamp pool + soft window side daylight.
- **Color:** Espresso, oxblood, antique gold, charcoal.
- **Camera:** 35mm eye level, straight verticals.
- **Negative Exclusions:** Plastic furniture, CGI render, bright neon, neon lighting, flat black paint.

### Quiet Luxury / Old Money Formula
- **Room:** Living room / sitting nook.
- **Materials:** Oat Belgian linen, white oak, travertine stone, wool.
- **Lighting:** Soft natural daylight fill, parchment lamp glow.
- **Color:** Warm ivory, taupe, soft sage, natural oak.
- **Camera:** 28mm natural daylight editorial.
- **Negative Exclusions:** Cluttered surfaces, high-contrast harsh shadows, synthetic fabrics.

### Small Apartment / Renter-Friendly Formula
- **Room:** Narrow entryway / compact living room.
- **Materials:** Light oak, matte black steel, woven rattan, glass.
- **Lighting:** Plug-in wall sconces, battery amber candles, bright daylight.
- **Color:** Crisp warm white, light oak, terracotta, warm brass.
- **Camera:** 24mm/28mm spatial layout perspective.
- **Negative Exclusions:** Bulky heavy furniture, dark unlit corners, floor clutter.

---

## 6. PRODUCT + EDITORIAL BALANCE

- **Default Standard:** **80% Editorial Interior Inspiration / 20% Product Focus.**
- **Shopping Intent:** Up to 50% product focus while strictly preserving natural, realistic interior staging.
- **Product Reference Rules:** Follow `.agents/data/home-decor-reference-image-rules.md` to preserve product identity, silhouette, and proportions.

---

## 7. AUTOMATIC ARTICLE → PIN 18-STEP PIPELINE

1. Ingest article text & products.
2. Assign unique keywords per Pin.
3. Map intent using `home-decor-visual-intent-matrix.md`.
4. Select 5 distinct Visual Concept Types.
5. Apply Visual Style Profile (`home-decor-visual-style-guide.md`).
6. Define Room Architecture & Dimensions.
7. Select Furniture & Material Specifications.
8. Set Lighting Physics (directional daylight + 2700K ambient).
9. Set Camera Focal Length & Perspective.
10. Reserve clean Text-Safe Zone (`TOP`, `BOTTOM`, `LEFT`, or `RIGHT`).
11. Assemble Detailed Photorealistic Prompt String.
12. Append Master Negative Prompt Block (`home-decor-negative-prompts.md`).
13. Execute `generate_image(Prompt="...", ImageName="...", AspectRatio="2:3")`.
14. Run 2-Pass Adversarial QA (`elevate-pinterest-image-qa`).
15. Executed Bounded Regeneration Loop if $<8/10$ or Critical Failure occurs (max 3 retries).
16. Copy verified asset to `/assets/pinterest/[cluster]/[filename].jpg`.
17. Generate Pinterest Metadata (Title, Description, Alt Text, Board).
18. Generate Campaign Creative Manifest.
