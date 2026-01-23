import type { JSX } from 'react'

import { InputText } from 'primereact/inputtext'
import type { InputTextInterface } from './types'

export default function AdInputText({
  className,
  adType,
  ...rest
}: InputTextInterface): JSX.Element {
  const mergedClassName = ['ad-inputtext', className].filter(Boolean).join(' ')

  return (
    <InputText
      {...rest}
      className={mergedClassName}
      {...(adType ? { 'ad-type': adType } : {})}
    />
  )
}

export type { InputTextInterface }
export { AdInputText }
