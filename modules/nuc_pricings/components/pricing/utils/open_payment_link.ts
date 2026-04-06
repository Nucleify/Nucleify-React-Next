import type { BillingPeriodType, PricingPlanInterface } from 'nucleify'
import { getPaymentLink } from 'nucleify'

export function openPaymentLink(
  plan: PricingPlanInterface,
  billingPeriod: BillingPeriodType
): void {
  window.open(getPaymentLink(plan, billingPeriod), '_blank')
}
