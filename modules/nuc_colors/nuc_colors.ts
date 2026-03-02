import { colorsClientPlugin, colorsServerPlugin } from 'nucleify'

export function registerNucColors(): void {
  colorsServerPlugin()
  colorsClientPlugin()
}
