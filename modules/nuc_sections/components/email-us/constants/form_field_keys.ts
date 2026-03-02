import type { ContactFormDataInterface } from 'nucleify'

export const emailUsFormFieldKeys: (keyof ContactFormDataInterface)[] = [
  'name',
  'email',
  'phone',
  'message',
  'consent',
]
