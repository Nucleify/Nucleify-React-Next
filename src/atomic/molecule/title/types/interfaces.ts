import type { IconInterface } from '@/atomic'

export interface TitleInterface extends IconInterface {
  adType?: AdTypeType
  header?: string
  href?: string
  count?: number
  countSecondary?: number
  textSecondary?: string
}
