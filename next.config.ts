import type { NextConfig } from "next";

const blogSlugs = [
  "top-5-things-to-do-in-alleppey-2026-guide",
  "private-vs-shared-houseboat-alleppey",
  "best-time-for-alleppey-shikara-boating",
  "alleppey-backwater-kayaking-guide",
  "best-speed-boat-packages-in-alleppey",
  "how-to-find-perfect-houseboat-alleppey",
  "couples-guide-shared-boathouses-alleppey",
  "alleppey-backwater-itnerary",
  "sharing-houseboat-couples-families",
  "how-to-book-houseboat-alleppey",
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alleppeybooking.com",
      },
      {
        protocol: "http",
        hostname: "alleppeybooking.com",
      },
    ],
  },
  async redirects() {
    return blogSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/blogs/${slug}/`,
      permanent: true, // HTTP 301 Permanent Redirect
    }));
  },
};

export default nextConfig;

