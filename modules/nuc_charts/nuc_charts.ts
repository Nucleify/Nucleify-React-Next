import type { App } from 'vue'

import { NucEntityChart, NucEntityChartCard } from 'nucleify'

export function registerNucCharts(app: App<Element>): void {
  app
    .component('nuc-entity-chart', NucEntityChart)
    .component('nuc-entity-chart-card', NucEntityChartCard)
}
