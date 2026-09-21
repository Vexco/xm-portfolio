import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: set basePath if deploying to a specific repository path
  // basePath: '/your-repo-name',

};

export default nextConfig;
