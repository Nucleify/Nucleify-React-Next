import type { JSX } from 'react'

import { Accordion, AccordionTab } from 'primereact/accordion'
import type { AccordionInterface } from './types'

export default function AdAccordion({
  panels,
  hexagons,
  className = '',
  ...rest
}: AccordionInterface): JSX.Element | null {
  const mergedClassName = ['ad-accordion', className].filter(Boolean).join(' ')

  if (panels && panels.length > 0) {
    return (
      <Accordion className={mergedClassName || undefined} {...rest}>
        {panels.map((panel, index) => (
          <AccordionTab
            key={index}
            header={
              <>
                {hexagons && <div className="ad-hexagon-rows-container" />}
                {panel.content}
              </>
            }
            pt={{
              root: { className: 'ad-accordionpanel' },
              header: { className: 'ad-accordionheader' },
              headerAction: { className: 'ad-accordionheader-action' },
              headerIcon: { className: 'ad-accordionheader-toggle-icon' },
              content: { className: 'ad-accordion-content' },
            }}
          >
            {panel.answer}
          </AccordionTab>
        ))}
      </Accordion>
    )
  }

  return null
}

export type * from './types'
export { AdAccordion, AccordionTab as AdAccordionTab }
