import type { JSX } from 'react'

import { RadioButton } from 'primereact/radiobutton'
import type { RadioButtonInterface } from './types'

export default function AdRadioButton(
  props: RadioButtonInterface
): JSX.Element {
  return <RadioButton {...props} />
}

export type { RadioButtonInterface }
export { AdRadioButton }
