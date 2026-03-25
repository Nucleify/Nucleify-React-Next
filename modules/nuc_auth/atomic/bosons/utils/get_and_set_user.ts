import type { ApiResponseType } from 'nucleify'
import { apiRequest } from 'nucleify'

import type { NucAuthUserInterface } from '../types'
import { setUserToSessionStorage } from './set_user_to_session_storage'

function extractResponse<T>(response: ApiResponseType<T>): T {
  if (response && typeof response === 'object' && 'data' in response) {
    return (response as { data: T }).data
  }

  return response as T
}

export async function getAndSetUser(): Promise<void> {
  const response = await apiRequest<NucAuthUserInterface>('/user')
  const user = extractResponse(response)

  setUserToSessionStorage(user)
}
