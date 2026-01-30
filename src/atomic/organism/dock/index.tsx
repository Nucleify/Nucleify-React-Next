import type { JSX } from 'react'

import { Dock } from 'primereact/dock'
import styles from './index.module.scss'
import type { DockInterface } from './types'

export function AdDock({
  className = '',
  position = 'bottom',
  ...rest
}: DockInterface): JSX.Element {
  const positionClass = styles[`ad-dock-${position}`]

  return (
    <Dock
      {...rest}
      position={position}
      className={[styles['ad-dock'], positionClass, className].join(' ')}
      pt={{
        container: { className: styles['ad-dock-list-container'] },
        menu: { className: styles['ad-dock-list'] },
        menuitem: { className: styles['ad-dock-item'] },
        action: { className: styles['ad-dock-item-link'] },
      }}
    />
  )
}
