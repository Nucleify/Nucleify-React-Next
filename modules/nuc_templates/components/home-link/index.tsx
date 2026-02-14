'use client'
import type { JSX } from 'react'

import { AdAnchor } from '@/atomic'
import styles from './index.module.scss'

export function NucHomeLink(): JSX.Element {
  return (
    <AdAnchor
      href="/home"
      className={styles['nuc-home-link']}
      icon="prime:chevron-left"
      title="Back to home"
    />
  )
}
