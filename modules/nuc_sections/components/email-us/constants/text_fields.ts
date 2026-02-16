import type { FormFieldInterface } from '../types'

export function getEmailUsTextFields(
  t: (key: string) => string
): FormFieldInterface[] {
  return [
    {
      id: 'name',
      label: t('form-name-label'),
      component: 'input-text',
      placeholder: t('form-name-placeholder'),
      autocomplete: 'name',
    },
    {
      id: 'email',
      label: t('form-email-label'),
      component: 'input-text',
      type: 'email',
      placeholder: t('form-email-placeholder'),
      autocomplete: 'email',
    },
    {
      id: 'phone',
      label: t('form-phone-label'),
      component: 'input-text',
      type: 'tel',
      placeholder: t('form-phone-placeholder'),
      autocomplete: 'tel',
    },
    {
      id: 'message',
      label: t('form-message-label'),
      component: 'textarea',
      placeholder: t('form-message-placeholder'),
      rows: 4,
    },
  ]
}
