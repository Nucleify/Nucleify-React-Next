import type { JSX } from 'react'

import { InputNumber } from 'primereact/inputnumber'
import type { InputNumberInterface } from './types'

export default function AdInputNumber(
  props: InputNumberInterface
): JSX.Element {
  return <InputNumber {...props} />
}

export type { InputNumberInterface }
export { AdInputNumber }
