'use client'
import type { ChartData } from 'chart.js'
import React, { useEffect, useMemo, useState } from 'react'

import {
  AdChart,
  type ChartType,
  type NucEntityChartInterface,
  useChart,
} from 'nucleify'

export const NucEntityChart: React.FC<NucEntityChartInterface> = (props) => {
  const { setChartData, setChartOptions } = useChart()

  const [chartData, setChartDataState] = useState<ChartData | null>(null)

  const chartOptions = useMemo(() => {
    if (!props.type) return {}

    return setChartOptions(props.type as ChartType, props.direction)
  }, [props.type, props.direction, setChartOptions])

  useEffect(() => {
    const updateData = () => {
      const dataToSet = setChartData(
        props.chartMethodType,
        props.data?.activity,
        props.data?.article,
        props.data?.contact,
        props.data?.file,
        props.data?.money,
        props.data?.question,
        props.data?.technology,
        props.data?.user,
        props.example
      )

      if (dataToSet) {
        setChartDataState(dataToSet)
      }
    }

    updateData()
  }, [props.chartMethodType, props.example, props.data, setChartData])

  return (
    <AdChart
      data={chartData}
      options={chartOptions}
      type={props.type}
      chartMethodType={props.chartMethodType}
      direction={props.direction}
      className={props.chartClass}
      example={props.example}
    />
  )
}
