import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import CancellationRefundPolicyView from "@/components/static/CancellationRefundPolicyView";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Alleppey Booking",
  description:
    "Official Cancellation & Refund Policy for Alleppey Booking houseboat stays, Shikara rides, kayaking, and speedboat experiences in Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/cancellation-refund-policy/`,
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Alleppey Booking",
    description:
      "Official Cancellation & Refund Policy for Alleppey Booking houseboat stays, Shikara rides, kayaking, and speedboat experiences in Kerala.",
    url: `${siteConfig.url}/cancellation-refund-policy/`,
  },
};

export default function CancellationRefundPolicyPage() {
  return <CancellationRefundPolicyView />;
}
