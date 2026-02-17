import type { ErrorResponseInterface, UseApiErrorsInterface } from 'atomic'

export function useApiErrors(): UseApiErrorsInterface {
  function apiErrors(error: ErrorResponseInterface | Error | unknown): void {
    if (error && typeof error === 'object' && 'data' in error) {
      const data = error.data as { error?: string; errors?: string }
      if (data?.error) {
        console.error(data.error)
      } else if (data?.errors) {
        console.error(data.errors)
      } else {
        console.error('An unknown error occurred')
      }
      throw error
    }

    if (error instanceof Error) {
      console.error(error.message)
      throw error
    }

    if (typeof error === 'string') {
      console.error(error)
      throw new Error(error)
    }

    console.error('An unknown error occurred')
    throw new Error('An unknown error occurred')
  }

  return {
    apiErrors,
  }
}
