/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  i18n: {
    locales: ['en', 'fr', 'ja'],
    defaultLocale: 'en',
    localeDetection: true
  }
}

module.exports = nextConfig
