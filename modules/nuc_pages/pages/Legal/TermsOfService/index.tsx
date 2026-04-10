'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucTermsOfServicePage(): JSX.Element {
  return (
    <div className="legal-container">
      <div className="legal-content container">
        <div className="legal-header">
          <AdIcon
            icon="mdi:file-document-outline"
            className="legal-header-icon"
          />
          <h1 className="legal-title">{t('legal-terms-title')}</h1>
          <p className="legal-updated">{t('legal-last-updated')}: 27.02.2026</p>
        </div>

        <div className="legal-sections">
          <section className="legal-section">
            <h2>{t('legal-terms-intro-title')}</h2>
            <p>{t('legal-terms-intro-text')}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
