import type { JSX } from 'react'

import { SpeedDial } from 'primereact/speeddial'
import type { SpeedDialInterface } from './types'

export default function AdSpeedDial({
  className,
  ...props
}: SpeedDialInterface): JSX.Element {
  return (
    <SpeedDial
      {...props}
      className={[className, 'ad-speed-dial'].filter(Boolean).join(' ')}
    />
  )
}

export type * from './types'
export { AdSpeedDial }
