import {
  type ChartSettingsGroupInterface,
  modulesGroups,
  type NucDisplayChartsStateKeyType,
} from 'nucleify'

export const BASE_CHART_KEYS = [
  'Activity',
  'Admin',
  'Article',
  'Contact',
  'File',
  'Money',
  'Question',
  'Structural',
  'Technology',
] as const

export function getDisplayChartGroups(): ChartSettingsGroupInterface[] {
  return [
    {
      name: 'nuc_admin',
      items: ['Admin'],
    },
    ...modulesGroups(true),
  ]
}

export function getDisplayChartList(): NucDisplayChartsStateKeyType[] {
  return getDisplayChartGroups().flatMap(
    (group) => group.items || []
  ) as NucDisplayChartsStateKeyType[]
}

export const displayChartGroups: ChartSettingsGroupInterface[] =
  getDisplayChartGroups()
export const displayChartList: NucDisplayChartsStateKeyType[] =
  getDisplayChartList()
