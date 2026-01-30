import type { JSX } from 'react'

import styles from './index.module.scss'
import { AdLogoPaths } from './paths'
import type { LogoInterface } from './types'

export function AdLogoSymbol({
  dimensions,
  lighterColorClass,
  darkerColorClass,
}: LogoInterface): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2710 3140"
      width={dimensions || 44}
      height={dimensions || 44}
      style={{ display: 'none' }}
    >
      <symbol id="logo-symbol" viewBox="0 0 2710 3140">
        <AdLogoPaths
          lighterColorClass={[styles['lighter-color'], lighterColorClass]
            .filter(Boolean)
            .join(' ')}
          darkerColorClass={[styles['darker-color'], darkerColorClass]
            .filter(Boolean)
            .join(' ')}
        />
      </symbol>
    </svg>
  )
}
