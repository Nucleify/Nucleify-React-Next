import type { JSX } from 'react'

import { InputNumber } from 'primereact/inputnumber'
import type { InputNumberInterface } from './types'

export function AdInputNumber(props: InputNumberInterface): JSX.Element {
  return <InputNumber {...props} />
}
