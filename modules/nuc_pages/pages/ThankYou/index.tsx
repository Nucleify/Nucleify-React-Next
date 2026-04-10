'use client'

import type { JSX } from 'react'

import { AdIcon, enLocale } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucThankYouPage(): JSX.Element {
  const navigateToHome = (): void => {
    if (typeof window !== 'undefined') {
      window.location.href = '/en/home'
    }
  }

  return (
    <div className="thank-you-container">
      <div className="thank-you-content container">
        <div className="thank-you-icon">
          <AdIcon icon="mdi:check-circle" />
        </div>
        <h1 className="thank-you-title">{t('thank-you-title')}</h1>
        <p className="thank-you-message">{t('thank-you-message')}</p>
        <div className="thank-you-actions">
          <button
            className="nuc-submit-button thank-you-button"
            onClick={navigateToHome}
            type="button"
          >
            {t('thank-you-back-home')}
          </button>
        </div>
      </div>
    </div>
  )
}
