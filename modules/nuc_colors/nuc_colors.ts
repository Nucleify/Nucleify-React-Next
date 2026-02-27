import { colorsClientPlugin, colorsServerPlugin } from './plugins'

export function registerNucColors(): void {
  colorsServerPlugin()
  colorsClientPlugin()
}
