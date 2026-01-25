import type { JSX } from 'react'

import { MultiSelect } from 'primereact/multiselect'
import type { MultiSelectInterface } from './types'

export default function AdMultiSelect(
  props: MultiSelectInterface
): JSX.Element {
  return <MultiSelect {...props} />
}

export type { MultiSelectInterface } from './types'
export { AdMultiSelect }
