/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  optimizeFonts: false,
  basePath: '',       // Empty string
  assetPrefix: '',    // Empty string
  trailingSlash: true // Or false, as you prefer
};

module.exports = nextConfig;