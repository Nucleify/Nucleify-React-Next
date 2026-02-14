'use client'
import type { JSX } from 'react'

import { AdIcon } from '@/atomic'
import enLocale from '../../../../../modules/nuc_languages/locales/en.json'
import { NucSectionEmailUsDialog } from '../email-us/dialog'
import styles from './index.module.scss'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

export function NucSectionContact(): JSX.Element {
  const contactDecorationLeftClassName = `${styles['contact-decoration']} ${styles['contact-decoration-left']}`
  const contactDecorationRightClassName = `${styles['contact-decoration']} ${styles['contact-decoration-right']}`
  const contactBannerClassName = `${styles['contact-banner']} container`
  const contactText = t('contact-text')
  const contactTextHighlight = t('contact-text-highlight')
  const contactFeatures = [
    { icon: 'prime:clock', text: t('contact-feat-response') },
    { icon: 'prime:credit-card', text: t('contact-feat-payment') },
    { icon: 'prime:thumbs-up', text: t('contact-feat-satisfaction') },
  ]

  return (
    <div id={styles['contact']}>
      <div className={contactBannerClassName}>
        <div className={contactDecorationLeftClassName}>
          <AdIcon className={styles['iconify']} icon="prime:envelope" />
        </div>

        <div className={styles['contact-left']}>
          <span className={styles['contact-badge']}>{t('contact-badge')}</span>
          <h3 className={styles['contact-heading']}>{t('contact-heading')}</h3>
          <p className={styles['contact-text']}>
            {contactText}{' '}
            <span className={styles['highlight']}>{contactTextHighlight}</span>
          </p>

          <div className={styles['contact-features']}>
            {contactFeatures.map((feature) => (
              <div className={styles['feature']} key={feature.icon}>
                <AdIcon className={styles['iconify']} icon={feature.icon} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['contact-divider']} />

        <div className={styles['contact-right']}>
          <NucSectionEmailUsDialog buttonClass={styles['contact-button']} />
          <span className={styles['contact-email']}>business@nucleify.io</span>
        </div>

        <div className={contactDecorationRightClassName}>
          <AdIcon className={styles['iconify']} icon="prime:send" />
        </div>
      </div>
    </div>
  )
}
