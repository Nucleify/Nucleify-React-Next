import type { JSX } from 'react'

import { RadioButton } from 'primereact/radiobutton'
import type { RadioButtonInterface } from './types'

export function AdRadioButton(props: RadioButtonInterface): JSX.Element {
  return <RadioButton {...props} />
}
