import type { JSX } from 'react'

import { ColorPicker } from 'primereact/colorpicker'
import type { ColorPickerInterface } from './types'

export default function AdColorPicker({
  className = '',
  adType,
  ...rest
}: ColorPickerInterface): JSX.Element {
  const mergedClassName = ['ad-colorpicker', className]
    .filter(Boolean)
    .join(' ')

  return (
    <ColorPicker
      {...rest}
      className={mergedClassName || undefined}
      {...(adType ? { 'ad-type': adType } : {})}
    />
  )
}

export type * from './types'
export { AdColorPicker }
