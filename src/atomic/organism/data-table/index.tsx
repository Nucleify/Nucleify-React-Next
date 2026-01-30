import type { JSX } from 'react'

import { DataTable } from 'primereact/datatable'
import styles from './index.module.scss'
import type { DataTableInterface } from './types/interfaces'

export function AdDataTable({
  className = '',
  adType,
  value,
  loading,
  rows = 10,
  paginator = true,
  showHeaders = true,
  stripedRows = true,
  rowHover = true,
  filters,
  onFilter,
  children,
  ...rest
}: DataTableInterface): JSX.Element | null {
  if (!value || loading) return null

  const mergedClassName = [styles['ad-datatable'], className]
    .filter(Boolean)
    .join(' ')

  const adTypeAttribute = adType
    ? ({ 'ad-type': adType } as Record<string, string>)
    : {}

  return (
    <DataTable
      {...rest}
      value={value}
      rows={rows}
      paginator={paginator}
      showHeaders={showHeaders}
      stripedRows={stripedRows}
      rowHover={rowHover}
      filters={filters}
      onFilter={onFilter}
      className={mergedClassName}
      {...adTypeAttribute}
      pt={{
        root: { className: styles['ad-datatable'] },
        bodyRow: { className: styles['ad-datatable-row'] },
        paginator: {
          root: { className: styles['ad-datatable-paginator'] },
          pages: { className: styles['ad-datatable-paginator-pages'] },
          first: { className: styles['ad-datatable-paginator-first'] },
          prev: { className: styles['ad-datatable-paginator-prev'] },
          next: { className: styles['ad-datatable-paginator-next'] },
          last: { className: styles['ad-datatable-paginator-last'] },

          rowPerPageDropdown: {
            root: {
              className: styles['ad-select'],
              ...adTypeAttribute,
            },
            label: { className: styles['ad-select-label'] },
            trigger: { className: styles['ad-select-dropdown'] },
            panel: {
              className: styles['ad-select-overlay'],
              ...adTypeAttribute,
            },
            wrapper: { className: styles['ad-select-list-container'] },
            list: { className: styles['ad-select-list'] },
            item: { className: styles['ad-select-option'] },
          },
        },
      }}
    >
      {children}
    </DataTable>
  )
}
