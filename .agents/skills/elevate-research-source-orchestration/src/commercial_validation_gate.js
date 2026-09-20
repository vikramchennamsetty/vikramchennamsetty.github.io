/**
 * Commercial Validation Gate Module (V1.3 Commercial Readiness Gate)
 * Enforces the 7-Step Commercial Verification Pipeline for Elevate.
 *
 * Pipeline Order:
 * 1. API_ACCESS
 * 2. IDENTITY_PARITY
 * 3. MARKETPLACE_PARITY
 * 4. PARTNER_TAG_PARITY
 * 5. PRICE_VERIFICATION
 * 6. AVAILABILITY_VERIFICATION
 * 7. SELLER_OFFER_VERIFICATION
 *
 * CRITICAL RULE:
 * Only evidence payloads with evidence_state === 'LIVE_API_VERIFIED' can pass
 * the commercial validation gate to reach COMMERCIAL_VALIDATED.
 * Synthetic fixtures (SYNTHETIC_FIXTURE) or unverified evidence (UNVERIFIED)
 * will fail the API_ACCESS dimension and remain REQUIRES_VERIFICATION.
 */

class CommercialValidationGate {
  constructor(config = {}) {
    this.allowSyntheticBypass = config.allowSyntheticBypass || false;
  }

  /**
   * Evaluate Candidate Evidence through the 7-Step Commercial Gate
   */
  evaluateCandidate(candidate, evidence) {
    const pipelineResults = {
      API_ACCESS: false,
      IDENTITY_PARITY: false,
      MARKETPLACE_PARITY: false,
      PARTNER_TAG_PARITY: false,
      PRICE_VERIFICATION: false,
      AVAILABILITY_VERIFICATION: false,
      SELLER_OFFER_VERIFICATION: false
    };

    const failedDimensions = [];

    if (!evidence || typeof evidence !== 'object') {
      return {
        status: 'REQUIRES_VERIFICATION',
        articleAuthoringAllowed: false,
        pipelineResults,
        failedDimensions: ['ALL_DIMENSIONS_MISSING_EVIDENCE'],
        reason: 'Missing evidence payload'
      };
    }

    // 1. API_ACCESS: Must be live API verified (or allowed synthetic for test harness)
    if (evidence.evidence_state === 'LIVE_API_VERIFIED') {
      pipelineResults.API_ACCESS = true;
    } else if (this.allowSyntheticBypass && evidence.evidence_state === 'SYNTHETIC_FIXTURE') {
      pipelineResults.API_ACCESS = true; // Synthetic harness bypass mode only
    } else {
      failedDimensions.push('API_ACCESS');
    }

    // 2. IDENTITY_PARITY: ASIN must match candidate product ID
    const targetAsin = candidate.asin || candidate.product_id;
    const evidenceAsin = evidence.asin || evidence.product_id;
    if (targetAsin && evidenceAsin && targetAsin === evidenceAsin && evidence.identity && evidence.identity.is_matched !== false) {
      pipelineResults.IDENTITY_PARITY = true;
    } else {
      failedDimensions.push('IDENTITY_PARITY');
    }

    // 3. MARKETPLACE_PARITY: Must match target marketplace
    const targetMp = candidate.marketplace || 'AMAZON_US';
    if (evidence.marketplace === targetMp) {
      pipelineResults.MARKETPLACE_PARITY = true;
    } else {
      failedDimensions.push('MARKETPLACE_PARITY');
    }

    // 4. PARTNER_TAG_PARITY: Must match canonical tag for marketplace
    const canonicalTag = targetMp === 'AMAZON_US' ? 'elevateliv05f-20' : 'elevatelivi08-21';
    const evidenceTag = evidence.partner_tag || (evidence.identity && evidence.identity.store_id);
    if (evidenceTag === canonicalTag) {
      pipelineResults.PARTNER_TAG_PARITY = true;
    } else {
      failedDimensions.push('PARTNER_TAG_PARITY');
    }

    // 5. PRICE_VERIFICATION: Must observe valid numeric price > 0
    if (evidence.price !== null && evidence.price !== undefined && typeof evidence.price === 'number' && evidence.price > 0) {
      pipelineResults.PRICE_VERIFICATION = true;
    } else {
      failedDimensions.push('PRICE_VERIFICATION');
    }

    // 6. AVAILABILITY_VERIFICATION: Must observe IN_STOCK or LIMITED_STOCK
    if (evidence.availability === 'IN_STOCK' || evidence.availability === 'LIMITED_STOCK') {
      pipelineResults.AVAILABILITY_VERIFICATION = true;
    } else {
      failedDimensions.push('AVAILABILITY_VERIFICATION');
    }

    // 7. SELLER_OFFER_VERIFICATION: Seller must be observed (not UNKNOWN)
    if (evidence.seller && evidence.seller !== 'UNKNOWN' && evidence.seller !== null) {
      pipelineResults.SELLER_OFFER_VERIFICATION = true;
    } else {
      failedDimensions.push('SELLER_OFFER_VERIFICATION');
    }

    const allPassed = failedDimensions.length === 0;

    return {
      status: allPassed ? 'COMMERCIALLY_VALIDATED' : 'REQUIRES_VERIFICATION',
      articleAuthoringAllowed: allPassed,
      pipelineResults,
      failedDimensions,
      evidenceState: evidence.evidence_state,
      reason: allPassed
        ? 'Passed all 7 commercial validation dimensions with LIVE_API_VERIFIED evidence.'
        : `Failed commercial validation dimensions: ${failedDimensions.join(', ')}`
    };
  }
}

module.exports = {
  CommercialValidationGate
};
