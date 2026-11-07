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
    const list: { source: string; destination: string; permanent: boolean }[] = [];

    // 1. 301 Permanent Redirects for original root-level WordPress blog posts
    for (const slug of blogSlugs) {
      list.push({
        source: `/${slug}`,
        destination: `/blogs/${slug}/`,
        permanent: true,
      });
      list.push({
        source: `/${slug}/`,
        destination: `/blogs/${slug}/`,
        permanent: true,
      });
    }

    // 2. Redirect legacy WordPress category and author archives to /blogs/
    list.push(
      {
        source: "/category/:path*",
        destination: "/blogs/",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/blogs/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/blogs/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/blogs/",
        permanent: true,
      }
    );

    return list;
  },
};

export default nextConfig;
