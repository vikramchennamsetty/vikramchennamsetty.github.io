---
name: elevate-3d-editorial-hero
description: Procedural Three.js 3D editorial hero component architecture, non-GLB primitive scene rendering, camera interaction, pointer parallax, and non-blocking LCP static fallbacks for ElevateLivingCo.
---

# Elevate 3D Editorial Hero Skill

## Overview

The `elevate-3d-editorial-hero` skill defines the architecture for interactive 3D hero experiences embedded in ElevateLivingCo editorial articles. It provides spatial product presentation using procedural Three.js geometries and texture planes while preserving web performance and Core Web Vitals.

## Core Performance Rule — Non-Blocking LCP

> [!IMPORTANT]
> The initial page paint and Largest Contentful Paint (LCP) MUST NEVER depend on WebGL initialization or Three.js bundle loading.
> 
> 1. The document HTML delivers a static WebP hero image element rendered immediately (`loading="eager"`, `fetchpriority="high"`).
> 2. The Three.js interactive canvas loads asynchronously (`defer` script loading) and mounts over the hero section after initial paint.
> 3. Once the 3D scene compiles, the static image gracefully fades out, maintaining zero layout shift (CLS: 0).

## Procedural Scene Architecture (No external GLB models)

To eliminate network overhead and model loader latency, 3D scenes are constructed purely from Three.js primitives and texture maps:

| Element | Geometry Primitive | Material / Texture | Interactivity / Anchor |
| :--- | :--- | :--- | :--- |
| **VASAGLE Narrow Shoe Cabinet** | `BoxGeometry(0.8, 1.1, 0.24)` | PBR Wood Grain Material + Front Texture | Scrolls to `#product-shoe-cabinet` on click |
| **weselon 2-Tier Flip Drawer** | `BoxGeometry(0.7, 0.9, 0.22)` | Matte Slate Gray Finish | Scrolls to `#product-flip-drawer` on click |
| **Dseap Wall Coat Rack** | `CylinderGeometry(0.02, 0.02, 0.6)` + Pegs | Metallic Brass Finish | Scrolls to `#product-coat-hooks` on click |
| **SAND MINE Entryway Rug** | `PlaneGeometry(1.2, 0.8)` | Woven Jute Texture Map | Scrolls to `#product-entryway-rug` on click |

## Pointer Parallax & Camera Controls

- **Parallax Range:** X: `[-0.15, +0.15]` rad, Y: `[-0.10, +0.10]` rad derived from mouse position / pointer movement.
- **Lighting:** Ambient light (intensity 0.6), Directional key light (intensity 1.2, warm tint), Soft shadow mapping.
- **Hover Raycasting:** Hovering over any procedural 3D object highlights the object outline and reveals a floating glassmorphism product tooltip.

## Motion & Accessibility Compliance

```javascript
// Reduced Motion Check
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Render single static camera frame without requestAnimationFrame loop
  renderer.render(scene, camera);
} else {
  // Execute interactive animation loop
  animate();
}
```

## Reusable HTML Hero Container Component

```html
<section class="hero-3d-section glass-hero" aria-label="Interactive Foyer 3D Experience">
  <!-- Baseline Non-Blocking LCP Hero Image -->
  <img 
    src="images/hero-entryway-organization-mobile.webp" 
    alt="Small Apartment Entryway Visual Layout" 
    class="hero-static-fallback"
    loading="eager"
    fetchpriority="high"
    width="1200"
    height="800"
  />
  
  <!-- Canvas target mounted asynchronously -->
  <div id="hero-3d-canvas-container" class="hero-3d-canvas-wrapper" data-scene="case-001-entryway"></div>
  
  <div class="hero-overlay-content">
    <span class="editorial-badge">CASE #001 INTERACTIVE</span>
    <h1 class="hero-title">Small-Apartment Entryway Organization Guide</h1>
    <p class="hero-subtitle">Explore spatial 3D placement for narrow foyers and flip-drawer shoe cabinets.</p>
```

## Permanent Skill Governance Rules

### HERO COMPOSITION RULE
Every new product-focused editorial article that uses the `elevate-3d-editorial-hero` system MUST create a coherent hero scene that visually combines the article's primary product categories into one designed environment:
$$\text{ROOM / SPACE} + \text{PRIMARY PRODUCTS} + \text{SUPPORTING DECOR} + \text{ARTICLE'S VISUAL STYLE}$$
- The hero must NOT be a collage of floating, rectangular product cards pasted onto a room.
- The hero should visually communicate how the products work together inside the intended space.

### 3D HERO RULE
When an article is designated for immersive/3D spatial treatment:
- Use procedural Three.js or equivalent non-GLB technique.
- Preserve the static LCP fallback as the immediate initial render asset.
- Execute progressive 3D spatial enhancement post-paint.
- Full reduced-motion support (`@media (prefers-reduced-motion: reduce)`).
- Touch-safe mobile interaction without hover traps.
- Zero render-blocking 3D initialization.

### IMAGE SOURCE INTEGRITY RULE
NEVER invent, guess, infer, or silently substitute an image URL.
If an article needs an image and no verified image is available:
- DO NOT choose a random stock image.
- DO NOT reuse another article's product image.
- DO NOT fabricate an Amazon image URL.
- DO NOT silently search for a replacement.
- **ASK THE HUMAN FOR THE IMAGE.**

**Required State:** `IMAGE_REQUIRED_HUMAN_INPUT`
```
Required image: [article/product]
Reason: No verified image source is available.
Action: Ask human for the correct image URL/file.
```

### ARTICLE IMAGE ISOLATION RULE
An image verified for Article A must NOT automatically be assigned to Article B.
Image identity must be associated with:
$$\text{ARTICLE\_ID} + \text{ASIN / PRODUCT\_ID} + \text{IMAGE\_SOURCE} + \text{PROVENANCE} + \text{VERIFICATION\_STATE}$$
Cross-article reuse requires explicit verification.

### VERIFIED IMAGE RULE
A supplied image URL is considered usable only after:
1. URL resolves successfully via HTTP request.
2. Image loads successfully without error.
3. Image identity matches intended content.
4. Image provenance is recorded.

If any required verification fails: halt transition and assign `IMAGE_REQUIRED_HUMAN_INPUT`.

### NO-IMAGE FALLBACK
If no verified image exists:
- STOP at the image dependency.
- Do NOT manufacture a URL.
- Do NOT select a random image.
- Do NOT downgrade silently to unrelated imagery.
- Ask the human for directives.

