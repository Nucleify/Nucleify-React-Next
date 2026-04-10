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

export function NucBusinessWebsitesPage(): JSX.Element {
  const trustItems = [
    { icon: 'mdi:responsive', label: t('service-bw-trust-responsive') },
    { icon: 'mdi:magnify', label: t('service-bw-trust-seo') },
    { icon: 'mdi:headset', label: t('service-bw-trust-support') },
  ]

  const features = [
    {
      icon: 'mdi:palette-outline',
      title: t('service-bw-feat-design-title'),
      desc: t('service-bw-feat-design-desc'),
    },
    {
      icon: 'mdi:pencil-ruler',
      title: t('service-bw-feat-cms-title'),
      desc: t('service-bw-feat-cms-desc'),
    },
    {
      icon: 'mdi:chart-line',
      title: t('service-bw-feat-analytics-title'),
      desc: t('service-bw-feat-analytics-desc'),
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
          <NucShinyBadge icon="mdi:domain" label={t('service-bw-badge')} />
          <h1 className="service-hero-title">
            {t('service-bw-title')}
            <span className="service-hero-title-highlight">
              {t('service-bw-title-highlight')}
            </span>
          </h1>
          <p className="service-hero-subtitle">{t('service-bw-subtitle')}</p>
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
