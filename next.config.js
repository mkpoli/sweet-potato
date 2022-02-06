/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};

module.exports = nextConfig;
