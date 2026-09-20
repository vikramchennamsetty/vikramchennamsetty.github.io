---
name: elevate-visual-assets
description: >-
  Manages visual asset intelligence, image optimization (WebP/AVIF), licensing compliance, 3D asset pipelines, 
  asset provenance classification (A–F), media art direction, icon systems, real-people photography rules, Stitch integration, and asset preservation.
version: 4.2
triggers:
  - Adding, replacing, or optimizing images, videos, image sequences, or 3D models.
  - Auditing asset licensing rights, attribution, commercial usage, or Amazon product images.
  - Assigning asset provenance classifications (Classes A through F).
  - Integrating Stitch design explorations or evaluating Aura.build assets.
  - Auditing photography representing real people, staff, experts, or customers.
scope: visual-asset-management-and-licensing
risk: high
source:
  type: native-master
  version: 4.2
---

# Elevate Visual Assets Skill (V4.2)

## Purpose
Establishes visual asset management, media format selection, performance optimization, licensing audit protocols, asset provenance tracking, media art direction, icon system standards, real-people photography ethics, Stitch integration workflow, and asset preservation across ElevateLivingCo.

---

## 1. Asset Provenance System (MANDATORY PROVENANCE CLASSES)

Every meaningful visual asset MUST have an explicit **Asset Provenance Classification**:

- **Class A — User-Provided Asset:** Explicitly supplied by the user for the task.
- **Class B — Original Generated Asset:** Created specifically for the project (e.g., custom WebP/PNG render).
- **Class C — Appropriately Licensed Third-Party Asset:** Verified commercial license (CC0, Unsplash Commercial, purchased stock).
- **Class D — Existing Verified Project Asset:** Pre-existing asset already present in the repository.
- **Class E — Program/API-Authorized Commercial Asset:** Officially provided via Amazon PA-API or SiteStripe iframe.
- **Class F — Decorative Procedural / WebGL Asset:** Dynamically generated shaders or procedural WebGL geometry.

> [!CAUTION]
> **PROHIBITED ASSUMPTIONS:**
> - DO NOT assume a publicly accessible web image is legally licensed.
> - DO NOT assume an Amazon CDN image is automatically reusable outside SiteStripe/PA-API.
> - DO NOT assume AI-generated images automatically possess unrestricted commercial rights.
> - DO NOT assume screenshots of third-party sites are legally reusable media.
> - DO NOT assume company logos are safe to display as decorative elements.

---

## 2. Real-People Photography & Endorsement Ethics

For visual assets representing human beings:
- **Licensed Real Photography ONLY:** Use actual, appropriately licensed stock or project photography when displaying human subjects in room scenes.
- **STRICT PROHIBITION ON DECEPTIVE SUBJECTS:**
  - NEVER represent AI-generated or synthetic people as real customers, real staff members, licensed interior design experts, or authentic endorsers.
  - Synthetic images must never be paired with fabricated quotes, fake reviews, or fake testimonials.

---

## 3. Media Art Direction & Narrative Role

Every major image or video element MUST serve a defined storytelling role:
- **Defined Properties:** Aspect ratio, crop behavior, focal point, loading strategy (`loading="lazy"` / `fetchpriority="high"`), responsive `srcset`, alt text, fallback state, and provenance class.
- **Editorial Alignment:** Imagery must reinforce interior architecture, lighting physics, material textures, furniture proportions, and spatial atmosphere without inventing product facts.
- **Reject:** Generic stock photos, copied mockups, watermarked images, random decorative photos, or media that exists solely to fill whitespace.

---

## 4. Illustration & SVG/CSS Artwork Rule

- **Do NOT** use model-authored SVG, CSS, or HTML canvas paths as decorative illustrations merely to simulate polished artwork.
- **PREFER:**
  - Original generated transparent PNG/WebP assets
  - Appropriately licensed transparent bitmap/vector assets
  - Real project photo assets
  - Legitimate icon systems
  - Justified WebGL / Three.js scenes
- **Authored SVG Exemption:** Hand-crafted or model-authored SVG remains fully permitted when it serves a functional or documentary purpose (spatial floor plans, technical clearance guides, data graphics, interface icons).

---

## 5. Interface Icon System & Logo Walls

- **Interface Icons:** Prefer Solar icons through Iconify when suitable. Maintain consistent stroke weight (linear/solid) across all controls. Do not mix disparate icon families.
- **Company Logos:** Use legitimate Iconify SVG brand logos ONLY when representing a real company truthfully in an editorial context.
- **Logo Walls & Social Proof:**
  - NEVER use brand logos to create fake social proof, fake client lists, or unverified partner grids.
  - **HARD RULE:** If there is no honest, verified reason for a logo wall: **DO NOT CREATE ONE.**

---

## 6. Stitch MCP & Design Exploration Workflow

Stitch is an exploratory design and design-system tool, NOT an automatic production code generator.

$$\text{STITCH DESIGN REFERENCE} \rightarrow \text{AGENT DESIGN DECISION} \rightarrow \text{CONTROLLED ELEVATE IMPLEMENTATION}$$

### Stitch Integration Pipeline:
1. **Explore Concepts:** Use Stitch to experiment with visual layouts, typography pairings, and responsive concepts.
2. **Audit Against Source Truth:** Compare Stitch output against verified project data.
3. **Strip Fabricated Data:** Remove any Stitch-generated fake prices, fake reviews, unsupported ratings, fabricated brands, or unsupported dimensions.
4. **Manual Translation:** Translate approved Stitch design concepts manually into Elevate clean HTML/CSS design tokens.

---

## 7. Format Selection Matrix

| Format | Extensions | Primary Use Case | Performance Budget / Guidelines |
|---|---|---|---|
| **SVG** | `.svg` | Diagrams, floor plans, icons, vector artwork. | $\le 25\text{KB}$ inline; responsive viewBox. |
| **WebP** | `.webp` | Primary web image format for articles & hero cards. | Lossy 80% compression; main format. |
| **AVIF** | `.avif` | Ultra-next-gen compressed format where supported. | $\sim 20\text{--}30\%$ smaller than WebP. |
| **PNG** | `.png` | Graphics requiring sharp transparency or lossless art. | Minified via PNGQuant; WebP fallback required. |
| **JPEG** | `.jpg`, `.jpeg` | Legacy fallback for WebP/AVIF picture elements. | Quality 80–85%. |
| **MP4 / WebM** | `.mp4`, `.webm` | Short looping micro-videos / motion demonstrations. | Autoplay, muted, loop, playsinline, $\le 3\text{MB}$. |
| **GLB / GLTF** | `.glb`, `.gltf` | 3D models for WebGL interactive scenes. | DRACO + KTX2 compressed, $\le 2.5\text{MB}$. |
| **Image Sequences** | `.jpg`, `.webp` | Frame-by-frame scroll animations / rotation reveals. | Max 30–60 frames, lightweight WebP frames. |

---

## 8. Permanent Image & Visual Performance Governance Rules (A through J)

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

---

## Related Skills
- `elevate-design-intelligence`: Creative direction, visual thesis, and 16 validation gates.
- `elevate-svg-experience`: SVG vector standards and functional spatial diagrams.
- `elevate-3d-web-experience`: WebGL 3D asset optimization (DRACO/KTX2).
- `elevate-source-integrity`: Verifies product identity and Amazon licensing compliance.


