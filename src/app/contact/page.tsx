import type { Metadata } from "next";
import pagesDataRaw from "@/data/pages_full.json";
import siteConfig from "@/data/siteConfig.json";
import WordPressPageView from "@/components/WordPressPageView";

const pagesData = pagesDataRaw as Record<
  string,
  {
    slug: string;
    title: string;
    seo: { title: string; description: string; focusKeyword?: string };
    htmlContent: string;
    schemas: any[];
  }
>;

const page = pagesData["contact"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Contact Alleppey Booking | 24/7 Backwater Assistance",
  description:
    page?.seo?.description ||
    "Contact Alleppey Booking via WhatsApp or direct phone. Instant houseboat quotes, route advice, and confirmed Kerala backwater bookings.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
