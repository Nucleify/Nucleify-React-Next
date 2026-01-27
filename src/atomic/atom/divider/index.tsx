import type { JSX } from 'react'

import { Divider } from 'primereact/divider'
import type { DividerInterface } from './types'

export function AdDivider(props: DividerInterface): JSX.Element {
  return <Divider {...props} />
}
