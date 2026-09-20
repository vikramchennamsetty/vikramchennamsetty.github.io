---
name: elevate-glassmorphism
description: >-
  Controlled design capability providing translucent, frosted-glass surface treatments, 
  backdrop blur filtering, subtle specular border highlights, and solid fallback behaviors within Elevate.
version: 1.0
source: design-system-foundations
source_repository: https://github.com/AincFh/my-anime-blog
source_path: STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS
source_license: MIT
integration_status: STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS
triggers:
  - "glass UI"
  - "glassmorphism"
  - "frosted glass interface"
  - "translucent glass card"
scope: design-capability
risk: low
---

# Elevate Glassmorphism Design Capability (V1.0)

## 1. PURPOSE
Provides translucent, frosted-glass surface specifications ("Glassmorphism") for elevated overlay cards, sticky navigation bars, and premium hero callouts in Elevate Living Co digital publications.

## 2. WHEN TO USE
- Sticky header navigation bars overlaid above rich article photography.
- Floating image badges or "Shop The Look" pin overlays resting on background imagery.
- Premium hero callout cards over rich editorial backgrounds.

## 3. WHEN NOT TO USE
- Standard body text article paragraphs (causes severe text legibility issues).
- Dense product table views.
- Heavy scrolling list containers where backdrop blur degrades GPU rendering performance.

## 4. DESIGN FOUNDATIONS
Glassmorphism creates depth by allowing background colors/shapes to bleed softly through a translucent foreground surface using backdrop blurring and subtle specular edge highlights.

## 5. TOKENS / VISUAL RULES
- **Surface Fill:** `background: rgba(26, 26, 26, 0.75)` (dark mode) / `rgba(255, 255, 255, 0.75)` (light mode).
- **Backdrop Filter Token:** `backdrop-filter: blur(12px) saturate(180%); -webkit-backdrop-filter: blur(12px) saturate(180%);`.
- **Specular Border Highlight:** `border: 1px solid rgba(255, 255, 255, 0.18)` (light edge top/left) or `border: 1px solid rgba(201, 164, 74, 0.25)` (gold accent edge).
- **Outer Box Shadow:** `0 8px 32px 0 rgba(0, 0, 0, 0.2)`.

## 6. COMPONENT PATTERNS
- **Glass Floating Header:** Sticky top nav with frosted glass background.
- **Glass Overlay Card:** Translucent product overlay resting on interior photography.

## 7. LAYOUT RULES
- Glass panels MUST sit above a high-contrast or textured background to exhibit the glass effect.
- Maintain minimum 16px padding around glass card contents.

## 8. RESPONSIVE RULES
- On mobile devices ($<768\text{px}$), reduce blur radius to `8px` to maintain 60fps scroll performance.

## 9. ACCESSIBILITY & FALLBACKS
- **Solid Fallback Requirement:**
  ```css
  background: var(--color-bg-surface-solid); /* Default solid fallback */
  @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
    background: rgba(26, 26, 26, 0.75);
    backdrop-filter: blur(12px) saturate(180%);
  }
  ```
- **Text Legibility:** All text rendered inside glass containers MUST satisfy WCAG 2.2 AA ($>4.5:1$ contrast) against both the translucent fill AND the underlying image background.

## 10. MOTION / PERFORMANCE
- **GPU Performance Constraint:** Strictly limit backdrop-filter usage to maximum 2 active glass containers per view.
- Never apply backdrop blur to elements inside high-frequency scroll containers.

## 11. ANTI-PATTERNS
- Applying glassmorphism over plain white backgrounds (renders invisible or dirty).
- Omitting `@supports` solid fallback for older browsers or low-power GPUs.

## 12. INTERACTION WITH ELEVATE DESIGN SYSTEM
- `elevate-design-intelligence` validates backdrop image contrast before authorizing glassmorphism.
- Core typography and color tokens from `elevate-design-system` apply inside glass containers.

## 13. SOURCE PROVENANCE
- Standardized from modern glassmorphism design specifications.
- Recorded as `STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS`.

## 14. QA CHECKLIST
- [ ] `@supports (backdrop-filter: ...)` solid fallback implemented.
- [ ] Text contrast $\ge 4.5:1$ over background image.
- [ ] Maximum 2 glass containers per viewport.
- [ ] Reduced blur radius verified on mobile viewports.
