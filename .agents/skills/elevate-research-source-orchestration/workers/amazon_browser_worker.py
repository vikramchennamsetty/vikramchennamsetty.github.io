#!/usr/bin/env python3
"""
Elevate Amazon Browser Use Worker (V1.3 Ephemeral Cloud Worker)
Standalone, provider-decoupled Amazon research worker built with Browser Use OSS / Playwright Chromium.

Strict Evidence Contract (17 Canonical Fields):
1. provider
2. marketplace
3. store_id
4. asin
5. source_url
6. retrieved_at
7. title
8. brand
9. variant
10. price
11. currency
12. availability
13. seller
14. dimensions
15. evidence_state
16. limitations
17. failure_access_status

Compliance Protocols:
- RULE-173 Compliance: Zero CAPTCHA bypass, zero anti-bot evasion, zero proxy/stealth bypass.
- UNKNOWN Preservation: Never infer or invent missing prices, ratings, seller names, or stock states.
- Marketplace & StoreID Isolation: AMAZON_US (elevateliv05f-20) vs AMAZON_IN (elevatelivi08-21).
"""

import sys
import os
import re
import json
import argparse
import asyncio
from datetime import datetime, timezone

MARKETPLACE_CONFIG = {
    "AMAZON_US": {
        "domain": "amazon.com",
        "store_id": "elevateliv05f-20",
        "currency": "USD"
    },
    "AMAZON_IN": {
        "domain": "amazon.in",
        "store_id": "elevatelivi08-21",
        "currency": "INR"
    }
}

VALID_ASIN_REGEX = r'^B0[A-Z0-9]{8}$'

def validate_asin(asin: str) -> bool:
    if not asin or not isinstance(asin, str):
        return False
    return bool(re.match(VALID_ASIN_REGEX, asin.strip()))

def resolve_marketplace(mp_key: str) -> dict:
    if not mp_key or mp_key not in MARKETPLACE_CONFIG:
        return None
    return MARKETPLACE_CONFIG[mp_key]

def sanitize_secret_patterns(text: str) -> str:
    """Mask any potential API keys or tokens in error messages/limitations."""
    if not text:
        return text
    text = re.sub(r'(AKIA[0-9A-Z]{16})', '[MASKED_KEY]', text)
    text = re.sub(r'([a-zA-Z0-9_-]{32,64})', lambda m: '[MASKED_TOKEN]' if any(k in m.group(0).lower() for k in ['secret', 'token', 'key', 'pass']) else m.group(0), text)
    return text

def create_normalized_evidence(
    provider: str,
    marketplace_key: str,
    asin: str,
    data: dict = None,
    error: str = None,
    failure_access_status: str = "OK"
) -> dict:
    mp_info = resolve_marketplace(marketplace_key) or {
        "domain": "UNKNOWN",
        "store_id": "UNKNOWN",
        "currency": "USD"
    }
    
    retrieved_at = datetime.now(timezone.utc).isoformat()
    clean_asin = asin.strip() if asin and validate_asin(asin) else (asin or "UNKNOWN")
    
    if mp_info["domain"] != "UNKNOWN" and clean_asin != "UNKNOWN":
        source_url = f"https://www.{mp_info['domain']}/dp/{clean_asin}?tag={mp_info['store_id']}"
    else:
        source_url = "UNKNOWN"
        
    data = data or {}
    
    if failure_access_status in ["CAPTCHA_PRESENTED", "ROBOT_CHECK", "SERVICE_UNAVAILABLE", "PROHIBITED_ACCESS"]:
        evidence_state = "PROHIBITED_ACCESS"
        limitations = "Amazon access control presented. Execution halted under compliance protocol RULE-173."
    elif error or failure_access_status not in ["OK"]:
        evidence_state = "UNVERIFIED"
        limitations = sanitize_secret_patterns(f"Worker failure: {error or failure_access_status}")
    else:
        evidence_state = "OBSERVED" if data.get("price") is not None else "UNVERIFIED"
        limitations = sanitize_secret_patterns(data.get("limitations", "Browser Use Playwright Chromium extraction executed"))

    # Canonical 17-field evidence payload
    payload = {
        "provider": provider,
        "marketplace": marketplace_key if mp_info["domain"] != "UNKNOWN" else "UNKNOWN",
        "store_id": mp_info["store_id"],
        "asin": clean_asin,
        "source_url": source_url,
        "retrieved_at": retrieved_at,
        "title": data.get("title", None),
        "brand": data.get("brand", None),
        "variant": data.get("variant", None),
        "price": data.get("price", None),
        "currency": data.get("currency", mp_info["currency"]),
        "availability": data.get("availability", "UNKNOWN"),
        "seller": data.get("seller", "UNKNOWN"),
        "dimensions": data.get("dimensions", {"depth": None, "width": None, "height": None}),
        "evidence_state": evidence_state,
        "limitations": limitations,
        "failure_access_status": failure_access_status,

        # Backward-compatible extension fields for Elevate Orchestrator
        "identity": {
            "asin": clean_asin,
            "marketplace": marketplace_key if mp_info["domain"] != "UNKNOWN" else "UNKNOWN",
            "store_id": mp_info["store_id"],
            "is_matched": bool(data.get("title"))
        },
        "evidence_version": "v2.0",
        "raw_evidence_reference": f"REF-WORKER-{clean_asin}-{int(datetime.now(timezone.utc).timestamp())}"
    }

    return payload

async def execute_browser_worker(asin: str, marketplace_key: str) -> dict:
    provider_name = "AMAZON_BROWSER_USE_GITHUB_ACTIONS"
    
    if not validate_asin(asin):
        return create_normalized_evidence(
            provider_name, marketplace_key, asin,
            error="Malformed or invalid ASIN format",
            failure_access_status="INVALID_ASIN"
        )

    mp_info = resolve_marketplace(marketplace_key)
    if not mp_info:
        return create_normalized_evidence(
            provider_name, "UNKNOWN", asin,
            error="Unsupported marketplace key",
            failure_access_status="UNSUPPORTED_MARKETPLACE"
        )

    target_url = f"https://www.{mp_info['domain']}/dp/{asin}?tag={mp_info['store_id']}"

    try:
        from playwright.async_api import async_playwright
    except ImportError:
        return create_normalized_evidence(
            provider_name, marketplace_key, asin,
            error="Playwright package not installed in worker runtime environment",
            failure_access_status="RUNTIME_MISSING_DEPENDENCY"
        )

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            )
            page = await context.new_page()

            try:
                response = await page.goto(target_url, timeout=30000, wait_until="domcontentloaded")
                content = await page.content()
                title_text = await page.title()

                if "Robot Check" in title_text or "CAPTCHA" in content or "api-services-support@amazon.com" in content:
                    await browser.close()
                    return create_normalized_evidence(
                        provider_name, marketplace_key, asin,
                        failure_access_status="CAPTCHA_PRESENTED"
                    )

                if response and response.status in [403, 503]:
                    await browser.close()
                    return create_normalized_evidence(
                        provider_name, marketplace_key, asin,
                        failure_access_status="PROHIBITED_ACCESS"
                    )

                extracted_title = None
                title_el = await page.query_selector("#productTitle")
                if title_el:
                    extracted_title = (await title_el.inner_text()).strip()

                extracted_brand = None
                brand_el = await page.query_selector("#bylineInfo")
                if brand_el:
                    extracted_brand = (await brand_el.inner_text()).strip()

                extracted_price = None
                price_el = await page.query_selector(".a-price .a-offscreen")
                if price_el:
                    price_str = (await price_el.inner_text()).strip()
                    match = re.search(r'[\d,]+\.\d{2}', price_str)
                    if match:
                        extracted_price = float(match.group(0).replace(',', ''))

                extracted_avail = "UNKNOWN"
                avail_el = await page.query_selector("#availability")
                if avail_el:
                    avail_text = (await avail_el.inner_text()).strip().lower()
                    if "in stock" in avail_text:
                        extracted_avail = "IN_STOCK"
                    elif "out of stock" in avail_text or "currently unavailable" in avail_text:
                        extracted_avail = "OUT_OF_STOCK"

                await browser.close()

                data = {
                    "title": extracted_title,
                    "brand": extracted_brand,
                    "price": extracted_price,
                    "currency": mp_info["currency"],
                    "availability": extracted_avail,
                    "seller": "UNKNOWN",
                    "variant": None,
                    "dimensions": {"depth": None, "width": None, "height": None},
                    "limitations": "Successfully executed ephemeral Playwright Chromium extraction"
                }

                return create_normalized_evidence(
                    provider_name, marketplace_key, asin,
                    data=data,
                    failure_access_status="OK"
                )

            except Exception as nav_err:
                await browser.close()
                err_str = str(nav_err)
                status = "NETWORK_TIMEOUT" if "timeout" in err_str.lower() else "NAVIGATION_ERROR"
                return create_normalized_evidence(
                    provider_name, marketplace_key, asin,
                    error=err_str,
                    failure_access_status=status
                )

    except Exception as sys_err:
        return create_normalized_evidence(
            provider_name, marketplace_key, asin,
            error=str(sys_err),
            failure_access_status="RUNTIME_ERROR"
        )

def main():
    parser = argparse.ArgumentParser(description="Elevate Amazon Browser Use Research Worker")
    parser.add_argument("--asin", required=True, help="Target Amazon ASIN (e.g., B0DK87HKY6)")
    parser.add_argument("--marketplace", default="AMAZON_US", help="Marketplace key (AMAZON_US or AMAZON_IN)")
    parser.add_argument("--output", help="Optional output JSON file path")
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    evidence = loop.run_until_complete(execute_browser_worker(args.asin, args.marketplace))

    output_json = json.dumps(evidence, indent=2)
    print(output_json)

    if args.output:
        os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(output_json)

if __name__ == "__main__":
    main()
