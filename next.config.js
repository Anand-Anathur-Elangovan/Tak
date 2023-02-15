/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.lightgalleryjs.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['images.unsplash.com', 'www.lightgalleryjs.com'],
  },
};

module.exports = nextConfig;
