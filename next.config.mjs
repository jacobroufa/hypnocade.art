/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH
}

export default nextConfig
