'use client'

import type { JSX } from 'react'
import { useEffect } from 'react'

import { contactRequests, NucContactDashboard, useNucDialog } from 'nucleify'

export function NucContactPage(): JSX.Element {
  const { closeDialog } = useNucDialog()
  const { loading, results, getAllContacts } = contactRequests(closeDialog)

  useEffect(() => {
    void getAllContacts(true).catch(() => undefined)
  }, [])

  return (
    <div className="panel-container">
      <NucContactDashboard
        data={results ?? []}
        getData={getAllContacts}
        loading={loading}
      />
    </div>
  )
}
