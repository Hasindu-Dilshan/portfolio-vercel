import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true, // Required for static export
  },
  output: 'export',
};

export default nextConfig;
