'use client'
import type { JSX } from 'react'

import { AdIcon } from '@/atomic'
import styles from './index.module.scss'
import type { NucShinyBadgeInterface } from './types'

export function NucShinyBadge({
  icon,
  label,
}: NucShinyBadgeInterface): JSX.Element {
  return (
    <span className={styles['nuc-shiny-badge']}>
      <AdIcon icon={icon} className={styles['iconify']} />
      <span>{label}</span>
    </span>
  )
}
