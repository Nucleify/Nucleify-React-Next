export interface ContactFormDataInterface {
  name: string
  email: string
  phone: string
  message: string
  consent: boolean
}

export interface ContactFormErrorsInterface {
  name?: string
  email?: string
  phone?: string
  message?: string
  consent?: string
}

export interface SubmitFormResultInterface {
  success: boolean
  errors?: ContactFormErrorsInterface
  message?: string
}

export interface FormFieldInterface {
  id: keyof Omit<ContactFormDataInterface, 'consent'>
  label: string
  component: string
  type?: string
  placeholder: string
  autocomplete?: string
  rows?: number
}
