---
name: elevate-product-research-intelligence
description: >-
  Contextual evidence-based evaluation of candidate products for ElevateLivingCo guides using 
  intent, style relevance, problem solving, editorial/visual usefulness, commercial identity integrity, 
  and portfolio diversity—without arbitrary numerical metric gates or manufactured data.
version: 1.1
triggers:
  - "find products for this article"
  - "best products to add"
  - "what products should we recommend"
  - "research products"
  - "find Amazon products"
  - "trending products"
  - "seasonal products"
  - "products solving this problem"
  - "build product list"
  - "replace stale products"
  - "research affiliate products"
  - "choose products for new article"
  - "evaluate product evidence"
scope: product-research-and-selection-intelligence
risk: medium
source:
  type: native-specialized
  version: 1.1
---

# Elevate Product Research & Selection Intelligence Skill (V1.1)

## Purpose
Establishes an evidence-based contextual evaluation architecture for selecting product candidate sets for ElevateLivingCo editorial guides. Evaluates candidate products through evidence, context, and structural relevance—rejecting rigid numeric thresholds (such as mandatory rating or review quotas) in favor of holistic editorial and visual utility, verified identity provenance, and balanced portfolio diversity.

---

## 1. Core Selection Principles

$$\text{EVIDENCE} \longrightarrow \text{CONTEXTUAL EVALUATION} \longrightarrow \text{CLASSIFICATION}$$

- **Evidence over Arbitrary Gates:** Product signals (ratings, review counts, pricing, shipping, availability) are evidence to be contextualized, NOT automatic pass/fail rules.
- **Contextual Relevance Wins:** A product with 20 legitimate reviews may be a `STRONG CANDIDATE` if it has exceptional article relevance, strong niche/style fit, solves a specific user problem, provides strong visual/editorial value, and has verified source data. Conversely, a product with thousands of reviews is rejected if it is ill-suited to the article aesthetic or editorial intent.
- **Metric Threshold Bias Prohibition:** Never reject candidate products solely because they do not meet arbitrary numerical cutoffs (e.g. `rating >= 4.0` or `reviews >= 50`).

---

## 2. The 12-Step Product Evaluation Hierarchy

Every candidate product MUST be evaluated sequentially through this 12-step contextual hierarchy:

1. **Article Intent:** Does the product align with the core objective and reader expectations of the specific article?
2. **User Problem:** What tangible decorating, spatial, or living dilemma does this product solve for the reader?
   - *Supported Dilemmas:* Empty wall, low ambient light, cramped storage, awkward corner, rental non-permanence, texture deficit, light/privacy control, organization, atmospheric depth, visual scale balance.
3. **Niche / Style Relevance:** Evaluate visual and material harmony with the target aesthetic (e.g., Dark Academia, Quiet Luxury, Warm Minimalist, Urban Rental, Organic Modern).
4. **Editorial Usefulness:** Does the item give the article something meaningful to teach or explain? Reject products that exist solely to host an affiliate link.
5. **Visual Usefulness:** How effectively does the product support hero scenes, styling demonstrations, before/after concepts, Shop The Look components, or interactive visuals?
6. **Trend & Demand Evidence:** Are there verifiable indicators of rising style interest or search intent? Frame trend insights as qualitative design reasoning unless supported by authoritative data. *Never manufacture trend metrics.*
7. **Seasonality:** Assess whether relevance is evergreen or tied to specific periods (spring refresh, fall cozy, outdoor summer, holiday gifting). *Do not force seasonality where irrelevant.*
8. **Product Quality Signals:** Evaluate user feedback signals, material construction, and satisfaction qualitative themes contextually alongside review depth.
9. **Commercial & Source Verification:** Validate physical product identity, ASIN, destination URL, marketplace (`amazon.com`), Associate tag (`elevateliv05f-20`), image provenance (Classes A–F), and tracking schema.
10. **Existing Elevate Coverage:** Cross-reference `AMAZON_PRODUCT_CATALOG.csv` and existing cluster guides to avoid repeating identical ASINs across multiple articles.
11. **Portfolio Diversity:** Ensure a balanced distribution across price tiers (Budget, Mid-Range, Investment) and decor roles (Anchor/Focal, Ambient Lighting, Tactile Layer, Functional Core, Accent).
12. **Final Candidate Classification:** Assign a contextual classification category accompanied by an explicit, evidence-based written rationale.

---

## 3. Product Signals & Verification States

Treat all product metrics as contextual signals. For EVERY signal evaluated, assign one of these four explicit verification states—**never silently infer missing information**:

- `VERIFIED`: Confirmed against authoritative source data.
- `UNVERIFIED`: Data is missing or not currently confirmed from source.
- `NOT APPLICABLE`: Signal is irrelevant to the product category or user decision.
- `STALE / TIME-SENSITIVE`: Data was verified historically but may have drifted.

### Signal Handling Guidelines:

| Signal Category | Evaluation Guidance | Verification Protocol |
|---|---|---|
| **Pricing** | Do NOT require a price to select a product. Never invent or estimate prices. | If live price is unavailable, flag as `PRICE_UNVERIFIED`. |
| **Availability** | Availability is time and location dependent; never treat as permanent. | If verified, record `AVAILABILITY_VERIFIED_AT: [timestamp/source]`. Otherwise record `AVAILABILITY_UNVERIFIED`. |
| **Rating & Review Volume** | Contextual evidence of satisfaction and usage. Low review counts on specialized/niche items do NOT disqualify them if relevance and identity are verified. | State explicit rating/count if verified, or mark `UNVERIFIED`. Never mandate arbitrary minimums. |
| **Shipping, Returns & Warranty** | Contextual marketplace signals evaluated only when relevant to user decision or article context (e.g., heavy furniture, fragile glass). | Evaluate contextually; do not use as universal pass/fail gates. |
| **Seller & Brand Information** | Verified brand identity and seller reputation signal authenticity. | Verify brand identity where applicable; mark `UNVERIFIED` if unclear. |
| **Dimensions & Specifications** | Crucial for spatial problem-solving (small spaces, low ceilings, shelf depth). | Record exact physical dimensions or mark `UNVERIFIED`. |

---

## 4. Product Candidate Classification Framework

Assign every evaluated candidate to one of these 5 classification categories:

- **STRONG CANDIDATE:** Exceptional niche fit, solves a clear user problem, strong visual/editorial value, verified commercial identity, distinct portfolio role.
- **PROMISING:** Strong editorial/niche fit and problem-solving value; minor commercial or provenance verification pending prior to production.
- **REQUIRES VERIFICATION:** Strong conceptual and aesthetic fit, but missing verified ASIN, destination URL, or current availability state.
- **WEAK FIT:** Product fits broad category but fails to solve the article's specific user problem, lacks visual/editorial distinction, or repeats existing coverage unnecessarily.
- **REJECT:** Unverified identity, broken/stale ASIN, generic commodity item with zero design value, or fails fundamental aesthetic/editorial relevance.

### Rationale Requirement:
*Every classification MUST include a short, evidence-based written rationale explaining the context.*

> [!IMPORTANT]
> **Correct Rationale Example:**
> **STRONG CANDIDATE**  
> *Reason:* Strong Dark Academia relevance, directly solves the lighting problem, visually useful for the article, and commercial identity is verified. Review volume is limited but sufficient evidence exists for editorial inclusion.

> [!CAUTION]
> **PROHIBITED Rationale Example:**
> ~~"Strong candidate because rating >= 4.0 and reviews >= 50."~~ *(Strictly forbidden)*

---

## 5. Non-Mandatory Explainable Product Scoring

Do NOT require arbitrary numerical scores for product selection. If a future workflow uses scoring, it MUST be:
1. **Explainable:** Every point awarded or deducted must reference a specific contextual evidence signal.
2. **Configurable:** Weights must adjust based on article intent (e.g., spatial fit weighted higher for small-space guides).
3. **Evidence-Based:** Based strictly on verified data or explicit editorial evaluation.
4. **Contextual & Non-Mandatory:** Used only as an optional helper tool, never overriding classification rationale or acting as a hard gate.

---

## 6. Hard Source Integrity & Affiliate Safety Requirements

### Source-of-Truth Hard Requirements:
While product metrics are contextual, **Source Integrity requirements remain HARD pass/fail gates**:
- **ASIN / Product Identifier:** Must match exact physical product identity.
- **Destination URL:** Must resolve directly to the verified product page on `amazon.com`.
- **Associate Tag:** Must equal `elevateliv05f-20`.
- **Image Identity & Provenance:** Must belong to verified Asset Provenance Classes A–F.
- **Cross-Representation Identity Parity:** 100% agreement required across HTML DOM, JavaScript tracking parameters, JSON-LD schema, Shop The Look scripts, and Product Matrix.

### Affiliate Safety Protocol:
- **No Commission-Only Selection:** Every selected product MUST have an explicit editorial reason for inclusion.
- **Zero Manufactured Data:** ABSOLUTE PROHIBITION on inventing or exaggerating ratings, review counts, prices, discounts, bestseller badges, sales volume, trend statistics, scarcity, or urgency.

---

## 7. Standardized Product Research Output Schema

Output candidate research using this standardized evidence-based format:

```markdown
### Product Research & Selection Report

**ARTICLE:** [Article Title / Target Topic]  
**USER INTENT:** [Specific design outcome sought]  
**CORE PROBLEM:** [Primary decorating dilemma being solved]  

---

#### Candidate Evaluation Matrix

1. **Product Name / Identifier:** [Name & ASIN if verified]
   - **Category & Role:** [e.g., Ambient Lighting / Hero Anchor]
   - **Article Intent & Relevance:** [High / Med / Low - Rationale]
   - **Problem Solved:** [e.g., Low-light rental corner illumination]
   - **Niche / Style Fit:** [e.g., Dark Academia / Warm Ambient Brass]
   - **Visual & Editorial Usefulness:** [How it improves article narrative and visuals]
   - **Product Quality & Review Signals:** [Qualitative themes + rating/count context or `UNVERIFIED`]
   - **Pricing State:** [`VERIFIED: $XX.XX` / `PRICE_UNVERIFIED`]
   - **Availability State:** [`AVAILABILITY_VERIFIED_AT: YYYY-MM-DD` / `AVAILABILITY_UNVERIFIED`]
   - **Commercial Identity Parity:** [`VERIFIED` (ASIN, Tag, URL, Schema match) / `REQUIRES_VERIFICATION`]
   - **Portfolio Diversity Contribution:** [Adds unique price tier / accent role]
   - **Classification:** [`STRONG CANDIDATE` / `PROMISING` / `REQUIRES VERIFICATION` / `WEAK FIT` / `REJECT`]
   - **Contextual Rationale:** [2-sentence evidence-based explanation]

---

#### Final Recommended Product Set

1. **[Product 1 Name]** (ASIN: `[ASIN]`) — *Role: Hero Anchor*
   - *Contextual Rationale:* [Editorial rationale & problem solved]
2. **[Product 2 Name]** (ASIN: `[ASIN]`) — *Role: Accent Lighting*
   - *Contextual Rationale:* [Editorial rationale & problem solved]
```

---

## 8. Integration Matrix with Existing Skills

- `elevate-editorial-retention`: Selected products must directly support narrative progression and visual-first flows.
- `elevate-affiliate-compliance`: Validates ASINs, Associate tags (`elevateliv05f-20`), `target="_blank"`, `rel="sponsored nofollow"`, and tracking handlers.
- `elevate-source-integrity`: Enforces product truth, protected link contracts, and single product matrix alignment.
- `elevate-regression-prevention`: Incorporates failure patterns FP-019 through FP-024 and rules RULE-016 through RULE-019.
- `elevate-skill-evolution`: Tracks self-improvement and evidence evaluation lessons.
