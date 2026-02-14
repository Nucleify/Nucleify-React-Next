'use client'
import type { JSX } from 'react'

import { AdIcon } from '@/atomic'
import styles from './index.module.scss'

export interface TrustBadgeItemInterface {
  icon: string
  label: string
}

interface TrustBadgePropsInterface {
  items?: TrustBadgeItemInterface[]
}

export function NucTrustBadges({
  items,
}: TrustBadgePropsInterface): JSX.Element {
  return (
    <div className={styles['nuc-trust-badges']}>
      {items?.map((item) => (
        <div key={item.label} className={styles['nuc-trust-badge-item']}>
          <AdIcon icon={item.icon} className={styles['iconify']} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
