import type { ContactFormDataInterface } from '../types'

export const emailUsFormFieldKeys: (keyof ContactFormDataInterface)[] = [
  'name',
  'email',
  'phone',
  'message',
  'consent',
]
