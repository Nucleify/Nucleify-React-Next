import type { LoadingType, NucEntityChartInterface } from 'nucleify'

export interface NucEntityChartCardInterface extends NucEntityChartInterface {
  loading?: boolean
  chartClass?: string
  entity: string
}
