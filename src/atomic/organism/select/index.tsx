import type { JSX } from 'react'

import { Dropdown } from 'primereact/dropdown'
import styles from './index.module.scss'
import type { SelectInterface } from './types/interfaces'

export function AdSelect({
  className,
  adType,
  ...rest
}: SelectInterface): JSX.Element {
  const mergedClassName = [styles['ad-select'], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Dropdown
      {...rest}
      className={mergedClassName}
      pt={{
        root: { style: { display: 'flex', alignItems: 'center' } },
        trigger: { className: styles['ad-select-dropdown'] },
        panel: {
          className: styles['ad-select-overlay'],
          ...(adType ? { 'ad-type': adType } : ({} as Record<string, unknown>)),
        },
        wrapper: { className: styles['ad-select-list-container'] },
        list: { className: styles['ad-select-list'] },
        item: { className: styles['ad-select-option'] },
      }}
    />
  )
}
