---
name: elevate-pinterest-learning-loop
description: Post-performance feedback and learning loop skill for ElevateLivingCo Pinterest campaigns. Evaluates Pinterest Analytics data to update keyword, intent, and timing databases over time.
version: 1.0
scope: pinterest-analytics-and-learning-loop
risk: low
---

# Elevate Pinterest Learning Loop Skill (V1.0)

## 1. PURPOSE
Establishes an automated feedback loop that ingests real empirical Pinterest Analytics telemetry post-publication, compares multi-dimensional performance metrics, and updates project databases (`pinterest-keyword-database.md`, `pinterest-search-intent-matrix.md`, `pinterest-timing-research.md`) through dated append operations.

---

## 2. METRICS ANALYZED

Whenever campaign analytics data is received or audited, evaluate these 13 performance dimensions:
1. **Impressions:** Total visual impressions delivered.
2. **Saves (Repins):** Total pin saves to user boards.
3. **Save Rate:** `(Saves / Impressions) * 100`. Indicates visual saveability and aesthetic appeal.
4. **Outbound Clicks:** Total click-throughs to `https://elevatelivingco.me/...`.
5. **Outbound Click Rate (CTR):** `(Outbound Clicks / Impressions) * 100`. Indicates headline & offer strength.
6. **Audience Geography:** Percentage of US vs International engagement.
7. **Top Search Terms:** Exact search queries triggering pin impressions in GSC/Pinterest analytics.
8. **Board Performance:** Engagement broken down by host Pinterest Board.
9. **Creative Format:** Listicle vs 3D Editorial vs Mood Board vs Infographic.
10. **Primary Keyword:** Performance comparison by target Primary Keyword.
11. **Posting Time:** Engagement comparison across time windows (EST/CST/PST).
12. **Posting Day:** Engagement comparison across days of the week.
13. **Seasonal Context:** Performance decay or surge relative to seasonal timing windows.

---

## 3. IMMUTABLE DATA UPDATE PROTOCOL (APPEND ONLY)

> [!CAUTION]
> **NEVER OVERWRITE HISTORICAL RESEARCH DATA.**
> All database updates resulting from this learning loop MUST be appended as dated observations to preserve historical trends and evidence trails.

### Standard Observation Append Schema
```markdown
- **Observation Date:** [YYYY-MM-DD]
- **Campaign ID:** [PINTEREST-CAMPAIGN-ID]
- **Pin ID / Asset:** [Pin Name or ID]
- **Target Keyword:** [Keyword]
- **Observed Metrics:**
  - Impressions: [Count]
  - Saves: [Count] (Save Rate: [X]%)
  - Outbound Clicks: [Count] (CTR: [X]%)
- **Target Window:** [e.g. Sunday 08:00 PM EST]
- **Evidence Level:** LEVEL B (Direct First-Party Analytics)
- **Confidence:** High (Account-Level Observed)
- **Insight / Action Taken:** [e.g. Primary keyword added to high-converting cluster list; timing added to timing-research.md]
```

---

## 4. AUTOMATED DATABASE UPDATE DESTINATIONS

1. **`pinterest-keyword-database.md`:** Append account-level observed CTR, save rates, and verified search query matches to keyword records.
2. **`pinterest-search-intent-matrix.md`:** Refine recommended visual archetypes and headline hooks based on top-performing CTR patterns.
3. **`pinterest-timing-research.md`:** Log empirical performance per posting window to build account-specific optimal scheduling rules.
