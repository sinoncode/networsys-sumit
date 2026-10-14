/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'standalone',

  // Temporarily ignore TypeScript errors during production builds.
  // This does not suppress runtime or prerendering errors.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;