import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import ContactView from "@/components/static/ContactView";

export const metadata: Metadata = {
  title: "Contact Alleppey Booking | 24/7 Backwater Assistance",
  description:
    "Contact Alleppey Booking via WhatsApp or direct phone. Instant houseboat quotes, route advice, and confirmed Kerala backwater bookings.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: "Contact Alleppey Booking | 24/7 Backwater Assistance",
    description:
      "Contact Alleppey Booking via WhatsApp or direct phone. Instant houseboat quotes, route advice, and confirmed Kerala backwater bookings.",
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return <ContactView />;
}
