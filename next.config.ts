import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will ignore all ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
