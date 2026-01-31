import type { JSX } from 'react'

import { OrganizationChart } from 'primereact/organizationchart'
import type { OrganizationChartInterface } from './types'

export function AdOrganizationChart(
  props: OrganizationChartInterface
): JSX.Element {
  return <OrganizationChart {...props} />
}
