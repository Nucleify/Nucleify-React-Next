// TODO(nuc_stores): replace local storage/cookie helpers with atomic exports
// after nuc_stores is migrated to Next.
function localStorageSetItem(key: string, value: string): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, value)
}

function cookieSetItem(key: string, value: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; SameSite=Lax`
}

export function setColorWithUserSuffix(key: string, value: string): void {
  const userKey = `${key}-user`

  cookieSetItem(userKey, value)
  localStorageSetItem(userKey, value)

  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(`--${key}`, value)
    const event = new Event('colorUpdated')
    document.dispatchEvent(event)
  }
}
