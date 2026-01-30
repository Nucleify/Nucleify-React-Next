import type { CSSProperties, JSX, ReactNode } from 'react'

import { Button } from 'primereact/button'
import { AdIcon } from '../icon'
import { AdImage } from '../image'
import styles from './index.module.scss'
import type { ButtonInterface } from './types'

const cx = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(' ')

export function AdButton({
  adType,
  media,
  variant,
  rounded,
  severity,
  width,
  height,
  gap,
  padding,
  label,
  icon,
  src,
  alt,
  children,
  className,
  style,
  ...rest
}: ButtonInterface & { children?: ReactNode }): JSX.Element {
  const mergedStyle: CSSProperties = {
    ...style,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(gap ? { gap } : {}),
    ...(padding ? { padding } : {}),
  }

  const mergedClassName = cx(
    styles['ad-button'],
    className,
    media && styles[`${media}-button`],
    variant && styles[`${variant}-button`],
    rounded && styles['rounded-button']
  )

  return (
    <Button
      {...rest}
      {...(adType ? { 'ad-type': adType } : {})}
      severity={severity}
      rounded={rounded}
      className={mergedClassName || undefined}
      style={mergedStyle}
    >
      {src && <AdImage src={src} alt={alt} />}
      {icon && <AdIcon icon={icon} />}
      {label && <span>{label}</span>}
      {children}
    </Button>
  )
}
