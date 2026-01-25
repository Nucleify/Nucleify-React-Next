import type { JSX } from 'react'

import { OrganizationChart } from 'primereact/organizationchart'
import type { OrganizationChartInterface } from './types'

export default function AdOrganizationChart(
  props: OrganizationChartInterface
): JSX.Element {
  return <OrganizationChart {...props} />
}

export type * from './types'
export { AdOrganizationChart }
