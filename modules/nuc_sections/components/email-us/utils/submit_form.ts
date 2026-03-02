import { apiHandle } from '../../../../nuc_api'
import type {
  ContactFormDataInterface,
  SubmitFormResultInterface,
} from '../types'
import { validateContactForm } from './validate_form'

export async function submitContactForm(
  form: ContactFormDataInterface
): Promise<SubmitFormResultInterface> {
  const validationErrors = validateContactForm(form)
  if (Object.keys(validationErrors).length > 0) {
    return { success: false, errors: validationErrors }
  }

  let isSuccess = false
  let successMessage = 'Message sent successfully!'

  try {
    await apiHandle<{ success: boolean; message: string }>({
      url: '/contact-form',
      method: 'POST',
      data: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      onSuccess: (response) => {
        isSuccess = true
        successMessage = response.message || successMessage
      },
    })
  } catch (error) {
    const errorMessage =
      typeof error === 'object' && error !== null && 'data' in error
        ? ((error.data as { message?: string; error?: string })?.message ??
          (error.data as { message?: string; error?: string })?.error)
        : undefined

    return {
      success: false,
      message: errorMessage || 'Network error. Please try again.',
    }
  }

  if (!isSuccess) {
    return {
      success: false,
      message: 'Could not send your message.',
    }
  }

  return {
    success: true,
    message: successMessage,
  }
}
