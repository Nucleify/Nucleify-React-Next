import { AdIcon } from '@/atomic/atom/icon'
import type { NucCubeInterface } from './types'

export function NucCube({ icon = 'prime:box', shiny }: NucCubeInterface) {
  return (
    <div className={shiny ? 'cube shiny' : 'cube'}>
      <AdIcon icon={icon} />
    </div>
  )
}
