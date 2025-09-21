/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    // remotePatterns: [new URL('https://drive.google.com/file/d/**')],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
