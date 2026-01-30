'use client'
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
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  if (!panels || panels.length === 0) return null

  return (
    <Accordion
      className={cx(styles['ad-accordion'], className)}
      {...rest}
      pt={{
        root: { className: styles['ad-accordion'] },
      }}
    >
      {panels.map((panel, index) => {
        const headerContent = (
          <div className="flex align-items-center relative">
            {hexagons && (
              <div className={styles['ad-hexagon-rows-container']}></div>
            )}
            <span>{panel.content}</span>
          </div>
        )

        return (
          <AccordionTab
            key={index}
            header={headerContent}
            pt={{
              root: { className: styles['ad-accordion-tab-root'] },
              headerAction: { className: styles['ad-accordion-header'] },
              headerIcon: { className: styles['ad-accordion-icon'] },
              content: { className: styles['ad-accordion-content'] },
            }}
          >
            {panel.answer}
          </AccordionTab>
        )
      })}
    </Accordion>
  )
}
