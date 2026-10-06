# Elevate Pinterest Direct Affiliate Product Opportunity Scoring Model

## 1. System Purpose & Operational Disclaimer

This document defines the 10-Factor Product Opportunity Scoring Model used by ElevateLivingCo to prioritize products for direct-to-Amazon affiliate Pinterest campaigns under the `elevate-pinterest-direct-affiliate` skill.

> [!WARNING]
> **DISCLAIMER & NON-PREDICTIVE GUARANTEE:**
> The Opportunity Score ($0 - 100$) is strictly an internal relative prioritization metric used to rank research candidates.
> - It is **NOT** a prediction of actual sales conversion probability or financial return.
> - It does **NOT** guarantee Pinterest traffic, clicks, impressions, or affiliate revenue.
> - It provides a structured, reproducible method to allocate creative and publishing resources efficiently.

---

## 2. 10-Factor Evaluation Matrix

Each candidate product is evaluated on 10 distinct scoring dimensions from $0.0$ to $10.0$.

| # | Dimension Name | Weight | Evaluation Criteria | 10/10 Benchmark |
|---|---|---|---|---|
| **1** | **Pinterest Search Relevance** | $15\%$ | Direct alignment with high-volume or high-intent Pinterest search queries. | High search volume query with clear home decor buyer intent (e.g., "outdoor rug under 50"). |
| **2** | **Visual Appeal & Styling** | $15\%$ | High aesthetic quality, photorealistic rendering potential, editorial photogenicity. | Standout visual silhouette, rich texture, designer aesthetic. |
| **3** | **Purchase Intent (Valence)** | $12\%$ | Likelihood that user seeing the Pin is looking to solve an immediate buying need. | Explicit commercial intent (e.g., product solves immediate space problem). |
| **4** | **Price Accessibility** | $10\%$ | Sweet-spot impulse price range ($15 - $75) for direct Amazon purchases. | Price point under $50 with high perceived value. |
| **5** | **Review & Social Proof** | $10\%$ | Amazon rating ($\ge 4.4$) and review volume ($\ge 500$ reviews). | Rating $\ge 4.5$ stars with $2,000+$ verified reviews. |
| **6** | **Decor & Style Alignment** | $10\%$ | Alignment with ElevateLivingCo core aesthetics (Organic Modern, Dark Academia, Quiet Luxury, Small Space). | Perfect fit for core niche visual aesthetic. |
| **7** | **Seasonal Relevance** | $8\%$ | Alignment with current or upcoming seasonal search volume curve (lead time $30-60$ days). | Peak seasonal demand match (e.g., Fall Decor in Aug/Sep). |
| **8** | **Product Uniqueness** | $7\%$ | Distinctive visual features, unique problem-solving aspect, anti-generic design. | Unique aesthetic focal point that stands out in a Pinterest feed grid. |
| **9** | **Affiliate Potential** | $8\%$ | Commission tier viability, stock stability, fulfillment reliable via Prime. | Prime-eligible, stable stock, reliable Amazon seller profile. |
| **10**| **Creative Versatility** | $5\%$ | Ability to generate multiple distinct Pin formats (Features, Styling, Before/After). | Fits $\ge 5$ distinct Pin formats naturally. |

---

## 3. Mathematical Formula & Scoring Calculation

The Total Product Opportunity Score ($S_{\text{opp}}$) is computed as:

$$S_{\text{opp}} = \sum_{i=1}^{10} \left( D_i \times W_i \right) \times 10$$

Where:
- $D_i \in [0.0, 10.0]$ is the raw score assigned to dimension $i$.
- $W_i$ is the decimal weight assigned to dimension $i$ ($\sum W_i = 1.00$).

### Weight Breakdown Summary:
1. $D_1$ (Pinterest Search Relevance): $0.15$
2. $D_2$ (Visual Appeal): $0.15$
3. $D_3$ (Purchase Intent): $0.12$
4. $D_4$ (Price Accessibility): $0.10$
5. $D_5$ (Review Proof): $0.10$
6. $D_6$ (Decor Alignment): $0.10$
7. $D_7$ (Seasonal Relevance): $0.08$
8. $D_8$ (Uniqueness): $0.07$
9. $D_9$ (Affiliate Potential): $0.08$
10. $D_{10}$ (Creative Versatility): $0.05$

---

## 4. Prioritization Tiers

| Opportunity Score | Tier Classification | Recommended Action |
| :--- | :--- | :--- |
| **$\ge 85.0$** | **TIER 1 (PRIORITY DIRECT PIN)** | Immediate creative generation & multi-format Pin creation ($2-3$ Pin concepts). |
| **$70.0 - 84.9$** | **TIER 2 (STANDARD DIRECT PIN)** | Standard single-concept creative generation & direct publishing. |
| **$55.0 - 69.9$** | **TIER 3 (BACKLOG / CONDITIONAL)** | Hold in research queue; consider testing if seasonal demand spikes. |
| **$< 55.0$** | **TIER 4 (REJECTED)** | Do not publish as direct affiliate Pin. Low visual/commercial viability. |

---

## 5. Scoring Example: DIRPROD_002 (addlon String Lights)

- **$D_1$ (Pinterest Search):** $9.0 \times 0.15 = 1.35$ ("patio string lights outdoor")
- **$D_2$ (Visual Appeal):** $9.0 \times 0.15 = 1.35$ (Warm Edison glowing mood lighting)
- **$D_3$ (Purchase Intent):** $9.2 \times 0.12 = 1.104$ (High problem-solving commercial intent)
- **$D_4$ (Price Accessibility):** $9.5 \times 0.10 = 0.95$ ($35.99 price sweet-spot)
- **$D_5$ (Review Proof):** $9.8 \times 0.10 = 0.98$ (4.7 stars, 28,400+ reviews)
- **$D_6$ (Decor Alignment):** $8.5 \times 0.10 = 0.85$ (Bistro / Patio / Cozy outdoor)
- **$D_7$ (Seasonal Relevance):** $8.5 \times 0.08 = 0.68$ (Spring through Fall curve)
- **$D_8$ (Uniqueness):** $7.5 \times 0.07 = 0.525$ (Classic Edison string bulb design)
- **$D_9$ (Affiliate Potential):** $9.0 \times 0.08 = 0.72$ (Amazon Prime, highly stable stock)
- **$D_{10}$ (Creative Versatility):** $9.0 \times 0.05 = 0.45$ (Fits Formats A, B, C, E, G, J)

$$\mathbf{\text{Total Score } S_{\text{opp}}} = (1.35 + 1.35 + 1.104 + 0.95 + 0.98 + 0.85 + 0.68 + 0.525 + 0.72 + 0.45) \times 10 = \mathbf{89.59} \quad \Rightarrow \text{TIER 1}$$
