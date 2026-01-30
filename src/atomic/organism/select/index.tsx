'use client'
import type { JSX } from 'react'

import { Dropdown } from 'primereact/dropdown'
import styles from './index.module.scss'
import type { SelectInterface } from './types/interfaces'

export function AdSelect({
  className,
  adType,
  ...rest
}: SelectInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    input: { className: styles['ad-select-label'] },
    trigger: { className: styles['ad-select-trigger'] },
    panel: {
      className: styles['ad-select-panel'],
      ...(adType ? { 'ad-type': adType } : {}),
    },
    wrapper: { className: styles['ad-select-list-container'] },
    list: { className: styles['ad-select-list'] },
    item: { className: styles['ad-select-item'] },
  }

  return (
    <Dropdown
      {...rest}
      className={cx(styles['ad-select'], className)}
      pt={pt}
    />
  )
}
