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

export function NucCustomProjectsPage(): JSX.Element {
  const trustItems = [
    { icon: 'mdi:code-braces', label: t('service-cp-trust-tailored') },
    { icon: 'mdi:arrow-expand-all', label: t('service-cp-trust-scalable') },
    { icon: 'mdi:key-outline', label: t('service-cp-trust-ownership') },
  ]

  const features = [
    {
      icon: 'mdi:cog-outline',
      title: t('service-cp-feat-tailored-title'),
      desc: t('service-cp-feat-tailored-desc'),
    },
    {
      icon: 'mdi:api',
      title: t('service-cp-feat-api-title'),
      desc: t('service-cp-feat-api-desc'),
    },
    {
      icon: 'mdi:arrow-expand-all',
      title: t('service-cp-feat-scalable-title'),
      desc: t('service-cp-feat-scalable-desc'),
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
            icon="mdi:puzzle-outline"
            label={t('service-cp-badge')}
          />
          <h1 className="service-hero-title">
            {t('service-cp-title')}
            <span className="service-hero-title-highlight">
              {t('service-cp-title-highlight')}
            </span>
          </h1>
          <p className="service-hero-subtitle">{t('service-cp-subtitle')}</p>
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
