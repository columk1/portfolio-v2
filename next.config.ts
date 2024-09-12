import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)