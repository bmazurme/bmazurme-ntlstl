/** @type { import('next').NextConfig } */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  i18n,
};

module.exports = nextConfig;
