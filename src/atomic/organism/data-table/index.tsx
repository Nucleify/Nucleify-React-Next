'use client'
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

  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const adTypeAttribute = adType
    ? ({ 'ad-type': adType } as Record<string, string>)
    : {}

  const pt = {
    root: { className: styles['ad-datatable'] },
    paginator: {
      root: { className: styles['ad-datatable-paginator'] },
      content: { className: styles['ad-datatable-paginator-content'] },
      firstPageButton: { className: styles['ad-datatable-paginator-button'] },
      prevPageButton: { className: styles['ad-datatable-paginator-button'] },
      nextPageButton: { className: styles['ad-datatable-paginator-button'] },
      lastPageButton: { className: styles['ad-datatable-paginator-button'] },
      pageButton: { className: styles['ad-datatable-paginator-button'] },
      rowPerPageDropdown: {
        root: {
          className: styles['ad-select'],
          ...adTypeAttribute,
          style: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.75em',
          },
        },
        input: { className: styles['ad-select-label'] },
        trigger: { className: styles['ad-select-trigger'] },
        panel: {
          className: styles['ad-select-panel'],
          ...adTypeAttribute,
        },
        wrapper: { className: styles['ad-select-list-container'] },
        list: { className: styles['ad-select-list'] },
        item: { className: styles['ad-select-item'] },
      },
    },
  }

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
      className={cx(styles['ad-datatable'], className)}
      {...adTypeAttribute}
      pt={pt}
    >
      {children}
    </DataTable>
  )
}
