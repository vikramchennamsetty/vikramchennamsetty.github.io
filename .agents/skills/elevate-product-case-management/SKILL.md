---
name: elevate-product-case-management
description: Manages persistent product intelligence investigation cases, providing durable case identity, structured case records, evidence ledgers, candidate registers, decision logs, timeline tracking, case deduplication, closure/reopening criteria, and minimized handoffs above workflow lifecycle execution.
version: 1.0
domain: product-intelligence-case-management
ownership: durable-investigation-case-records-and-decision-history-management
depends_on:
  - elevate-product-opportunity-scoring
  - elevate-product-research-queue-orchestration
  - elevate-product-workflow-orchestration
  - elevate-web-scraping-product-discovery
  - elevate-product-research-intelligence
  - elevate-source-integrity
  - elevate-commercial-product-validation
  - elevate-niche-product-matching
  - elevate-product-portfolio-intelligence
  - elevate-trend-demand-intelligence
  - elevate-seasonal-product-intelligence
  - elevate-product-freshness-intelligence
  - elevate-content-freshness-intelligence
  - elevate-editorial-product-integration
  - elevate-product-article-optimization
  - elevate-product-performance-intelligence
  - elevate-skill-evolution
  - elevate-regression-prevention
---

# Elevate Product Intelligence Case Management

## 1. Overview & Core Philosophy

`elevate-product-case-management` is the structured case-management layer that sits above Elevate's workflow state machine and specialist research skills. It provides a single, durable, persistent investigation record for product opportunities over time.

### Core Question
> **"What are we investigating, what do we know, what have we verified, what remains unknown, what has already been done, what is blocked, what should happen next, and what is the final evidence-backed outcome?"**

### Core Purpose & Operational Boundaries
- **DOES NOT** perform scraping, product quality scoring, claim verification, niche matching, commercial validation, article writing, HTML rendering, or production deployment itself.
- **DOES** manage durable case records (`CASE_ID`), explicit case objectives, case taxonomy types, case statuses, evidence ledgers, candidate registers, decision logs, timeline events, case deduplication, resume/reassessment behavior, closure/reopening protocols, minimized handoffs, and production boundary protection.
- **NEVER** replaces specialist skills or workflow lifecycle execution; it maintains the durable investigation state that coordinates them.

---

## 2. Case Identity & Identifier Hierarchy

### System Hierarchy
`CASE_ID` represents the durable investigation record. A case may contain multiple workflow executions or reassessments over time:

```
CASE_ID (e.g. CASE-2026-0920-001)
  └── WORKFLOW_ID (e.g. WF-2026-0920-001)
        └── OPPORTUNITY_ID (e.g. OPP-2026-0920-001)
              ├── RESEARCH_TASK_ID(s) (e.g. TASK-2026-0920-042)
              ├── PRODUCT_CANDIDATE_ID(s) (e.g. CAND-2026-0920-108)
              └── ARTICLE_ID (e.g. ART-DARK-BOOKSHELF-001)
```

### Identifier Isolation
- `CASE_ID`: Unique durable investigation identifier.
- `WORKFLOW_ID`: Single controlled lifecycle execution identifier.
- `OPPORTUNITY_ID`: Cross-signal opportunity record identifier.
- `RESEARCH_TASK_ID`: Dispatched specialist task identifier.
- `PRODUCT_CANDIDATE_ID`: Extracted product candidate identifier.
- `ARTICLE_ID`: Target article publication identifier.

> [!CAUTION]
> **Identifier Separation:** Never substitute one identifier for another. An `OPPORTUNITY_ID` or `WORKFLOW_ID` MUST NOT be passed as a `CASE_ID`.

---

## 3. Case Record Schema & Identity Fields

Every case record MUST contain explicit identity metadata:

1. `CASE_ID`: System identifier (`CASE-YYYY-MMDD-XXX`).
2. `CASE_TITLE`: Concise descriptive title.
3. `CASE_TYPE`: `PRODUCT_OPPORTUNITY`, `PRODUCT_CATEGORY_RESEARCH`, `SEASONAL_OPPORTUNITY`, `EMERGING_TREND`, `REPLACEMENT_RESEARCH`, `SHOP_THE_LOOK_RESEARCH`, `ARTICLE_PRODUCT_SET`, `PORTFOLIO_GAP`, `PRODUCT_REFRESH`, `PERFORMANCE_REASSESSMENT`, `UNKNOWN`.
4. `CREATED_AT`: ISO 8601 creation timestamp.
5. `LAST_UPDATED`: ISO 8601 update timestamp.
6. `CASE_OWNER`: Current managing agent or system role.
7. `CURRENT_WORKFLOW_ID`: Active lifecycle execution ID (or `NONE`).
8. `RELATED_OPPORTUNITY_IDS`: Array of associated opportunity IDs.
9. `STATUS`: Active case-level status (`OPEN`, `ACTIVE`, `WAITING`, `BLOCKED`, `PAUSED`, `READY_FOR_DECISION`, `DECIDED`, `REASSESSMENT_REQUIRED`, `CLOSED`, `CANCELLED`, `UNKNOWN`).
10. `PURPOSE`: Explicit investigation rationale.
11. `USER_PROBLEM`: Identifiable reader dilemma.
12. `SOLUTION_MECHANISM`: Spatial or styling solution mechanism.
13. `ARTICLE_CONTEXT`: Target article intent/topic (or `UNASSIGNED`).
14. `ROOM_CONTEXT`: Target spatial environment.
15. `STYLE_CONTEXT`: Aesthetic style tag.
16. `AUDIENCE_CONTEXT`: Lifestyle target tag.

> [!NOTE]
> **Preserve UNKNOWN Values:** Missing metadata MUST remain `UNKNOWN`. Never fabricate values or make implicit assumptions.

---

## 4. Case Status vs Workflow State

Case-level status represents the high-level investigation state and MUST remain distinct from workflow execution state:

| Case Status (`CASE_STATUS`) | Workflow Lifecycle State (`WORKFLOW_STATE`) | Meaning |
|---|---|---|
| `OPEN` | `PROBLEM_DEFINED` | Case initialized; user problem verified. |
| `ACTIVE` | `RESEARCHING` | Case active; specialist research executing. |
| `WAITING` | `SOURCE_VALIDATING` | Case waiting for external/source check verification. |
| `BLOCKED` | `SOURCE_CONFLICT` | Case halted by hard blocker (`SOURCE_CONFLICT` / `IDENTITY_CONFLICT`). |
| `PAUSED` | `MONITOR` | Case held on watchlist awaiting seasonal/trend window. |
| `READY_FOR_DECISION` | `ARTICLE_SYSTEM_READY` | Case evidence complete; ready for final editorial decision. |
| `DECIDED` | `INTEGRATION_READY` | Case decision reached; cleared for integration. |
| `REASSESSMENT_REQUIRED` | `REASSESSMENT_REQUIRED` | Case evidence changed; reassessment triggered. |
| `CLOSED` | `INTEGRATED` / `NO_ACTION` | Investigation concluded and closed. |

---

## 5. 21-Section Conceptual Case Record Structure

Every active case record maintains a 21-section structure:

```markdown
# CASE RECORD: [CASE_ID] — [CASE_TITLE]

A. IDENTITY: [CASE_ID, CASE_TYPE, CREATED_AT, LAST_UPDATED, CASE_OWNER]
B. OBJECTIVE: [USER + PROBLEM + CONTEXT + EXPECTED DECISION]
C. USER PROBLEM: [Primary Problem, Constraints, Desired Outcome]
D. OPPORTUNITY: [OPPORTUNITY_ID, Classification, Evidence State]
E. RESEARCH QUEUE: [Missing Evidence Tags, Priority Class, Queue State]
F. WORKFLOW STATE: [CURRENT_WORKFLOW_ID, WORKFLOW_STATE, Allowed Transitions]
G. EVIDENCE LEDGER: [Traceable, Versioned Array of Evidence Items]
H. PRODUCT CANDIDATES: [Candidate Register Records & Candidate Statuses]
I. SOURCE VALIDATION: [Provenance Class, Identity Parity, Conflict Flags]
J. COMMERCIAL VALIDATION: [Marketplace, Price State, Availability, URL Parity]
K. NICHE MATCHING: [Room/Style Match Tier, Product Role Assignment]
L. PORTFOLIO CONTEXT: [Category Concentration, Brand Reuse, Portfolio Add Rating]
M. SEASONAL CONTEXT: [Seasonal State, Lead-Time Window, Geography]
N. FRESHNESS: [Freshness Status, Decay Signals, Baseline Preservation]
O. EDITORIAL ROLE: [Product Role, Section Purpose, Contextual Tradeoffs]
P. ARTICLE RELATIONSHIP: [Target Article Intent, Commercial Density, Flow]
Q. BLOCKERS: [Active Blockers, Block Skill, Required Resolution]
R. PENDING ACTIONS: [Pending Task Array, Skill Assignments, Action Status]
S. DECISION HISTORY: [Chronological Decision Log & Evidence Used]
T. PROVENANCE: [System/Agent Execution History & Audit Logs]
U. LEARNING: [Post-Task Evaluation, FP/RULE References, Feedback Loop]
```

---

## 6. Case Objective Specification

Every case MUST state an explicit objective defining **USER**, **PROBLEM**, **CONTEXT**, and **EXPECTED DECISION**:

- **Compliant Objective:** *"Determine whether renter-friendly vertical entryway storage is a sufficiently supported product opportunity for a small-apartment organization article, then identify and validate candidate products if justified."*
- **Prohibited Objectives:** *"Find good products"*, *"Research products for dark academia"*, *"Scrape Amazon category"*.

---

## 7. Evidence Ledger & Observation Separation

### 7.1 Evidence Ledger Schema
Evidence items MUST be logged in a non-destructive, traceable ledger:

```json
{
  "evidence_id": "EVID-2026-0920-001",
  "case_id": "CASE-2026-0920-001",
  "evidence_type": "TREND_DEMAND_SIGNAL",
  "observation": "Three independent sources demonstrate rising search volume for narrow vertical coat racks (+34% YoY).",
  "source": "Pinterest Trend Index / Google Search Demand",
  "source_url": "https://trends.google.com/...",
  "source_timestamp": "2026-09-20T10:00:00Z",
  "evidence_state": "VERIFIED",
  "confidence": "HIGH",
  "limitations": "US market data only",
  "provenance": "elevate-trend-demand-intelligence v1.0",
  "related_entity": "OPP-2026-0920-001",
  "is_current": true,
  "supersedes": null,
  "superseded_by": null
}
```

### 7.2 Strict Tri-Partite Separation
Data MUST be stored with explicit separation between facts, analytical context, and workflow choices:
1. **OBSERVATION:** Empirically verified data point (*"Search volume rose +34%"*).
2. **INTERPRETATION:** Analytical context/hypothesis (*"Suggests increasing relevance for entryway storage"*).
3. **DECISION:** System action or workflow choice (*"Proceed to category research"*).

Never store interpretations or decisions as raw observation evidence.

---

## 8. Candidate Register & Status Taxonomy

The case manager maintains a case-level Candidate Register:

### Candidate Fields
`PRODUCT_CANDIDATE_ID`, `PRODUCT_NAME`, `PRODUCT_CATEGORY`, `BRAND`, `ASIN`, `PRODUCT_URL`, `MARKETPLACE`, `SOURCE_URL`, `IMAGE_URL`, `IDENTITY_STATUS`, `SOURCE_STATUS`, `COMMERCIAL_STATUS`, `RESEARCH_STATUS`, `NICHE_STATUS`, `EDITORIAL_ROLE`, `CURRENT_EVIDENCE_VERSION`, `CANDIDATE_STATUS`.

### Candidate Status Taxonomy (13 States)
`DISCOVERED`, `UNDER_RESEARCH`, `SOURCE_CHECK_REQUIRED`, `SOURCE_VALIDATED`, `QUALITY_CHECK_REQUIRED`, `COMMERCIAL_CHECK_REQUIRED`, `NICHE_CHECK_REQUIRED`, `VALIDATED`, `CONDITIONAL`, `REJECTED`, `DUPLICATE`, `CONFLICTED`, `UNKNOWN`.

> [!IMPORTANT]
> **Identity Prohibitions:**
> 1. DO NOT infer an `ASIN` from a product title string alone.
> 2. DO NOT infer product identity from an image URL alone.
> 3. DO NOT infer image licensing authorization from public web availability.

---

## 9. Decision Log & Pending Actions Architecture

### 9.1 Case Decision Log
Every meaningful case decision MUST be recorded:
- **Decision Record:** `DECISION_ID`, `DATE`, `DECISION`, `DECISION_TYPE` (`PROCEED`, `RESEARCH_MORE`, `VERIFY`, `MONITOR`, `REJECT`, `REASSESS`, `INTEGRATE`, `NO_ACTION`, `UNKNOWN`), `EVIDENCE_USED`, `EVIDENCE_STATE`, `RATIONALE`, `DECISION_OWNER`, `PREVIOUS_DECISION`, `SUPERSEDES`, `NEXT_ACTION`.

### 9.2 Pending Actions Register
Pending tasks reference queue priorities without replacing queue logic:
- **Action Record:** `ACTION_ID`, `CASE_ID`, `ACTION`, `OWNER_SKILL`, `DEPENDENCIES`, `PRIORITY`, `STATUS` (`PENDING`, `READY`, `RUNNING`, `WAITING`, `BLOCKED`, `COMPLETE`, `FAILED`, `CANCELLED`), `BLOCK_REASON`, `EXPECTED_OUTPUT`, `CREATED_AT`, `UPDATED_AT`.

---

## 10. Case Timeline & Snapshot API

### 10.1 Case Timeline Events
Chronological event ledger recording every milestone:
- **Events:** `CASE_CREATED`, `PROBLEM_DEFINED`, `OPPORTUNITY_IDENTIFIED`, `QUEUED`, `RESEARCH_STARTED`, `RESEARCH_COMPLETED`, `SOURCE_CONFLICT_FOUND`, `PRODUCT_VALIDATED`, `NICHE_MATCHED`, `EDITORIAL_READY`, `CASE_BLOCKED`, `CASE_REASSESSED`, `CASE_DECIDED`, `CASE_CLOSED`, `CASE_REOPENED`.
- **Fields:** `EVENT_ID`, `TIMESTAMP`, `EVENT_TYPE`, `ACTOR_SKILL`, `INPUT_VERSION`, `OUTPUT_VERSION`, `SUMMARY`, `RELATED_ENTITY`.

### 10.2 Case Snapshot
Generates a concise status report derived strictly from the case record:
`CASE_ID`, `OBJECTIVE`, `CURRENT_STATUS`, `CURRENT_WORKFLOW_STATE`, `OPPORTUNITY_CLASSIFICATION`, `QUEUE_PRIORITY`, `KNOWN_FACTS`, `UNKNOWN_FACTS`, `ACTIVE_BLOCKERS`, `VALIDATED_CANDIDATES`, `PENDING_ACTIONS`, `NEXT_ALLOWED_ACTION`, `LAST_DECISION`, `LAST_UPDATED`.

---

## 11. Minimized Handoff & Resume Protocol

### 11.1 Minimized Handoff Contract
When dispatching a task to a specialist skill, include ONLY relevant context:

```markdown
### Case Handoff Contract

CASE_ID: [CASE-ID]
WORKFLOW_ID: [WF-ID]
OBJECTIVE: [Case Objective]
CURRENT_STATE: [Active Workflow State]
RELEVANT_PROBLEM: [User Problem & Constraints]
RELEVANT_OPPORTUNITY: [Target Opportunity ID & Category]
KNOWN_EVIDENCE: [Filtered Array of Verified Relevant Evidence]
UNKNOWN_EVIDENCE: [Explicit List of Missing Items]
CONFLICTS: [Active Blocker Flags or None]
REQUIRED_TASK: [Specific Task Description for Receiving Skill]
EXPECTED_OUTPUT: [Expected Payload Contract]
PROVENANCE_REQUIREMENTS: [Required Output Provenance Metadata]
STOP_CONDITIONS: [Explicit Halting Conditions]
```

### 11.2 Case Resume Protocol
When resuming a case (`"Continue this case"`):
1. Inspect last successful workflow state and last completed action.
2. Verify unresolved dependencies and active blockers.
3. Check for stale evidence requiring re-verification.
4. Resume execution from the next allowed transition in the valid graph.
5. **DO NOT** restart the entire case automatically; **DO NOT** skip failed gates.

---

## 12. Case Deduplication & Closure / Reopening Criteria

### 12.1 Deduplication Check
Before opening a new case, audit existing active and closed cases against `USER_PROBLEM`, `SOLUTION_MECHANISM`, `PRODUCT_CATEGORY`, and `ROOM_CONTEXT`:
- `DISTINCT`: Unique investigation; clear for case creation.
- `COMPLEMENTARY`: Related problem/category; link cases and batch research.
- `DUPLICATE`: Identical active investigation exists; SUPPRESS NEW CASE.
- `REOPEN_EXISTING`: Closed case exists for same topic; evaluate reopening.
- `UNKNOWN`: Deduplication status unverified.

### 12.2 Closure & Reopening Criteria
- **Closure Criteria:** Case MAY close ONLY when definitive status is established: `DECISION_REACHED`, `NO_ACTION`, `REJECTED`, `CANCELLED`, `DUPLICATE`, or `PERMANENTLY_BLOCKED`. Requires final status, final decision rationale, evidence summary, and unresolved unknowns list.
- **Reopening Criteria:** Closed cases MAY be reopened ONLY when materially new evidence arrives, evidence becomes stale, seasonal timing recurs, or performance telemetry triggers reassessment. Reopening creates a new workflow event while preserving closure history.

---

## 13. Case Portfolio View (Information Architecture)

Conceptually supports portfolio-level queries across all cases:
- **Status Filters:** `ALL OPEN`, `ACTIVE`, `WAITING`, `BLOCKED`, `READY_FOR_DECISION`, `DECIDED`, `REASSESSMENT_REQUIRED`, `CLOSED`.
- **Dimension Filters:** Room, style, problem, product category, season, trend state, workflow state, queue priority, case type.

---

## 14. Security, Data Minimization & Production Boundary

### 14.1 Data Minimization & Security Rules
- Store ONLY task, product, category, and article context.
- **STRICTLY PROHIBITED:** Storing user personal data, passwords, API keys, private credentials, or payment credentials.

### 14.2 Production Boundary Protection
- Case management operates strictly within the intelligence domain.
- Maximum achievable case state: `INTEGRATION_READY`.
- Production file editing requires explicit deployment skill invocation. Zero automatic HTML/CSS/JS file edits.

---

## 15. Permanent Learning Loop & Regression Rules

- **Failure Patterns:** `FP-155` through `FP-164` in `.agents/skills/_learning/FAILURE-PATTERNS.md`.
- **Regression Rules:** `RULE-160` through `RULE-169` in `.agents/skills/_learning/REGRESSION-RULES.md`.
- **Changelog & Milestones:** Recorded in `SKILL-CHANGELOG.md` and `elevate-skill-evolution`.

---

## 16. Task Routing Matrix

Refer to `SKILL-ROUTER.md` for case management triggers (`"create product research case"`, `"open product opportunity case"`, `"continue this product case"`, `"show case status"`, `"what is blocking this case"`, `"resume product research"`, `"close product research case"`, `"reopen product case"`, `"compare active product cases"`).
