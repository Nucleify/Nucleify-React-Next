'use client'
import React from 'react'
import { AdCard } from '../../../../../../next/src/atomic/organism/card/index' 
import { NucEntityChart } from '../entity-chart/index.tsx'
import { useDisplayChartsStore } from '../../boson/utils/use_display_charts_store'
import type { NucEntityChartCardInterface } from '../entity-chart-card/types/interfaces'
import type { NucDisplayChartsStateInterface } from '../../../tmp_Files/types/interfaces.ts'
export const NucEntityChartCard: React.FC<NucEntityChartCardInterface> = (props) => {
  const displayCharts = useDisplayChartsStore()

  const isVisible = displayCharts[props.entity as keyof NucDisplayChartsStateInterface]

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