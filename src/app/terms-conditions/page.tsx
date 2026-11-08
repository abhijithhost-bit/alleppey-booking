import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import TermsConditionsView from "@/components/static/TermsConditionsView";

export const metadata: Metadata = {
  title: "Terms & Conditions | Alleppey Booking",
  description:
    "Official terms and conditions for Alleppey Booking houseboats, Shikara rides, and water activity reservations in Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/terms-conditions/`,
  },
  openGraph: {
    title: "Terms & Conditions | Alleppey Booking",
    description:
      "Official terms and conditions for Alleppey Booking houseboats, Shikara rides, and water activity reservations in Kerala.",
    url: `${siteConfig.url}/terms-conditions/`,
  },
};

export default function TermsConditionsPage() {
  return <TermsConditionsView />;
}
