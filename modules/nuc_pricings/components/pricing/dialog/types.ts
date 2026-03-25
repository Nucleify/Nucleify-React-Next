import type { BillingPeriodType, PricingPlanInterface } from '../types'

export interface PricingDialogInterface {
  modelValue: boolean
  plan: PricingPlanInterface | null
  billingPeriod: BillingPeriodType
  previousPlanName?: string | null
}
