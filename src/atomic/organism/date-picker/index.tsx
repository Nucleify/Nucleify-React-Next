'use client'
import type { JSX } from 'react'

import { Calendar } from 'primereact/calendar'
import styles from './index.module.scss'
import type { DatePickerInterface } from './types'

export function AdDatePicker({
  className = '',
  adType,
  showOnFocus = true,
  ...rest
}: DatePickerInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    input: {
      root: {
        className: styles['ad-inputtext'],
        ...(adType ? { 'ad-type': adType } : {}),
      },
    },
  }

  return (
    <Calendar
      {...rest}
      showOnFocus={showOnFocus}
      className={cx(styles['ad-datepicker'], className)}
      pt={pt}
      {...(adType ? { 'ad-type': adType } : {})}
    />
  )
}
