'use client'

import { useEffect, useState } from 'react'

import type { UseColorPickerInterface, UseColorsInterface } from 'atomic'
import {
  applyColorsWithSystemAndUser,
  createColorShades,
  setColorWithUserSuffix,
  updateUserColorInDatabase,
  useColors,
} from 'atomic'

export function useColorPicker(item: string): UseColorPickerInterface {
  const { colors }: UseColorsInterface = useColors()

  const [itemColor, setItemColor] = useState<string>(
    colors[item]?.primary || '#000000'
  )

  useEffect(() => {
    if (typeof document === 'undefined') return

    function updateItemColor(): void {
      const userKey = `--${item}-item-color-user`
      const computedStyle = getComputedStyle(document.documentElement)
      const newColor =
        computedStyle.getPropertyValue(userKey).trim() || '#000000'

      if (itemColor !== newColor) {
        setItemColor(newColor)
      }
    }

    document.addEventListener('colorUpdated', updateItemColor)

    return () => {
      document.removeEventListener('colorUpdated', updateItemColor)
    }
  }, [item, itemColor])

  async function setColorValues(): Promise<void> {
    const colorValue = itemColor?.startsWith('#') ? itemColor : `#${itemColor}`
    if (!colorValue) return

    const colorSettings = createColorShades(colorValue)

    const updatePromises: Promise<void>[] = []

    Object.entries(colorSettings).forEach(([key, value]) => {
      const colorKey = `${item}-item${key ? `-${key}` : ''}-color`
      setColorWithUserSuffix(colorKey, value)

      const userKey = `${colorKey}-user`
      updatePromises.push(updateUserColorInDatabase(userKey, value))
    })

    applyColorsWithSystemAndUser()

    await Promise.all(updatePromises)
  }

  function onItemColorChange(value: string): void {
    setItemColor(value)
  }

  return { itemColor, onItemColorChange, setColorValues }
}
