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
  </div>
</section>
```
