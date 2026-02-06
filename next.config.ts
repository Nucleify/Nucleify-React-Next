import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: [
      'mixed-decls',
      'import',
      'color-functions',
      'global-builtin',
      'legacy-js-api',
    ],
    prependData: `@import "./src/assets/_index.scss";`,
  },
}

export default nextConfig
