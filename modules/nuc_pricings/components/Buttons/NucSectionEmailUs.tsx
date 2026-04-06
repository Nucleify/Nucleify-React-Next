import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

import i18next from 'i18next'

interface NucSectionEmailUsProps {
  onSuccess?: () => void
  className?: string
}

export const NucSectionEmailUs: React.FC<NucSectionEmailUsProps> = ({
  onSuccess,
  className,
}) => {
  const [email, setEmail] = useState('')
  const [websiteType, setWebsiteType] = useState(null)
  const [consent, setConsent] = useState(false)

  const websiteOptions = [
    { label: i18next.t('form-website-type-landing'), value: 'landing' },
    { label: i18next.t('form-website-type-business'), value: 'business' },
    { label: i18next.t('form-website-type-blog'), value: 'blog' },
    { label: i18next.t('form-website-type-help'), value: 'help' },
  ]

  return (
    <div id="email-us" className={className || ''}>
      <form
        className="email-us-form"
        onSubmit={(e) => {
          e.preventDefault()
          if (onSuccess) onSuccess()
        }}
      >
        <div className="form-group">
          <label htmlFor="email">{i18next.t('form-email-label')}</label>
          <InputText
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={i18next.t('form-email-placeholder')}
            className="w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="website_type">
            {i18next.t('form-website-type-label')}
          </label>
          <Dropdown
            id="website_type"
            value={websiteType}
            options={websiteOptions}
            onChange={(e) => setWebsiteType(e.value)}
            placeholder={i18next.t('form-website-type-placeholder')}
            className="w-full"
          />
        </div>

        <div className="form-group checkbox-group">
          <Checkbox
            inputId="consent"
            checked={consent}
            onChange={(e) => setConsent(e.checked || false)}
          />
          <label htmlFor="consent" className="ml-2 cursor-pointer">
            {i18next.t('form-consent')}
          </label>
        </div>

        <Button
          type="submit"
          label={i18next.t('form-submit')}
          className="nuc-submit-button"
        />
      </form>

      <div className="email-us-footer">
        <span className="response-text">{i18next.t('form-response-text')}</span>
        <span className="response-badge">
          {i18next.t('form-response-badge')}
        </span>
      </div>
    </div>
  )
}
