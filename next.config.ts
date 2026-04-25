import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const nextDirname = path.dirname(fileURLToPath(import.meta.url))
const sassGlobalEntry = path
  .join(nextDirname, 'assets/_index.scss')
  .replace(/\\/g, '/')

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['.'],
    silenceDeprecations: [
      'mixed-decls',
      'import',
      'color-functions',
      'global-builtin',
      'legacy-js-api',
    ],
    prependData: `@use 'sass:color' as color; @import "${sassGlobalEntry}";`,
  },
}

export default nextConfig
