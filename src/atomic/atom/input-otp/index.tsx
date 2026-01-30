import type { JSX } from 'react'

import { InputOtp } from 'primereact/inputotp'
import styles from './index.module.scss'
import type { InputOtpInterface } from './types'

export function AdInputOtp({
  className,
  adType,
  pt,
  ...rest
}: InputOtpInterface): JSX.Element {
  const mergedPt = {
    ...(pt as object),
    root: {
      className: [styles['ad-inputotp'], className].filter(Boolean).join(' '),
      ...(adType ? { 'ad-type': adType } : {}),
    },
  }

  return <InputOtp {...rest} pt={mergedPt} />
}
