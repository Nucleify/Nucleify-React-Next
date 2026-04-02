import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
// Імпортуємо стандартну кнопку PrimeReact
import { Button } from 'primereact/button'; 

interface NucSectionEmailUsProps {
  onSuccess?: () => void;
  className?: string;
}

export const NucSectionEmailUs: React.FC<NucSectionEmailUsProps> = ({ 
  onSuccess, 
  className 
}) => {
  const { t } = useTranslation();
  
  const [email, setEmail] = useState('');
  const [websiteType, setWebsiteType] = useState(null);
  const [consent, setConsent] = useState(false);

  const websiteOptions = [
    { label: t('form-website-type-landing'), value: 'landing' },
    { label: t('form-website-type-business'), value: 'business' },
    { label: t('form-website-type-blog'), value: 'blog' },
    { label: t('form-website-type-help'), value: 'help' },
  ];

  return (
    <div id="email-us" className={className || ''}>
      <form 
        className="email-us-form" 
        onSubmit={(e) => { 
          e.preventDefault(); 
          if (onSuccess) onSuccess(); 
        }}
      >
        <div className="form-group">
          <label htmlFor="email">{t('form-email-label')}</label>
          <InputText 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('form-email-placeholder')}
            className="w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="website_type">{t('form-website-type-label')}</label>
          <Dropdown 
            id="website_type" 
            value={websiteType} 
            options={websiteOptions} 
            onChange={(e) => setWebsiteType(e.value)} 
            placeholder={t('form-website-type-placeholder')} 
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
            {t('form-consent')}
          </label>
        </div>

        <Button
          type="submit"
          label={t('form-submit')}
          className="nuc-submit-button" 
        />
      </form>

      <div className="email-us-footer">
        <span className="response-text">{t('form-response-text')}</span>
        <span className="response-badge">{t('form-response-badge')}</span>
      </div>
    </div>
  );
};