import type {
  ContactFormDataInterface,
  ContactFormErrorsInterface,
} from '../types'

export function validateContactForm(
  form: ContactFormDataInterface
): ContactFormErrorsInterface {
  const errors: ContactFormErrorsInterface = {}

  // Name validation
  if (!form.name) {
    errors.name = 'Name is required'
  } else if (form.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  } else if (form.name.length > 100) {
    errors.name = 'Name must be less than 100 characters'
  }

  // Email validation
  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  } else if (form.email.length > 255) {
    errors.email = 'Email must be less than 255 characters'
  }

  // Phone validation (optional, but if provided must be valid)
  if (form.phone) {
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (phoneDigits.length < 9) {
      errors.phone = 'Phone number must be at least 9 digits'
    } else if (phoneDigits.length > 20) {
      errors.phone = 'Phone number must be less than 20 digits'
    }
  }

  // Message validation
  if (!form.message) {
    errors.message = 'Message is required'
  } else if (form.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
  } else if (form.message.length > 2000) {
    errors.message = 'Message must be less than 2000 characters'
  }

  // Consent validation
  if (!form.consent) {
    errors.consent = 'You must accept the data processing'
  }

  return errors
}
