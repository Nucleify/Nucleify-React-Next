import type { MessageOrMessagesType } from '../Response/Message'

export interface ErrorResponseInterface {
  response: {
    status: number
    data: {
      error?: string
      errors: MessageOrMessagesType
    }
  }
}
