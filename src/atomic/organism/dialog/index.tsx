import type { JSX } from 'react'

import { Dialog } from 'primereact/dialog'
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
  const mergedClassName = ['ad-dialog', className].filter(Boolean).join(' ')

  return (
    <Dialog
      {...rest}
      modal={modal}
      showHeader={showHeader}
      header={header}
      footer={footer}
      className={mergedClassName || undefined}
      pt={{
        mask: { className: 'ad-dialog-mask' },
        header: { className: 'ad-dialog-header' },
        headerIcons: { className: 'ad-dialog-header-icon' },
        content: { className: 'ad-dialog-content' },
        footer: { className: 'ad-dialog-footer' },
      }}
    >
      {children}
    </Dialog>
  )
}
