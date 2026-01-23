import type { JSX } from 'react'

import { Rating } from 'primereact/rating'
import type { RatingInterface } from './types'

export default function AdRating(props: RatingInterface): JSX.Element {
  return <Rating {...props} />
}

export type { RatingInterface }
export { AdRating }
