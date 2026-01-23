import type { JSX } from 'react'

import { Checkbox } from 'primereact/checkbox'
import type { CheckboxInterface } from './types'

export default function AdCheckbox(props: CheckboxInterface): JSX.Element {
  return <Checkbox {...props} />
}

export type { CheckboxInterface }
export { AdCheckbox }
