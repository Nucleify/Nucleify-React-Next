import { useRef } from 'react'

import { Toast } from 'primereact/toast'

export function useAtomicToast() {
  const toastRef = useRef<Toast>(null)

  const show = (options: Parameters<Toast['show']>[0]) => {
    toastRef.current?.show(options)
  }

  const clear = () => {
    toastRef.current?.clear()
  }

  return {
    toastRef,
    show,
    clear,
  }
}
