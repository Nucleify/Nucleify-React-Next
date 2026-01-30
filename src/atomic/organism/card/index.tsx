import type { JSX } from 'react'

import { Card } from 'primereact/card'
import styles from './index.module.scss'
import type { CardInterface } from './types/interfaces'

export function AdCard({
  className = '',
  header,
  title,
  subTitle,
  children,
  ...rest
}: CardInterface): JSX.Element {
  const mergedClassName = [styles['ad-card'], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Card
      {...rest}
      className={mergedClassName}
      header={header}
      title={title}
      subTitle={subTitle}
    >
      {children}
    </Card>
  )
}
