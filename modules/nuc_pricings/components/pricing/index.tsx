import React, { useMemo, useState } from 'react'

import {
  NucSectionEmailUsDialog,
  NucShinyBadge,
  NucSubmitButton,
  NucTrustBadges,
} from 'nucleify'

import { Icon } from '@iconify/react'
import i18next from 'i18next'
import { getPricingCategories, getTrustItems } from './constants'
import { NucPricingDialog } from './dialog'
import type { BillingPeriodType, PricingPlanInterface } from './types'
import { formatPrice, getPrice } from './utils'
export const NucSectionPricing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('customer')
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriodType>('one-time')
  const [showPlanDialog, setShowPlanDialog] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<PricingPlanInterface | null>(
    null
  )
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1)

  const pricingCategories = useMemo(() => getPricingCategories(i18next.t), [])
  const trustItems = useMemo(() => getTrustItems(i18next.t), [])

  const currentPlans = useMemo(() => {
    const category = pricingCategories.find((c) => c.id === activeCategory)
    return category?.plans || []
  }, [pricingCategories, activeCategory])

  const previousPlanName = useMemo(() => {
    if (selectedPlanIndex > 0) {
      return currentPlans[selectedPlanIndex - 1]?.name ?? null
    }
    return null
  }, [selectedPlanIndex, currentPlans])

  const openPlanDialog = (plan: PricingPlanInterface) => {
    setSelectedPlan(plan)
    setSelectedPlanIndex(currentPlans.findIndex((p) => p.id === plan.id))
    setShowPlanDialog(true)
  }

  return (
    <section id="pricing">
      <div className="pricing-glow"></div>
      <div className="pricing-container container">
        <div className="pricing-header">
          <NucShinyBadge
            icon="mdi:tag-outline"
            label={i18next.t('pricing-badge')}
          />
          <h2 className="pricing-heading">
            {i18next.t('pricing-heading-prefix')}{' '}
            <span className="highlight">
              {i18next.t('pricing-heading-highlight')}
            </span>
          </h2>
          <p className="pricing-description">
            {i18next.t('pricing-description')}{' '}
            <span className="vat-note">{i18next.t('pricing-vat-note')}</span>
          </p>
          <NucSectionEmailUsDialog
            buttonClass="ask-sticker"
            buttonLabel={i18next.t('pricing-help-choosing')}
            buttonStrong={i18next.t('pricing-lets-talk')}
          />
        </div>

        <div className="pricing-controls">
          <div className="billing-toggle">
            <button
              className={`billing-option ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              <Icon icon="mdi:calendar-month" />
              <span>{i18next.t('pricing-billing-monthly')}</span>
            </button>
            <button
              className={`billing-option ${billingPeriod === 'one-time' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('one-time')}
            >
              <Icon icon="mdi:lightning-bolt" />
              <span>{i18next.t('pricing-billing-one-time')}</span>
              <span className="save-badge">
                {i18next.t('pricing-save-badge')}
              </span>
            </button>
          </div>

          <div className="category-tabs">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon icon={category.icon} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div key={`${activeCategory}-${billingPeriod}`} className="plans-grid">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
              onClick={() => openPlanDialog(plan)}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Icon icon="mdi:star" />
                  <span>{i18next.t('pricing-most-popular')}</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon-wrapper">
                  <Icon icon={plan.icon} className="plan-icon" />
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <div className="price-row">
                  <span className="currency">{plan.currency}</span>
                  <span className="amount">
                    {formatPrice(getPrice(plan, billingPeriod))}
                  </span>
                </div>
                <span className="period">
                  {billingPeriod === 'monthly'
                    ? i18next.t('pricing-period-month')
                    : i18next.t('pricing-period-one-time')}
                </span>
              </div>

              <ul className="plan-features">
                {plan.features.slice(0, 5).map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`feature-item ${feature.included ? 'included' : ''} ${
                      feature.highlight ? 'highlight' : ''
                    }`}
                  >
                    <Icon
                      icon={
                        feature.included
                          ? 'mdi:check-circle'
                          : 'mdi:close-circle'
                      }
                      className="feature-icon"
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}

                {plan.features.length > 5 && (
                  <li className="feature-item more-features">
                    <Icon
                      icon="mdi:plus-circle-outline"
                      className="feature-icon"
                    />
                    <span>
                      {i18next.t('pricing-more-features', {
                        count: plan.features.length - 5,
                      })}
                    </span>
                  </li>
                )}
              </ul>

              {index > 0 && (
                <p className="includes-previous">
                  <Icon icon="mdi:layers-outline" />
                  <span>
                    {i18next.t('pricing-includes-all-features', {
                      plan: currentPlans[index - 1].name,
                    })}
                  </span>
                </p>
              )}

              <NucSubmitButton
                label={i18next.t('pricing-choose-plan')}
                className={`plan-button ${plan.popular ? 'primary' : ''}`}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  openPlanDialog(plan)
                }}
              />
            </div>
          ))}
        </div>
        {billingPeriod === 'monthly' && (
          <p className="contract-note">
            <Icon icon="mdi:file-document-outline" />
            {i18next.t('pricing-contract-note')}{' '}
            <span className="note-highlight">
              {i18next.t('pricing-contract-note-highlight')}
            </span>
          </p>
        )}

        <NucTrustBadges items={trustItems} />
      </div>

      <NucPricingDialog
        isOpen={showPlanDialog}
        onClose={() => setShowPlanDialog(false)}
        plan={selectedPlan}
        billingPeriod={billingPeriod}
        previousPlanName={previousPlanName}
      />
    </section>
  )
}
export default NucSectionPricing
