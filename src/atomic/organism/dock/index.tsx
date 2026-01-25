import type { JSX } from 'react'

import { Dock } from 'primereact/dock'
import type { DockInterface } from './types'

export default function AdDock({
  className = '',
  position,
  ...rest
}: DockInterface): JSX.Element {
  const positionClass = position ? `ad-dock-${position}` : ''
  const mergedClassName = ['ad-dock', positionClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Dock
      {...rest}
      position={position}
      className={mergedClassName || undefined}
      pt={{
        root: { className: 'ad-dock-list-container' },
      }}
    />
  )
}

export * from './constants'
export type * from './types'
export { AdDock }
