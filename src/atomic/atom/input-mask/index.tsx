import type { JSX } from 'react'

import { InputMask } from 'primereact/inputmask'
import styles from './index.module.scss'
import type { InputMaskInterface } from './types'

export function AdInputMask({
  className,
  ...props
}: InputMaskInterface): JSX.Element {
  const mergedClassName = [styles['ad-inputmask'], className]
    .filter(Boolean)
    .join(' ')

  return <InputMask {...props} className={mergedClassName} />
}
