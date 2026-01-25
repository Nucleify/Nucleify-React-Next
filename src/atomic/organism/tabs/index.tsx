import type { JSX, ReactNode } from 'react'

import { TabPanel, TabView } from 'primereact/tabview'
import type {
  TabListInterface,
  TabPanelInterface,
  TabsInterface,
} from './types'

export function AdTabPanel(
  props: TabPanelInterface & { children?: ReactNode }
): JSX.Element {
  return <TabPanel {...props}>{props.children}</TabPanel>
}

export default function AdTabs({
  className,
  lists,
  panels,
  children,
  ...props
}: TabsInterface & { children?: ReactNode }): JSX.Element {
  if (
    Array.isArray(lists) &&
    Array.isArray(panels) &&
    lists.length === panels.length
  ) {
    return (
      <TabView
        {...props}
        className={[className, 'ad-tabs'].filter(Boolean).join(' ')}
      >
        {lists.map((list, idx) => (
          <TabPanel key={list.value} header={list.header}>
            {panels[idx]?.content}
          </TabPanel>
        ))}
      </TabView>
    )
  }
  return (
    <TabView
      {...props}
      className={[className, 'ad-tabs'].filter(Boolean).join(' ')}
    >
      {children}
    </TabView>
  )
}

export type * from './types'
export { AdTabs }
