---
name: elevate-3d-web-experience
description: >-
  Controls CSS 3D/2.5D experiences, Three.js / WebGL decision framework, performance budgets, 
  DRACO/KTX2/WebP asset pipelines, OrbitControls scroll handling, strict resource disposal, and static-first progressive enhancement.
version: 4.2
triggers:
  - Building CSS 3D transforms, perspective layers, depth parallax, or 2.5D spatial experiences.
  - Building or editing real-time 3D WebGL scenes, 3D product visualizers, or interactive room experiences.
  - Configuring Three.js renderers, cameras, PBR materials, custom shaders, or lighting setups.
  - Optimizing 3D GLTF/GLB models using DRACO compression, texture packing, or gltf-transform CLI.
  - Enforcing 3D resource disposal (geometry, material, texture, context loss) and static fallbacks.
scope: 3d-and-webgl-experiences
risk: high
source:
  type: external-upgraded
  version: 4.2
  adapted_from: "alton47/threejs-skills, SoftwareInFocus/threejs-skills, 3d-web-experience (Antigravity Skills Downloaded)"
  license: MIT
---

# Elevate 3D Web Experience Skill (V4.2)

## Purpose
Enables rich 2.5D/CSS 3D depth and real-time Three.js WebGL experiences while enforcing lightweight architecture, strict decision gates, complete GPU resource disposal, automated GLTF compression pipelines, and static-first progressive enhancement.

---

## 1. Three.js / WebGL Decision Framework (HARD GATE)

Three.js / WebGL is an escalation tool, NOT the default. Permitted ONLY when it provides meaningful:
- **Spatial depth** or architectural perspective
- **Object exploration** (360 product rotation, material inspection)
- **Material transitions** (leather to velvet, wood tone swaps)
- **Interactive displacement** or spatial depth maps
- **Pointer response** (subtle 3D tilt tracking)
- **Environmental interaction** (lighting physics, shadow casting)

> [!CAUTION]
> **REJECT WEBGL MERELY AS:**
> - Decorative background noise
> - Abstract animated backgrounds without editorial connection
> - A technology demonstration lacking user value
> 
> **SINGLE RESPONSIBILITY:** Every WebGL canvas context MUST be assigned exactly ONE clear editorial responsibility.

---

## 2. 3D Model Optimization Pipeline (MERGED CAPABILITIES)

Extracted and adapted from 3D Web Experience architecture:

```
[SOURCE GLTF/GLB] ──> [VERIFY LICENSE] ──> [MESH OPTIMIZATION (<50K TRIS)] ──> [DRACO/WEBP COMPRESSION] ──> [BENCHMARK TEST] ──> [IMPLEMENTATION]
```

### GLTF Compression Workflow (`gltf-transform` CLI):
```bash
# Optimize GLB model geometry and pack WebP textures
gltf-transform optimize input.glb output.glb \
  --compress draco \
  --texture-compress webp
```

### OrbitControls Scroll-Blocking Fix:
- **Rule:** OrbitControls MUST NOT capture vertical touch-scroll gestures on mobile viewports.
- **Fix:** Set `controls.enableZoom = false` during page scroll, or constrain camera touch event targets to the canvas element only (`controls.domElement = canvasContainer`).

---

## 3. Static-First / Progressive Enhancement Architecture

Every advanced visual experience MUST implement a 3-layer progressive architecture:

```
[BASE LAYER: Semantic HTML + CSS + Static Media]
         │
         ▼ (Enhances if JS/ScrollTrigger active)
[ENHANCEMENT LAYER: GSAP / Scroll Animations / Micro-Interactions]
         │
         ▼ (Enhances if WebGL supported & justified)
[OPTIONAL ADVANCED LAYER: Three.js / WebGL 3D Specimen]
```

### Non-Negotiable Resilience Rules:
- The **Base Layer** MUST be 100% complete, readable, navigable, and convertible without any JS or WebGL.
- **WebGL Failure** (context loss, unsupported browser, low GPU) MUST NOT break page layout or hide article text.
- **JS Failure** MUST NOT cause invisible hero elements or hidden CTAs.
- **Video / Media Failure** MUST render static fallback images seamlessly.

---

## 4. Strict 3D Resource Cleanup & Disposal Protocol

To prevent GPU memory leaks and performance degradation across page transitions:

> [!CAUTION]
> **MANDATORY DISPOSAL ON UNMOUNT / CONTEXT LOSS:**
> 1. **Geometry Disposal:** Traverse scene graph and call `geometry.dispose()` on every mesh.
> 2. **Material Disposal:** Call `material.dispose()` on all materials; dispose array materials individually.
> 3. **Texture Disposal:** Call `texture.dispose()` on all map, normal, roughness, and envmap textures.
> 4. **Renderer Cleanup:** Call `renderer.dispose()`, `renderer.forceContextLoss()`, and remove canvas element.
> 5. **Observer Cleanup:** Disconnect all `ResizeObserver` and `IntersectionObserver` instances.
> 6. **Event Listener Cleanup:** Remove all `mousemove`, `touch`, `scroll`, and `resize` listeners.
> 7. **Animation Frame Cleanup:** Explicitly invoke `cancelAnimationFrame(rafId)`.
> 8. **Context-Loss Handler:** Attach `webglcontextlost` and `webglcontextrestored` event listeners to handle GPU crashes gracefully.

---

## 5. Default 3D Target Performance Budgets

- **Initial 3D Payload Budget:** $\le 2.5\text{MB}$ compressed total 3D assets (GLTF + DRACO + WebP textures).
- **Draw Call Budget:** $\le 30$ total draw calls per scene.
- **Triangle Count Budget:** $\le 50,000$ triangles total per scene.
- **Frame Execution Budget:** $\le 16.6\text{ms}$ (60fps target).
- **Device Pixel Ratio (DPR) Cap:** Cap `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))` on mobile devices to prevent thermal throttling.
- **Visibility Throttling:** Pause render loops immediately when canvas is offscreen or `document.hidden` is true.

---

## Related Skills
- `elevate-design-intelligence`: Creative direction brief, visual thesis, 16 validation gates.
- `elevate-immersive-motion`: Motion ladders, GSAP ScrollTrigger choreography, reduced motion.
- `elevate-visual-assets`: 3D asset pipeline (DRACO/KTX2 compression) and licensing.
