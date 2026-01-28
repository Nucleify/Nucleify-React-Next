import type { JSX } from 'react'

import { Card } from 'primereact/card'
import type { CardInterface } from './types'

export function AdCard({
  className = '',
  ...rest
}: CardInterface): JSX.Element {
  const mergedClassName = ['ad-card', className].filter(Boolean).join(' ')

  return <Card {...rest} className={mergedClassName || undefined} />
}
