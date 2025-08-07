import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", ← REMOVE THIS LINE COMPLETELY
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
