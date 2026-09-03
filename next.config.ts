import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@phosphor-icons/react'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'finecup.az' },
    ],
  },
}

export default nextConfig
