/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Essential for GitHub Pages
  images: {
    unoptimized: true // Important for GitHub Pages compatibility
  },
  optimizeFonts: false, // Optional optimization (can be true or false)
  basePath: '', // Your site's path on GitHub Pages
  assetPrefix: '', // Matches basePath for assets
  trailingSlash: true // Recommended for consistent routing
};

module.exports = nextConfig;