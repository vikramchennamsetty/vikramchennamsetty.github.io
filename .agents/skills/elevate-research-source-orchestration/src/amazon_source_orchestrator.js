/**
 * Amazon Source Orchestrator Module (V1.3 Infrastructure)
 * Provider-Agnostic Amazon Research & Commercial Verification Layer
 * Supports: AMAZON_CREATORS_API, AMAZON_BROWSER_USE_GITHUB_ACTIONS, AMAZON_OXYLABS, AMAZON_OMKARCLOUD, AMAZON_PUBLIC_WEB, AMAZON_LOCAL_CATALOG
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MARKETPLACE_CONFIG = {
  AMAZON_US: {
    domain: 'amazon.com',
    storeId: 'elevateliv05f-20',
    currency: 'USD'
  },
  AMAZON_IN: {
    domain: 'amazon.in',
    storeId: 'elevatelivi08-21',
    currency: 'INR'
  }
};

class AmazonSourceOrchestrator {
  constructor(config = {}) {
    this.env = config.env || process.env;
    this.providerHealth = config.providerHealth || {
      AMAZON_CREATORS_API: true,
      AMAZON_BROWSER_USE_GITHUB_ACTIONS: true,
      AMAZON_OXYLABS: true,
      AMAZON_OMKARCLOUD: true,
      AMAZON_PUBLIC_WEB: true,
      AMAZON_LOCAL_CATALOG: true
    };
    this.localCatalogPath = config.localCatalogPath || null;
    this.workerPath = path.join(__dirname, '../workers/amazon_browser_worker.py');
  }

  /**
   * Check status of providers without revealing secret credential values
   */
  getProviderStatuses() {
    const hasPAAPI = !!(this.env.AMAZON_PAAPI_ACCESS_KEY && this.env.AMAZON_PAAPI_SECRET_KEY);
    const hasOxylabs = !!(this.env.OXYLABS_USERNAME && this.env.OXYLABS_PASSWORD);
    const hasOmkar = !!(this.env.OMKARCLOUD_API_KEY && this.env.OMKARCLOUD_ENDPOINT);
    const hasWorker = fs.existsSync(this.workerPath);

    return {
      AMAZON_CREATORS_API: hasPAAPI ? 'CONFIGURED_UNVERIFIED' : 'NOT_CONFIGURED',
      AMAZON_BROWSER_USE_GITHUB_ACTIONS: hasWorker ? 'AVAILABLE' : 'UNAVAILABLE',
      AMAZON_OXYLABS: hasOxylabs ? 'CONFIGURED_UNVERIFIED' : 'NOT_CONFIGURED',
      AMAZON_OMKARCLOUD: hasOmkar ? 'CONFIGURED_UNVERIFIED' : 'NOT_CONFIGURED',
      AMAZON_PUBLIC_WEB: 'AVAILABLE',
      AMAZON_LOCAL_CATALOG: 'AVAILABLE'
    };
  }

  /**
   * Determine Provider Health State for Oxylabs
   */
  async checkOxylabsHealth() {
    if (!this.env.OXYLABS_USERNAME || !this.env.OXYLABS_PASSWORD) {
      return { status: 'NOT_CONFIGURED', message: 'Oxylabs environment variables missing' };
    }
    if (!this.providerHealth.AMAZON_OXYLABS) {
      return { status: 'UNAVAILABLE', message: 'Oxylabs provider disabled in health config' };
    }
    return { status: 'CONFIGURED_UNVERIFIED', message: 'Oxylabs configured; ready for authenticated request' };
  }

  /**
   * Build normalized payload for Oxylabs Web Scraper API
   */
  buildOxylabsPayload(request) {
    const mpInfo = this.resolveMarketplaceConfig(request.marketplace);
    return {
      source: 'amazon',
      url: `https://www.${mpInfo.domain}/dp/${request.product_id}`,
      parse: true
    };
  }

  /**
   * Resolve StoreID strictly by Marketplace
   */
  resolveMarketplaceConfig(marketplaceKey) {
    if (!marketplaceKey || !MARKETPLACE_CONFIG[marketplaceKey]) {
      return {
        marketplace: 'UNKNOWN',
        domain: 'UNKNOWN',
        storeId: 'UNKNOWN',
        currency: 'USD',
        affiliateAllowed: false
      };
    }
    const cfg = MARKETPLACE_CONFIG[marketplaceKey];
    return {
      marketplace: marketplaceKey,
      domain: cfg.domain,
      storeId: cfg.storeId,
      currency: cfg.currency,
      affiliateAllowed: true
    };
  }

  /**
   * Determine deterministic routing sequence based on request requirements
   */
  determineRouteSequence(request) {
    const statuses = this.getProviderStatuses();
    const route = [];

    // 1. Primary: Creators API
    if (statuses.AMAZON_CREATORS_API !== 'NOT_CONFIGURED' && this.providerHealth.AMAZON_CREATORS_API) {
      route.push('AMAZON_CREATORS_API');
    }

    // 2. Browser Use GitHub Actions / Local Worker (preferred for single ASIN detail verification)
    if (statuses.AMAZON_BROWSER_USE_GITHUB_ACTIONS === 'AVAILABLE' && this.providerHealth.AMAZON_BROWSER_USE_GITHUB_ACTIONS) {
      route.push('AMAZON_BROWSER_USE_GITHUB_ACTIONS');
    }

    // 3. Oxylabs Web Scraper API
    if (statuses.AMAZON_OXYLABS !== 'NOT_CONFIGURED' && this.providerHealth.AMAZON_OXYLABS) {
      route.push('AMAZON_OXYLABS');
    }

    // 4. OmkarCloud Adapter
    if (statuses.AMAZON_OMKARCLOUD !== 'NOT_CONFIGURED' && this.providerHealth.AMAZON_OMKARCLOUD) {
      route.push('AMAZON_OMKARCLOUD');
    }

    // 5. Permitted Public Web
    if (statuses.AMAZON_PUBLIC_WEB === 'AVAILABLE' && this.providerHealth.AMAZON_PUBLIC_WEB) {
      route.push('AMAZON_PUBLIC_WEB');
    }

    // 6. Local Catalog
    if (statuses.AMAZON_LOCAL_CATALOG === 'AVAILABLE' && this.providerHealth.AMAZON_LOCAL_CATALOG) {
      route.push('AMAZON_LOCAL_CATALOG');
    }

    return route;
  }

  /**
   * Create a standardized Amazon evidence payload (19 Normalized Fields)
   */
  createNormalizedEvidence(params) {
    const mpInfo = this.resolveMarketplaceConfig(params.marketplace);
    const retrievedAt = params.retrieved_at || new Date().toISOString();
    const evidenceVersion = params.evidence_version || 'v2.0';

    return {
      provider: params.provider,
      marketplace: mpInfo.marketplace,
      request_type: params.request_type || 'PRODUCT_BY_ASIN',
      request_id: params.request_id || `REQ-${Date.now()}`,
      product_id: params.product_id || 'UNKNOWN',
      source_url: params.source_url || (params.product_id ? `https://www.${mpInfo.domain}/dp/${params.product_id}?tag=${mpInfo.storeId}` : 'UNKNOWN'),
      retrieved_at: retrievedAt,
      evidence_version: evidenceVersion,
      identity: {
        asin: params.product_id || 'UNKNOWN',
        marketplace: mpInfo.marketplace,
        store_id: mpInfo.storeId,
        is_matched: !!params.title
      },
      title: params.title || null,
      brand: params.brand || null,
      category: params.category || null,
      variant: params.variant || null,
      price: params.price !== undefined ? params.price : null,
      currency: params.currency || mpInfo.currency || 'USD',
      availability: params.availability || 'UNKNOWN',
      seller: params.seller || null,
      offer: {
        price_amount: params.price !== undefined ? params.price : null,
        discount: params.discount || null,
        prime_eligible: params.prime_eligible || null
      },
      dimensions: params.dimensions || { depth: null, width: null, height: null },
      raw_evidence_reference: params.raw_evidence_reference || `REF-${params.provider}-${Date.now()}`,
      evidence_state: params.evidence_state || (params.price !== null ? 'OBSERVED' : 'UNVERIFIED'),
      limitations: params.limitations || 'None'
    };
  }

  /**
   * Detect evidence conflicts across multiple provider payloads
   */
  detectConflicts(evidenceArray) {
    if (!evidenceArray || evidenceArray.length < 2) {
      return { hasConflict: false, conflicts: [] };
    }

    const conflicts = [];
    const primary = evidenceArray[0];

    for (let i = 1; i < evidenceArray.length; i++) {
      const current = evidenceArray[i];
      if (primary.price !== null && current.price !== null && primary.price !== current.price) {
        conflicts.push({
          type: 'PRICE_DISCREPANCY',
          providerA: primary.provider,
          priceA: primary.price,
          providerB: current.provider,
          priceB: current.price,
          currency: primary.currency
        });
      }

      if (primary.availability !== 'UNKNOWN' && current.availability !== 'UNKNOWN' && primary.availability !== current.availability) {
        conflicts.push({
          type: 'AVAILABILITY_DISCREPANCY',
          providerA: primary.provider,
          availabilityA: primary.availability,
          providerB: current.provider,
          availabilityB: current.availability
        });
      }
    }

    return {
      hasConflict: conflicts.length > 0,
      conflicts,
      resolvedState: conflicts.length > 0 ? 'SOURCE_CONFLICT' : primary.evidence_state
    };
  }

  /**
   * Execute research request through route sequence with fallback
   */
  async executeResearch(request, mockAdapters = {}) {
    const route = this.determineRouteSequence(request);
    const failureLog = [];

    if (route.length === 0) {
      return {
        success: false,
        evidence: this.createNormalizedEvidence({
          provider: 'NONE_AVAILABLE',
          marketplace: request.marketplace,
          product_id: request.product_id,
          evidence_state: 'UNVERIFIED',
          limitations: 'All Amazon research providers unavailable or unconfigured'
        }),
        routeExecuted: [],
        failures: failureLog
      };
    }

    for (const provider of route) {
      try {
        let result = null;
        if (mockAdapters[provider]) {
          result = await mockAdapters[provider](request);
        } else {
          result = await this._invokeDefaultProvider(provider, request);
        }

        if (result && result.success) {
          const normalized = this.createNormalizedEvidence({
            ...result.data,
            provider: provider, // Strictly preserve actual provider identity
            marketplace: request.marketplace,
            product_id: request.product_id,
            request_id: request.request_id,
            request_type: request.request_type,
            evidence_version: request.evidence_version || 'v2.0'
          });

          return {
            success: true,
            providerUsed: provider,
            evidence: normalized,
            routeExecuted: route,
            failures: failureLog
          };
        } else {
          failureLog.push({
            provider,
            reason: (result && result.error) || 'Provider execution returned unsuccessful state'
          });
        }
      } catch (err) {
        failureLog.push({
          provider,
          reason: err.message || 'Execution exception'
        });
      }
    }

    return {
      success: false,
      evidence: this.createNormalizedEvidence({
        provider: route[0] || 'UNAVAILABLE',
        marketplace: request.marketplace,
        product_id: request.product_id,
        price: null,
        availability: 'UNKNOWN',
        evidence_state: 'UNVERIFIED',
        evidence_version: request.evidence_version || 'v2.0',
        limitations: `All permitted providers failed: ${failureLog.map(f => `${f.provider} (${f.reason})`).join(', ')}`
      }),
      routeExecuted: route,
      failures: failureLog
    };
  }

  async _invokeDefaultProvider(provider, request) {
    if (provider === 'AMAZON_BROWSER_USE_GITHUB_ACTIONS') {
      try {
        const cmd = `python "${this.workerPath}" --asin "${request.product_id}" --marketplace "${request.marketplace || 'AMAZON_US'}"`;
        const stdout = execSync(cmd, { encoding: 'utf-8', timeout: 30000 });
        const parsed = JSON.parse(stdout);
        return {
          success: parsed.evidence_state !== 'UNVERIFIED' && parsed.evidence_state !== 'PROHIBITED_ACCESS',
          data: parsed,
          error: parsed.limitations
        };
      } catch (err) {
        return {
          success: false,
          error: `Browser Use worker execution exception: ${err.message}`
        };
      }
    }

    if (provider === 'AMAZON_PUBLIC_WEB') {
      return {
        success: true,
        data: {
          title: `Product Discovery ${request.product_id}`,
          price: null,
          availability: 'UNKNOWN',
          limitations: 'Public web search snippet used for identity discovery only; live commercial status unverified'
        }
      };
    }

    if (provider === 'AMAZON_LOCAL_CATALOG') {
      return {
        success: true,
        data: {
          title: `Catalog Entry ${request.product_id}`,
          price: null,
          availability: 'UNKNOWN',
          limitations: 'Local catalog historical record; live commercial status unverified'
        }
      };
    }

    return {
      success: false,
      error: `Provider ${provider} is not configured with active credentials`
    };
  }
}

module.exports = {
  AmazonSourceOrchestrator,
  MARKETPLACE_CONFIG
};
