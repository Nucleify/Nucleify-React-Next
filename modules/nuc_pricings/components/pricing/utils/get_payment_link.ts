import type { BillingPeriodType, PricingPlanInterface } from '../types'

export function getPaymentLink(
  plan: PricingPlanInterface,
  billingPeriod: BillingPeriodType
): string {
  return billingPeriod === 'monthly'
    ? plan.monthlyLink || '#'
    : plan.oneTimeLink || '#'
}
