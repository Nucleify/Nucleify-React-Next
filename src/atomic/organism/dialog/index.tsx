import type { JSX } from 'react'

import { Dialog } from 'primereact/dialog'
import styles from './index.module.scss'
import type { DialogInterface } from './types'

export function AdDialog({
  className = '',
  modal = true,
  showHeader = true,
  header,
  footer,
  children,
  ...rest
}: DialogInterface): JSX.Element {
  const mergedClassName = [styles['ad-dialog'], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Dialog
      {...rest}
      modal={modal}
      showHeader={showHeader}
      header={header}
      footer={footer}
      className={mergedClassName}
      pt={{
        root: { className: mergedClassName },
        mask: { className: styles['ad-dialog-mask'] },
        header: { className: styles['ad-dialog-header'] },
        content: { className: styles['ad-dialog-content'] },
        footer: { className: styles['ad-dialog-footer'] },
        closeButton: { className: styles['ad-dialog-header-icon'] },
        closeButtonIcon: { className: styles['ad-dialog-header-icon'] },
      }}
    >
      {children}
    </Dialog>
  )
}
