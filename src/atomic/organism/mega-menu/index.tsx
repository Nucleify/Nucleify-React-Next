import type { JSX } from 'react'

import { MegaMenu } from 'primereact/megamenu'
import type { MegaMenuInterface } from './types'

export default function AdMegaMenu({
  className,
  ...props
}: MegaMenuInterface): JSX.Element {
  return (
    <MegaMenu
      {...props}
      className={[className, 'ad-megamenu'].filter(Boolean).join(' ')}
    />
  )
}

export type * from './types'
export { AdMegaMenu }
