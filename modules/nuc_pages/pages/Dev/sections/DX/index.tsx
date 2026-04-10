'use client'

import type { JSX } from 'react'

import { enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevDX(): JSX.Element {
  return (
    <section className="dev-dx container">
      <h2>{t('dev-dx-heading')}</h2>
      <p>{t('dev-dx-desc')}</p>
    </section>
  )
}
