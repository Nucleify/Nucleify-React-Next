import type { JSX } from 'react'

import { Calendar } from 'primereact/calendar'
import type { DatePickerInterface } from './types'

export default function AdDatePicker({
  className = '',
  adType,
  showOnFocus = true,
  ...rest
}: DatePickerInterface): JSX.Element {
  const mergedClassName = ['ad-datepicker', className].filter(Boolean).join(' ')

  return (
    <Calendar
      {...rest}
      showOnFocus={showOnFocus}
      className={mergedClassName || undefined}
      {...(adType ? { 'ad-type': adType } : {})}
      pt={{
        root: {
          className: 'ad-inputtext',
          ...(adType ? { 'ad-type': adType } : {}),
        },
      }}
    />
  )
}

export type * from './types'
export { AdDatePicker }
