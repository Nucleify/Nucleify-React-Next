'use client'

import type { JSX } from 'react'

import { enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucResults(): JSX.Element {
  return (
    <section className="home-results container">
      <h2>{t('home-results-heading')}</h2>
      <p>{t('home-results-subtitle')}</p>
    </section>
  )
}
