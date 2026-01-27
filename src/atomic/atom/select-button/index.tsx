import type { JSX } from 'react'

import { SelectButton } from 'primereact/selectbutton'
import type { SelectButtonInterface } from './types'

export function AdSelectButton({
  pt,
  adType,
  ...rest
}: SelectButtonInterface): JSX.Element {
  const mergedPt = {
    ...pt,
    button: (() => {
      const base =
        typeof pt?.button === 'function' ? pt.button?.() : pt?.button || {}
      const baseAttrs = base as Record<string, unknown>
      return {
        ...baseAttrs,
        className: ['ad-togglebutton', baseAttrs.className]
          .filter(Boolean)
          .join(' '),
      }
    }) as unknown,
  } as typeof pt

  return <SelectButton {...rest} pt={mergedPt} />
}
