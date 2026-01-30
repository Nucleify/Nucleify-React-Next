import type { JSX } from 'react'

import { InputNumber } from 'primereact/inputnumber'
import styles from './index.module.scss'
import type { InputNumberInterface } from './types'

export function AdInputNumber({
  className,
  ...props
}: InputNumberInterface): JSX.Element {
  return (
    <InputNumber
      {...props}
      className={[styles['ad-inputnumber'], className]
        .filter(Boolean)
        .join(' ')}
      inputClassName={styles['ad-inputtext']}
    />
  )
}
