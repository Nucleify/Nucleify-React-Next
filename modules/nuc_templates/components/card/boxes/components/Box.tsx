import type { NucBoxInterface } from 'atomic'

import { AdImage } from '@/atomic/atom/image'
import { AdParagraph } from '@/atomic/atom/paragraph'
import { AdCard } from '@/atomic/organism/card'
import styles from '../index.module.scss'

export function NucCardBox(props: NucBoxInterface) {
  return (
    <div className={styles['card-box']}>
      <AdCard>
        <div className={styles['card-box-heading']}>
          <AdImage
            src={props.src}
            alt={props.label}
            className={styles['card-box-heading-image']}
          />
          <span className={styles['card-box-heading-text']}>
            <AdParagraph text={props.label} />
          </span>
        </div>
        <div className={styles['card-box-description']}>
          <AdParagraph text={props.description} />
        </div>
      </AdCard>
    </div>
  )
}
