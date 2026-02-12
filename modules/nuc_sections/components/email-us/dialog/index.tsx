'use client'
import { type JSX, useMemo, useState } from 'react'

import { Dialog } from 'primereact/dialog'
import { AdButton } from '@/atomic'
import { NucSectionEmailUs } from '../index.tsx'
import styles from './index.module.scss'
import type { NucEmailUsDialogPropsInterface } from './types'

const textMap: Record<string, string> = {
  'form-get-in-touch': 'Get in touch',
}

function t(key: string): string {
  return textMap[key] || key
}

export function NucSectionEmailUsDialog({
  buttonLabel = '',
  buttonClass = '',
  buttonIcon = 'mdi:message-text-outline',
  buttonStrong = '',
}: NucEmailUsDialogPropsInterface): JSX.Element {
  const [showDialog, setShowDialog] = useState(false)
  const resolvedLabel = useMemo(
    () => buttonLabel || t('form-get-in-touch'),
    [buttonLabel]
  )
  const pt = {
    mask: { className: styles['p-dialog-mask'] },
    root: { className: styles['p-dialog'] },
    header: { className: styles['p-dialog-header'] },
    headerIcons: { className: styles['p-dialog-header-actions'] },
    content: { className: styles['p-dialog-content'] },
    closeButton: { 'ad-type': 'main' },
  }

  return (
    <>
      <AdButton
        className={buttonClass}
        icon={buttonIcon}
        label={resolvedLabel}
        onClick={() => setShowDialog(true)}
      >
        {buttonStrong && <strong>{buttonStrong}</strong>}
      </AdButton>

      <Dialog
        visible={showDialog}
        modal
        dismissableMask
        draggable={false}
        onHide={() => setShowDialog(false)}
        pt={pt}
      >
        <NucSectionEmailUs
          onSuccess={() => setShowDialog(false)}
          cardClassName={styles['p-card']}
        />
      </Dialog>
    </>
  )
}
