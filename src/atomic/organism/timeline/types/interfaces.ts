import type { ReactNode } from 'react'

import type { TimelineProps } from 'primereact/timeline'

export interface TimelineInterface extends TimelineProps {}

export interface TimelineEventInterface {
  status?: string
  date?: string
  icon?: string
  color?: string
}

export interface AdTimelineProps extends TimelineInterface {
  events?: TimelineEventInterface[]
  renderEvent?: (event: TimelineEventInterface) => ReactNode
}
