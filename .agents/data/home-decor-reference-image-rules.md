# ElevateLivingCo — Reference Image System & Guidelines

**Version:** 1.0  
**Last Updated:** 2026-09-29  

This document defines the rules for utilizing uploaded or repository reference images in native image generation (`generate_image` parameter `ImagePaths=[...]`).

---

## 1. Core Reference Usage Rules

1. **Inspiration & Style Transfer:**
   - Reference images establish aesthetic mood, color balance, lighting direction, or spatial layout patterns (e.g., `PIN-REFERENCE-DARK-ACADEMIA-001`).
   - Transform inspiration into an **original visual scene**. NEVER attempt exact pixel-for-pixel recreation of copyrighted photographs or third-party editorial images.

2. **Product Reference Fidelity:**
   - When referencing a real Amazon affiliate product image:
     - Preserve recognizable silhouette, color, primary material, and distinctive physical features.
     - Embed the product naturally inside a plausible, human-scaled interior context.
     - If exact visual identity preservation cannot be guaranteed by the generator model, use the product as visual inspiration only and do NOT claim the image is an exact product photograph.

3. **Multi-Image Reference Combination:**
   - Up to 3 reference images may be passed to `generate_image(ImagePaths=[...])`.
   - **Ref 1:** Style/Mood reference (color palette & lighting).
   - **Ref 2:** Composition reference (vertical layout & panel framing).
   - **Ref 3:** Product/Object reference (item silhouette).

4. **Reference Pre-Inspection Protocol:**
   - Always inspect reference images (via `view_file` or metadata records) before constructing the generation prompt to extract accurate architectural elements, lighting angles, and texture features.
