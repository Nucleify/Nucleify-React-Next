'use client'
import type { JSX } from 'react'
import { useRef } from 'react'

import { OverlayPanel } from 'primereact/overlaypanel'
import { AdButton } from '@/atomic/atom/button'
import styles from './index.module.scss'
import type { PopoverInterface } from './types'

export function AdPopover(props: PopoverInterface): JSX.Element {
  const {
    className,
    children,
    position,
    src,
    buttonClass,
    buttonStyle,
    buttonText,
    popoverClass,
    icon,
    ...rest
  } = props

  const opRef = useRef<OverlayPanel>(null)
  const showButton = !!(buttonText || icon || src)

  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const overlayPanelProps = {
    ...rest,
    ref: opRef,
    className: cx(
      className,
      popoverClass,
      styles['ad-popover'],
      position && styles[position],
      position
    ),
    'data-position': position,
    pt: {
      content: { className: styles['ad-popover-content'] },
    },
  }

  return (
    <>
      {showButton && (
        <AdButton
          label={buttonText}
          icon={icon}
          src={src}
          className={cx(
            buttonClass,
            styles['ad-popover-toggle'],
            position && styles[position],
            position
          )}
          style={typeof buttonStyle === 'object' ? buttonStyle : undefined}
          rounded
          onClick={(e) => opRef.current?.toggle(e)}
        />
      )}
      <OverlayPanel {...overlayPanelProps}>{children}</OverlayPanel>
    </>
  )
}
