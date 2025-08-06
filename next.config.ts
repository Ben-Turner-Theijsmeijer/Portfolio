import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/Ben-Turner",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
