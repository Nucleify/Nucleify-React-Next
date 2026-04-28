'use client'

import type { JSX } from 'react'
import { useEffect, useState } from 'react'

import './_index.scss'

import type { UseToastInterface } from 'nucleify'
import { AdButton, useAtomicToast } from 'nucleify'

import { useTranslation } from 'react-i18next'
import { NucDialog } from '../../../../nuc_dialog'

type ProfileEditDataType = {
  firstName: string
  lastName: string
  email: string
  phone_number: string
}

type ProfileEditFieldType = {
  name: string
  key: string
  label: string
  type: string
}

type NucProfileActionsProps = {
  userId: number
  currentLang: string
  accountSinceLabel: string
  editProfileData: ProfileEditDataType
  profileEditFields: ProfileEditFieldType[]
  onProfileSaved?: (value: ProfileEditDataType) => void
}

export function NucProfileActions({
  userId,
  currentLang,
  accountSinceLabel,
  editProfileData,
  profileEditFields,
  onProfileSaved,
}: NucProfileActionsProps): JSX.Element {
  const { t } = useTranslation()
  const { flashToast }: UseToastInterface = useAtomicToast()

  const [isSavingProfile, setIsSavingProfile] = useState(false)
  const [isDeletingAccount, setIsDeletingAccount] = useState(false)
  const [isEditProfileDialogVisible, setIsEditProfileDialogVisible] =
    useState(false)
  const [isDeleteAccountDialogVisible, setIsDeleteAccountDialogVisible] =
    useState(false)
  const [editDialogData, setEditDialogData] =
    useState<ProfileEditDataType>(editProfileData)

  useEffect(() => {
    if (isEditProfileDialogVisible) {
      setEditDialogData(editProfileData)
    }
  }, [editProfileData, isEditProfileDialogVisible])

  async function confirmEditProfile(data?: unknown): Promise<void> {
    const source =
      typeof data === 'object' && data !== null
        ? (data as Record<string, unknown>)
        : (editDialogData as Record<string, unknown>)

    const nextData: ProfileEditDataType = {
      firstName: String(source.firstName ?? ''),
      lastName: String(source.lastName ?? ''),
      email: String(source.email ?? ''),
      phone_number: String(source.phone_number ?? ''),
    }

    if (!nextData.firstName.trim() || !nextData.email.trim()) {
      flashToast(t('toast-name-email-required'), 'error')
      return
    }

    setIsSavingProfile(true)
    onProfileSaved?.(nextData)
    setIsSavingProfile(false)
    setIsEditProfileDialogVisible(false)
  }

  async function confirmDeleteAccount(): Promise<void> {
    setIsDeletingAccount(true)
    console.info(
      `[nuc_users] delete account requested for user ${userId} lang ${currentLang}`
    )
    setIsDeletingAccount(false)
    setIsDeleteAccountDialogVisible(false)
  }

  return (
    <div className="profile-actions-wrap">
      <p className="profile-actions-meta">
        {t('profile-account-since')} <strong>{accountSinceLabel}</strong>
      </p>

      <div className="profile-actions">
        <AdButton
          label={t('profile-edit-account')}
          adType="main"
          outlined
          size="small"
          disabled={isSavingProfile}
          onClick={() => setIsEditProfileDialogVisible(true)}
        />
        <AdButton
          label={t('profile-delete-account')}
          outlined
          size="small"
          severity="danger"
          disabled={isDeletingAccount}
          onClick={() => setIsDeleteAccountDialogVisible(true)}
        />
      </div>

      <NucDialog
        visible={isEditProfileDialogVisible}
        modal
        draggable={false}
        entity="user"
        action="edit"
        title={t('profile-edit-profile')}
        data={editDialogData as unknown as ObjectType[]}
        selectedObject={editDialogData as unknown as ObjectType}
        fields={profileEditFields}
        cancelButtonLabel={t('common-cancel')}
        confirmButtonLabel={t('common-save')}
        confirmButtonDisabled={isSavingProfile}
        confirm={confirmEditProfile}
        close={(_action?: string) => setIsEditProfileDialogVisible(false)}
        onHide={() => setIsEditProfileDialogVisible(false)}
      />

      <NucDialog
        visible={isDeleteAccountDialogVisible}
        modal
        draggable={false}
        action="delete"
        title={t('profile-delete-account')}
        selectedObject={{ id: userId } as ObjectType}
        cancelButtonLabel={t('common-cancel')}
        confirmButtonLabel={t('common-delete')}
        confirmButtonDisabled={isDeletingAccount}
        confirm={confirmDeleteAccount}
        close={(_action?: string) => setIsDeleteAccountDialogVisible(false)}
        onHide={() => setIsDeleteAccountDialogVisible(false)}
      >
        <p>{t('profile-delete-confirm')}</p>
      </NucDialog>
    </div>
  )
}
