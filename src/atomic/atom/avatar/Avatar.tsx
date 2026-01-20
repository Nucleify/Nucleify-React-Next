import type { JSX } from 'react'

import { Avatar } from 'primereact/avatar'
import type { AvatarInterface } from './types'

export default function AdAvatar(props: AvatarInterface): JSX.Element {
  return <Avatar {...props} />
}
