---
name: elevate-social-analytics
description: Social performance observation, performance attribution rules, evidence-backed metric separation, and learning loop pattern extraction for ElevateLivingCo.
---

# Elevate Social Analytics Skill

## Overview

The `elevate-social-analytics` skill logs, measures, and analyzes post-publish performance for social content. It enforces strict attribution evidence separation between user-reported, Pinterest native, and Amazon affiliate data.

## Performance Attribution Protocol

1. **User-Reported vs. Verified Performance:**
   - Any unverified performance claim (e.g., "This Pin got aggressive clicks and sales") MUST be recorded as `USER_REPORTED_PERFORMANCE`.
   - Metrics are upgraded to `VERIFIED_PERFORMANCE` ONLY after native API or dashboard evidence is logged.
2. **Metric Separation:**
   - **Pinterest Evidence:** Impressions, Pin Clicks (close-ups), Outbound Clicks, Saves, CTR, Save Rate.
   - **Affiliate Sales Evidence:** Amazon Associates ordered items, conversion rate, earnings.
   - **Attribution Rule:** Pinterest metrics do not directly prove Amazon sales unless click-to-conversion attribution tracking is established.
3. **Learning Loop (Pattern Extraction vs. Template Copying):**
   - When a Pin pattern demonstrates high performance, extract the **SUCCESS_PATTERN** (e.g., high density + clear visual hierarchy + concrete numbered items).
   - Do NOT clone artwork blindly across unrelated topics.

## Reference Tracking

Reference records tracked in [`HIGH_PERFORMANCE_PIN_REFERENCE.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-pinterest-pin-design/references/HIGH_PERFORMANCE_PIN_REFERENCE.md).
