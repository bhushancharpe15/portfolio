/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bhushan-charpe-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bhushan-charpe-portfolio' : ''
}

module.exports = nextConfig