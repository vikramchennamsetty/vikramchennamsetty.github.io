---
name: elevate-pinterest-seo
description: >-
  Pinterest-native SEO, keyword research, search intent mapping, US regional filtering,
  keyword cannibalization prevention, and search-optimized Pin metadata generation for ElevateLivingCo.
version: 5.0
scope: pinterest-seo-and-keyword-intelligence
risk: low
---

# Elevate Pinterest SEO & Keyword Intelligence Skill (V5.0)

## 1. PURPOSE
Establishes the authoritative system for Pinterest-native keyword research, search-intent mapping, regional intent filtering (US audience focus), title & description generation, alt-text optimization, tagged topics, and Pinterest Analytics feedback integration for ElevateLivingCo.

---

## 2. CORE PINTEREST SEO PRINCIPLES

1. **Pinterest Search vs Google Search:**
   - Pinterest is a visual discovery engine; search intent is visual, inspirational, problem-solving, and aesthetic.
   - NEVER conflate Google Search volume with Pinterest search demand.
   - NEVER invent or fabricate numeric Pinterest search volumes. When exact numeric figures are unverified, explicitly state: `"Pinterest numeric volume not publicly verified."`

2. **US Regional Intent Focus:**
   - Always apply US regional context (`region=US` / US search trends) when researching keywords and seasonal timing for US-targeted campaigns.

3. **Evergreen vs Seasonal Classification:**
   - **Evergreen Keywords:** Year-round intent (e.g., `small entryway decor`, `dark academia bookshelf styling`).
   - **Seasonal Keywords:** Intent tied to seasonal windows (e.g., `small apartment fall decor`, `renter friendly Christmas decor`).

4. **Commercial vs Informational Intent:**
   - **Informational:** Ideas, layout formulas, styling tips (e.g., `how to style a dark academia desk`).
   - **Commercial:** Specific product recommendations, shop-the-look searches (e.g., `flip drawer shoe cabinet for narrow entryway`).

5. **Single Primary Keyword Mapping & Cannibalization Prevention:**
   - Map EXACTLY ONE Primary Keyword to each Pin in a campaign.
   - NO two Pins in the same campaign may share the same Primary Keyword.
   - Pair each Primary Keyword with 3–5 Secondary and Long-Tail Keywords.

---

## 3. MANDATORY 14-STAGE PINTEREST CAMPAIGN LIFECYCLE

Every Pinterest campaign MUST sequentially follow this 14-stage workflow:

$$\text{Research} \rightarrow \text{Keyword Map} \rightarrow \text{Search-Intent Map} \rightarrow \text{Landing Page Validation} \rightarrow \text{Pin Concept} \rightarrow \text{Creative Design} \rightarrow \text{Metadata Generation} \rightarrow \text{Board Mapping} \rightarrow \text{Tagged Topics} \rightarrow \text{Schedule} \rightarrow \text{Publish} \rightarrow \text{Analytics} \rightarrow \text{Learnings} \rightarrow \text{Update Database}$$

1. **Research:** Inspect `.agents/data/pinterest-keyword-database.md` and Pinterest Trends before creation.
2. **Keyword Map:** Assign unique primary, secondary, and long-tail keywords per Pin.
3. **Search-Intent Map:** Classify intent using `.agents/data/pinterest-search-intent-matrix.md`.
4. **Landing Page Validation:** Verify destination URL is live (HTTP 200) and contains the exact promised content.
5. **Pin Concept:** Match visual archetype (Listicle, 3D Editorial, Mood Board, Infographic, etc.).
6. **Creative Design:** 2:3 vertical aspect ratio (1000x1500px), high contrast, mobile-first typography.
7. **Metadata Generation:** Title ($\le 100$ chars), Description ($\le 500$ chars), Alt Text.
8. **Board Mapping:** Select relevant board with keyword-aligned title and description.
9. **Tagged Topics:** Assign 3–5 relevant Pinterest tagged topics.
10. **Schedule:** Recommend spaced posting windows ($\ge 72$ hours between identical URLs).
11. **Publish:** Execute or queue schedule via approval workflow.
12. **Analytics:** Monitor impressions, saves, outbound clicks, and CTR post-publication.
13. **Learnings:** Extract performance insights.
14. **Update Database:** Append dated findings to `.agents/data/pinterest-keyword-database.md`.

---

## 4. METADATA COPYWRITING FORMULAS

### A. Pinterest Title Formulas ($\le 100$ Characters)
- Front-load Primary Keyword in the first 3–5 words.
- Natural, compelling, non-spammy phrasing.
- **Formulas:**
  - `[Primary Keyword]: [Listicle Count] [Outcome/Angle]`
    - *Dark Academia Decor: 10 Essentials for a Cozy Scholarly Room*
  - `[Listicle Count] [Primary Keyword] [Target Audience/Problem]`
    - *7 Small Apartment Fall Decor Ideas for Renter-Friendly Spaces*
  - `[Primary Keyword] — [Curated Focus]`
    - *Small Living Room Lighting — 5 Warm Layered Lighting Ideas*

### B. Pinterest Description Formulas ($\le 500$ Characters)
- **Sentence 1 (Hook + Primary Keyword):** Clearly state what the reader will discover using natural phrasing.
- **Sentence 2 (Secondary Keywords + Value):** Detail specific items, tips, or product recommendations featured in the guide.
- **Sentence 3 (CTA + Destination Cue):** Invite the reader to click through to the full article for step-by-step layout formulas.
- **Rule:** ZERO keyword-stuffing, no hashtag spam.

### C. Alt Text Guidelines ($\le 500$ Characters)
- Describe the visual content of the image objectively for accessibility.
- State layout, colors, typography, key objects, panel design, and background elements.

---

## 5. REUSABLE RESEARCH & DATASET INTEGRATION

Antigravity must ALWAYS query the project's permanent datasets before executing keyword research:
- `.agents/data/pinterest-keyword-database.md`
- `.agents/data/pinterest-search-intent-matrix.md`
- `.agents/data/pinterest-seasonal-calendar-2026-2027.md`
- `.agents/data/pinterest-timing-research.md`
- `.agents/skills/elevate-research-evidence/SKILL.md`
