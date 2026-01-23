import type { JSX } from 'react'

import type { LogoInterface } from './types'

export default function AdLogo({
  dimensions = 44,
}: LogoInterface): JSX.Element {
  return (
    <svg width={dimensions} height={dimensions}>
      <use href="#logo-symbol" />
    </svg>
  )
}

export { default as AdLogoPaths } from './paths'
export { default as AdLogoSvg } from './svg'
export { default as AdLogoSymbol } from './symbol'
export type { LogoInterface, PathsInterface } from './types'
export { AdLogo }
