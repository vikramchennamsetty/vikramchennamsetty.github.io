---
name: elevate-neumorphism
description: >-
  Controlled design capability providing soft, tactile, extruded surface aesthetics, 
  monochromatic shadow relationships, visible focus compliance, and low-contrast failure 
  prevention within the Elevate Product Intelligence Skill System.
version: 1.0
source: external-design-skill
source_repository: https://github.com/superpollo02/awesome-design-skill
source_path: neumorphism-superpollo02/SKILL.md
source_license: MIT
integration_status: VERIFIED_AND_EXTRACTED
triggers:
  - "neumorphic card"
  - "soft tactile UI"
  - "extruded surface"
  - "soft embossed component"
scope: design-capability
risk: low
---

# Elevate Neumorphism Design Capability (V1.0)

## 1. PURPOSE
Provides implementation guidance and design tokens for soft, tactile, monochromatic extruded surface components ("Neumorphism") within Elevate Living Co articles and interactive tools.

## 2. WHEN TO USE
- Subtle interactive control widgets (e.g. custom audio controls, tactile toggle switches).
- Monochromatic hero accent cards where background and component share identical surface color tones.
- High-touch interactive tools requiring a soft physical feel.

## 3. WHEN NOT TO USE
- Standard editorial article text containers or body text blocks.
- Complex data tables or multi-item grid product comparison lists.
- High-density conversion forms where visual clarity is paramount.
- Environments where dark/light contrast ratios cannot be strictly maintained.

## 4. DESIGN FOUNDATIONS
Neumorphism relies on light and shadow manipulation across a unified background color. Elements appear to be extruded from or pressed into the background substrate rather than floating on top of it.

## 5. TOKENS / VISUAL RULES
- **Surface Pairing:** Component background must match or closely mirror parent container background.
- **Dual Shadow Token:**
  - Light Source (Top-Left): `-6px -6px 12px rgba(255, 255, 255, 0.7)` (light mode) / `-4px -4px 10px rgba(255, 255, 255, 0.05)` (dark mode).
  - Dark Shadow (Bottom-Right): `6px 6px 12px rgba(0, 0, 0, 0.15)` (light mode) / `4px 4px 10px rgba(0, 0, 0, 0.5)` (dark mode).
- **Pressed State (Inset):** `inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.7)`.
- **Border Requirement:** `1px solid var(--color-border-subtle)` to prevent low-contrast invisibility.

## 6. COMPONENT PATTERNS
- **Neumorphic Tactile Button:** Soft rounded corners (`border-radius: 16px`), dual box-shadow on resting state, inset shadow on active/pressed state.
- **Tactile Card Enclosure:** Extruded surface container housing secondary elements.

## 7. LAYOUT RULES
- Maintain minimum 24px padding between neumorphic elements to avoid shadow overlap artifacts.
- Keep background colors uniform behind extruded cards.

## 8. RESPONSIVE RULES
- On mobile screens ($<768\text{px}$), reduce shadow blur radius from 12px to 6px to preserve sharpness on high-DPI displays.

## 9. ACCESSIBILITY
- **WCAG 2.2 AA Contrast:** Do NOT rely solely on shadow elevation to distinguish interactive boundaries. Always include a visible 1px border or high-contrast label ($4.5:1$ text contrast minimum).
- **Focus Rings:** Mandatory `:focus-visible` outline (`2px solid var(--color-gold)` with `2px offset`).

## 10. MOTION / PERFORMANCE
- Use GPU-accelerated CSS properties (`transform`, `opacity`).
- Respect `@media (prefers-reduced-motion: reduce)` by disabling smooth shadow transitions.

## 11. ANTI-PATTERNS
- **Low-Contrast Failure:** Placing low-contrast gray text on low-contrast neumorphic gray buttons.
- **Overuse:** Applying neumorphism to every card on a page, creating visual mud.

## 12. INTERACTION WITH ELEVATE DESIGN SYSTEM
- `elevate-design-intelligence` evaluates whether neumorphism is appropriate before dispatch.
- Elevate brand tokens (`var(--color-bg-primary)`, `var(--color-text-primary)`) override external source colors.

## 13. SOURCE PROVENANCE
- Extracted from `superpollo02/awesome-design-skill` (`neumorphism-superpollo02`).
- Normalized under Elevate governance protocols.

## 14. QA CHECKLIST
- [ ] WCAG 2.2 AA text contrast verified ($>4.5:1$).
- [ ] Explicit 1px fallback border present.
- [ ] `:focus-visible` outline visible on keyboard navigation.
- [ ] Reduced-motion media query supported.
