import type { JSX } from 'react'

import { Fieldset } from 'primereact/fieldset'
import type { FieldsetInterface } from './types'

export function AdFieldset(props: FieldsetInterface): JSX.Element {
  return <Fieldset {...props} />
}
