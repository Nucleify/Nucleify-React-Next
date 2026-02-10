import type { NucCardCategoryInterface } from 'atomic'

import { AdHeading } from '@/atomic/atom/heading'
import { AdParagraph } from '@/atomic/atom/paragraph'
import styles from './index.module.scss'

export function NucCardCategory(props: NucCardCategoryInterface) {
  return (
    <div className={styles['categories-container']}>
      <div className={styles['cards-container']}>
        <a href={props.url} className={styles['category-card']}>
          <img
            src={props.image}
            alt={props.altText}
            className={styles['category-card-image']}
          />
          <div className={styles['cta']}>
            <div className={styles['cta-title'] + ' shiny'}>
              <AdHeading tag={3} text={props.title} />
            </div>
            <div className={styles['cta-description']}>
              <AdParagraph text={props.description} />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
