import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Portfolio",
  },
};

export default nextConfig;
