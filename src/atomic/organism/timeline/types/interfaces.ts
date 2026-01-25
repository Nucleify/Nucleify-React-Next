import type { TimelineProps } from 'primereact/timeline'

export interface TimelineInterface extends TimelineProps {}

export interface TimelineEventInterface {
  status?: string
  date?: string
  icon?: string
  color?: string
}
