'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucStart(): JSX.Element {
  return (
    <section className="home-start container">
      <h1 className="home-start-title">{t('home-start-title')}</h1>
      <p className="home-start-subtitle">{t('home-start-subtitle')}</p>
      <div className="home-start-cta">
        <a className="home-start-button" href="/en/offer">
          <AdIcon icon="mdi:rocket-launch" />
          <span>{t('home-start-cta')}</span>
        </a>
      </div>
    </section>
  )
}
