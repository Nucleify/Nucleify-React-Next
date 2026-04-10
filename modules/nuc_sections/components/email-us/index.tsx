'use client'

import {
  type ChangeEvent,
  type FormEvent,
  type JSX,
  useMemo,
  useState,
} from 'react'

import {
  AdButton,
  AdCard,
  AdCheckbox,
  AdInputText,
  AdLabel,
  AdTextarea,
  type ContactFormDataInterface,
  type ContactFormErrorsInterface,
  type FormFieldInterface,
  getEmailUsTextFields,
  submitContactForm,
} from 'nucleify'

import './index.scss'

type NucSectionEmailUsProps = {
  onSuccess?: () => void
  cardClassName?: string
}

const textMap: Record<string, string> = {
  'form-name-label': 'Name',
  'form-name-placeholder': 'Your name',
  'form-email-label': 'Email',
  'form-email-placeholder': 'Your email',
  'form-phone-label': 'Phone',
  'form-phone-placeholder': 'Your phone number',
  'form-message-label': 'Message',
  'form-message-placeholder': 'Tell us what you need',
  'form-consent': 'I consent to data processing.',
  'form-submit': 'Send message',
  'form-sending': 'Sending...',
  'form-response-text': 'Average response time:',
  'form-response-badge': 'UNDER 24H',
}

function t(key: string): string {
  return textMap[key] || key
}

const initialForm: ContactFormDataInterface = {
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
}

export function NucSectionEmailUs({
  onSuccess,
  cardClassName = '',
}: NucSectionEmailUsProps = {}): JSX.Element {
  const fields = useMemo(() => getEmailUsTextFields(t), [])
  const [form, setForm] = useState<ContactFormDataInterface>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrorsInterface>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const clearFieldError = (field: keyof ContactFormDataInterface): void => {
    if (!errors[field]) return
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleTextChange =
    (field: keyof Omit<ContactFormDataInterface, 'consent'>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const value = event.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
      clearFieldError(field)
    }

  const handleConsentChange = (checked: boolean): void => {
    setForm((prev) => ({ ...prev, consent: checked }))
    clearFieldError('consent')
  }

  async function submitForm(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    const result = await submitContactForm(form)

    if (!result.success) {
      setErrors(result.errors || {})
      if (result.message) setResponseMessage(result.message)
      setIsSubmitting(false)
      return
    }

    setErrors({})
    setForm(initialForm)
    setResponseMessage(result.message || '')
    onSuccess?.()
    setIsSubmitting(false)
  }

  const renderField = (field: FormFieldInterface): JSX.Element => {
    const commonProps = {
      adType: 'main',
      id: field.id,
      placeholder: field.placeholder,
      invalid: !!errors[field.id],
    }

    if (field.component === 'textarea') {
      return (
        <AdTextarea
          {...commonProps}
          className="p-textarea"
          rows={field.rows}
          value={form[field.id]}
          onChange={handleTextChange(field.id)}
        />
      )
    }

    return (
      <AdInputText
        {...commonProps}
        className="p-inputtext"
        type={field.type}
        autoComplete={field.autocomplete}
        value={form[field.id]}
        onChange={handleTextChange(field.id)}
      />
    )
  }

  const cardClassNames = ['p-card', cardClassName].filter(Boolean).join(' ')

  return (
    <AdCard className={cardClassNames} id="email-us">
      <form className="email-us-form" onSubmit={submitForm}>
        {fields.map((field) => (
          <div className="form-group" key={field.id}>
            <AdLabel forInput={field.id} label={field.label} />
            {renderField(field)}
            {errors[field.id] && (
              <small className="error-message">{errors[field.id]}</small>
            )}
          </div>
        ))}

        <div className="form-group checkbox-group">
          <AdCheckbox
            adType="main"
            className="p-checkbox"
            checked={form.consent}
            inputId="consent"
            invalid={!!errors.consent}
            onChange={(event) => handleConsentChange(Boolean(event.checked))}
          />
          <AdLabel forInput="consent" label={t('form-consent')} />
          {errors.consent && (
            <small className="error-message">{errors.consent}</small>
          )}
        </div>

        <AdButton
          className="submit-button"
          disabled={isSubmitting}
          label={isSubmitting ? t('form-sending') : t('form-submit')}
          type="submit"
        />
      </form>

      <div className="email-us-footer">
        <span className="response-text">{t('form-response-text')}</span>
        <span className="response-badge">{t('form-response-badge')}</span>
      </div>

      {responseMessage && (
        <small className="error-message">{responseMessage}</small>
      )}
    </AdCard>
  )
}
