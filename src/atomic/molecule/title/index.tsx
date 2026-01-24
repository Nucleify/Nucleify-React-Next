import type { JSX } from 'react'

import Link from 'next/link'
import { AdIcon, AdParagraph } from '../../atom'
import type { TitleInterface } from './types'

export default function AdTitle({
  adType,
  header,
  href = '#',
  count,
  countSecondary,
  textSecondary,
  icon,
  storybook,
}: TitleInterface): JSX.Element {
  return (
    <Link href={href} data-ad-type={adType} className="ad-tile">
      <div className="ad-tile-general">
        <div className="ad-tile-info">
          <div className="ad-tile-header">
            <AdParagraph text={header} />
          </div>
          <div className="ad-tile-count">
            <AdParagraph text={count !== undefined ? String(count) : ''} />
          </div>
        </div>
        <div className="ad-tile-icon-container">
          <AdIcon
            className="ad-tile-icon"
            icon={icon}
            adType={adType}
            storybook={storybook}
          />
        </div>
      </div>
      <div className="ad-tile-secondary">
        <div className="ad-tile-count">
          <AdParagraph
            text={countSecondary !== undefined ? `${countSecondary} new` : ''}
          />
        </div>
        <div className="ad-tile-text">
          <AdParagraph text={textSecondary} />
        </div>
      </div>
    </Link>
  )
}

export * from './types'
export type { TitleInterface }
export { AdTitle }
