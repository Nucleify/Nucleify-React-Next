import type { BillingPeriodType, PricingPlanInterface } from 'nucleify'

export interface PricingDialogInterface {
  modelValue: boolean
  plan: PricingPlanInterface | null
  billingPeriod: BillingPeriodType
  previousPlanName?: string | null
}
