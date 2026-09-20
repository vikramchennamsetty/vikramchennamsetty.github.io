---
name: elevate-product-workflow-orchestration
description: Orchestrates the end-to-end product intelligence lifecycle state machine, enforcing valid state transitions, transition gates, idempotency, bounded retries, versioned evidence, blocker preservation, specialist boundary isolation, and production boundary protection.
version: 1.0
domain: product-intelligence-workflow-state-orchestration
ownership: workflow-lifecycle-state-machine-and-transition-gate-management
depends_on:
  - elevate-product-opportunity-scoring
  - elevate-product-research-queue-orchestration
  - elevate-web-scraping-product-discovery
  - elevate-product-research-intelligence
  - elevate-problem-product-intelligence
  - elevate-niche-product-matching
  - elevate-source-integrity
  - elevate-commercial-product-validation
  - elevate-product-portfolio-intelligence
  - elevate-seasonal-product-intelligence
  - elevate-content-freshness-intelligence
  - elevate-product-freshness-intelligence
  - elevate-editorial-product-integration
  - elevate-product-article-optimization
  - elevate-product-performance-intelligence
  - elevate-content-cluster-intelligence
---

# Elevate Product Intelligence Workflow Orchestration

## 1. Overview & Core Philosophy

`elevate-product-workflow-orchestration` is the workflow-state orchestration layer that connects Elevate's specialist product intelligence skills into a controlled, state-aware end-to-end lifecycle.

### Core Question
> **"What exact state is this product opportunity in, what has been completed, what is allowed next, what is blocked, what failed, what needs retrying, and which specialist skill owns the next transition?"**

### Core Purpose & Operational Boundaries
- **DOES NOT** perform scraping, product selection, claim verification, niche matching, commercial validation, article writing, HTML rendering, or performance interpretation itself.
- **DOES** manage workflow identity (`WORKFLOW_ID`), canonical lifecycle states, valid state transition graphs, transition gate verification, result classification, idempotency, bounded retry policies, versioned evidence tracking, hard blocker preservation, queue integration, and production boundary protection.
- **NEVER** assumes a skill succeeded merely because its tool was invoked. A transition requires explicit result validation satisfying defined success criteria.

---

## 2. Workflow Identity & Identifier Mapping

Every workflow instance MUST maintain a stable system identifier:

`WORKFLOW_ID` (e.g. `WF-2026-0920-001`)

### Structural Mapping & Identifier Isolation
`WORKFLOW_ID` sits above candidate and task identifiers and MUST NOT be substituted for underlying record IDs:

```
WORKFLOW_ID
  ├── OPPORTUNITY_ID (e.g. OPP-2026-0920-001)
  ├── RESEARCH_TASK_ID(s) (e.g. TASK-2026-0920-042)
  ├── PRODUCT_CANDIDATE_ID(s) (e.g. CAND-2026-0920-108)
  └── ARTICLE_ID (e.g. ART-DARK-BOOKSHELF-001)
```

> [!CAUTION]
> **Identifier Separation:** An `ASIN`, `PRODUCT_CANDIDATE_ID`, `RESEARCH_TASK_ID`, or `OPPORTUNITY_ID` MUST NEVER be passed as a `WORKFLOW_ID`. Each layer maintains distinct scope.

---

## 3. Canonical Workflow Lifecycle States

The workflow state machine operates across 8 controlled state clusters:

### Initial States
- `DISCOVERED`: Market trend, user search, or candidate signal identified.
- `PROBLEM_DEFINED`: User dilemma, spatial constraint, and room mechanism verified.
- `OPPORTUNITY_IDENTIFIED`: Cross-signal opportunity scored and classified.
- `QUEUED`: Enqueued in research queue with missing evidence tagged.

### Research States
- `RESEARCH_READY`: Prerequisites and research scope satisfied for dispatch.
- `RESEARCHING`: Dispatched specialist executing research task.
- `RESEARCH_COMPLETE`: Specialist returned raw candidate/research data.

### Source Validation States
- `SOURCE_VALIDATION_REQUIRED`: Candidate metadata requires source integrity check.
- `SOURCE_VALIDATING`: `elevate-source-integrity` verifying provenance/identity.
- `SOURCE_VALIDATED`: Identity parity, brand, and provenance verified.
- `IDENTITY_CONFLICT`: Product identity or variant drift detected (Hard Block).
- `SOURCE_CONFLICT`: Merchant, URL, or licensing rights conflict detected (Hard Block).

### Product Research & Commercial Validation States
- `PRODUCT_RESEARCH_REQUIRED`: Candidate requires 12-step quality evaluation.
- `PRODUCT_RESEARCHING`: `elevate-product-research-intelligence` executing evaluation.
- `PRODUCT_RESEARCH_COMPLETE`: 12-step quality analysis complete.
- `PRODUCT_VALIDATION_REQUIRED`: Fact-checking and ASIN verification required.
- `PRODUCT_VALIDATING`: `elevate-commercial-product-validation` validating facts.
- `PRODUCT_VALIDATED`: Commercial identity, price state, availability, and URL verified.

### Niche Matching States
- `NICHE_MATCH_REQUIRED`: Candidate requires style, room, and intent matching.
- `NICHE_MATCHING`: `elevate-niche-product-matching` evaluating contextual fit.
- `NICHE_MATCHED`: Product verified as appropriate contextual fit for article.
- `NICHE_MISMATCH`: Product fails style, scale, room, or problem compatibility.

### Editorial & Article System States
- `EDITORIAL_PURPOSE_REQUIRED`: Product placement requires explicit editorial context.
- `EDITORIAL_READY`: Placement pattern, section purpose, and CTAs defined.
- `ARTICLE_SYSTEM_CHECK_REQUIRED`: Whole-page commercial density audit required.
- `ARTICLE_SYSTEM_READY`: Page-level discovery flow and CTA balance verified.
- `INTEGRATION_READY`: Fully validated for editorial integration (Max Workflow State).
- `INTEGRATED`: Product plan merged into target article specification.

### Publication & Learning States
- `PUBLISHED`: Article active; telemetry observation window open.
- `PERFORMANCE_OBSERVATION`: `elevate-product-performance-intelligence` auditing clicks/CTR.
- `LEARNING_AVAILABLE`: Post-publication insights recorded for feedback loop.
- `REASSESSMENT_REQUIRED`: Telemetry or decay triggers re-evaluation.

### Terminal & Exception States
- `BLOCKED`: Hard blocker halts workflow (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`, etc.).
- `FAILED`: Execution attempted and failed unrecoverably.
- `RETRY_REQUIRED`: Transient failure eligible for bounded retry.
- `CANCELLED`: Workflow intentionally halted by editor.
- `NO_ACTION`: Valid decision that no further research or integration is warranted.
- `UNKNOWN`: Insufficient normalized evidence to classify state.

---

## 4. State Transition Ownership Map

Each state transition is owned by a specific specialist skill. The orchestrator owns the **STATE TRANSITION GATE**, while the specialist owns the **DOMAIN DECISION**:

| Transition Phase | Responsible Specialist Skill | State Transition Target |
|---|---|---|
| `DISCOVERED` $\rightarrow$ `PROBLEM_DEFINED` | `elevate-problem-product-intelligence` | `PROBLEM_DEFINED` |
| `PROBLEM_DEFINED` $\rightarrow$ `OPPORTUNITY_IDENTIFIED` | `elevate-product-opportunity-scoring` | `OPPORTUNITY_IDENTIFIED` |
| `OPPORTUNITY_IDENTIFIED` $\rightarrow$ `QUEUED` | `elevate-product-research-queue-orchestration` | `QUEUED` |
| `QUEUED` $\rightarrow$ `RESEARCHING` | `elevate-product-research-queue-orchestration` + Dispatched Skill | `RESEARCHING` |
| `RESEARCHING` $\rightarrow$ `SOURCE_VALIDATED` | `elevate-source-integrity` | `SOURCE_VALIDATED` / `SOURCE_CONFLICT` |
| `SOURCE_VALIDATED` $\rightarrow$ `PRODUCT_VALIDATED` | `elevate-product-research-intelligence` + `elevate-commercial-product-validation` | `PRODUCT_VALIDATED` / `BLOCKED` |
| `PRODUCT_VALIDATED` $\rightarrow$ `NICHE_MATCHED` | `elevate-niche-product-matching` | `NICHE_MATCHED` / `NICHE_MISMATCH` |
| `NICHE_MATCHED` $\rightarrow$ `EDITORIAL_READY` | `elevate-editorial-product-integration` | `EDITORIAL_READY` |
| `EDITORIAL_READY` $\rightarrow$ `ARTICLE_SYSTEM_READY` | `elevate-product-article-optimization` | `ARTICLE_SYSTEM_READY` |
| `ARTICLE_SYSTEM_READY` $\rightarrow$ `INTEGRATION_READY` | `elevate-product-workflow-orchestration` | `INTEGRATION_READY` |
| `INTEGRATION_READY` $\rightarrow$ `INTEGRATED` | `elevate-editorial-product-integration` | `INTEGRATED` |
| `PUBLISHED` $\rightarrow$ `PERFORMANCE_OBSERVATION` | `elevate-product-performance-intelligence` | `PERFORMANCE_OBSERVATION` |
| `PERFORMANCE_OBSERVATION` $\rightarrow$ `REASSESSMENT_REQUIRED` | `elevate-product-opportunity-scoring` + Queue Orchestration | `REASSESSMENT_REQUIRED` |

---

## 5. Valid State Transition Graph

Arbitrary state jumps are strictly prohibited. Workflow transitions MUST follow the directed state graph:

```
[DISCOVERED] ──> [PROBLEM_DEFINED] ──> [OPPORTUNITY_IDENTIFIED] ──> [QUEUED]
                                                                        │
┌───────────────────────────────────────────────────────────────────────┘
│
▼
[RESEARCH_READY] ──> [RESEARCHING] ──> [RESEARCH_COMPLETE]
                                               │
┌──────────────────────────────────────────────┘
│
▼
[SOURCE_VALIDATION_REQUIRED] ──> [SOURCE_VALIDATING] ──> [SOURCE_VALIDATED] ──┐
                                  ├──> [IDENTITY_CONFLICT] (BLOCKED)         │
                                  └──> [SOURCE_CONFLICT]   (BLOCKED)         │
                                                                             │
┌────────────────────────────────────────────────────────────────────────────┘
│
▼
[PRODUCT_RESEARCH_REQUIRED] ──> [PRODUCT_RESEARCHING] ──> [PRODUCT_RESEARCH_COMPLETE]
                                                                  │
┌─────────────────────────────────────────────────────────────────┘
│
▼
[PRODUCT_VALIDATION_REQUIRED] ──> [PRODUCT_VALIDATING] ──> [PRODUCT_VALIDATED] ──┐
                                   ├──> [BLOCKED]                                │
                                   └──> [RETRY_REQUIRED]                         │
                                                                                 │
┌────────────────────────────────────────────────────────────────────────────────┘
│
▼
[NICHE_MATCH_REQUIRED] ──> [NICHE_MATCHING] ──> [NICHE_MATCHED] ──┐
                            └──> [NICHE_MISMATCH] (NO_ACTION)     │
                                                                  │
┌─────────────────────────────────────────────────────────────────┘
│
▼
[EDITORIAL_PURPOSE_REQUIRED] ──> [EDITORIAL_READY]
                                      │
┌─────────────────────────────────────┘
│
▼
[ARTICLE_SYSTEM_CHECK_REQUIRED] ──> [ARTICLE_SYSTEM_READY] ──> [INTEGRATION_READY]
                                                                     │
┌────────────────────────────────────────────────────────────────────┘
│
▼
[INTEGRATED] ──> [PUBLISHED] ──> [PERFORMANCE_OBSERVATION] ──> [LEARNING_AVAILABLE]
                                                                     │
                                 [REASSESSMENT_REQUIRED] <───────────┘
                                          │
                                          ├──> [OPPORTUNITY_IDENTIFIED]
                                          ├──> [QUEUED]
                                          └──> [NO_ACTION]
```

---

## 6. State Transition Contract & Gate Schema

### 6.1 State Transition Contract Schema
Every requested transition MUST be formally structured:

```markdown
### Workflow State Transition Contract

WORKFLOW_ID: [WF-ID]
CURRENT_STATE: [Current Canonical State]
REQUESTED_TRANSITION: [Target Canonical State]
TRIGGER: [Trigger Event / Missing Evidence Satisfied]
RESPONSIBLE_SKILL: [Executing Specialist Skill]
INPUT_EVIDENCE: [Reference to Input Record & Version]
OUTPUT_EXPECTED: [Expected Specialist Output]
PRECONDITIONS: [List of Required Prerequisites]
BLOCKING_CONDITIONS: [List of Active Blockers to Check]
SUCCESS_CRITERIA: [Explicit Gate Criteria for Advancement]
FAILURE_STATE: [State to Assign on Failure: FAILED / RETRY_REQUIRED / BLOCKED]
RETRY_POLICY: [RETRY_COUNT / MAX_RETRIES / NEXT_RETRY_CONDITION]
TIMESTAMP: [Timestamp]
PROVENANCE: [Executing Agent / System Context]
```

### 6.2 Key Transition Gates

1. **`PROBLEM_DEFINED` $\rightarrow$ `OPPORTUNITY_IDENTIFIED` Gate:**
   - Requires: Verified user problem, solution mechanism, spatial/style context, and evidence state array.
2. **`OPPORTUNITY_IDENTIFIED` $\rightarrow$ `QUEUED` Gate:**
   - Requires: Opportunity classification, explicit missing-evidence tags, portfolio diversity check, and written priority rationale.
3. **`QUEUED` $\rightarrow$ `RESEARCH_READY` Gate:**
   - Requires: Upstream dependencies satisfied, research scope defined, target skill identified, resource bounds set, and stop conditions established.
4. **`RESEARCH_COMPLETE` $\rightarrow$ `SOURCE_VALIDATION_REQUIRED` Gate:**
   - Requires: Raw discovery/candidate output present, provenance recorded, product identity un-assumed.
5. **`SOURCE_VALIDATED` $\rightarrow$ `PRODUCT_VALIDATION_REQUIRED` Gate:**
   - Requires: `SOURCE_CONFLICT` = `NONE`, `IDENTITY_CONFLICT` = `NONE`, marketplace tagged (`US`/`IN`), candidate identity stable.
6. **`PRODUCT_VALIDATED` $\rightarrow$ `NICHE_MATCH_REQUIRED` Gate:**
   - Requires: 12-step quality evaluation complete, commercial status explicitly classified (`COMMERCIALLY_VALID` or `VALID_WITH_UNVERIFIED_FIELDS`), ASIN and URL parity verified.
7. **`NICHE_MATCHED` $\rightarrow$ `EDITORIAL_PURPOSE_REQUIRED` Gate:**
   - Requires: Room/style match verified (`PERFECT_MATCH` / `STRONG_MATCH` / `MODERATE_MATCH`), problem fit verified, contextual product role assigned.
8. **`ARTICLE_SYSTEM_READY` $\rightarrow$ `INTEGRATION_READY` Gate:**
   - Requires: Whole-article commercial density verified (`BALANCED` / `LOW`), CTA distribution contextually valid, mobile information parity intact, zero prohibited affiliate manipulation.
9. **`INTEGRATION_READY` $\rightarrow$ `INTEGRATED` Gate:**
   - Requires: Production workflow explicitly invoked by user/editor, surgical implementation specification ready, zero automatic production deployment.

---

## 7. Failure Handling & Bounded Retry Policy

### 7.1 Failure Classification
- `FAILED`: Execution attempted; unrecoverable failure (e.g. 404 page deleted, invalid data format).
- `RETRY_REQUIRED`: Transient technical error (e.g. network timeout, rate limit throttle); eligible for bounded retry.
- `BLOCKED`: Policy or conflict halt (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`, `PROHIBITED_ACCESS`).
- `CANCELLED`: Intentionally terminated workflow.
- `NO_ACTION`: Valid decision that candidate does not meet criteria or is duplicative.

### 7.2 Bounded Retry Policy
- **Default Parameters:** `RETRY_COUNT` (starts at 0), `MAX_RETRIES` = 2, `EXPONENTIAL_BACKOFF` enabled.
- **PROHIBITED RETRIES (Hard Stop):** Retries are strictly PROHIBITED for:
  - `PROHIBITED_ACCESS` (robots.txt / TOS violations)
  - `SOURCE_CONFLICT` or `IDENTITY_CONFLICT`
  - `MARKETPLACE_CONFLICT`
  - `NO_ACTION` or intentionally blocked workflows
- **PERMITTED RETRIES:** Retries are allowed ONLY for transient HTTP timeouts or temporary rate limits, up to `MAX_RETRIES`.

---

## 8. Workflow Idempotency & Evidence Versioning

### 8.1 Idempotency Guarantee
Before executing a state transition, inspect the execution registry:

$$\text{WORKFLOW\_ID} + \text{REQUESTED\_TRANSITION} + \text{INPUT\_EVIDENCE\_VERSION}$$

If an identical execution has already completed successfully:
1. **SUPPRESS DUPLICATE EXECUTION.**
2. Return the existing validated output record.
3. If new execution is requested, require an explicit `INPUT_EVIDENCE_VERSION` increment and rationale.

### 8.2 Versioned Evidence Architecture
Workflow evidence MUST distinguish current valid evidence from historical records:

```json
{
  "workflow_id": "WF-2026-0920-001",
  "evidence_version": 2,
  "is_current": true,
  "source_timestamp": "2026-09-20T11:00:00Z",
  "validated_at": "2026-09-20T11:05:00Z",
  "supersedes_version": 1,
  "supersession_reason": "Re-verified ASIN price state following Q4 promotional update"
}
```

Historical evidence records MUST be retained in the workflow log and marked `is_current: false`. Never overwrite past evidence trails.

---

## 9. Hard Blocking Conditions (12 Blockers)

A workflow MUST transition to `BLOCKED` immediately upon encountering any of the 12 hard blocking conditions:

1. `SOURCE_CONFLICT`: Merchant, URL, or image licensing authorization conflict.
2. `IDENTITY_CONFLICT`: Candidate metadata associated with wrong physical product or variant.
3. `MARKETPLACE_CONFLICT`: US and India commercial data mixed without regional separation.
4. `PROHIBITED_ACCESS`: Access restricted by site TOS or robots.txt.
5. `MISSING_REQUIRED_DEPENDENCY`: Upstream graph dependency unresolved.
6. `UNRESOLVED_USER_PROBLEM`: Candidate lacks documented reader dilemma.
7. `INVALID_PRODUCT_IDENTITY`: ASIN or destination URL missing/unverified.
8. `UNVERIFIED_REQUIRED_FIELD`: Critical commercial data unverified.
9. `COMMERCIAL_BLOCK`: Candidate discontinued, unavailable, or rejected by validation.
10. `NICHE_MISMATCH`: Product incompatible with room, style, or scale context.
11. `EDITORIAL_CONFLICT`: Insertion violates section purpose or zero-product permissions.
12. `PRODUCTION_VALIDATION_FAILURE`: Failed pre-deployment release QA gates.

Every blocker MUST expose: `block_reason`, `blocking_skill`, `required_resolution`, `current_owner`, and `next_allowed_action`.

---

## 10. Observability & Workflow State Record (13 Fields)

Every workflow instance exposes a standardized 13-field status record:

1. `WORKFLOW_ID`: Unique workflow identifier.
2. `CURRENT_STATE`: Active canonical state.
3. `PREVIOUS_STATE`: Preceding canonical state.
4. `LAST_SUCCESSFUL_STATE`: Last verified non-error state.
5. `CURRENT_OWNER`: Skill or agent currently owning workflow.
6. `NEXT_ALLOWED_STATE`: Valid next target state(s) in transition graph.
7. `BLOCK_REASON`: Explanation of active blocker (or `NONE`).
8. `RETRY_COUNT`: Current retry attempts / `MAX_RETRIES`.
9. `LAST_ACTION`: Description of last executed step.
10. `LAST_UPDATED`: ISO 8601 timestamp.
11. `EVIDENCE_VERSION`: Current evidence version string.
12. `PENDING_DEPENDENCIES`: Array of unresolved upstream items.
13. `NEXT_ACTION`: Clear statement of next required step and target skill.

---

## 11. Specialist Result Classification & Next-State Logic

When a specialist skill completes execution, classify its return result:

- `SUCCESS` $\rightarrow$ Advance to next requested state in valid graph.
- `PARTIAL_SUCCESS` $\rightarrow$ **DO NOT ADVANCE.** Identify missing evidence $\rightarrow$ tag `MISSING_EVIDENCE` $\rightarrow$ return to `QUEUED` / `RESEARCH_REQUIRED`.
- `FAILED` $\rightarrow$ Transition to `RETRY_REQUIRED` (if transient & `RETRY_COUNT` < `MAX_RETRIES`) or `FAILED`.
- `BLOCKED` $\rightarrow$ Transition to `BLOCKED`; record `block_reason`.
- `CONFLICTED` $\rightarrow$ Transition to `SOURCE_CONFLICT` or `IDENTITY_CONFLICT` (Hard Block).
- `UNKNOWN` $\rightarrow$ **DO NOT ADVANCE.** Preserve `UNKNOWN`; route to `REASSESSMENT_REQUIRED`.

---

## 12. Decoupled Relationship: Queue vs Workflow Orchestration

- **`elevate-product-research-queue-orchestration` (Queue):**
  - Owns: *"What opportunity should be researched next?"*
  - State Managed: `PRIORITY_STATE` (`IMMEDIATE_RESEARCH`, `NEXT_RESEARCH_BATCH`, `WATCHLIST`, etc.).
- **`elevate-product-workflow-orchestration` (Workflow):**
  - Owns: *"What lifecycle state is this opportunity currently in across the system?"*
  - State Managed: `CURRENT_STATE` (`DISCOVERED`, `RESEARCHING`, `SOURCE_VALIDATED`, `INTEGRATION_READY`, etc.).

These responsibilities are distinct and MUST NOT be merged.

---

## 13. Production Boundary & Re-Evaluation Protocol

### 13.1 Strict Production Boundary
- The maximum state achievable by this skill is `INTEGRATION_READY`.
- Transition to `INTEGRATED` or `PUBLISHED` requires explicit invocation of implementation and deployment skills (`elevate-regression-prevention`, `elevate-browser-uat`, `elevate-editorial-retention`).
- Zero automatic production file modifications.

### 13.2 Opportunity Re-Evaluation Loop
Major evidence updates (e.g. new demand signal, stale product status, source conflict, portfolio saturation) trigger automatic re-evaluation:

$$\text{EVIDENCE UPDATE} \rightarrow \text{TRANSITION TO } \text{REASSESSMENT\_REQUIRED} \rightarrow \text{ROUTE TO } \text{elevate-product-opportunity-scoring}$$

---

## 14. Permanent Learning Loop & Regression Prevention

- **Failure Patterns:** `FP-145` through `FP-154` in `.agents/skills/_learning/FAILURE-PATTERNS.md`.
- **Regression Rules:** `RULE-150` through `RULE-159` in `.agents/skills/_learning/REGRESSION-RULES.md`.
- **Changelog & Milestones:** Recorded in `SKILL-CHANGELOG.md` and `elevate-skill-evolution`.

---

## 15. Task Routing Matrix

Refer to `SKILL-ROUTER.md` for workflow orchestration triggers (`"product intelligence workflow"`, `"what state is this opportunity in"`, `"continue product research pipeline"`, `"why is this workflow blocked"`, `"retry failed product research"`).
