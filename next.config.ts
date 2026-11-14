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
  "alleppey-houseboat-rates-tariff-guide",
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  async headers() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
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

    // 2. 301 Permanent Redirect for deprecated /alleppey-boat-house-booking/ to /house-boat-alleppey/
    list.push(
      {
        source: "/alleppey-boat-house-booking",
        destination: "/house-boat-alleppey/",
        permanent: true,
      },
      {
        source: "/alleppey-boat-house-booking/",
        destination: "/house-boat-alleppey/",
        permanent: true,
      }
    );

    // 3. Redirect legacy WordPress category and author archives to /blogs/
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

    // 4. Aliases for Cancellation & Refund Policy
    const refundAliases = [
      "/refund-policy",
      "/refund-policy/",
      "/cancellation-policy",
      "/cancellation-policy/",
      "/cancellation",
      "/cancellation/",
      "/refunds",
      "/refunds/",
    ];
    for (const src of refundAliases) {
      list.push({
        source: src,
        destination: "/cancellation-refund-policy/",
        permanent: true,
      });
    }

    return list;
  },
};

export default nextConfig;
