'use client'

import type { JSX } from 'react'

import { Toast } from 'primereact/toast'
import styles from './index.module.scss'
import type { AdToastProps } from './types'

export function AdToast({
  className,
  children,
  pt,
  ...rest
}: AdToastProps): JSX.Element {
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
