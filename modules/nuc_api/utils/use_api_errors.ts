import type { ErrorResponseInterface, UseApiErrorsInterface } from 'atomic'

import type { UseToastInterface } from '../../../src/atomic/organism/toast/types'
import { useAtomicToast } from '../../../src/atomic/organism/toast/utils'

export function useApiErrors(): UseApiErrorsInterface {
  const { flashToast }: UseToastInterface = useAtomicToast()

  function apiErrors(error: ErrorResponseInterface | Error | unknown): void {
    if (error && typeof error === 'object' && 'data' in error) {
      const data = error.data as { error?: string; errors?: string }

      if (data?.error) {
        flashToast(data.error, 'error')
      } else if (data?.errors) {
        flashToast(data.errors, 'error')
        setTimeout(() => {
          document
            .querySelector('.p-toast-summary')
            ?.classList.add('validation-errors')
        })
      } else if (error) {
        if (error instanceof Error) {
          flashToast(error.message, 'error')
        } else if (typeof error === 'string') {
          flashToast(error, 'error')
        } else {
          flashToast('An unknown error occurred', 'error')
        }
      } else {
        flashToast('An unknown error occurred', 'error')
      }

      throw error
    }

    if (error instanceof Error) {
      flashToast(error.message, 'error')
      throw error
    }

    if (typeof error === 'string') {
      flashToast(error, 'error')
      throw new Error(error)
    }

    flashToast('An unknown error occurred', 'error')
    throw new Error('An unknown error occurred')
  }

  return {
    apiErrors,
  }
}
