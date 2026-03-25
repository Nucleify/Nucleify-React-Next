import { getPaymentLink } from '.'

import type { BillingPeriodType, PricingPlanInterface } from '../types'

export function openPaymentLink(
  plan: PricingPlanInterface,
  billingPeriod: BillingPeriodType
): void {
  window.open(getPaymentLink(plan, billingPeriod), '_blank')
}
