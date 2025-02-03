/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/web",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;

