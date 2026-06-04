import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sanyglobal-img.sany.com.cn",
      },
    ],
  },
};

export default nextConfig;
