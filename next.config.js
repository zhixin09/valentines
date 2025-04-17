/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp']
  },
  optimizeFonts: false,
  basePath: '/valentines',
  assetPrefix: '/valentines/',
  trailingSlash: true
  // Optional: Change links `/me` -> `/me/`
}

module.exports = nextConfig