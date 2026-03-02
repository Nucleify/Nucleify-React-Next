/* eslint-disable */

import {
  displayChartList,
  type NucDisplayChartsStateInterface,
  type NucDisplayChartsStateKeyType,
} from 'nucleify'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const toggleState = (currentValue: boolean): boolean => !currentValue

export const initialStoreState = (list: string[], defaultValue: boolean) => {
  return list.reduce((acc, key) => ({ ...acc, [key]: defaultValue }), {})
}

export const setAllStatesTo = (
  currentState: Record<string, boolean>,
  value: boolean
) => {
  const newState = { ...currentState }
  Object.keys(newState).forEach((key) => {
    if (typeof newState[key] === 'boolean') newState[key] = value
  })
  return newState
}

interface DisplayChartsActions {
  toggle: (key: NucDisplayChartsStateKeyType) => void
  setAllTo: (value: boolean) => void
}

type DisplayChartsStore = NucDisplayChartsStateInterface & DisplayChartsActions

export const useDisplayChartsStore = create<DisplayChartsStore>()(
  persist(
    (set) => ({
      ...(initialStoreState(
        displayChartList,
        true
      ) as NucDisplayChartsStateInterface),

      toggle: (key) =>
        set((state) => ({
          ...state,
          [key]: toggleState(
            state[key as keyof NucDisplayChartsStateInterface] as boolean
          ),
        })),

      setAllTo: (value) =>
        set((state) => ({
          ...(setAllStatesTo(state, value) as NucDisplayChartsStateInterface),
        })),
    }),
    {
      name: 'display-charts-storage',
    }
  )
)
