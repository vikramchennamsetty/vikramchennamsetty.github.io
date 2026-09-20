/**
 * Trend Fusion Engine for ElevateLivingCo
 * Combines Google Trends signals, Pinterest Trends signals, seasonality data,
 * and product demand evidence into unified trend intelligence records without fabricating numbers.
 */

const GoogleTrendsAdapter = require('./google_trends_adapter');
const PinterestTrendsAdapter = require('./pinterest_trends_adapter');

const TrendFusionEngine = {
  /**
   * Synthesize market trend intelligence for a topic or product category
   * @param {Object} params
   * @param {string} params.query - Target query or keyword
   * @param {string} [params.region='US'] - Regional filter
   * @param {Object} [params.demandContext] - Optional contextual demand from elevate-trend-demand-intelligence
   * @returns {Object} Unified Trend Evidence Record
   */
  synthesizeTrendRecord: function({ query, region = 'US', demandContext = {} }) {
    if (!query || typeof query !== 'string') {
      throw new Error('TrendFusionEngine: query parameter is required');
    }

    const googleRecord = GoogleTrendsAdapter.fetchTrendRecord({ query, region });
    const pinterestRecord = PinterestTrendsAdapter.fetchPinterestTrendRecord({ keyword: query, region });

    // Determine classification based on signals
    const classifications = [];
    if (googleRecord.evidence_state === 'SUPPORTED' && googleRecord.interest_evidence.relative_index > 50) {
      classifications.push('SEARCH_TREND');
    }
    if (pinterestRecord.evidence_state === 'VERIFIED') {
      classifications.push('PINTEREST_TREND');
    }
    if (googleRecord.growth_evidence.velocity === 'HIGH' || googleRecord.growth_evidence.velocity === 'MODERATE_HIGH') {
      classifications.push('PRODUCT_TREND');
    }
    if (googleRecord.seasonality_evidence && googleRecord.seasonality_evidence.peak_months.length > 0) {
      classifications.push('SEASONAL_TREND');
      classifications.push('SUSTAINED_DEMAND');
    }

    if (classifications.length === 0) {
      classifications.push('UNKNOWN');
    }

    // Evaluate opportunity level without numeric output
    let opportunityEvaluation = 'INSUFFICIENT_EVIDENCE';
    if (classifications.includes('SEARCH_TREND') && classifications.includes('PINTEREST_TREND')) {
      opportunityEvaluation = 'PROMISING_OPPORTUNITY';
    } else if (classifications.includes('SEASONAL_TREND') && (classifications.includes('SEARCH_TREND') || classifications.includes('PINTEREST_TREND'))) {
      opportunityEvaluation = 'SEASONAL_LEAD';
    } else if (classifications.includes('SUSTAINED_DEMAND')) {
      opportunityEvaluation = 'SUSTAINED_STAPLE';
    } else if (googleRecord.evidence_state === 'SUPPORTED') {
      opportunityEvaluation = 'PROMISING_OPPORTUNITY';
    }

    const fusionId = `FUSION-${region}-${query.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    return {
      FUSION_ID: fusionId,
      query: query,
      region: region,
      timestamp: new Date().toISOString(),
      classifications: Array.from(new Set(classifications)),
      opportunity_evaluation: opportunityEvaluation,
      sources: {
        google_trends: googleRecord,
        pinterest_trends: pinterestRecord
      },
      upstream_demand_context: demandContext,
      evidence_state: (googleRecord.evidence_state === 'SUPPORTED' || pinterestRecord.evidence_state === 'VERIFIED') ? 'VERIFIED' : 'UNAVAILABLE_AUTH_REQUIRED',
      downstream_handoff: {
        target_skill: 'elevate-problem-product-intelligence',
        status: 'READY_FOR_COMMERCIAL_VALIDATION'
      }
    };
  }
};

module.exports = TrendFusionEngine;
