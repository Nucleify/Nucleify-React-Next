'use client'
import type { JSX } from 'react'

import { AdLogoSymbol } from 'atomic/atom/logo/symbol'
import Link from 'next/link'
import { AdAnchor, AdLogo } from '@/atomic'
import enLocale from '../../../../../modules/nuc_languages/locales/en.json'
import styles from './index.module.scss'
import { getColumns } from './items'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucSectionFooter(): JSX.Element {
  const lang = 'en'
  const columns = getColumns(lang, t)
  const logoSize = 72
  const footerId = styles['footer']
  const topClassName = styles['top']
  const headerClassName = styles['header']
  const contentClassName = styles['content']
  const bottomClassName = styles['bottom']

  return (
    <section id={footerId}>
      <div className={styles['footer-content-container']}>
        <div className={topClassName}>
          <AdLogoSymbol dimensions={logoSize} />

          <AdAnchor href="#start" className={headerClassName}>
            <AdLogo dimensions={logoSize} adType="main" />
            <h1 className={styles['name']}>Nucleify</h1>
          </AdAnchor>

          <div className={contentClassName}>
            {columns.map((column, columnIndex) => (
              <div
                className={styles[`column-${columnIndex + 1}`]}
                key={columnIndex}
              >
                {column.map((item, itemIndex) => (
                  <Link href={item.url} key={itemIndex}>
                    {item.header ? (
                      <p className={styles['header']}>{item.name}</p>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={bottomClassName} />
      </div>
      <div className={styles['hexagon-rows-container']} />
    </section>
  )
}
