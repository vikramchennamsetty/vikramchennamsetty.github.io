---
name: elevate-home-decor-pinterest-creative
description: >-
  Master creative director, interior design, architectural photography, vertical 2:3 Pinterest composition,
  and image generation engine for ElevateLivingCo home decor content.
version: 1.0
scope: pinterest-creative-direction-and-image-generation
risk: low
---

# Elevate Home Decor Pinterest Creative Skill (V1.0)

## 1. PURPOSE
Establishes the authoritative visual creation engine for ElevateLivingCo. Combines the roles of **Home Decor Creative Director**, **Interior Designer**, **Architectural Photographer**, **Pinterest Creative Director**, and **Visual QA Engine** to generate high-end, editorial-grade, photorealistic Pinterest Pin imagery.

---

## 2. AUTOMATIC ARTICLE → PIN WORKFLOW

When requested to create Pins for an article (e.g. *"Create 5 Pins for 10 Dark Academia Essentials"*), execution MUST automatically follow this 18-step pipeline:

$$\text{Read Article} \rightarrow \text{Extract Keywords} \rightarrow \text{Identify Search Intent} \rightarrow \text{Select Visual Archetypes} \rightarrow \text{Assign Style Profile} \rightarrow \text{Define Room Architecture} \rightarrow \text{Select Furniture \& Materials} \rightarrow \text{Set Lighting Physics} \rightarrow \text{Set Camera \& Lens} \rightarrow \text{Define Text-Safe Zone} \rightarrow \text{Assemble Prompt} \rightarrow \text{Apply Negative Prompts} \rightarrow \text{Execute generate\_image} \rightarrow \text{Run Visual QA} \rightarrow \text{(Regenerate if <8/10)} \rightarrow \text{Save Asset} \rightarrow \text{Generate Metadata} \rightarrow \text{Output Campaign}$$

1. **Read Article:** Ingest full `.html` production article text and product recommendations.
2. **Extract Keywords:** Assign unique primary, secondary, and long-tail keywords per Pin.
3. **Identify Search Intent:** Map intent using `.agents/data/pinterest-search-intent-matrix.md`.
4. **Select Visual Archetypes:** Generate diverse concepts across the Pin Variation Engine:
   - **Concept A:** Wide Room Editorial
   - **Concept B:** Close Interior Detail / Vignette
   - **Concept C:** Product Integrated in Room
   - **Concept D:** Small-Space Layout / Spatial Solution
   - **Concept E:** Lighting-Focused Scene
5. **Assign Style Profile:** Match visual style profile from `.agents/data/home-decor-visual-style-guide.md` (Dark Academia, Quiet Luxury, Small Apartment, etc.).
6. **Define Room Architecture:** Wall materials, floor type, window placement, spatial scale.
7. **Select Furniture & Materials:** Human-scale furniture, authentic materials (walnut, linen, brass, travertine).
8. **Set Lighting Physics:** Single dominant directional daylight fill + warm 2700K ambient lamp glow.
9. **Set Camera & Lens:** 24mm–50mm architectural lens, eye-level perspective, straight vertical lines.
10. **Define Text-Safe Zone:** Reserve upper 30% or lower 30% as clean, low-contrast background area.
11. **Assemble Prompt:** Construct comprehensive, highly detailed photorealistic prompt string.
12. **Apply Negative Prompts:** Append master negative prompt block from `.agents/data/home-decor-negative-prompts.md`.
13. **Execute `generate_image`:** Call native `generate_image(Prompt="...", ImageName="...", AspectRatio="2:3")`.
14. **Run Visual QA:** Execute 16-point scorecard audit via `elevate-pinterest-image-qa`.
15. **Regenerate if Needed:** If any category scores $< 8/10$, revise prompt parameters and regenerate.
16. **Save Asset:** Save final verified image asset under `/assets/pinterest/[cluster]/[descriptive-filename].png`.
17. **Generate Metadata:** Generate Title ($\le 100$ chars), Description ($\le 500$ chars), Alt Text, Board, and Tagged Topics.
18. **Output Campaign:** Present full campaign manifest to user for scheduling approval.

---

## 3. ASSET STORAGE DIRECTORY STRUCTURE

Final approved image assets MUST be saved in category-specific directories:

```text
/assets/pinterest/
  ├── dark-academia/
  ├── small-apartment/
  ├── small-living-room/
  ├── neo-deco/
  ├── entryway/
  ├── lighting/
  ├── fall/
  └── luxury/
```

**Filename Conventions:** `[cluster]-[aesthetic]-[concept]-[index].png`  
*Example:* `assets/pinterest/dark-academia/dark-academia-room-decor-moody-library-pin-01.png`

---

## 4. PRODUCT-IN-ROOM INTEGRATION PROTOCOL

When featured Amazon affiliate products exist in the article:
1. Preserve physical product identity (shape, color, key materials).
2. Place product naturally within a realistic room setting (e.g. brass banker lamp resting on dark walnut study desk).
3. Ensure human-scale proportions relative to surrounding furniture.
4. Avoid floating or oversized product placements.

---

## 5. RELATED SKILLS & DATASETS

- `elevate-pinterest-image-qa` (Visual QA scorecard engine)
- `elevate-pinterest-seo` (Pinterest SEO & campaign lifecycle)
- `.agents/data/home-decor-visual-style-guide.md` (Niche style profiles)
- `.agents/data/home-decor-negative-prompts.md` (Realism exclusions)
- `.agents/templates/home-decor-pin-creative.md` (Creative specification template)
