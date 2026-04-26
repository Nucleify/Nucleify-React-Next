'use client'

import type { JSX } from 'react'
import { useEffect } from 'react'

import { moneyRequests, NucMoneyDashboard, useNucDialog } from 'nucleify'

export function NucMoneyPage(): JSX.Element {
  const { closeDialog } = useNucDialog()
  const { loading, results, getAllMoney } = moneyRequests(closeDialog)

  useEffect(() => {
    void getAllMoney(true).catch(() => undefined)
  }, [])

  return (
    <div className="panel-container">
      <NucMoneyDashboard
        data={results ?? []}
        getData={getAllMoney}
        loading={loading}
      />
    </div>
  )
}
