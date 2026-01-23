import type { JSX } from 'react'

import type { HeadingInterface } from './types'
import { chooseHeading } from './utils'

export default function AdHeading({
  tag,
  text,
  children,
}: HeadingInterface): JSX.Element {
  const Tag = chooseHeading(tag)

  return (
    <Tag>
      {text}
      {children}
    </Tag>
  )
}

export type { HeadingInterface, HeadingType } from './types'
export { chooseHeading } from './utils'
export { AdHeading }
