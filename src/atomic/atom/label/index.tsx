import type { JSX } from 'react'

import type { LabelInterface } from './types'

export default function AdLabel({
  label,
  forInput,
}: LabelInterface): JSX.Element {
  return <label htmlFor={forInput}>{label}</label>
}

export type { LabelInterface }
export { AdLabel }
