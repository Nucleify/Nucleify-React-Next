import type { JSX } from 'react'

import type { LogoInterface } from './types'

export function AdLogo({
  dimensions = 44,
  adType,
}: LogoInterface): JSX.Element {
  return (
    <svg width={dimensions} height={dimensions}>
      <use href="#logo-symbol" />
    </svg>
  )
}
