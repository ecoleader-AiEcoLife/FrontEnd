/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  experimental: {
    runtime: 'nodejs', // Edge 대신 Node.js 환경 사용
  },
};

export default nextConfig;
