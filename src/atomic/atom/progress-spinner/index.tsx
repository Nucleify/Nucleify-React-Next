import type { JSX } from 'react'

import { ProgressSpinner } from 'primereact/progressspinner'
import type { ProgressSpinnerInterface } from './types'

export default function AdProgressSpinner({
  width,
  height,
  style,
  ...rest
}: ProgressSpinnerInterface): JSX.Element {
  const mergedStyle = {
    ...(style || {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  }

  return <ProgressSpinner {...rest} style={mergedStyle} />
}

export type { ProgressSpinnerInterface }
export { AdProgressSpinner }
