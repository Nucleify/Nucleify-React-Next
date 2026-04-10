'use client'

import type { JSX } from 'react'

import { enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevModules(): JSX.Element {
  const modules = ['nuc_api', 'nuc_sections', 'nuc_templates', 'nuc_pages']

  return (
    <section className="dev-modules container">
      <h2>{t('dev-modules-heading')}</h2>
      <div className="dev-modules-grid">
        {modules.map((m) => (
          <div className="dev-modules-item" key={m}>
            {m}
          </div>
        ))}
      </div>
    </section>
  )
}
