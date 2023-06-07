/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://15.164.205.114:9092/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
