import type { JSX } from 'react'

import { ScrollTop } from 'primereact/scrolltop'
import type { ScrollTopInterface } from './types'

export function AdScrollTop(props: ScrollTopInterface): JSX.Element {
  return <ScrollTop {...props} />
}
