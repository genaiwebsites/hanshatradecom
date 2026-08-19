import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.qwenlm.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
