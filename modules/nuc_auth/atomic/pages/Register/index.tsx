'use client'

import type { ChangeEvent, FormEvent, JSX } from 'react'

import { useAuthForm } from '../../bosons'

function t(key: string): string {
  return key
}

export function NucRegisterPage(): JSX.Element {
  const { submitAndGo, registerFields, setRegisterFields, registerInputs } =
    useAuthForm()

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    void submitAndGo(registerFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      {registerInputs.map((field) => (
        <label key={field.id} htmlFor={field.id}>
          {t(field.label)}
          <input
            id={field.id}
            type={field.type}
            autoFocus={field.autofocus}
            value={registerFields[field.model]}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value
              setRegisterFields((prev) => ({
                ...prev,
                [field.model]: value,
              }))
            }}
          />
        </label>
      ))}

      <button type="submit">{t('auth-register-submit')}</button>
    </form>
  )
}
