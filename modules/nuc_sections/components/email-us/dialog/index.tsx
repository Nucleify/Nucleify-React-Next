'use client'

import { type JSX, type ReactNode, useMemo, useState } from 'react'

import { AdButton } from '../../../../../atomic/atom/button'
import { AdDialog } from '../../../../../atomic/organism/dialog'
import { NucSectionEmailUs } from '..'
import type { NucEmailUsDialogPropsInterface } from './types'

const SECTION_EMAIL_DIALOG_CLASS = 'section-email-us-dialog'

const emailDialogClosePt = {
  closeButton: {
    root: { 'ad-type': 'main' as const },
  },
}

const textMap: Record<string, string> = {
  'form-get-in-touch': 'Get in touch',
}

function t(key: string): string {
  return textMap[key] || key
}

function resolveButtonIcon(icon: string): string {
  if (!icon) return 'prime:comment'
  if (icon.startsWith('mdi:')) return 'prime:comment'
  return icon
}

export interface NucEmailUsDialogFrameProps {
  visible: boolean
  onHide: () => void
  children: ReactNode
  dialogClassName?: string
  header?: ReactNode
}

export function NucEmailUsDialogFrame({
  visible,
  onHide,
  children,
  dialogClassName,
  header,
}: NucEmailUsDialogFrameProps): JSX.Element {
  const rootClassName =
    dialogClassName?.trim() + ' ' + SECTION_EMAIL_DIALOG_CLASS

  return (
    <AdDialog
      visible={visible}
      modal
      dismissableMask
      draggable={false}
      className={rootClassName}
      header={header}
      showHeader
      onHide={onHide}
      pt={emailDialogClosePt}
    >
      {children}
    </AdDialog>
  )
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

  return (
    <>
      <AdButton
        className={buttonClass}
        icon={resolveButtonIcon(buttonIcon)}
        label={resolvedLabel}
        onClick={() => setShowDialog(true)}
      >
        {buttonStrong && <strong>{buttonStrong}</strong>}
      </AdButton>

      <NucEmailUsDialogFrame
        visible={showDialog}
        onHide={() => setShowDialog(false)}
      >
        <NucSectionEmailUs
          onSuccess={() => setShowDialog(false)}
          cardClassName="p-card"
        />
      </NucEmailUsDialogFrame>
    </>
  )
}
