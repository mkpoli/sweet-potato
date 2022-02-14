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
      process.env.NODE_ENV === 'production' || process.env.MODE === 'real'
        ? 'https://servers.purplepalette.net'
        : 'https://stoplight.io/mocks/sonolus-core/servers/36101371',
    API_URL_LEGACY: 'https://servers-legacy.purplepalette.net',
  },
};

module.exports = nextConfig;
