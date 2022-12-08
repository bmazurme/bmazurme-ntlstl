/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
