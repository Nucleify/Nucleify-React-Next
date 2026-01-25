import type { JSX } from 'react'

import { Panel } from 'primereact/panel'
import type { PanelInterface } from './types'

export default function AdPanel({
  className,
  content,
  children,
  ...props
}: PanelInterface): JSX.Element {
  return (
    <Panel
      {...props}
      className={[className, 'ad-panel'].filter(Boolean).join(' ')}
    >
      {content ?? children}
    </Panel>
  )
}

export type * from './types'
export { AdPanel }
