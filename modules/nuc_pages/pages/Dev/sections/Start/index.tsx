'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale, NucShinyBadge } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevStart(): JSX.Element {
  return (
    <section className="dev-start container">
      <NucShinyBadge icon="mdi:code-tags" label={t('dev-start-badge')} />
      <h1 className="dev-start-title">{t('dev-start-title')}</h1>
      <p className="dev-start-subtitle">{t('dev-start-subtitle')}</p>
      <a className="dev-start-button" href="/en/documentation">
        <AdIcon icon="mdi:book-open-page-variant" />
        <span>{t('dev-start-cta')}</span>
      </a>
    </section>
  )
}
