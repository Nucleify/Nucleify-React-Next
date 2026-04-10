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

export function NucWebsiteRedesignPage(): JSX.Element {
  const trustItems = [
    { icon: 'mdi:speedometer', label: t('service-wr-trust-performance') },
    { icon: 'mdi:palette-outline', label: t('service-wr-trust-design') },
    { icon: 'mdi:magnify', label: t('service-wr-trust-seo') },
  ]

  const features = [
    {
      icon: 'mdi:palette-swatch-outline',
      title: t('service-wr-feat-design-title'),
      desc: t('service-wr-feat-design-desc'),
    },
    {
      icon: 'mdi:speedometer',
      title: t('service-wr-feat-performance-title'),
      desc: t('service-wr-feat-performance-desc'),
    },
    {
      icon: 'mdi:magnify',
      title: t('service-wr-feat-seo-title'),
      desc: t('service-wr-feat-seo-desc'),
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
          <NucShinyBadge icon="mdi:auto-fix" label={t('service-wr-badge')} />
          <h1 className="service-hero-title">
            {t('service-wr-title')}
            <span className="service-hero-title-highlight">
              {t('service-wr-title-highlight')}
            </span>
          </h1>
          <p className="service-hero-subtitle">{t('service-wr-subtitle')}</p>
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
