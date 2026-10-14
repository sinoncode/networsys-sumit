/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'standalone',

  // Temporarily ignore TypeScript errors.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Temporarily ignore ESLint errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;