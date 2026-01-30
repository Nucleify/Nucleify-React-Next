import type { DropdownProps } from 'primereact/dropdown'
import type { SelectItemInterface } from './Item/interfaces'

export interface SelectInterface extends DropdownProps {
  adType?: string
  className?: string
  options?: SelectItemInterface[]
}
