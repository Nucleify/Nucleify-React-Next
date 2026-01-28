import type { ReactNode } from 'react'

import { Toast } from 'primereact/toast'
import type { ToastInterface } from './types'

interface AdToastProps extends ToastInterface {
  children?: ReactNode
  pt?: ToastInterface['pt']
}

export function AdToast({ className, children, pt, ...rest }: AdToastProps) {
  return (
    <Toast
      {...rest}
      pt={pt}
      className={[className, 'ad-toast'].filter(Boolean).join(' ')}
    >
      {children}
    </Toast>
  )
}
