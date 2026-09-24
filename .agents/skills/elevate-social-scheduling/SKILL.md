---
name: elevate-social-scheduling
description: Multi-channel queue management, publishing window allocation, timezone mapping, and approval gate management for ElevateLivingCo social distribution.
---

# Elevate Social Scheduling Skill

## Overview

The `elevate-social-scheduling` skill manages the execution schedule, queue spacing, timezone representation, and pre-publish approval workflows for Pinterest and future social distribution channels.

## Key Rules & Constraints

1. **Explicit Approval Gate:**
   - **NO PIN OR POST IS EVER PUBLISHED OR SCHEDULED AUTOMATICALLY.**
   - All proposed publish times remain in `PROPOSED` / `APPROVED_PENDING_USER` state until explicit human user authorization is granted.
2. **72-Hour Destination Spacing Rule:**
   - Pins pointing to the exact same canonical article URL must be scheduled with a minimum spacing of 72 hours between publications.
3. **Timezone Standardization:**
   - Manifests record publish timestamps in ISO 8601 format with explicit timezone offsets.
   - Internal workspace schedule representation defaults to `Asia/Kolkata` (IST) while aligning posting windows with target US/EU audience high-engagement hours (e.g., 08:00 AM EST, 20:00 EST).
4. **Schedule Testing Hypotheses:**
   - When account-specific historical timing data is unobserved, schedule slots are explicitly designated as `TEST_HYPOTHESIS_A`, `TEST_HYPOTHESIS_B`, etc.

## External Provenance & Normalization

- **Source Reference:** Adapted from `scheduling-and-queue` and `content-calendar`.
- **Elevate Integration:** Incorporates Elevate's human approval safety boundary and rigorous timestamp validation.
