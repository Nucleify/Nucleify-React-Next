'use client'
import React, { useEffect, useMemo, useState } from 'react'

import { Divider } from 'primereact/divider'
import { Password } from 'primereact/password'
import styles from './index.module.scss'
import type { PasswordInterface } from './types'

const hasLowercase = (val: string) => /[a-z]/.test(val)
const hasUppercase = (val: string) => /[A-Z]/.test(val)
const hasNumber = (val: string) => /[0-9]/.test(val)
const hasMinLength = (val: string) => val.length >= 8

export function AdPassword({
  value,
  onChange,
  emptyPassword,
  passwordsMatch,
  id,
  className,
  ...rest
}: PasswordInterface) {
  const [localValue, setLocalValue] = useState<string>((value as string) || '')

  useEffect(() => {
    setLocalValue((value as string) || '')
  }, [value])

  const criteria = useMemo(
    () => [
      { label: 'At least one lowercase', isValid: hasLowercase(localValue) },
      { label: 'At least one uppercase', isValid: hasUppercase(localValue) },
      { label: 'At least one number', isValid: hasNumber(localValue) },
      { label: 'Minimum 8 characters', isValid: hasMinLength(localValue) },
    ],
    [localValue]
  )

  const footer = useMemo(() => {
    if (id !== 'password_confirmation') {
      return (
        <>
          <Divider />
          <ul className={styles['ad-password-criteria']}>
            {criteria.map((c, i) => (
              <li
                key={i}
                className={`${styles['ad-password-criterion']} ${
                  c.isValid ? styles['valid'] : styles['invalid']
                }`}
              >
                {c.label}
              </li>
            ))}
          </ul>
        </>
      )
    }

    if (!emptyPassword) {
      return (
        <ul className={styles['ad-password-criteria']}>
          <li
            className={`${styles['ad-password-criterion']} ${
              passwordsMatch ? styles['valid'] : styles['invalid']
            }`}
          >
            {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
          </li>
        </ul>
      )
    }
    return null
  }, [id, criteria, emptyPassword, passwordsMatch])

  return (
    <Password
      {...rest}
      id={id}
      value={value}
      onChange={(e) => {
        setLocalValue(e.target.value)
        onChange?.(e)
      }}
      feedback={!emptyPassword}
      footer={footer}
      className={[styles['ad-password'], className].filter(Boolean).join(' ')}
      pt={{
        input: { className: styles['ad-inputtext'] },
        panel: { className: styles['ad-password-overlay'] },
      }}
    />
  )
}
