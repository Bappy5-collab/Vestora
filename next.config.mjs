import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This app lives inside another project's folder, so pin the workspace root
  // to stop Next from picking up the parent lockfile.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
