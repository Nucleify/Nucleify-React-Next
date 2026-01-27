import type { JSX } from 'react'

import { AdLogoPaths } from './paths'
import type { LogoInterface } from './types'

export function AdLogoSymbol({
  dimensions = 44,
  lighterColorClass,
  darkerColorClass,
}: LogoInterface): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2710 3140"
      width={dimensions}
      height={dimensions}
    >
      <symbol id="logo-symbol" viewBox="0 0 2710 3140">
        <AdLogoPaths
          lighterColorClass={lighterColorClass}
          darkerColorClass={darkerColorClass}
        />
      </symbol>
    </svg>
  )
}
