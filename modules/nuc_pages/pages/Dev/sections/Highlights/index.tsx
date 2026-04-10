'use client'

import type { JSX } from 'react'

import { enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevHighlights(): JSX.Element {
  const items = [
    t('dev-highlights-1'),
    t('dev-highlights-2'),
    t('dev-highlights-3'),
  ]

  return (
    <section className="dev-highlights container">
      <h2>{t('dev-highlights-heading')}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
