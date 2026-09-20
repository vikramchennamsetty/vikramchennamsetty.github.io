---
name: elevate-pinterest-integration
description: Management of Pinterest board mappings, Pin publishing lifecycle, and editorial Pinterest Follow CTA components for ElevateLivingCo.
---

# Elevate Pinterest Integration Skill

## Overview

The `elevate-pinterest-integration` skill connects ElevateLivingCo's editorial content and trend discovery system with Pinterest. It manages board mapping, Pin creation, lifecycle state transitions, and frontend follow CTAs.

## Core Target Profile

- **Pinterest Profile URL:** `https://in.pinterest.com/elevateliving_co/`
- **Brand Name:** ElevateLivingCo

## Pin Lifecycle States

All Pins managed through this skill transition strictly through the following state machine:

```
[ DRAFT ] ──> [ REVIEW ] ──> [ APPROVED ] ──> [ PUBLISHED ]
```

- **DRAFT:** Initial Pin metadata created (title, description, image, target canonical URL).
- **REVIEW:** Editorial and affiliate link compliance checked (verifies `tag=elevateliv05f-20` and `rel="sponsored"` parameters on canonical article landing pages).
- **APPROVED:** Ready for API posting or scheduled queueing.
- **PUBLISHED:** Active live Pin with assigned Pinterest Pin ID and URL.

## Board Mappings

| Board Name | Category / Topic Scope | Target Canonical Slug |
| :--- | :--- | :--- |
| **Small Apartment Entryway Solutions** | Foyer, narrow shoe cabinets, coat hooks, entry rugs | `small-apartment-entryway-organization-guide.html` |
| **Space-Saving Home Furniture** | Multi-functional, flip-drawer, compact storage | Global category |
| **Glassmorphism Home Decor** | Modern minimalist aesthetics, elevated styling | Global design system |

## Pinterest Follow CTA Component Specification

All published articles on ElevateLivingCo feature an integrated Pinterest Follow CTA card built using the `elevate-glassmorphism` visual design language:

```html
<div class="pinterest-follow-card glass-panel" data-pinterest-profile="https://in.pinterest.com/elevateliving_co/">
  <div class="pinterest-badge">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.053.225-.177.273-.409.165-1.527-.711-2.48-2.943-2.48-4.737 0-3.859 2.804-7.404 8.088-7.404 4.246 0 7.547 3.025 7.547 7.07 0 4.218-2.66 7.613-6.352 7.613-1.24 0-2.407-.645-2.806-1.406l-.764 2.912c-.276 1.063-1.024 2.396-1.525 3.208C9.52 23.87 10.738 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  </div>
  <div class="pinterest-content">
    <span class="pinterest-eyebrow">PINTEREST EXCLUSIVE</span>
    <h4 class="pinterest-title">Save & Collect Entryway Ideas</h4>
    <p class="pinterest-desc">Follow ElevateLivingCo on Pinterest for curated small-space visual boards and daily styling inspiration.</p>
  </div>
  <a href="https://in.pinterest.com/elevateliving_co/" target="_blank" rel="noopener noreferrer" class="pinterest-follow-btn glass-btn">
    Follow @elevateliving_co
  </a>
</div>
```

## Evidence & Authentication Rules

1. **API Credentials:** Requires `PINTEREST_ACCESS_TOKEN` environment variable.
2. **Fallback Behavior:** If missing, returns `UNAVAILABLE_AUTH_REQUIRED` state. Scraping without official API access is strictly forbidden.
