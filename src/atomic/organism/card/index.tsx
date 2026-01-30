'use client'
import type { JSX } from 'react'

import { Card } from 'primereact/card'
import styles from './index.module.scss'
import type { CardInterface } from './types/interfaces'

export function AdCard({
  className = '',
  children,
  ...rest
}: CardInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  return (
    <Card {...rest} className={cx(styles['ad-card'], className)}>
      {children}
    </Card>
  )
}
