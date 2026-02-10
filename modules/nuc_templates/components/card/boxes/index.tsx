import type { NucCardBoxesInterface } from 'atomic'

import { NucCardBox } from './components/Box.tsx'
import styles from './index.module.scss'

export function NucCardBoxes({ boxes }: NucCardBoxesInterface) {
  const technologiesImgUrl = '/img/technologies/'

  return (
    <div className={styles['boxes-container']}>
      {boxes?.map((box, index) => (
        <NucCardBox key={index} {...box} src={technologiesImgUrl + box.src} />
      ))}
    </div>
  )
}
