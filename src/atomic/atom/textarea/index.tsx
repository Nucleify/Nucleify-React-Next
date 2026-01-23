import type { JSX } from 'react'

import { InputTextarea } from 'primereact/inputtextarea'
import type { TextareaInterface } from './types'

export default function AdTextarea({
  className,
  adType,
  ...rest
}: TextareaInterface): JSX.Element {
  const mergedClassName = ['ad-textarea', className].filter(Boolean).join(' ')

  return <InputTextarea {...rest} className={mergedClassName} />
}

export type { TextareaInterface }
export { AdTextarea }
