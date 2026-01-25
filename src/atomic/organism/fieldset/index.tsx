import type { JSX } from 'react'

import { Fieldset } from 'primereact/fieldset'
import type { FieldsetInterface } from './types'

export default function AdFieldset(props: FieldsetInterface): JSX.Element {
  return <Fieldset {...props} />
}

export type { FieldsetInterface } from './types'
export { AdFieldset }
