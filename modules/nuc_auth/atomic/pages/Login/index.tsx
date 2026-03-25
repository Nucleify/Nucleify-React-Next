'use client'

import type { ChangeEvent, FormEvent, JSX } from 'react'

import { useAuthForm } from '../../bosons'

function t(key: string): string {
  return key
}

export function NucLoginPage(): JSX.Element {
  const { submitAndGo, loginFields, setLoginFields, loginInputs } =
    useAuthForm()

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    void submitAndGo(loginFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      {loginInputs.map((field) => (
        <label key={field.id} htmlFor={field.id}>
          {t(field.label)}
          <input
            id={field.id}
            type={field.type}
            autoFocus={field.autofocus}
            value={loginFields[field.model]}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value
              setLoginFields((prev) => ({
                ...prev,
                [field.model]: value,
              }))
            }}
          />
        </label>
      ))}

      <button type="submit">{t('auth-login-submit')}</button>
    </form>
  )
}
