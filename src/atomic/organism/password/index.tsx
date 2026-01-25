import type { JSX } from 'react'

import { Password } from 'primereact/password'
import type { PasswordInterface } from './types'

export default function AdPassword({
  className,
  adType,
  passwordsMatch,
  emptyPassword,
  emptyConfirmPassword,
  id,
  ...props
}: PasswordInterface): JSX.Element {
  return (
    <Password
      {...props}
      id={id}
      className={[className, 'ad-password'].filter(Boolean).join(' ')}
      data-ad-type={adType}
      data-passwords-match={passwordsMatch}
      data-empty-password={emptyPassword}
      data-empty-confirm-password={emptyConfirmPassword}
    />
  )
}

export type * from './types'
export { AdPassword }
