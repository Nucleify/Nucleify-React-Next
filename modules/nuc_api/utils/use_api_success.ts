export function useApiSuccess() {
  async function apiSuccess(
    response?: unknown,
    getData?: () => Promise<void>,
    close?: (action: ActionType) => void,
    action?: ActionType
  ): Promise<void> {
    if (close && action) {
      close(action)
    }

    if (getData) {
      await getData()
    }

    const message =
      (response as Record<'message', string>)?.message ||
      'Operation completed successfully'

    console.log(message)
  }

  return { apiSuccess }
}
