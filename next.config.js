/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aws.nucares.top",
      },
    ],
  },
};

module.exports = nextConfig;
