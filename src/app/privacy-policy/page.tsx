import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import PrivacyPolicyView from "@/components/static/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Alleppey Booking",
  description:
    "Privacy Policy for Alleppey Booking website, booking inquiries, and customer data handling.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy | Alleppey Booking",
    description:
      "Privacy Policy for Alleppey Booking website, booking inquiries, and customer data handling.",
    url: `${siteConfig.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
