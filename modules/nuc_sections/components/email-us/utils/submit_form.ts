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

  try {
    const response = await fetch('/api/contact-form', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    })

    const payload = await response
      .json()
      .catch((): { message?: string } => ({ message: undefined }))

    if (!response.ok) {
      return {
        success: false,
        message: payload?.message || 'Could not send your message.',
      }
    }

    return {
      success: true,
      message: payload?.message || 'Message sent successfully!',
    }
  } catch {
    return {
      success: false,
      message: 'Network error. Please try again.',
    }
  }
}
