import type { JSX } from 'react'

import { Galleria } from 'primereact/galleria'
import type { GalleriaInterface } from './types'

export default function AdGalleria({
  items,
  value,
  className,
  ...rest
}: GalleriaInterface): JSX.Element {
  const images = value ?? items ?? []
  return (
    <Galleria
      {...rest}
      value={images}
      className={[className, 'ad-galleria'].filter(Boolean).join(' ')}
    />
  )
}

export type { GalleriaImageItem, GalleriaInterface } from './types'
export { AdGalleria }
