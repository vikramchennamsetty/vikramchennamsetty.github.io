# ElevateLivingCo Pinterest Hypothesis & Experimentation Log (V1.0)

This registry records structured hypotheses generated from empirical Pinterest Analytics data. All entries follow a strict evidentiary protocol to prevent premature conclusions or false causality claims.

---

## 1. Evidentiary Rules & Thresholds

> [!IMPORTANT]
> **MINIMUM OBSERVATION WINDOW & SAMPLE THRESHOLD RULES:**
> 1. **Time Window:** Minimum **14 days** post-publication before forming formal hypotheses.
> 2. **Impression Threshold:** Minimum **1,000 impressions per Pin** across a comparable cluster of $\ge 3$ Pins before evaluating statistical variance.
> 3. **Early Sample Designation:** Any sample with $< 14$ days or $< 1,000$ impressions MUST be recorded as `INSUFFICIENT DATA`. Do NOT label any format a "winner" or "best-performing" on early samples.
> 4. **Causation Standard:** Never assert direct causality without controlled variable comparison (varying 1 element e.g. Headline Format while holding Visual Format & Board constant).

---

## 2. Hypothesis Schema Format

Every hypothesis entry MUST adhere to this exact structure:

```markdown
HYPOTHESIS ID: H-[000]
DATE: [YYYY-MM-DD]
OBSERVATION: [Empirical observation derived from normalized analytics]
PINS INVOLVED: [Comma-separated Pin IDs, e.g. DAC-001, DAC-003]
METRIC: [Primary metric involved, e.g. OUTBOUND_CLICK_RATE or SAVE_RATE]
POSSIBLE EXPLANATION: [Technical or psychological reason for observed delta]
CONFIDENCE: [Low / Medium / High - based on sample size and repetition]
NEXT TEST: [Actionable hypothesis test for upcoming content cluster]
STATUS: [Draft / Active Test / Validated / Invalidated / Insufficient Data]
```

---

## 3. Active Hypothesis Log

### H-001 (Baseline Hypothesis - Information Density & Save Rate)
- **HYPOTHESIS ID:** H-001
- **DATE:** 2026-09-29
- **OBSERVATION:** Listicles and checklist Pin formats with 4-5 scannable value points are hypothesized to drive higher save rates than single-headline aesthetic images in home decor niches.
- **PINS INVOLVED:** DAC-001, DAC-003, DAC-005 vs Baseline static visual Pins.
- **METRIC:** SAVE_RATE (`SAVES / IMPRESSIONS`)
- **POSSIBLE EXPLANATION:** Information-dense overlays turn aesthetic photography into utility reference guides, increasing bookmarking intent.
- **CONFIDENCE:** Low (Awaiting empirical telemetry from published Dark Academia campaign).
- **NEXT TEST:** Compare Save Rates of `DAC-001` (Quick List) vs `DAC-003` (Checklist) after 14 days of indexation.
- **STATUS:** Insufficient Data (Pending 14-day telemetry).

---

### H-002 (Baseline Hypothesis - Specificity vs Generic Headlines)
- **HYPOTHESIS ID:** H-002
- **DATE:** 2026-09-29
- **OBSERVATION:** Room-specific niche headlines (e.g. `DARK ACADEMIA IN A SMALL APARTMENT`) are hypothesized to achieve higher outbound CTR than broad aesthetic titles (`DARK ACADEMIA DECOR`).
- **PINS INVOLVED:** DAC-005 vs DAC-001
- **METRIC:** OUTBOUND_CLICK_RATE (`OUTBOUND_CLICKS / IMPRESSIONS`)
- **POSSIBLE EXPLANATION:** Explicit space constraints (small apartment, renter-friendly) match high-intent search queries and reduce friction.
- **CONFIDENCE:** Low (Awaiting empirical telemetry).
- **NEXT TEST:** Evaluate Outbound Click Rates between `DAC-001` and `DAC-005` at Day 14 and Day 30 post-publish.
- **STATUS:** Insufficient Data (Pending 14-day telemetry).
