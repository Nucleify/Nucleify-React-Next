import { apiRequest, navigateToUrl, syncColorsWithDatabase } from 'nucleify'

import { getAndSetUser } from './get_and_set_user'
import { getCurrentLang } from './get_current_lang'

export async function demoLogin(): Promise<void> {
  const lang = getCurrentLang()

  await apiRequest('/demo/session', 'POST')
  await getAndSetUser()
  await syncColorsWithDatabase()
  navigateToUrl(`/${lang}/entities`)
}
