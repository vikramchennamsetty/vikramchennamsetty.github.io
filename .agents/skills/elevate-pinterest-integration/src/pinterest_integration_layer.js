/**
 * Pinterest Integration Layer for ElevateLivingCo
 * Manages Pinterest board mappings, Pin creation, lifecycle state transitions,
 * and authentication check for https://in.pinterest.com/elevateliving_co/.
 */

const PinterestIntegrationLayer = {
  PROFILE_URL: 'https://in.pinterest.com/elevateliving_co/',
  
  BOARDS: {
    ENTRYWAY_SOLUTIONS: {
      id: 'board-entryway-small-space',
      name: 'Small Apartment Entryway Solutions',
      slug: 'small-apartment-entryway-solutions'
    },
    SPACE_SAVING_FURNITURE: {
      id: 'board-space-saving-furniture',
      name: 'Space-Saving Home Furniture',
      slug: 'space-saving-home-furniture'
    },
    GLASSMORPHISM_DECOR: {
      id: 'board-glassmorphism-decor',
      name: 'Glassmorphism Home Decor',
      slug: 'glassmorphism-home-decor'
    }
  },

  LIFECYCLE_STATES: ['DRAFT', 'REVIEW', 'APPROVED', 'PUBLISHED'],

  /**
   * Create a new draft Pin object
   * @param {Object} params
   * @param {string} params.title
   * @param {string} params.description
   * @param {string} params.destinationUrl
   * @param {string} params.imageUrl
   * @param {string} [params.boardKey='ENTRYWAY_SOLUTIONS']
   * @returns {Object} Pin Record in DRAFT state
   */
  createDraftPin: function({ title, description, destinationUrl, imageUrl, boardKey = 'ENTRYWAY_SOLUTIONS' }) {
    if (!title || !description || !destinationUrl || !imageUrl) {
      throw new Error('PinterestIntegrationLayer: title, description, destinationUrl, and imageUrl are required');
    }

    const board = this.BOARDS[boardKey] || this.BOARDS.ENTRYWAY_SOLUTIONS;
    const pinId = `PIN-DRAFT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    return {
      pin_id: pinId,
      profile_url: this.PROFILE_URL,
      board_id: board.id,
      board_name: board.name,
      title: title,
      description: description,
      destination_url: destinationUrl,
      image_url: imageUrl,
      lifecycle_state: 'DRAFT',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  },

  /**
   * Transition Pin lifecycle state
   * @param {Object} pinRecord
   * @param {string} targetState
   * @returns {Object} Updated Pin Record
   */
  transitionState: function(pinRecord, targetState) {
    if (!this.LIFECYCLE_STATES.includes(targetState)) {
      throw new Error(`PinterestIntegrationLayer: Invalid lifecycle state ${targetState}`);
    }

    const token = process.env.PINTEREST_ACCESS_TOKEN;

    if (targetState === 'PUBLISHED' && !token) {
      return {
        ...pinRecord,
        evidence_state: 'UNAVAILABLE_AUTH_REQUIRED',
        error_code: 'PINTEREST_AUTH_MISSING',
        message: 'PINTEREST_ACCESS_TOKEN environment variable required to transition Pin to PUBLISHED state.'
      };
    }

    return {
      ...pinRecord,
      lifecycle_state: targetState,
      evidence_state: targetState === 'PUBLISHED' ? 'VERIFIED' : 'PENDING_PUBLISH',
      updated_at: new Date().toISOString()
    };
  },

  /**
   * Generates standard Pinterest Follow CTA HTML component data
   * @returns {Object} Component specification object
   */
  getFollowCTAComponentSpec: function() {
    return {
      component_type: 'PINTEREST_FOLLOW_CTA',
      profile_url: this.PROFILE_URL,
      css_class: 'pinterest-follow-card glass-panel',
      button_text: 'Follow @elevateliving_co',
      title: 'Save & Collect Entryway Ideas',
      description: 'Follow ElevateLivingCo on Pinterest for curated small-space visual boards and daily styling inspiration.'
    };
  }
};

module.exports = PinterestIntegrationLayer;
