import type { NextConfig } from 'next'

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
    prependData: `@import "assets/_index.scss";`,
  },
}

export default nextConfig
