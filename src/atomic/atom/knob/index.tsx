import type { JSX } from 'react'

import { Knob } from 'primereact/knob'
import type { KnobInterface } from './types'

export default function AdKnob({
  className,
  ...rest
}: KnobInterface): JSX.Element {
  return <Knob {...rest} className={className} />
}

export type { KnobInterface }
export { AdKnob }
