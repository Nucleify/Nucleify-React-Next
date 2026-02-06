import type { JSX } from 'react'

import { Avatar } from 'primereact/avatar'
import type { AvatarInterface } from './types'

export function AdAvatar(props: AvatarInterface): JSX.Element {
  return <Avatar {...props} />
}
