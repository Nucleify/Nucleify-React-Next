import type { JSX } from 'react'

import { AutoComplete } from 'primereact/autocomplete'
import type { AutoCompleteInterface } from './types'

export default function AdAutoComplete({
  className = '',
  ...rest
}: AutoCompleteInterface): JSX.Element {
  const mergedClassName = ['ad-autocomplete', className]
    .filter(Boolean)
    .join(' ')

  return <AutoComplete {...rest} className={mergedClassName || undefined} />
}

export type * from './types'
export { AdAutoComplete }
