/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.TURKISH_TWITTER_API_URL,
  },
};

module.exports = nextConfig;
