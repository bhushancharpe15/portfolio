/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website-main' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website-main' : ''
}

module.exports = nextConfig