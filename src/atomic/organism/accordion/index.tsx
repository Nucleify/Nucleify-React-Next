import type { JSX } from 'react'

import { Accordion, AccordionTab } from 'primereact/accordion'
import styles from './index.module.scss'
import type { AccordionInterface } from './types/interfaces'

export function AdAccordion({
  panels,
  hexagons,
  className = '',
  ...rest
}: AccordionInterface): JSX.Element | null {
  const mergedClassName = [styles['ad-accordion'], className]
    .filter(Boolean)
    .join(' ')

  if (!panels || panels.length === 0) return null

  return (
    <Accordion className={mergedClassName} {...rest}>
      {panels.map((panel, index) => (
        <AccordionTab
          key={index}
          header={
            <div className="flex align-items-center">
              {hexagons && (
                <div className={styles['ad-hexagon-rows-container']} />
              )}
              <span>{panel.content}</span>
            </div>
          }
          className={styles['ad-accordionpanel']}
          pt={{
            headerAction: { className: styles['ad-accordionheader'] },
            headerIcon: { className: styles['ad-accordionheader-toggle-icon'] },
            content: { className: styles['ad-accordion-content'] },
          }}
        >
          {panel.answer}
        </AccordionTab>
      ))}
    </Accordion>
  )
}
