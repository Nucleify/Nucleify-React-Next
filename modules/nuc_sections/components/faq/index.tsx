'use client'

import { type JSX, useEffect, useState } from 'react'

import {
  AdAccordion,
  apiHandle,
  type NucFaqQuestionInterface,
  type NucSectionFaqInterface,
  useSplitQuestions,
} from 'nucleify'
import styles from './index.module.scss'

export function NucSectionFaq({
  questions,
  site,
}: NucSectionFaqInterface): JSX.Element {
  const [resultsBySite, setResultsBySite] = useState<NucFaqQuestionInterface[]>(
    []
  )
  const [column1, setColumn1] = useState<NucFaqQuestionInterface[]>([])
  const [column2, setColumn2] = useState<NucFaqQuestionInterface[]>([])

  useEffect(() => {
    if (!site || questions) return

    void apiHandle<NucFaqQuestionInterface[]>({
      url: '/api/questions/get-site-questions',
      id: site,
      onSuccess: (data) => setResultsBySite(Array.isArray(data) ? data : []),
    }).catch(() => setResultsBySite([]))
  }, [questions, site])

  useEffect(() => {
    const sourceQuestions = questions || resultsBySite
    if (!sourceQuestions) return

    const normalizedQuestions = Array.isArray(sourceQuestions)
      ? sourceQuestions
      : [sourceQuestions]
    const splitQuestions = useSplitQuestions(normalizedQuestions)

    setColumn1(splitQuestions.column1)
    setColumn2(splitQuestions.column2)
  }, [questions, resultsBySite])

  const renderColumn = (panels: NucFaqQuestionInterface[]): JSX.Element => (
    <AdAccordion
      panels={panels}
      className={styles['p-accordion']}
      hexagons
      multiple
    />
  )

  return (
    <div className={`${styles['faq-section']} container`}>
      <p className={styles['faq-section-header']}>
        <span>F</span>
        <span>A</span>
        <span>Q</span>
      </p>

      <div className={styles['faq-section-questions']}>
        {column1.length > 0 && renderColumn(column1)}
        {column2.length > 0 && renderColumn(column2)}
      </div>
    </div>
  )
}
