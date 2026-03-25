import { useState } from 'react'

import { apiRequest, navigateToUrl, syncColorsWithDatabase } from 'nucleify'

import {
  loginFields,
  loginInputs,
  registerFields,
  registerInputs,
} from '../constants'
import type {
  LoginFieldsInterface,
  RegisterFieldsInterface,
  UseAuthFormInterface,
} from '../types'
import { getAndSetUser } from './get_and_set_user'
import { getCurrentLang } from './get_current_lang'

function isRegisterFields(
  data: LoginFieldsInterface | RegisterFieldsInterface
): data is RegisterFieldsInterface {
  return 'password_confirmation' in data
}

export function useAuthForm(): UseAuthFormInterface {
  const [currentLoginFields, setLoginFields] = useState<LoginFieldsInterface>({
    ...loginFields,
  })
  const [currentRegisterFields, setRegisterFields] =
    useState<RegisterFieldsInterface>({
      ...registerFields,
    })

  async function submitForm(
    data: LoginFieldsInterface | RegisterFieldsInterface
  ): Promise<void> {
    const url = isRegisterFields(data) ? '/register' : '/login'

    await apiRequest(url, 'POST', data)
    await getAndSetUser()
    await syncColorsWithDatabase()
  }

  async function submitAndGo(
    data: LoginFieldsInterface | RegisterFieldsInterface
  ): Promise<void> {
    const lang = getCurrentLang()

    await submitForm(data)
    navigateToUrl(`/${lang}/entities`)
  }

  return {
    loginFields: currentLoginFields,
    setLoginFields,
    loginInputs,
    registerFields: currentRegisterFields,
    setRegisterFields,
    registerInputs,
    submitForm,
    submitAndGo,
  }
}
