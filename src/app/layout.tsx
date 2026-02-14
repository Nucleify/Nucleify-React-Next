import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-dark-blue/theme.css'
import 'primeicons/primeicons.css'

import { NucEntityChartCard } from '../../../next/modules/nuc_charts/atomic/template/entity-chart-card/index.tsx'
import { NucEntityChart } from '../../../next/modules/nuc_charts/atomic/template/entity-chart/index.tsx'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <PrimeReactProvider>
          {children}
          
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px', background: '#0f172a', minHeight: '100vh' }}>
            <h2 style={{ color: 'white', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
              Chart Testing Environment
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' , paddingBottom: '60px'}}>
              <h3 style={{ color: '#94a3b8' }}>1. NucEntityChartCard (Zustand Integrated)</h3>
              <div style={{ height: '350px' }}>
                <NucEntityChartCard 
                  entity="Admin" 
                  type="line" 
                  chartMethodType="count" 
                  example={true} 
                  chartClass="test-card-chart"
                  loading={false}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 style={{ color: '#94a3b8' }}>2. Direct NucEntityChart (Annual Bar Data)</h3>
              <div style={{ height: '450px', background: '#1e293b', borderRadius: '12px', padding: '40px' }}>
                <NucEntityChart 
                  type="bar" 
                  chartMethodType="annual" 
                  example={true} 
                  chartClass="direct-bar-chart"
                />
              </div>
            </div>

          </div>
        </PrimeReactProvider>
      </body>
    </html>
  )
}