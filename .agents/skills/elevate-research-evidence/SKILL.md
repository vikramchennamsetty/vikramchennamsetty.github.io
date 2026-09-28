---
name: elevate-research-evidence
description: Research evidence classification standard for ElevateLivingCo. Establishes 5 evidence levels (A-E) to prevent data fabrication, unverified metric claims, or model inference conflation.
version: 1.0
scope: research-evidence-classification-and-provenance
risk: low
---

# Elevate Research Evidence Standard (V1.0)

## 1. PURPOSE
Establishes an unyielding, 5-tier evidence hierarchy for all research, SEO keyword analysis, trend reporting, affiliate data, and Pinterest strategy across ElevateLivingCo.

---

## 2. THE 5 EVIDENCE LEVELS (LEVELS A–E)

| Level | Evidence Category | Description / Source Type | Strict Rules & Boundaries |
| :-: | :--- | :--- | :--- |
| **LEVEL A** | **Official Platform Documentation** | Official developer docs, platform APIs, Google Search Console, Pinterest Trends API, Amazon Associates Operating Agreement. | Authoritative baseline for platform policies, schemas, and API constraints. |
| **LEVEL B** | **First-Party Empirical Telemetry** | Verified ElevateLivingCo analytics (GA4, Clarity, GSC performance reports, Pinterest Analytics dashboard, server HTTP logs). | Highest authority for site-specific performance. Overrides generic benchmarks. |
| **LEVEL C** | **Credible Third-Party Research** | Verified industry studies (e.g. Nielsen, Pew Research, published UAT reports, reputable design publications). | Must cite explicit methodology and publisher. Cannot override Level A or Level B. |
| **LEVEL D** | **Editorial Trend Coverage** | Architectural Digest, Vogue Living, Elle Decor, Pinterest Predicts annual trend reports. | Used for qualitative aesthetic & trend direction. Does NOT constitute search volume proof. |
| **LEVEL E** | **Model Inference & Strategy** | LLM analysis, synthetic strategy proposals, inferred keyword extensions, conceptual recommendations. | **MUST NEVER be presented as Level A, B, or C.** Must be explicitly marked as `MODEL_INFERENCE`. |

---

## 3. CORE GOVERNANCE RULES

1. **NO LEVEL E PROMOTION:**
   - NEVER present a Level E strategic recommendation or inferred keyword as a Level A/B/C verified fact.
   - NEVER claim an inferred keyword has "verified high search volume" without explicit Level A/B data.

2. **PINTEREST NUMERIC VOLUME PROHIBITION:**
   - Because Pinterest does not publish exact numeric search volumes on public web interfaces, numeric search volumes MUST NOT be invented.
   - Record exact platform relative indices (0–100) or explicitly state: `"Pinterest numeric volume not publicly verified."`

3. **MANDATORY RECORDING FIELDS:**
   Every reusable research finding stored in project datasets MUST include:
   - **`source`:** Authoritative URL or source system
   - **`source_date`:** Date data was captured (`YYYY-MM-DD`)
   - **`claim`:** Precise assertion or finding
   - **`evidence_level`:** `LEVEL A` / `LEVEL B` / `LEVEL C` / `LEVEL D` / `LEVEL E`
   - **`confidence`:** `High` / `Medium-High` / `Medium` / `Low`
   - **`type`:** `Evergreen` / `Temporary` / `Seasonal`
