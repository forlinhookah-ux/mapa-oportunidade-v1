export const mapaSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    profile_summary: { type: 'string' },
    opportunities: {
      type: 'array', minItems: 3, maxItems: 3,
      items: { type: 'object', additionalProperties: false, properties: {
        rank: { type: 'integer' },
        title: { type: 'string' },
        summary: { type: 'string' },
        offer: { type: 'string' },
        ideal_customer: { type: 'string' },
        suggested_price: { type: 'string' },
        why_fit: { type: 'string' },
        score: { type: 'integer' },
        startup_cost: { type: 'string' },
        first_sale_difficulty: { type: 'string' },
        first_client_action: { type: 'string' },
      }, required: ['rank','title','summary','offer','ideal_customer','suggested_price','why_fit','score','startup_cost','first_sale_difficulty','first_client_action'] }
    },
    recommendation: {
      type: 'object', additionalProperties: false, properties: {
        title: { type: 'string' },
        why_recommended: { type: 'string' },
        offer: { type: 'string' },
        ideal_customer: { type: 'string' },
        suggested_price: { type: 'string' },
        financial_path: { type: 'string' },
        acquisition_channels: { type: 'array', items: { type: 'string' } },
        sales_script: { type: 'string' },
        next_action: { type: 'string' }
      }, required: ['title','why_recommended','offer','ideal_customer','suggested_price','financial_path','acquisition_channels','sales_script','next_action']
    },
    seven_day_plan: {
      type: 'array', minItems: 7, maxItems: 7,
      items: { type: 'object', additionalProperties: false, properties: {
        day: { type: 'integer' }, action: { type: 'string' }, outcome: { type: 'string' }
      }, required: ['day','action','outcome'] }
    },
    financial_goal_note: { type: 'string' }
  },
  required: ['profile_summary','opportunities','recommendation','seven_day_plan','financial_goal_note']
} as const;
