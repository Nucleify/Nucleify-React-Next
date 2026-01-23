import type { JSX, ReactNode } from 'react'

import type { ParagraphInterface } from './types'

export default function AdParagraph({
  text,
  children,
}: ParagraphInterface & { children?: ReactNode }): JSX.Element {
  return (
    <p>
      {text}
      {children}
    </p>
  )
}

export type { ParagraphInterface }
export { AdParagraph }
