import type { UserRoleType } from '../types'

export const roles: readonly UserRoleType[] = [
  'user',
  'tech',
  'test_admin',
] as const
