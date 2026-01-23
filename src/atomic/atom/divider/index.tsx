import type { JSX } from 'react'

import { Divider } from 'primereact/divider'
import type { DividerInterface } from './types'

export default function AdDivider(props: DividerInterface): JSX.Element {
  return <Divider {...props} />
}

export type { DividerInterface }
export { AdDivider }
