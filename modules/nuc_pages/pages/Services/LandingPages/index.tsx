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

export function NucLandingPagesPage(): JSX.Element {
  const trustItems = [
    { icon: 'mdi:clock-fast', label: t('service-lp-trust-fast') },
    { icon: 'mdi:target', label: t('service-lp-trust-conversion') },
    { icon: 'mdi:cellphone-check', label: t('service-lp-trust-mobile') },
  ]

  const features = [
    {
      icon: 'mdi:target',
      title: t('service-lp-feat-conversion-title'),
      desc: t('service-lp-feat-conversion-desc'),
    },
    {
      icon: 'mdi:clock-fast',
      title: t('service-lp-feat-speed-title'),
      desc: t('service-lp-feat-speed-desc'),
    },
    {
      icon: 'mdi:ab-testing',
      title: t('service-lp-feat-testing-title'),
      desc: t('service-lp-feat-testing-desc'),
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
            icon="mdi:lightning-bolt"
            label={t('service-lp-badge')}
          />
          <h1 className="service-hero-title">
            {t('service-lp-title')}
            <span className="service-hero-title-highlight">
              {t('service-lp-title-highlight')}
            </span>
          </h1>
          <p className="service-hero-subtitle">{t('service-lp-subtitle')}</p>
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
