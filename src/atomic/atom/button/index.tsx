import type { CSSProperties, JSX, ReactNode } from 'react'

import { Button } from 'primereact/button'
import AdIcon from '../icon'
import AdImage from '../image'
import type { ButtonInterface } from './types'

const cx = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(' ')

export default function AdButton({
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
    ...(gap ? { gap } : {}),
    ...(padding ? { padding } : {}),
  }

  const mergedClassName = cx(
    'ad-button',
    className,
    media && `${media}-button`,
    variant && `${variant}-button`,
    rounded && 'rounded-button'
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
      {label && <>{label}</>}
      {children}
    </Button>
  )
}

export type { ButtonInterface } from './types'
export { AdButton }
