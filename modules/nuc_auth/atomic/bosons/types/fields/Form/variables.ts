import type { InputInterface } from '../../../../../../nuc_fields'
import type { LoginFieldsInterface } from '../Login'
import type { RegisterFieldsInterface } from '../Register'

export type LoginFieldKey = keyof LoginFieldsInterface
export type RegisterFieldKey = keyof RegisterFieldsInterface

export type LoginInputInterface = InputInterface<LoginFieldKey>
export type RegisterInputInterface = InputInterface<RegisterFieldKey>
