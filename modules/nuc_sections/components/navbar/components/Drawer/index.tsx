'use client'
import type { JSX, ReactNode } from 'react'

import { Sidebar, type SidebarProps } from 'primereact/sidebar'
import styles from '../../index.module.scss'

type NucNavbarDrawerProps = SidebarProps & {
  children?: ReactNode
}

export function NucNavbarDrawer({
  children,
  className = '',
  position = 'right',
  blockScroll = true,
  ...rest
}: NucNavbarDrawerProps): JSX.Element {
  const drawerClassName = [
    styles['navbar-drawer'],
    styles['p-drawer'],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Sidebar
      {...rest}
      blockScroll={blockScroll}
      maskClassName={styles['p-drawer-mask']}
      pt={{
        closeButton: {
          className: styles['p-drawer-close-button'],
        },
      }}
      className={drawerClassName}
      position={position}
    >
      {children}
      <div className={styles['template-authors']} />
    </Sidebar>
  )
}
