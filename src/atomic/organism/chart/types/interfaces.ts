import type { ChartProps } from 'primereact/chart'

export interface ChartInterface extends Omit<ChartProps, 'width' | 'height'> {
  width?: number
  height?: number
  chartClass?: string
  chartMethodType?: string
  direction?: string
  example?: boolean
}
