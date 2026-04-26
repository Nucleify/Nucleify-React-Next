'use client'

import type { JSX } from 'react'
import { useEffect } from 'react'

import { articleRequests, NucArticleDashboard, useNucDialog } from 'nucleify'

export function NucArticlePage(): JSX.Element {
  const { closeDialog } = useNucDialog()
  const { loading, results, getAllArticles } = articleRequests(closeDialog)

  useEffect(() => {
    void getAllArticles(true).catch(() => undefined)
  }, [])

  return (
    <div className="panel-container">
      <NucArticleDashboard
        data={results ?? []}
        getData={getAllArticles}
        loading={loading}
      />
    </div>
  )
}
