---
name: elevate-svg-experience
description: >-
  Establishes vector SVG design intelligence, interactive spatial diagrams, responsive room layouts, 
  stroke animations, functional vector storytelling, and strict SVG illustration rules.
version: 4.1
triggers:
  - Designing or embedding SVG floor plans, room diagrams, curtain/lighting guides, or spatial artwork.
  - Implementing stroke-dasharray/dashoffset path animations, hover hotspots, or interactive SVG elements.
  - Optimizing vector graphics for responsiveness, performance, light/dark themes, and screen readers.
scope: svg-experience-and-vector-intelligence
risk: medium
source:
  type: native-master
  version: 4.1
---

# Elevate SVG Experience Skill (V4.1)

## Purpose
Treats SVG as a first-class visual and educational technology on ElevateLivingCo. Enables precise architectural diagrams, furniture layout blueprints, lighting clearance guides, and interactive visual hotspots that enhance editorial retention and spatial understanding.

---

## 1. Illustration & Vector Purpose Rule (HARD GATE)

> [!CAUTION]
> **PROHIBITION ON SIMULATED ARTWORK:**
> Do NOT use model-authored SVG, CSS, or HTML canvas paths as decorative illustrations merely to simulate polished artwork or complex digital paintings.
> 
> **PREFER FOR ARTWORK:**
> - Original generated transparent WebP/PNG assets
> - Appropriately licensed transparent bitmap/vector assets
> - Real project photo assets
> - Justified Three.js / WebGL scenes

### Functional & Documentary SVG Exemption
Authored SVG remains fully permitted and encouraged when it serves a **functional or documentary purpose**:
1. **Floor Plans & Room Layouts:** Architectural top-down views showing clearance and traffic flow.
2. **Furniture Placement Diagrams:** Visualizing spatial proportions (e.g. coffee table to sofa distance).
3. **Lighting & Clearance Guides:** Demonstrating chandelier height above tables, sconce placement, curtain rod height.
4. **Data Graphics & Comparison Matrices:** Technical charts, scale comparisons, and dimension overlays.
5. **Interface Icons & Brand Marks:** System interface icons (Solar/Iconify) and brand logos.

---

## 2. Technical & Architectural Standards

### Core SVG Architecture
- **ViewBox & Responsiveness:** ALWAYS define explicit `viewBox="0 0 W H"` and use `width="100%" height="auto"` in CSS to guarantee seamless scaling from 375px mobile screens to 1440px desktop displays.
- **Clean Code & Semantics:** Group related visual layers using semantic `<g id="...">` tags (e.g. `<g id="furniture-layer">`, `<g id="dimension-lines">`).
- **Styling Separation:** Use external CSS classes or CSS variables within SVG masks and paths (`var(--color-accent)`, `var(--color-bg)`) to respect active cluster theme skins.

### SVG Animation Ladder
1. **Path Drawing & Stroke Animation:** Utilize `stroke-dasharray`, `stroke-dashoffset`, and `pathLength` for elegant drawing animations as sections scroll into view.
2. **Morphing & State Transitions:** Use CSS or lightweight JS path morphing for interactive state changes.
3. **Scroll-Driven SVG Motion:** Link SVG path progression to viewport scroll position using CSS `scroll-timeline` or IntersectionObserver.

---

## 3. Purpose & Comprehension Gate

Before adding or recommending an SVG element, document this required checklist:

```markdown
### SVG Recommendation Evaluation
- **PURPOSE:** (e.g. Demonstrating correct rug clearance around a dining table)
- **USER BENEFIT:** (e.g. Helps reader avoid buying an undersized 5x8 rug)
- **VISUAL IDEA:** (e.g. Vector room blueprint with highlighted clearance vectors)
- **MOTION / INTERACTION:** (e.g. Subtle stroke-dash animation on scroll)
- **PERFORMANCE PAYLOAD:** (e.g. < 15KB inline SVG code)
- **ACCESSIBILITY:** (<title> and <desc> tags included, role="img", aria-labelledby)
- **MOBILE FALLBACK:** (Responsive SVG scales fluidly down to 340px)
```

**RULE:** If an SVG only serves as decorative background noise without improving spatial comprehension, storytelling, or engagement: **DO NOT IMPLEMENT IT.**

---

## 4. Accessibility & Performance Standards

- **Accessibility Requirements:**
  - Set `role="img"` on the parent `<svg>` tag.
  - Include semantic `<title id="svg-title">` and `<desc id="svg-desc">` elements.
  - Reference titles using `aria-labelledby="svg-title svg-desc"`.
- **Reduced Motion Compliance:** Wrap all SVG motion/stroke animations in `@media (prefers-reduced-motion: reduce)` to render static completed vectors for sensitive users.
- **Performance Budget:** Inline SVGs MUST be minified and remain under **25KB**. Complex SVGs exceeding 25KB must be loaded externally via optimized `<img>` or `<object>` tags with lazy loading.

---

## Related Skills
- `elevate-visual-assets`: Media art direction, asset provenance, and format matrices.
- `elevate-design-system`: Design tokens, iconography, and responsive grid layout.
- `elevate-immersive-motion`: Controls scroll timeline triggers and motion ladders.
