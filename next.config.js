/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  env: {
    API_URL:
      process.env.NODE_ENV === 'production'
        ? ''
        : 'https://stoplight.io/mocks/sonolus-core/servers/36101371/',
  },
};

module.exports = nextConfig;
