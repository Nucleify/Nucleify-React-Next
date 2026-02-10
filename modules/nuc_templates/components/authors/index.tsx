import { AdImage } from '@/atomic/atom/image'
import { AdAnchor } from '@/atomic/molecule/anchor'
import { AdDeferredContent } from '@/atomic/organism/deferred-content'
import styles from './index.module.scss'

export function NucAuthors() {
  return (
    <AdAnchor
      href="https://github.com/Atomic-IT"
      className={styles['template-authors']}
      rel="noreferrer"
      target="_blank"
    >
      made by Atomic IT
      <AdDeferredContent>
        <AdImage
          src="/img/atomic-logo.webp"
          width="28"
          height="28"
          alt="Atomic IT logo"
          loading="lazy"
        />
      </AdDeferredContent>
    </AdAnchor>
  )
}
