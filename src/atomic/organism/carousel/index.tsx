import type { JSX } from 'react'

import { Carousel } from 'primereact/carousel'
import type { CarouselInterface } from './types'

export default function AdCarousel({
  className = '',
  ...rest
}: CarouselInterface): JSX.Element {
  const mergedClassName = ['ad-carousel', className].filter(Boolean).join(' ')

  return <Carousel {...rest} className={mergedClassName || undefined} />
}

export type * from './types'
export { AdCarousel }
