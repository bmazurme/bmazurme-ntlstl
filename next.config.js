/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? 'ntlstl' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
