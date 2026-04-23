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
  AdSelect,
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
  'form-email-label': 'Email',
  'form-email-placeholder': 'Enter your email address',
  'form-website-type-label': 'What type of website are you interested in?',
  'form-website-type-placeholder': 'Select website type',
  'form-website-type-landing': 'Landing page',
  'form-website-type-business': 'Business website',
  'form-website-type-blog': 'Blog',
  'form-website-type-help': 'Help center',
  'form-consent': 'I consent to data processing.',
  'form-submit': 'Free consultation',
  'form-sending': 'Sending...',
  'form-response-text': 'We respond personally',
  'form-response-badge': 'WITHIN 8 HOURS',
}

function t(key: string): string {
  return textMap[key] || key
}

const initialForm: ContactFormDataInterface = {
  email: '',
  website_type: '',
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

  const handleFieldChange =
    (field: keyof Omit<ContactFormDataInterface, 'consent'>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const value = event.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
      clearFieldError(field)
    }

  const handleSelectChange =
    (field: keyof Omit<ContactFormDataInterface, 'consent'>) =>
    (event: { value: string }): void => {
      setForm((prev) => ({ ...prev, [field]: event.value || '' }))
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

    if (field.component === 'select') {
      return (
        <AdSelect
          {...commonProps}
          className="p-dropdown"
          options={field.options || []}
          optionLabel="label"
          optionValue="value"
          showClear={false}
          value={form[field.id]}
          onChange={handleSelectChange(field.id)}
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
        onChange={handleFieldChange(field.id)}
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
