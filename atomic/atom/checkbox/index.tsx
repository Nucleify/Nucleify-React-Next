import { Checkbox } from 'primereact/checkbox'
import type { JSX } from 'react'

import type { CheckboxInterface } from './types'

export function AdCheckbox(props: CheckboxInterface): JSX.Element {
  return <Checkbox {...props} />
}
