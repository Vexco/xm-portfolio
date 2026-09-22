import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: set basePath if deploying to a specific repository path
  // basePath: '/xm-portfolio',
  basePath: isProd ? '/xm-portfolio' : ''
};

export default nextConfig;
