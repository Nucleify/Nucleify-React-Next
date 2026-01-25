import type { JSX } from 'react'

import type { MenubarProps } from 'primereact/menubar'
import { Menubar } from 'primereact/menubar'

export default function AdNavbar(props: MenubarProps): JSX.Element {
  return <Menubar {...props} />
}

export type { MenubarProps }
export { AdNavbar }
