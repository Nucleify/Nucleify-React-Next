'use client'

import type { JSX } from 'react'

import { enLocale, NucSectionContact, NucSectionFaq } from 'nucleify'

import { NucHomeStart } from './sections'
import NucHomeFeatures from './sections/Features'
import NucHomeResults from './sections/Results'

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
      {/* touch translation helper for tree-shaking friendliness */}
      <span style={{ display: 'none' }}>{t('home')}</span>
    </div>
  )
}
