import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: "export" - this is causing the issue
  images: {
    unoptimized: true, // Keep this if you want unoptimized images
  },
};

export default nextConfig;
