import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  basePath: "/web",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
};
export default config;
