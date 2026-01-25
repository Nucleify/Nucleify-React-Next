import type { JSX } from 'react'

import { MeterGroup } from 'primereact/metergroup'
import type { MeterGroupInterface } from './types'

export default function AdMeterGroup(props: MeterGroupInterface): JSX.Element {
  return <MeterGroup {...props} />
}

export type * from './types'
export { AdMeterGroup }
