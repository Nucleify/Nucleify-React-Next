'use client'

import type { JSX } from 'react'

import {
  AdIcon,
  enLocale,
  NucSectionContact,
  NucSectionFaq,
  NucShinyBadge,
  NucTrustBadges,
} from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucEcommerceStoresPage(): JSX.Element {
  const trustItems = [
    { icon: 'mdi:lock-outline', label: t('service-ec-trust-secure') },
    { icon: 'mdi:credit-card-outline', label: t('service-ec-trust-payments') },
    { icon: 'mdi:truck-fast-outline', label: t('service-ec-trust-delivery') },
  ]

  const features = [
    {
      icon: 'mdi:store-outline',
      title: t('service-ec-feat-catalog-title'),
      desc: t('service-ec-feat-catalog-desc'),
    },
    {
      icon: 'mdi:credit-card-check-outline',
      title: t('service-ec-feat-payments-title'),
      desc: t('service-ec-feat-payments-desc'),
    },
    {
      icon: 'mdi:package-variant-closed',
      title: t('service-ec-feat-inventory-title'),
      desc: t('service-ec-feat-inventory-desc'),
    },
  ]

  return (
    <div className="service-container">
      <section className="service-hero">
        <div className="service-hero-decoration service-hero-decoration-1">
          <AdIcon icon="mdi:hexagon-outline" />
        </div>
        <div className="service-hero-decoration service-hero-decoration-2">
          <AdIcon icon="mdi:triangle-outline" />
        </div>

        <div className="service-hero-content container">
          <NucShinyBadge
            icon="mdi:cart-outline"
            label={t('service-ec-badge')}
          />
          <h1 className="service-hero-title">
            {t('service-ec-title')}
            <span className="service-hero-title-highlight">
              {t('service-ec-title-highlight')}
            </span>
          </h1>
          <p className="service-hero-subtitle">{t('service-ec-subtitle')}</p>
          <NucTrustBadges items={trustItems} />
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <div className="service-features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="service-feature-card">
                <div className="service-feature-card-icon">
                  <AdIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NucSectionFaq site="home" />
      <NucSectionContact />
    </div>
  )
}
