import type { JSX } from 'react'

import type { IconInterface } from './types'

export function AdIcon({
  icon,
  size,
  className,
  storybook,
}: IconInterface): JSX.Element | null {
  if (!icon) return null

  if (icon.startsWith('prime:')) {
    const iconName = icon.replace('prime:', '')
    const iconClass = `pi pi-${iconName}`
    return (
      <i
        className={`${iconClass} ${className || ''}`.trim()}
        style={size ? { fontSize: size } : undefined}
      />
    )
  }

  const iconClass = icon.startsWith('pi-') ? `pi ${icon}` : `pi pi-${icon}`

  return (
    <i
      className={`${iconClass} ${className || ''}`.trim()}
      style={size ? { fontSize: size } : undefined}
    />
  )
}
