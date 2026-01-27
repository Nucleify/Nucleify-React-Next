import type { JSX } from 'react'

import { InputMask } from 'primereact/inputmask'
import type { InputMaskInterface } from './types'

export function AdInputMask(props: InputMaskInterface): JSX.Element {
  return <InputMask {...props} />
}
