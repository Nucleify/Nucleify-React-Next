'use client'
import type { ReactNode } from 'react'

import { Toast } from 'primereact/toast'
import styles from './index.module.scss'
import type { ToastInterface } from './types'

interface AdToastProps extends ToastInterface {
  children?: ReactNode
  pt?: ToastInterface['pt']
}

export function AdToast({ className, children, pt, ...rest }: AdToastProps) {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const defaultPt = {
    message: { className: styles['ad-toast-message'] },
    messageContent: { className: styles['ad-toast-message-content'] },
    summary: { className: styles['ad-toast-summary'] },
    closeButton: { className: styles['ad-toast-close-button'] },
  }

  return (
    <Toast
      {...rest}
      className={cx(className, styles['ad-toast'])}
      pt={{ ...defaultPt, ...pt }}
    >
      {children}
    </Toast>
  )
}
