import type { JSX, ReactNode } from 'react'

import type { SelectInterface } from './types'

export default function AdSelect({
  options,
  className,
  children,
}: {
  options?: SelectInterface[]
  className?: string
  children?: ReactNode
}): JSX.Element {
  if (options && options.length > 0) {
    return (
      <ul className={[className, 'ad-select'].filter(Boolean).join(' ')}>
        {options.map((option, idx) => (
          <li key={idx} className="ad-select-option" onClick={option.command}>
            {option.icon && (
              <span className={option.icon} style={{ marginRight: 8 }} />
            )}
            {option.label}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className={[className, 'ad-select'].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export type * from './types'
export { AdSelect }
