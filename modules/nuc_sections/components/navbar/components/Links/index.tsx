'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

import { enLocale, getNavLinks } from 'nucleify'
import styles from '../../index.module.scss'

type NucNavbarLinksProps = {
  onCloseDrawer?: () => void
}

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

function getLangFromPathname(pathname: string): string {
  const [firstSegment] = pathname.split('/').filter(Boolean)
  return firstSegment || 'en'
}

export function NucNavbarLinks({
  onCloseDrawer,
}: NucNavbarLinksProps): JSX.Element {
  const pathname = usePathname()
  const lang = getLangFromPathname(pathname)
  const navLinks = getNavLinks(lang, t)

  return (
    <div className={styles['nav-links-container']}>
      {navLinks.map((link) => (
        <Link
          className={
            link.isButton
              ? `p-button ${styles[link.class || 'login-button']}`
              : styles['nav-link']
          }
          href={link.href}
          key={link.label}
          onClick={onCloseDrawer}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
