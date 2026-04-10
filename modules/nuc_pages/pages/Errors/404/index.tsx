'use client'

import type { JSX } from 'react'

import { enLocale, NucGridBackground } from 'nucleify'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucError404Page(): JSX.Element {
  const goHome = (): void => {
    if (typeof window !== 'undefined') {
      window.location.href = '/en/home'
    }
  }

  const goBack = (): void => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
      return
    }
    goHome()
  }

  return (
    <div id="error-404">
      <div className="error-404-container">
        <NucGridBackground />
        <div className="error-404-content container">
          <div className="error-404-number">404</div>
          <h1 className="error-404-title">{t('error-404-title')}</h1>
          <p className="error-404-message">{t('error-404-message')}</p>
          <div className="error-404-actions">
            <button
              className="nuc-submit-button"
              onClick={goHome}
              type="button"
            >
              {t('error-404-back-home')}
            </button>
            <button
              className="nuc-submit-button"
              onClick={goBack}
              type="button"
            >
              {t('error-404-go-back')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
