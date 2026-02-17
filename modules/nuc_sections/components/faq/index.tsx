'use client'
import { type JSX, useEffect, useState } from 'react'

import { AdAccordion, apiHandle } from 'atomic'

import styles from './index.module.scss'
import type {
  NucQuestionObjectInterface,
  NucSectionFaqInterface,
} from './types'
import { useSplitQuestions } from './utils'

export function NucSectionFaq({
  questions,
  site,
}: NucSectionFaqInterface): JSX.Element {
  const [resultsBySite, setResultsBySite] = useState<
    NucQuestionObjectInterface[]
  >([])
  const [column1, setColumn1] = useState<NucQuestionObjectInterface[]>([])
  const [column2, setColumn2] = useState<NucQuestionObjectInterface[]>([])

  useEffect(() => {
    if (!site || questions) return

    void apiHandle<NucQuestionObjectInterface[]>({
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

  const renderColumn = (panels: NucQuestionObjectInterface[]): JSX.Element => (
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
