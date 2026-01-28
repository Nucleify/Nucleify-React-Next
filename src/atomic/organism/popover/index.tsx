'use client'
import type { JSX, ReactNode } from 'react'
import { useRef } from 'react'

import { OverlayPanel } from 'primereact/overlaypanel'
import { AdButton } from '@/atomic/atom/button'
import type { PopoverInterface } from './types'

const EXCLUDED_PROPS = [
  'src',
  'buttonClass',
  'buttonStyle',
  'popoverClass',
  'icon',
]

function filterProps<T extends object>(
  props: T,
  exclude: string[]
): Partial<T> {
  const filtered = {} as Partial<T>
  ;(Object.keys(props) as Array<keyof T>).forEach((key) => {
    if (!exclude.includes(key as string)) filtered[key] = props[key]
  })
  return filtered
}

export function AdPopover({
  className,
  children,
  position,
  src,
  buttonClass,
  buttonStyle,
  buttonText,
  popoverClass,
  icon,
  ...props
}: PopoverInterface & { children?: ReactNode }): JSX.Element {
  const opRef = useRef<OverlayPanel>(null)
  const showButton = buttonText || icon || src
  const overlayPanelProps = {
    ...filterProps(props, EXCLUDED_PROPS),
    ref: opRef,
    className: [className, popoverClass, 'ad-popover', position]
      .filter(Boolean)
      .join(' '),
    'data-position': position,
  }
  return (
    <>
      {showButton && (
        <AdButton
          label={buttonText}
          icon={icon}
          src={src}
          className={[buttonClass, 'ad-popover-toggle', position]
            .filter(Boolean)
            .join(' ')}
          style={typeof buttonStyle === 'string' ? undefined : buttonStyle}
          rounded
          onClick={(e) => opRef.current?.toggle(e)}
        />
      )}
      <OverlayPanel {...overlayPanelProps}>{children}</OverlayPanel>
    </>
  )
}
