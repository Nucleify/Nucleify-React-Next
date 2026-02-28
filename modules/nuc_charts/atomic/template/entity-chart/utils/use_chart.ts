/* eslint-disable */
import { useMemo, useCallback } from 'react'
import { ChartOptions,ChartData } from 'chart.js'
import {allEntitiesKeys} from '../../../../tmp_Files/types/variables'
import { 
  colorKeys, 
  defaultColors 
} from '../../../../tmp_Files/constants/list'
import type { 
  UseColorsInterface, 
  ColorItemInterface, 
  ChartInterface, 
  ChartMethodType 
} from '../../../../tmp_Files/types/interfaces'
import type { ChartType } from '../../../../../../../next/src/atomic/organism/chart/types/variables'
import type { ObjectType } from '../../../../../../../next/src/atomic/organism/menu/types/interfaces'
import {
  cartesianChart,
  circularChart,
  pointerChart,
  prepareAnnualData,
  prepareCountData,
  radialChart,
} from './prepare'

export function localStorageGetItem(item: string): string | undefined {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(item) || undefined
  }
  return undefined
}

export function cookieGetItem(name: string): string | undefined {
  if (typeof window !== 'undefined') {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || undefined
    }
  }
  return undefined
}

export function getColorValue(key: string): string {
  return (
    cookieGetItem(key) || localStorageGetItem(key) || (defaultColors as any)[key] || ''
  )
}

export function useColors(): UseColorsInterface {
  const colors = useMemo(() => {
    const getItemColors = (key: string): ColorItemInterface => {
      const primary = getColorValue(`${key}-item-color-user`) || getColorValue(`${key}-item-color-system`)
      const hover = getColorValue(`${key}-item-hover-color-user`) || getColorValue(`${key}-item-hover-color-system`)
      const secondary = getColorValue(`${key}-item-secondary-color-user`) || getColorValue(`${key}-item-secondary-color-system`)
      return { primary, hover, secondary }
    }

    return Object.fromEntries(colorKeys.map((key) => [key, getItemColors(key)]))
  }, []) 

  return { colors }
}

export function useChart() {
  const { colors } = useColors()

  const exampleColors = useMemo(() => Object.fromEntries(
    [
      ['activity', '#FFB600'],
      ['user', '#64748B'],
      ['article', '#1187C7'],
      ['contact', '#10B981'],
      ['file', '#6DB910'],
      ['money', '#11C73B'],
      ['question', '#8CB910'],
      ['technology', '#B95910'],
    ].map(([key, primary]) => [key, { primary, secondary: `${primary}35` }])
  ), [])

  const generateExampleDataByMonth = useCallback(() => {
    const dataByMonth = Object.fromEntries(
      [...allEntitiesKeys].map((key) => [`${key}`, new Array(12).fill(0)])
    )
    for (let i = 0; i < 12; i++) {
      dataByMonth.article[i] = Math.floor(Math.random() * 100)
      dataByMonth.contact[i] = Math.floor(Math.random() * 100)
    }
    return dataByMonth
  }, [])

  const setChartData = useCallback((
    chartMethodType: ChartMethodType,
    activityLogData?: any[],
    articleData?: any[],
    contactData?: any[],
    fileData?: any[],
    moneyData?: any[],
    questionData?: any[],
    technologyData?: any[],
    userData?: any[],
    example?: boolean
  ): ChartData | null => { 
    try {
      const entitiesData = {
        activityLogData,
        articleData,
        contactData,
        fileData,
        moneyData,
        questionData,
        technologyData,
        userData,
      } as Record<string, ObjectType[]>

      const chartColors = example ? exampleColors : colors
      const exampleDataByMonth = example ? generateExampleDataByMonth() : undefined
      const stacked = true

      switch (chartMethodType) {
        case 'annual':
          return prepareAnnualData(entitiesData, chartColors, undefined, undefined, undefined, exampleDataByMonth) as ChartData
        case 'annual-stacked':
          return prepareAnnualData(entitiesData, chartColors, stacked, undefined, undefined, exampleDataByMonth) as ChartData
        case 'count':
          return prepareCountData(entitiesData, chartColors, exampleDataByMonth) as ChartData
        default:
          return null
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }, [colors, exampleColors, generateExampleDataByMonth])

  const setChartOptions = useCallback((chartType: ChartType, direction?: string): ChartOptions => {
    const options: ChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: { labels: { color: '#cce4dd' } },
      },
    }

    switch (chartType) {
      case 'bar':
      case 'line':
        return cartesianChart(options, direction === 'horizontal' ? 'horizontal' : undefined)
      case 'bubble':
        return pointerChart(options, { withRadius: true })
      case 'doughnut':
      case 'pie':
        return circularChart(options)
      case 'polarArea':
        return radialChart(options, { gridColor: '#cce4dd' })
      case 'radar':
        return radialChart(options, {
          angleLinesDisplay: false,
          gridColor: '#39404a50',
          tickColor: '#e6e6e6',
        })
      case 'scatter':
        return pointerChart(options)
      default:
        return options
    }
  }, [])

  return { setChartData, setChartOptions }
}