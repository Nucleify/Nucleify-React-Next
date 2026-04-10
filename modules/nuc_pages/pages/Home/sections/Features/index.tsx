'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale, NucShinyBadge } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucFeatures(): JSX.Element {
  const items = [
    {
      icon: 'mdi:rocket-launch-outline',
      title: t('home-features-1-title'),
      desc: t('home-features-1-desc'),
    },
    {
      icon: 'mdi:shield-lock-outline',
      title: t('home-features-2-title'),
      desc: t('home-features-2-desc'),
    },
    {
      icon: 'mdi:chart-line',
      title: t('home-features-3-title'),
      desc: t('home-features-3-desc'),
    },
  ]

  return (
    <section className="home-features container">
      <div className="home-features-header">
        <NucShinyBadge
          icon="mdi:star-outline"
          label={t('home-features-badge')}
        />
        <h2>{t('home-features-heading')}</h2>
      </div>

      <div className="home-features-grid">
        {items.map((item) => (
          <div className="home-feature-card" key={item.title}>
            <div className="home-feature-icon">
              <AdIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
