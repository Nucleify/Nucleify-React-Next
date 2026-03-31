import type { Dispatch, SetStateAction } from 'react'

import type { InputInterface } from '../../../../../../nuc_fields'
import type { LoginFieldsInterface } from '../Login'
import type { RegisterFieldsInterface } from '../Register'
import type { LoginInputInterface, RegisterInputInterface } from './variables'

export interface UseAuthFormInterface {
  loginFields: LoginFieldsInterface
  setLoginFields: Dispatch<SetStateAction<LoginFieldsInterface>>
  loginInputs: readonly LoginInputInterface[]
  registerFields: RegisterFieldsInterface
  setRegisterFields: Dispatch<SetStateAction<RegisterFieldsInterface>>
  registerInputs: readonly RegisterInputInterface[]
  submitForm: (
    data: LoginFieldsInterface | RegisterFieldsInterface
  ) => Promise<void>
  submitAndGo: (
    data: LoginFieldsInterface | RegisterFieldsInterface
  ) => Promise<void>
}
