'use client'
import type { JSX } from 'react'

import { AdAnchor, AdButton, AdLogo } from 'atomic'

import { AdLogoSymbol } from 'atomic/atom/logo/symbol'
import { useNavbar } from 'atomic/organism/navbar/utils'
import { usePathname } from 'next/navigation'
import { NucNavbarDrawer, NucNavbarLinks } from './components'
import styles from './index.module.scss'

function getLangFromPathname(pathname: string): string {
  const [firstSegment] = pathname.split('/').filter(Boolean)
  return firstSegment || 'en'
}

export function NucSectionNavbar(): JSX.Element {
  const pathname = usePathname()
  const lang = getLangFromPathname(pathname)
  const { navbarExpanded, toggleNavbar } = useNavbar()

  const navbarClassName = styles['navbar']
  const containerClassName = `${styles['container']} container`
  const applicationHeaderClassName = styles['application-header']
  const closeDrawer = (): void => {
    if (navbarExpanded) {
      toggleNavbar()
    }
  }

  return (
    <nav className={navbarClassName}>
      <div className={containerClassName}>
        <AdLogoSymbol />

        <AdAnchor className={applicationHeaderClassName} href={`/${lang}/home`}>
          <AdLogo adType="main" />
          <h1>Nucleify</h1>
        </AdAnchor>

        <NucNavbarLinks />

        <AdButton
          aria-label="Menu"
          className={styles['navbar-drawer-toggler']}
          icon={navbarExpanded ? undefined : 'prime:align-justify'}
          onClick={toggleNavbar}
        />
      </div>

      <NucNavbarDrawer onHide={closeDrawer} visible={navbarExpanded}>
        <NucNavbarLinks onCloseDrawer={closeDrawer} />
      </NucNavbarDrawer>
    </nav>
  )
}
