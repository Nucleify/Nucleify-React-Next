'use client'
import type { JSX } from 'react'

import { Dialog } from 'primereact/dialog'
import styles from './index.module.scss'
import type { DialogInterface } from './types'

export function AdDialog({
  className,
  modal = true,
  showHeader = true,
  header,
  footer,
  children,
  ...rest
}: DialogInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    mask: { className: styles['ad-dialog-mask'] },
    header: { className: styles['ad-dialog-header'] },
    content: { className: styles['ad-dialog-content'] },
    footer: { className: styles['ad-dialog-footer'] },
    closeButton: { className: styles['ad-dialog-close-button'] },
  }

  return (
    <Dialog
      {...rest}
      modal={modal}
      showHeader={showHeader}
      header={header}
      footer={footer}
      className={cx(styles['ad-dialog'], className)}
      pt={pt}
    >
      {children}
    </Dialog>
  )
}
