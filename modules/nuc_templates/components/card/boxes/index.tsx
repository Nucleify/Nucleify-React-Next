import type { NucCardBoxesInterface } from 'atomic'

import { Box } from './components/Box.tsx'
import styles from './index.module.scss'

export function Boxes({ boxes }: NucCardBoxesInterface) {
  const technologiesImgUrl = '/img/technologies/'

  return (
    <div className={styles['boxes-container']}>
      {boxes?.map((box, index) => (
        <Box key={index} {...box} src={technologiesImgUrl + box.src} />
      ))}
    </div>
  )
}
