/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
    styledComponents: true
  }
}

module.exports = nextConfig
