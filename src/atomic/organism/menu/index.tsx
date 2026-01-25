import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import { Menu } from 'primereact/menu'
import type { MenuInterface } from './types'

const AdMenu = forwardRef<
  { toggle: (event: React.MouseEvent) => void },
  MenuInterface
>((props, ref) => {
  const menuRef = useRef<Menu | null>(null)

  useImperativeHandle(ref, () => ({
    toggle: (event: React.MouseEvent) => {
      if (menuRef.current && typeof menuRef.current.toggle === 'function') {
        menuRef.current.toggle(event)
      }
    },
  }))

  return (
    <Menu
      ref={menuRef}
      {...props}
      className={[props.className, 'ad-menu'].filter(Boolean).join(' ')}
    />
  )
})

AdMenu.displayName = 'AdMenu'

export default AdMenu

export type { MenuInterface } from './types'
export { AdMenu }
