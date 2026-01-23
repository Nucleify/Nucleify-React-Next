import type { JSX } from 'react'

import { InputMask } from 'primereact/inputmask'
import type { InputMaskInterface } from './types'

export default function AdInputMask(props: InputMaskInterface): JSX.Element {
  return <InputMask {...props} />
}

export type { InputMaskInterface }
export { AdInputMask }
