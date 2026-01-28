import type { JSX } from 'react'

import { MeterGroup } from 'primereact/metergroup'
import type { MeterGroupInterface } from './types'

export function AdMeterGroup(props: MeterGroupInterface): JSX.Element {
  return <MeterGroup {...props} />
}
