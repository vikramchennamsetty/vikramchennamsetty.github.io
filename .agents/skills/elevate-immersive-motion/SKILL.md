---
name: elevate-immersive-motion
description: >-
  Controls 7-level animation ladder (Level 0 Static to Level 6 Advanced Interactive 3D), GSAP choreography, 
  hero intro sequences, smooth-scroll decision framework (Lenis/Locomotive), and visibility/reduced-motion overrides.
version: 4.2
triggers:
  - Adding or modifying CSS transitions, keyframes, hover lifts, SVG paths, or scroll-driven animations.
  - Implementing GSAP ScrollTrigger choreography, hero intro sequences, or smooth scroll engines.
  - Configuring Lenis or Locomotive scroll integration.
  - Enforcing prefers-reduced-motion accessibility fallbacks and visibility/blur pause listeners.
scope: motion-and-animation-mastery
risk: medium
source:
  type: internal-upgraded
  version: 4.2
---

# Elevate Immersive Motion Skill (V4.2)

## Purpose
Delivers architectural, restrained, high-performance animation across ElevateLivingCo surfaces while prioritizing GSAP choreography, establishing hero intro sequences, enforcing smooth-scroll engine discipline, and guaranteeing accessibility and window-state fallbacks.

---

## 1. Motion System — GSAP First Policy

GSAP is the preferred advanced animation system for ElevateLivingCo:

- **CSS:** Simple hover, focus, tap states, and subtle opacity transitions.
- **Native CSS Scroll-Driven Animations:** Simple scroll-linked reveals and reading progress indicators.
- **GSAP + ScrollTrigger:** Complex choreography, hero entry sequences, multi-element scroll timelines, and pinned sections.
- **Three.js / WebGL:** Used ONLY when spatial 3D geometry or WebGL shaders are explicitly justified (see `elevate-3d-web-experience`).

> [!CAUTION]
> **NO CONFLICTING ANIMATION SYSTEMS:**
> Never use multiple animation systems or scripts to control the same CSS/DOM property on an element.

---

## 2. Hero Intro Motion Sequence

When a composed hero intro materially improves editorial impact:
1. **Sequence Order:**
   $$\text{Frame / Page Baseline} \rightarrow \text{Header / Navigation Resolves} \rightarrow \text{Hero Visual Establishes} \rightarrow \text{Headline Enters} \rightarrow \text{Supporting Copy Enters} \rightarrow \text{CTA Resolves}$$
2. **Restrained Timing:** Keep intro animations crisp and fast (total duration $\le 1.2\text{s}$).
3. **Non-Blocking Usability:** Navigation links, primary messaging, and CTAs MUST remain clickable and readable even before intro animations complete.
4. **Pointer Effects:** Cursor/pointer movement interactions must be additive, subtle, fully reversible, touch-safe, keyboard-safe, and visibility-safe.

---

## 3. Smooth-Scroll Decision Framework

Smooth scrolling is NOT mandatory for every page. Before installing a smooth-scroll engine:

> [!IMPORTANT]
> **THE SMOOTH-SCROLL DECISION GATE:**
> 1. Evaluate whether smooth scrolling is editorially required for complex scrubbed GSAP timelines.
> 2. If smooth scrolling is required: Choose **EXACTLY ONE** engine (Lenis OR Locomotive Scroll).
> 3. **NEVER** install, load, or initialize both engines on the same page.
> 4. If smooth scrolling is NOT strictly required: Use **native browser scrolling**.

### Technical Requirements for Chosen Smooth-Scroll Engine:
- Must integrate cleanly with GSAP ScrollTrigger (`ScrollTrigger.scrollerProxy` / `lenis.on('scroll', ScrollTrigger.update)`).
- Must call `.refresh()` after font loading, dynamic media loading, or layout adjustments.
- Must clean up all event listeners and instances upon section unmount or page transition.
- Must respect `prefers-reduced-motion: reduce` by immediately disabling smooth scroll physics.
- Must NOT interfere with native anchor links (`#section-id`), break browser accessibility, trap touch scrolling, or create horizontal overflow.

---

## 4. Reduced-Motion & Window State Overrides (HARD ACCESSIBILITY RULE)

Under `@media (prefers-reduced-motion: reduce)`, window blur, or document visibility changes:

> [!CAUTION]
> **BYPASS ANIMATIONS AND PAUSE LOOPS IMMEDIATELY:**
> 1. Completely bypass smooth scrolling and revert to native browser scrolling instantly.
> 2. Bypass all scrubbed timelines and scroll-triggered movement.
> 3. Disable cursor pointer tracking, tilt effects, and floating ambient loops.
> 4. Disable 3D auto-rotation loops (freeze 3D models at primary hero angle).
> 5. **Pause all animation loops** when `document.hidden` is true or during `window.onblur`.
> 6. Account for touch, keyboard focus, and coarse pointer inputs (no hovering requirements on touch devices).
> 7. **Render final completed visual states immediately** in DOM and CSS. No animation should leave the interface in an incomplete or broken state.

---

## 5. The 7-Level Motion Ladder

Choose the **lowest technology level** that achieves the desired editorial result:

$$\text{Level 0 Static} \rightarrow \text{Level 1 Micro} \rightarrow \text{Level 2 Scroll 2D} \rightarrow \text{Level 3 SVG/2.5D} \rightarrow \text{Level 4 Cinematic Image Sequence} \rightarrow \text{Level 5 Three.js/WebGL} \rightarrow \text{Level 6 Advanced 3D}$$

| Motion Level | Category | Description | Technical Implementation |
|---|---|---|---|
| **LEVEL 0** | **Static** | Clean HTML/CSS layout. Baseline fallback. | Pure CSS layout, no animation. |
| **LEVEL 1** | **Micro-Interactions** | Hover, focus states, subtle card lifts. | CSS `transition` on `transform` / `opacity`. |
| **LEVEL 2** | **Scroll-Driven 2D** | Intersection reveals, staggered fades. | CSS `scroll-timeline` or `IntersectionObserver`. |
| **LEVEL 3** | **SVG / 2.5D Depth** | Vector path drawing, CSS 3D parallax. | SVG stroke-dash + CSS `perspective` / `translateZ`. |
| **LEVEL 4** | **Cinematic Sequence** | Frame-by-frame scroll canvas rotators. | `<canvas>` 2D rendering + scroll WebP sequence. |
| **LEVEL 5** | **Three.js / WebGL** | Real-time 3D models, PBR materials. | Three.js WebGL canvas context. |
| **LEVEL 6** | **Advanced Interactive 3D** | Multi-object 3D scene + custom shaders. | Three.js + GSAP + Custom GLSL Shaders. |

---

## Related Skills
- `elevate-design-intelligence`: Art direction thesis, creative direction brief, and 16 validation gates.
- `elevate-3d-web-experience`: WebGL Three.js render loops and resource disposal.
- `elevate-design-system`: Accessible split-text animation standards.
