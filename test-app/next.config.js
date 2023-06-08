/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/secret/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_KEY}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
