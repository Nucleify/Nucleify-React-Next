import type { JSX } from 'react'

import { MultiSelect } from 'primereact/multiselect'
import type { MultiSelectInterface } from './types'

export function AdMultiSelect(props: MultiSelectInterface): JSX.Element {
  return <MultiSelect {...props} />
}
