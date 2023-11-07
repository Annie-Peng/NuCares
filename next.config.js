/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3acfedeb.r6.cpolar.top",
      },
    ],
  },
};

module.exports = nextConfig;
