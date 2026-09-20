---
name: elevate-research-source-orchestration
description: >-
  Standardized research source acquisition layer coordinating legitimate access to external web sources, 
  public platforms, retailer pages, market APIs, local internal repository signals, official Pinterest 
  API / MCP first-party integrations, and a provider-agnostic Amazon research layer (Creators API, 
  Browser Use GitHub Actions worker, OmkarCloud, Oxylabs, Public Web, Local Catalog) while producing 
  normalized, evidence-backed payloads for Elevate Product Intelligence skills without bypassing access 
  controls or confusing source access with evidence interpretation.
version: 1.3
triggers:
  - "orchestrate research sources"
  - "acquire research evidence"
  - "fetch external research data"
  - "query research sources"
  - "source acquisition pipeline"
  - "route research request"
  - "fetch Reddit decor evidence"
  - "fetch Pinterest visual evidence"
  - "fetch Pinterest MCP trends"
  - "fetch Pinterest API signals"
  - "fetch brand specifications"
  - "fetch retailer product evidence"
  - "fetch Amazon catalog evidence"
  - "fetch Amazon Creators API evidence"
  - "fetch Amazon Browser Use evidence"
  - "fetch Amazon OmkarCloud research"
  - "fetch Amazon Oxylabs research"
  - "query internal Elevate coverage"
scope: research-source-orchestration
risk: medium
source:
  type: native-specialized
  version: 1.3
---

# Elevate Research Source Orchestration Skill (V1.3)

## Purpose
Establishes the standardized source acquisition layer for the Elevate Product Intelligence Skill System. Coordinates legitimate access to external web search, public web pages, Reddit, Pinterest (Public Web, Official API v5, and Official MCP readiness), brand sites, retailers, a provider-agnostic Amazon research layer (Creators API, Browser Use GitHub Actions Worker, OmkarCloud, Oxylabs, Public Web, Local Catalog), trend/demand sources, and local internal repository evidence. Decouples source access mechanics from evidence interpretation and evaluation—ensuring that all specialist skills consume standardized, versioned evidence payloads with strict provenance tracking.

---

## 1. Source Acquisition Flow & Architecture Pipeline

```
Research Requirement (Specialist Skill)
        │
        ▼
Source Orchestrator (elevate-research-source-orchestration V1.3)
        │
        ├── Provider-Agnostic Amazon Layer
        │     ├── 1. AMAZON_CREATORS_API (Official First-Party PA-API v5)
        │     ├── 2. AMAZON_BROWSER_USE_GITHUB_ACTIONS (Ephemeral GHA Chromium Worker)
        │     ├── 3. AMAZON_OXYLABS (Configured Web Scraper API)
        │     ├── 4. AMAZON_OMKARCLOUD (Configured Scraper Adapter)
        │     ├── 5. AMAZON_PUBLIC_WEB (Permitted Public Web Search Fallback)
        │     └── 6. AMAZON_LOCAL_CATALOG (Local Workspace Repository CSV)
        ├── Multi-Tier Pinterest Layer (Official MCP → Official API v5 → Public Web Fallback)
        └── General Research Sources (Reddit, Brand Sites, Retailers, Internal Elevate Catalog)
        │
        ▼
Raw Evidence Collection
        │
        ▼
Evidence Normalization (19-Field Standardized Object Schema)
        │
        ▼
Source Validation (elevate-source-integrity)
        │
        ▼
Evidence Ledger Logging (elevate-product-case-management / Versioned Ledger)
        │
        ▼
Downstream Specialist Evaluation (Opportunity Scoring / Niche Matching / Validation)
```

---

## 2. Ephemeral Browser Use GitHub Actions Worker (`AMAZON_BROWSER_USE_GITHUB_ACTIONS`)

The Browser Use GitHub Actions integration executes Browser Use + Playwright Chromium inside a disposable `ubuntu-latest` runner environment:

- **Workflow Location:** `.github/workflows/amazon-browser-research.yml`
- **Worker Script:** `.agents/skills/elevate-research-source-orchestration/workers/amazon_browser_worker.py`
- **Runner Environment:** Ephemeral GitHub-Hosted Runner (`ubuntu-latest`, Python 3.12, Chromium).
- **Execution Model:** Disposable worker triggered via `workflow_dispatch` with inputs `asin` and `marketplace`. Uploads normalized evidence artifact `amazon-evidence-{asin}.json`.
- **Zero Cloud Paid Dependency:** Runs 100% open-source Browser Use + Playwright without third-party cloud subscription dependencies.

---

## 3. Normalized Amazon Evidence Schema (19 Fields)

```json
{
  "provider": "AMAZON_BROWSER_USE_GITHUB_ACTIONS",
  "marketplace": "AMAZON_US",
  "request_type": "PRODUCT_BY_ASIN",
  "request_id": "REQ-GHA-B0DK87HKY6-1789890885107",
  "product_id": "B0DK87HKY6",
  "source_url": "https://www.amazon.com/dp/B0DK87HKY6?tag=elevateliv05f-20",
  "retrieved_at": "2026-09-20T10:15:00Z",
  "evidence_version": "v2.0",
  "identity": {
    "asin": "B0DK87HKY6",
    "marketplace": "AMAZON_US",
    "store_id": "elevateliv05f-20",
    "is_matched": true
  },
  "title": "HOMCOM 2-Flip Drawer Slim Freestanding Shoe Storage Cabinet",
  "brand": "HOMCOM",
  "category": "Entryway Furniture / Shoe Storage Cabinets",
  "variant": "Black 2-Drawer",
  "price": null,
  "currency": "USD",
  "availability": "UNKNOWN",
  "seller": "UNKNOWN",
  "offer": {
    "price_amount": null,
    "discount": null,
    "prime_eligible": null
  },
  "dimensions": {
    "depth": "9.3 in",
    "width": "23.6 in",
    "height": "31.5 in"
  },
  "raw_evidence_reference": "REF-GHA-B0DK87HKY6-1789890885107",
  "evidence_state": "UNVERIFIED",
  "limitations": "Browser Use Playwright Chromium worker extraction; live commercial spot price unverified"
}
```

---

## 4. Anti-Bot Compliance & Access Safety Gate (`RULE-173`)

```yaml
COMPLIANCE_SAFETY_RULES:
  CAPTCHA_DETECTED:
    ACTION: HALT_IMMEDIATELY
    EVIDENCE_STATE: PROHIBITED_ACCESS
    LIMITATIONS: "Amazon access control / CAPTCHA presented. Execution halted under RULE-173."
    STEALTH_RETRY_ALLOWED: FALSE
    PROXY_ROTATION_ALLOWED: FALSE
```

---

## 5. Security & Secret Protection

- Zero plaintext API keys or passwords in repository files, workflow logs, or JSON evidence payloads.
- Masked status outputs (`AVAILABLE` / `UNAVAILABLE` / `CONFIGURED_UNVERIFIED`).

---

## 6. Production Boundary Enforcement

- **Production Files Modified:** `0`
- **Production Content Modified:** `0`
- **Git Commits:** `0`
- **Git Pushes:** `0`
