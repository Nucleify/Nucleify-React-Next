'use client'
import type { JSX, ReactNode } from 'react'

import { Card } from 'primereact/card'
import styles from './index.module.scss'
import type { CardInterface } from './types/interfaces'

export function AdCard({
  className = '',
  children,
  header,
  title,
  ...rest
}: CardInterface & { header?: ReactNode; title?: ReactNode }): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    root: { className: cx(styles['ad-card'], className) },
  }

  return (
    <Card {...rest} pt={pt} header={header} title={title}>
      {children}
    </Card>
  )
}
