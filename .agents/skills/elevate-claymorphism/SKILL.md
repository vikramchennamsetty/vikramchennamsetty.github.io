---
name: elevate-claymorphism
description: >-
  Controlled design capability providing soft, rounded, 3D clay-like surfaces, double inner 
  shadow illumination, and friendly tactile UI components within the Elevate Product Intelligence Skill System.
version: 1.0
source: external-design-skill
source_repository: https://github.com/telagod/code-abyss
source_path: skills/applying-ui-design-system/references/claymorphism.md
source_license: MIT
integration_status: VERIFIED_AND_EXTRACTED_FROM_UNIFIED_SKILL
triggers:
  - "clay UI"
  - "claymorphism"
  - "soft rounded 3D card"
  - "tactile clay component"
scope: design-capability
risk: low
---

# Elevate Claymorphism Design Capability (V1.0)

## 1. PURPOSE
Provides design foundations and component patterns for soft, friendly, 3D clay-like surfaces ("Claymorphism") for specialized highlight cards and visual callouts in Elevate Living Co digital experiences.

## 2. WHEN TO USE
- Playful or approachable editorial callout boxes (e.g., "Styling Tip of the Day").
- Highlight badges, feature callouts, or interactive quiz/choice cards.
- Hero callout cards seeking an approachable, friendly 3D aesthetic.

## 3. WHEN NOT TO USE
- High-luxury or dark-academia aesthetic themes (conflicts with dark luxury visual identity).
- Dense product comparison tables.
- Standard long-form editorial paragraph body containers.

## 4. DESIGN FOUNDATIONS
Claymorphism features pronounced border-radius curves, warm pastel or rich solid fills, a soft outer drop shadow, and dual inner highlights/shadows that create the impression of molded 3D clay.

## 5. TOKENS / VISUAL RULES
- **Corner Radius:** `border-radius: 24px` (up to `32px` for large containers).
- **Outer Drop Shadow:** `0 16px 32px -8px rgba(0, 0, 0, 0.12)`.
- **Dual Inner Shadow Token:**
  - Top-Left Inner Light Highlight: `inset 4px 4px 8px rgba(255, 255, 255, 0.6)`.
  - Bottom-Right Inner Dark Shadow: `inset -4px -4px 8px rgba(0, 0, 0, 0.15)`.

## 6. COMPONENT PATTERNS
- **Clay Callout Card:** Rounded container (`border-radius: 24px`) with warm surface fill, outer shadow, and dual inner shadow depth.
- **Clay Pill Badge:** Compact tag (`border-radius: 9999px`) used for feature badges.

## 7. LAYOUT RULES
- Limit claymorphic elements to maximum 2–3 per view to avoid visual clutter.
- Ensure adequate whitespace ($\ge 32\text{px}$) around clay containers.

## 8. RESPONSIVE RULES
- Stack clay cards vertically on mobile screens ($<768\text{px}$).
- Scale inner shadow inset depth from `4px` down to `2px` on small viewports.

## 9. ACCESSIBILITY
- **Text Contrast:** Ensure text inside clay cards meets WCAG 2.2 AA ($>4.5:1$).
- **Keyboard Focus:** Enforce visible `:focus-visible` ring (`3px solid var(--color-gold)`).

## 10. MOTION / PERFORMANCE
- **Shadow Stacking Limit:** Maximum 2 box-shadow layers per element to prevent GPU repaint lag.
- Respect `@media (prefers-reduced-motion: reduce)`.

## 11. ANTI-PATTERNS
- Over-stacking 4+ shadow layers on a single element.
- Using claymorphism in dark luxury or formal legal/FTC disclosure blocks.

## 12. INTERACTION WITH ELEVATE DESIGN SYSTEM
- `elevate-design-intelligence` checks aesthetic compatibility before applying claymorphism.
- Brand colors from `elevate-design-system` take precedence over source defaults.

## 13. SOURCE PROVENANCE
- Extracted from `telagod/code-abyss` (`skills/applying-ui-design-system/references/claymorphism.md`).
- Normalized into Elevate skill standards.

## 14. QA CHECKLIST
- [ ] Maximum 2 shadow layers per element.
- [ ] Text contrast ratio $\ge 4.5:1$.
- [ ] Keyboard focus ring tested and visible.
- [ ] Responsive scaling verified at 375px.
