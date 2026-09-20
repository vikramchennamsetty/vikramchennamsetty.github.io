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

## Permanent Image & Visual Performance Governance Rules (A through J)

### Rule A — VERIFIED IMAGE SOURCE RULE
NEVER invent, guess, infer, or fabricate image URLs under any circumstances. Every image URL in production MUST be verified via HTTP 200 check.

### Rule B — HUMAN IMAGE ESCALATION RULE
If a required image is unavailable or unverified in the catalog/evidence ledger:
- Set state to `IMAGE_REQUIRED_HUMAN_INPUT`.
- **STOP and ask the human for the image.** Do not silently search or select a random replacement.

### Rule C — ARTICLE IMAGE ISOLATION
An image verified for Article A must NOT automatically be assigned to Article B. Image identity is bound to:
$$\text{ARTICLE\_ID} + \text{ASIN / PRODUCT\_ID} + \text{IMAGE\_SOURCE} + \text{PROVENANCE} + \text{VERIFICATION\_STATE}$$

### Rule D — FULL IMAGE VISIBILITY RULE
Editorial and internal article-card images MUST show the complete source composition. Default setting:
$$\text{object-fit: contain;}$$

### Rule E — NO AUTOMATIC CROP RULE
Do NOT use `object-fit: cover` for editorial/article-card imagery unless the human explicitly requests visual cropping.

### Rule F — RESPONSIVE MEDIA FRAME RULE
Card media frames must preserve source aspect ratios while maintaining consistent visual dimensions (`aspect-ratio` or fixed height container with flex centering and subtle neutral background).

### Rule G — IMAGE DELIVERY RULE
Optimize image resolution and transfer size according to actual rendered container dimensions (e.g. using Amazon CDN `_AC_SL500_.jpg` variants when rendered card width is $\le 400\text{px}$) without degrading visual quality.

### Rule H — PERFORMANCE RULE
Image payload optimization must NEVER sacrifice complete visual composition or cause layout shifts ($0.00$ CLS).

### Rule I — 3D HERO RULE
Product-focused editorial heroes MUST be a single coherent interior environment ($\text{ROOM} + \text{PRODUCTS} + \text{DECOR}$). Product collages or floating rectangles are strictly prohibited.

### Rule J — 3D LCP RULE
The static hero image MUST render first as the LCP asset (`loading="eager"`, `fetchpriority="high"`). Three.js initializes asynchronously post-paint and MUST pause rendering loops using `IntersectionObserver` when the hero is outside the active viewport.
