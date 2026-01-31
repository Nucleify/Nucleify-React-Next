'use client'
import type { JSX } from 'react'

import { SelectButton } from 'primereact/selectbutton'
import styles from './index.module.scss'
import type { SelectButtonInterface } from './types'

export function AdSelectButton({
  pt,
  adType,
  ...rest
}: SelectButtonInterface): JSX.Element {
  const mergedPt = {
    ...pt,
    button: {
      className: styles['ad-togglebutton'],
    },
  }

  return <SelectButton {...rest} pt={mergedPt} />
}
