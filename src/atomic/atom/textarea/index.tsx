'use client'
import type { JSX } from 'react'

import { InputTextarea } from 'primereact/inputtextarea'
import styles from './index.module.scss'
import type { TextareaInterface } from './types'

export function AdTextarea({
  className = '',
  adType,
  ...rest
}: TextareaInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    root: {
      className: cx(styles['ad-textarea'], className),
      // Wstrzykujemy atrybut ad-type bezpośrednio do elementu textarea
      ...(adType ? { 'ad-type': adType } : {}),
    },
  }

  return <InputTextarea {...rest} pt={pt} />
}
