/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'], // allow these domains
  },
  experimental: {
    typedRoutes: true,
    serverActions: {},
  },
}

export default nextConfig
