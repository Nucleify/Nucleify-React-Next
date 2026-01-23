import type { JSX } from 'react'

import { InputOtp } from 'primereact/inputotp'
import type { InputOtpInterface } from './types'

export default function AdInputOtp({
  className,
  adType,
  pt,
  ...rest
}: InputOtpInterface): JSX.Element {
  const mergedClassName = ['ad-inputotp', className].filter(Boolean).join(' ')

  const mergeInput = (
    input: Record<string, unknown> | undefined
  ): Record<string, unknown> => ({
    ...input,
    className: ['ad-inputtext', input?.className as string | undefined]
      .filter(Boolean)
      .join(' '),
    ...(adType ? { 'ad-type': adType } : {}),
  })

  const mergedPt =
    typeof pt === 'object' && pt !== null && !Array.isArray(pt)
      ? {
          ...pt,
          input: mergeInput(pt.input as Record<string, unknown> | undefined),
        }
      : (pt ?? { input: mergeInput(undefined) })

  return <InputOtp {...rest} pt={mergedPt} className={mergedClassName} />
}

export type { InputOtpInterface }
export { AdInputOtp }
