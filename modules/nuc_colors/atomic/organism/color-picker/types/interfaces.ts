import type { ColorPickerInterface } from 'atomic'

export interface NucColorPickerInterface extends ColorPickerInterface {}

export interface UseColorPickerInterface {
  itemColor: string | undefined
  onItemColorChange: (value: string) => void
  setColorValues: () => Promise<void>
}
