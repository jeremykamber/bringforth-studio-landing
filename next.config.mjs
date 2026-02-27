import { resolve } from 'path';

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
