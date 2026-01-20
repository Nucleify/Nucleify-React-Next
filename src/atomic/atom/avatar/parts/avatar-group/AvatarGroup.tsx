import type { JSX } from 'react'

import { AvatarGroup } from 'primereact/avatargroup'
import type { AvatarGroupInterface } from './types'

export default function AdAvatarGroup(
  props: AvatarGroupInterface
): JSX.Element {
  return <AvatarGroup {...props} />
}
