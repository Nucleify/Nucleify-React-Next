'use client'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import { Menu } from 'primereact/menu'
import styles from './index.module.scss'
import type { MenuInterface } from './types'

export const AdMenu = forwardRef<
  { toggle: (event: React.MouseEvent) => void },
  MenuInterface
>((props, ref) => {
  const menuRef = useRef<Menu | null>(null)

  useImperativeHandle(ref, () => ({
    toggle: (event: React.MouseEvent) => {
      menuRef.current?.toggle(event)
    },
  }))

  return (
    <Menu
      ref={menuRef}
      {...props}
      className={[styles['ad-menu'], props.className].filter(Boolean).join(' ')}
      pt={{
        menu: { className: styles['ad-menu-list'] },
        menuitem: { className: styles['ad-menu-item'] },
        content: { className: styles['ad-menu-item-content'] },
        action: { className: styles['ad-menu-item-link'] },
      }}
    />
  )
})

AdMenu.displayName = 'AdMenu'
