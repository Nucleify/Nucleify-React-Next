import type { JSX } from 'react'

import { ProgressBar } from 'primereact/progressbar'
import type { ProgressBarInterface } from './types'

export default function AdProgressBar({
  width,
  height,
  style,
  ...rest
}: ProgressBarInterface): JSX.Element {
  const mergedStyle = {
    ...(style || {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  }

  return <ProgressBar {...rest} style={mergedStyle} />
}

export type { ProgressBarInterface }
export { AdProgressBar }
