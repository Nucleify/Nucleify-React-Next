'use client'

import type { JSX } from 'react'

import { enLocale, NucSectionContact, NucSectionFaq } from 'nucleify'

import { NucHomeFeatures, NucHomeResults, NucHomeStart } from './sections'

import './_index.scss'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucHomePage(): JSX.Element {
  return (
    <div className="home-container">
      <NucHomeStart />
      <NucHomeResults />
      <NucSectionFaq site="home" />
      <NucHomeFeatures />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('home')}</span>
    </div>
  )
}
