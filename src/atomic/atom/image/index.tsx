import type { JSX } from 'react'

import { Image } from 'primereact/image'
import type { ImageInterface } from './types'

export function AdImage({
  fetchpriority,
  ...rest
}: ImageInterface): JSX.Element {
  return <Image {...rest} />
}
