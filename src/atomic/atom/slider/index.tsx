import type { JSX } from 'react'

import { Slider } from 'primereact/slider'
import type { SliderInterface } from './types'

export default function AdSlider({
  adType,
  ...rest
}: SliderInterface): JSX.Element {
  return <Slider {...rest} />
}

export type { SliderInterface }
export { AdSlider }
