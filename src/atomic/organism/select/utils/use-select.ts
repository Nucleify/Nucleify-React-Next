import { useMemo } from 'react'

export interface SelectItemInterface {
  label: string
  icon: string
  command?: () => void
}

export type OpenDialogFunctionType = (
  action: string,
  object: Record<string, unknown> | undefined
) => void

const selectData = [
  ['Show', 'pi pi-eye', 'show'],
  ['Edit', 'pi pi-pencil', 'edit'],
  ['Delete', 'pi pi-trash', 'delete'],
] as const

export function useSelect(
  selectedObject: Record<string, unknown> | undefined,
  openDialog: OpenDialogFunctionType
) {
  if (typeof openDialog !== 'function') {
    throw new TypeError('openDialog is not a function')
  }

  const selectItems = useMemo(
    () =>
      selectData.map(([label, icon, action]) => ({
        label,
        icon,
        command: action ? () => openDialog(action, selectedObject) : undefined,
      })),
    [openDialog, selectedObject]
  )

  return { selectItems }
}
