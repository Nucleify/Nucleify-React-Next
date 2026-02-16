'use client'
import type { JSX } from 'react'

import styles from './index.module.scss'

export function NucGridBackground(): JSX.Element {
  return (
    <div className={styles['nuc-grid-background']}>
      <div className={styles['nuc-grid-background-grid']}></div>
      <div className={styles['nuc-grid-background-glow']}></div>
    </div>
  )
}
