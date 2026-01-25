import type { JSX, ReactNode } from 'react'

import { Timeline } from 'primereact/timeline'
import type { TimelineEventInterface, TimelineInterface } from './types'

export interface AdTimelineProps extends TimelineInterface {
  events?: TimelineEventInterface[]
  renderEvent?: (event: TimelineEventInterface) => ReactNode
}

export default function AdTimeline({
  className,
  events,
  renderEvent,
  ...props
}: AdTimelineProps): JSX.Element {
  return (
    <Timeline
      {...props}
      value={events}
      className={[className, 'ad-timeline'].filter(Boolean).join(' ')}
      content={renderEvent}
    />
  )
}

export type * from './types'
export { AdTimeline }
