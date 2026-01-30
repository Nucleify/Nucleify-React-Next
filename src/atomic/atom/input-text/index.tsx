import type { JSX } from 'react'

import { InputText } from 'primereact/inputtext'
import styles from './index.module.scss'
import type { InputTextInterface } from './types'

export function AdInputText({
  className,
  adType,
  ...rest
}: InputTextInterface): JSX.Element {
  const mergedClassName = [styles['ad-inputtext'], className]
    .filter(Boolean)
    .join(' ')

  return (
    <InputText
      {...rest}
      className={mergedClassName}
      {...(adType ? { 'ad-type': adType } : {})}
    />
  )
}
