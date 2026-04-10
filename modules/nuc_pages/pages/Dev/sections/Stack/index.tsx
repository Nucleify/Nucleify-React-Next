'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevStack(): JSX.Element {
  const stack = [
    { icon: 'mdi:language-typescript', label: 'TypeScript' },
    { icon: 'mdi:react', label: 'React' },
    { icon: 'mdi:server', label: t('dev-stack-backend') },
  ]

  return (
    <section className="dev-stack container">
      <h2>{t('dev-stack-heading')}</h2>
      <div className="dev-stack-grid">
        {stack.map((item) => (
          <div className="dev-stack-item" key={item.label}>
            <AdIcon icon={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
