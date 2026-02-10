import { AdHeading } from '@/atomic/atom/heading'
import { AdImage } from '@/atomic/atom/image'
import { AdParagraph } from '@/atomic/atom/paragraph'
import styles from './index.module.scss'
import type { NucFlipCardInterface } from './types'

export function FlipCard(props: NucFlipCardInterface) {
  return (
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-front']}>
          <AdImage
            src={props.frontImage}
            width={props.frontImageWidth}
            height={props.frontImageHeight}
            alt={props.frontImageAlt}
            className={styles['flip-card-image']}
          />
          <div className={styles['flip-card-header']}>
            <AdHeading tag={3} text={props.frontTitle} />
          </div>
        </div>
        <div className={styles['flip-card-back']}>
          <div className={props.backContentClass}>
            <AdParagraph text={props.backContent} />
          </div>
        </div>
      </div>
    </div>
  )
}
