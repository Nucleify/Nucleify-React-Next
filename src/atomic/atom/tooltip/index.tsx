import type { JSX } from 'react'

import { Tooltip } from 'primereact/tooltip'
import type { TooltipInterface } from './types'

export default function AdTooltip(props: TooltipInterface): JSX.Element {
  return <Tooltip {...props} />
}

export type { TooltipInterface }
export { AdTooltip }
