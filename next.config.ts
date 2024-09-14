import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
