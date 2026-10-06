# Elevate Direct Affiliate Visual Creative & Art Direction Template

## 1. System Overview & Art Direction Standard

This template defines the creative direction, image generation prompts, composition standards, and visual quality controls for direct-to-Amazon affiliate Pinterest Pins created under the `elevate-pinterest-direct-affiliate` skill.

All image generation reuses the core ElevateLivingCo home-decor image engine while enforcing direct product focus.

> [!IMPORTANT]
> **PHOTOREALISM & IDENTITY PRESERVATION MANDATE:**
> - **Zero AI Artifacts:** No distorted geometry, floating furniture, warped glass, impossible light sources, or unrealistic spatial proportions.
> - **Product Identity Preservation:** When a real product image reference is provided, the rendered product must match the exact silhouette, finish, material, and colorway of the destination Amazon item.
> - **Editorial Quality:** Professional Architectural Digest / Elle Decor interior photography aesthetic.

---

## 2. Technical Composition Standard

- **Dimensions:** $1000 \times 1500\text{px}$ (Pinterest-native 2:3 vertical aspect ratio).
- **Lighting:** Natural diffuse daylight, soft directional window light, or warm ambient $2700\text{K}$ lamp glow.
- **Color Palette:** Warm neutrals, muted earth tones, moody dark accents (Dark Academia), or clean organic modern tones.
- **Typography Overlay:** Clean sans-serif headlines (Inter, Playfair Display accent), high contrast background legibility, WCAG AA compliant.

---

## 3. Approved Creative Concepts & Prompt Templates

### Concept 1: Product Hero (Isolated Architectural Focus)
- **Use Case:** Highlighting statement product design, texture, and craft details.
- **Composition:** Close-up macro or medium shot with subtle depth of field ($f/2.8$). Target product in sharp focal focus; background soft architectural interior.
- **Prompt Structure:**
  ```text
  Photorealistic editorial interior photography of [PRODUCT_NAME], close-up macro focal view showcasing rich [MATERIAL_TEXTURE] and matte finish. Styled on a minimalist polished plaster console table with soft natural window illumination casting subtle organic drop shadows. Hasselblad 80mm lens, architectural digest style, warm neutral tones, highly detailed textures, zero AI artifacts, 2:3 vertical composition.
  ```

---

### Concept 2: Product-in-Room (Full Spatial Context)
- **Use Case:** Showing how the product functions in a complete, realistically scaled room layout.
- **Composition:** Eye-level 35mm interior shot showing full room context (living room, patio, entryway). Product positioned at natural focal centroid.
- **Prompt Structure:**
  ```text
  High-end interior design photography of a cozy organic modern [ROOM_TYPE] featuring [PRODUCT_NAME] prominently in the layout. Realistic furniture proportions, natural daylight streaming through linen curtains, warm oak flooring, curated ceramic vase accents, realistic drop shadows and believable spatial scale. Architectural Digest publication standard, 2:3 aspect ratio, photorealistic detail.
  ```

---

### Concept 3: Styled Vignette (Curated Corner Nook)
- **Use Case:** Showing 3-item styling combinations (e.g., product + lamp + hardcover book).
- **Composition:** 45-degree angle medium shot focusing on a styled corner nook (bookshelf shelf, coffee table surface, mantel piece).
- **Prompt Structure:**
  ```text
  Photorealistic architectural vignette featuring [PRODUCT_NAME] curated alongside vintage leather books and a warm brass accent lamp on a dark walnut shelf. Soft moody ambient lighting, subtle depth of field, realistic metallic reflections, textured plaster wall background, editorial home decor magazine aesthetic, 2:3 vertical aspect ratio.
  ```

---

### Concept 4: Before / After Upgrade (Spatial Transformation)
- **Use Case:** Problem-solving products showing a room elevation.
- **Composition:** Split or stacked visual layout. Top/Left: Sparse, bland space. Bottom/Right: Warm, elevated space featuring target product.
- **Prompt Structure:**
  ```text
  Editorial split comparison of a small patio. Left section shows cold unlit concrete floor; right section shows warm inviting outdoor retreat featuring glowing [PRODUCT_NAME] string lights and textured rug. Professional evening interior photography, believable lighting transformation, high contrast clarity, 2:3 vertical composition.
  ```

---

### Concept 5: Room Solution (Problem Solver Focus)
- **Use Case:** Small apartment, renter-friendly, or clutter-solving products.
- **Composition:** Wide shot focusing on a specific functional space (narrow entryway, small balcony floorplan) demonstrating practical utility.
- **Prompt Structure:**
  ```text
  Photorealistic interior design photo solving small apartment [ROOM_PROBLEM]. Features [PRODUCT_NAME] maximizing vertical storage and spatial efficiency in a narrow entryway. Bright airy daylight, realistic wood grain textures, clean organized aesthetic, editorial quality, 2:3 vertical ratio.
  ```

---

### Concept 6: Seasonal Accent (Autumn / Spring Refresh)
- **Use Case:** Seasonal decor items (fall pillow covers, patio outdoor rugs).
- **Composition:** Warm seasonal atmosphere with cozy textiles, dried floral accents, or autumn sunlight.
- **Prompt Structure:**
  ```text
  Warm autumn interior design scene showcasing [PRODUCT_NAME] styled in a cozy living room. Soft afternoon autumn sun casting warm amber rays across a textured couch with dried eucalyptus in a ceramic vase. Rich fall color palette, realistic fabric weave texture, editorial photography, 2:3 ratio.
  ```

---

### Concept 7: Product Comparison (Side-by-Side Options)
- **Use Case:** Showing 2 distinct colorways, finishes, or lighting temperatures.
- **Composition:** Dual-panel balanced split image with clear labels on each side.
- **Prompt Structure:**
  ```text
  Side-by-side interior photography comparison card. Left panel shows [VARIANT_A] in a warm white 2700K room environment; right panel shows [VARIANT_B] in a soft natural daylight environment. Clean grid line separator, photorealistic studio interior lighting, 2:3 vertical composition.
  ```

---

## 4. Visual Quality Control Scorecard

Before any generated image is approved for a direct affiliate Pin, it must achieve a score of $\ge 9.0/10.0$ on the Visual Quality Matrix:

1. **Photorealism & Texture Accuracy (Weight 30%):** Zero plastic look; realistic wood grain, linen weave, glass transparency, metal sheen.
2. **Product Identity Parity (Weight 25%):** Visual product matches destination Amazon listing features and silhouette.
3. **Lighting & Shadows (Weight 20%):** Shadows match light source directions; no impossible floating highlights.
4. **Composition & Scale (Weight 15%):** Furniture scale is humanly believable; clear 2:3 vertical grid framing.
5. **Mobile Legibility & Hierarchy (Weight 10%):** Focal product is instantly identifiable on a 5-inch smartphone screen.
