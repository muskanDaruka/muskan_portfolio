import type { NextConfig } from "next";

  const isProd = process.env.NODE_ENV === "production";

  const nextConfig: NextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: isProd ? "/muskan_portfolio" : "",
    assetPrefix: isProd ? "/muskan_portfolio/" : "",
  };

  export default nextConfig;