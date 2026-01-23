import type { JSX } from 'react'

import { Skeleton } from 'primereact/skeleton'
import type { SkeletonInterface } from './types'

export default function AdSkeleton({
  loading,
  ...rest
}: SkeletonInterface): JSX.Element | null {
  if (!loading) return null
  return <Skeleton {...rest} />
}

export type { SkeletonInterface }
export { AdSkeleton }
