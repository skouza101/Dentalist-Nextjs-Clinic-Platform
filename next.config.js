/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Useful for simple deployments or when using Unsplash external URLs
  },
};

module.exports = nextConfig;
