import type { CSSProperties, JSX } from 'react'

import styles from './index.module.scss'
import type { IconInterface } from './types'

export function AdIcon({
  icon,
  size,
  className = '',
  style,
  ...rest
}: IconInterface & { style?: CSSProperties }): JSX.Element | null {
  if (!icon) return null

  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const iconClass = `pi pi-${icon.replace('prime:', '')}`

  const mergedStyle: CSSProperties = {
    ...(size ? { fontSize: size } : {}),
    ...style,
  }

  const mergedClassName = cx(iconClass, styles['prime-icon'], className)

  return <i className={mergedClassName} style={mergedStyle} {...rest} />
}
