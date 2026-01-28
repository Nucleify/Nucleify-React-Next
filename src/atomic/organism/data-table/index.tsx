import type { JSX } from 'react'

import { DataTable } from 'primereact/datatable'
import type { DataTableInterface } from './types'

export function AdDataTable({
  className = '',
  adType,
  value,
  loading,
  rows,
  paginator,
  showHeaders,
  stripedRows = true,
  rowHover = true,
  filters,
  onFilter,
  ...rest
}: DataTableInterface): JSX.Element | null {
  if (!value || loading) return null

  const mergedClassName = ['ad-datatable', className].filter(Boolean).join(' ')

  return (
    <DataTable
      {...rest}
      value={value}
      rows={rows ?? 10}
      paginator={paginator ?? true}
      showHeaders={showHeaders ?? true}
      stripedRows={stripedRows}
      rowHover={rowHover}
      filters={filters}
      onFilter={onFilter}
      className={mergedClassName || undefined}
      {...(adType ? { 'ad-type': adType } : {})}
      pt={{
        root: { className: 'ad-datatable' },
        bodyRow: { className: 'ad-datatable-row' },
        paginator: {
          root: { className: 'ad-datatable-paginator' },
          content: { className: 'ad-datatable-paginator-content' },
          next: { className: 'ad-datatable-paginator-next' },
          last: { className: 'ad-datatable-paginator-last' },
          pcRowPerPageDropdown: {
            root: {
              className: 'ad-select',
              ...(adType ? { 'ad-type': adType } : {}),
            },
            label: { className: 'ad-select-label' },
            dropdown: { className: 'ad-select-dropdown' },
            overlay: {
              className: 'ad-select-overlay',
              ...(adType ? { 'ad-type': adType } : {}),
            },
            listContainer: { className: 'ad-select-list-container' },
            list: { className: 'ad-select-list' },
            option: { className: 'ad-select-option' },
          },
        },
      }}
    />
  )
}
