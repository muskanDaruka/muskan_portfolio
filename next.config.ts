import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/muskan_portfolio",
  assetPrefix: "/muskan_portfolio/",
};

export default nextConfig;
