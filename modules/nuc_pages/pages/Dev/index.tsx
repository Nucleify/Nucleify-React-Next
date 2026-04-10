'use client'

import type { JSX } from 'react'

import { enLocale, NucSectionContact } from 'nucleify'

import { NucDevStart } from './sections'
import NucDevDX from './sections/DX'
import NucDevHighlights from './sections/Highlights'
import NucDevModules from './sections/Modules'
import NucDevStack from './sections/Stack'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucDevPage(): JSX.Element {
  return (
    <div className="dev-container">
      <NucDevStart />
      <NucDevStack />
      <NucDevHighlights />
      <NucDevDX />
      <NucDevModules />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('dev')}</span>
    </div>
  )
}
