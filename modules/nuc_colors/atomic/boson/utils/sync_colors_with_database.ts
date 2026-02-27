import { colorKeys, colorShades } from 'atomic'

import { applyColorsWithSystemAndUser } from './apply_colors_with_system_and_user'

// TODO(nuc_stores+nuc_api): replace local helpers and local request wrapper
// with atomic exports after nuc_stores and final nuc_api integration are ready in Next.
function localStorageGetItem(key: string): string {
  if (typeof window === 'undefined') return ''
  return window.localStorage.getItem(key) || ''
}

function localStorageSetItem(key: string, value: string): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, value)
}

function cookieGetItem(key: string): string {
  if (typeof document === 'undefined') return ''
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
  return cookie ? decodeURIComponent(cookie.split('=')[1] || '') : ''
}

function cookieSetItem(key: string, value: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; SameSite=Lax`
}

function sessionStorageGetItem(key: string): string {
  if (typeof window === 'undefined') return ''
  return window.sessionStorage.getItem(key) || ''
}

function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || ''
}

async function apiRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch colors (${response.status})`)
  }

  return (await response.json()) as T
}

interface UserColorFromDatabase {
  id: number
  user_id: number
  name: string
  value: string
  new: boolean
  created_at: string
  updated_at: string
}

export async function syncColorsWithDatabase(): Promise<void> {
  if (typeof window === 'undefined') return

  const userId = sessionStorageGetItem('user_id')

  if (!userId) {
    console.log('🎨 User not authenticated, skipping color sync')
    return
  }

  try {
    console.log('🔄 Syncing colors with database...')

    const response = await apiRequest<UserColorFromDatabase[]>('/user-colors')

    const dbColors = Array.isArray(response) ? response : []

    if (dbColors.length === 0) {
      console.log('📭 No colors found in database')
      return
    }

    const dbColorMap = new Map<string, UserColorFromDatabase>()

    dbColors.forEach((color: UserColorFromDatabase) => {
      dbColorMap.set(color.name, color)
    })

    let updatedCount = 0

    colorKeys.forEach((item: string): void =>
      colorShades.forEach((state: string): void => {
        const userKey = `${item}-item-${state}-user`
        const dbColor = dbColorMap.get(userKey)

        if (!dbColor) return

        const storageValue =
          cookieGetItem(userKey) || localStorageGetItem(userKey)

        if (storageValue !== dbColor.value) {
          cookieSetItem(userKey, dbColor.value)
          localStorageSetItem(userKey, dbColor.value)
          updatedCount++
        }
      })
    )

    if (updatedCount > 0) {
      console.log(`✅ Synced ${updatedCount} colors from database`)
      applyColorsWithSystemAndUser()

      const event = new Event('colorUpdated')
      document.dispatchEvent(event)
    } else {
      console.log('✅ Colors are already in sync')
    }
  } catch (error) {
    console.error('❌ Failed to sync colors with database:', error)
  }
}
