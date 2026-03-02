import type { ColorItemInterface, UseColorsInterface } from 'atomic'
import { colorKeys, getColorValue } from 'atomic'

export function useColors(): UseColorsInterface {
  const getItemColors = (key: string): ColorItemInterface => {
    const primary =
      getColorValue(`${key}-item-color-user`) ||
      getColorValue(`${key}-item-color-system`)
    const hover =
      getColorValue(`${key}-item-hover-color-user`) ||
      getColorValue(`${key}-item-hover-color-system`)
    const secondary =
      getColorValue(`${key}-item-secondary-color-user`) ||
      getColorValue(`${key}-item-secondary-color-system`)

    return { primary, hover, secondary }
  }

  const colors = Object.fromEntries(
    colorKeys.map((key) => [key, getItemColors(key)])
  )

  return {
    colors,
  }
}
