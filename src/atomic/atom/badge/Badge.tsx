import type { JSX } from 'react'

import { Badge } from 'primereact/badge'
import type { BadgeInterface } from './types'

export default function AdBadge(props: BadgeInterface): JSX.Element {
  return <Badge {...props} />
}
