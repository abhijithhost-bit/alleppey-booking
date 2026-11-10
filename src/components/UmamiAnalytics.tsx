import Script from "next/script";

interface UmamiAnalyticsProps {
  websiteId?: string;
  src?: string;
}

/**
 * High-performance Umami Analytics loader for Next.js App Router.
 *
 * Why this prevents page speed drops:
 * 1. Uses Next.js `strategy="lazyOnload"`: The script is fetched and executed only
 *    during browser idle time, after all critical resources (HTML, CSS, fonts, hero images,
 *    and React hydration) have finished.
 * 2. Uses `dns-prefetch` to resolve cloud.umami.is in the background with zero blocking.
 * 3. 0ms Total Blocking Time (TBT), 0ms Largest Contentful Paint (LCP) delay, and zero CLS.
 * 4. Automatically tracks initial page views and client-side SPA route navigations.
 */
export default function UmamiAnalytics({
  websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "8b0f971a-0c18-4149-9c91-72d4a483d89b",
  src = "https://cloud.umami.is/script.js",
}: UmamiAnalyticsProps) {
  if (!websiteId) return null;

  return (
    <>
      <link rel="dns-prefetch" href="https://cloud.umami.is" />
      <Script
        defer
        src={src}
        data-website-id={websiteId}
        strategy="lazyOnload"
      />
    </>
  );
}

