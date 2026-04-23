'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { NucSectionFooter, NucSectionNavbar, useOfficeType } from 'nucleify'

export default function FrontOfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isHydrated, setIsHydrated] = useState(false)
  const pathname = usePathname()
  const { officeType } = useOfficeType()
  const pageId = pathname.split('/').filter(Boolean).at(1) || 'page'

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return (
      <div id="default">
        <main id={pageId}>{children}</main>
      </div>
    )
  }

  if (officeType === 'back-office') {
    return (
      <div id="back-office">
        <main id={pageId}>{children}</main>
      </div>
    )
  }

  if (officeType === 'default') {
    return (
      <div id="default">
        <main id={pageId}>{children}</main>
      </div>
    )
  }

  return (
    <div id="front-office">
      <NucSectionNavbar />
      <main id={pageId}>{children}</main>
      <NucSectionFooter />
    </div>
  )
}
