'use client'
import type { CSSProperties, JSX } from 'react'

import styles from './index.module.scss'
import type { IconInterface } from './types'
import { getPrimeIconClass } from './utils'

export function AdIcon({
  icon,
  size,
  className,
  style,
  storybook,
  ...rest
}: IconInterface & { style?: CSSProperties }): JSX.Element | null {
  if (!icon) return null

  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  let iconClass = getPrimeIconClass(icon, storybook)

  if (!iconClass) {
    if (icon.startsWith('prime:')) {
      iconClass = `pi pi-${icon.replace('prime:', '')}`
    } else if (icon.startsWith('pi-')) {
      iconClass = `pi ${icon}`
    } else {
      iconClass = `pi pi-${icon}`
    }
  }

  const mergedStyle: CSSProperties = {
    ...style,
    ...(size ? { fontSize: size } : {}),
  }

  const mergedClassName = cx(iconClass, styles['ad-icon'], className)

  return <i className={mergedClassName} style={mergedStyle} {...rest} />
}
