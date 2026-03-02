'use client'

import React from 'react'

import {
  AdCard,
  type NucDisplayChartsStateInterface,
  NucEntityChart,
  type NucEntityChartCardInterface,
  useDisplayChartsStore,
} from 'nucleify'
export const NucEntityChartCard: React.FC<NucEntityChartCardInterface> = (
  props
) => {
  const displayCharts = useDisplayChartsStore()

  const isVisible =
    displayCharts[props.entity as keyof NucDisplayChartsStateInterface]

  if (!isVisible) return null

  const chartClassName = `${props.chartClass || ''} ${props.loading ? 'chart-loading' : 'chart-loaded'}`

  return (
    <AdCard className="nuc-card-base entity-chart-card">
      <NucEntityChart
        data={props.data}
        chartMethodType={props.chartMethodType}
        type={props.type}
        direction={props.direction}
        className={chartClassName}
        example={props.example}
      />
    </AdCard>
  )
}
