'use client'

import type { JSX } from 'react'
import { useEffect } from 'react'

import { AdColorPicker } from 'atomic'

import type { NucColorPickerInterface } from './types'
import { useColorPicker } from './utils'

export function NucColorPicker(props: NucColorPickerInterface): JSX.Element {
  const { itemColor, onItemColorChange, setColorValues } = useColorPicker(
    String(props.adType || '')
  )

  useEffect(() => {
    void setColorValues()
  }, [itemColor])

  return (
    <AdColorPicker
      {...props}
      value={itemColor}
      onChange={(event) => {
        const value = typeof event.value === 'string' ? event.value : ''
        onItemColorChange(value)
      }}
    />
  )
}
