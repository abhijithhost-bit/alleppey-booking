import type { Metadata } from "next";
import pagesData from "@/data/pages.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import { PageRecord } from "@/types";

const pages = pagesData as Record<string, PageRecord>;

export const metadata: Metadata = {
  title: "Terms and Conditions | Alleppey Booking",
  description:
    "Review our terms, check-in policies, booking confirmations, cancellation rules, and passenger safety guidelines for Alleppey backwater houseboats and boat tours.",
  alternates: {
    canonical: `${siteConfig.url}/terms-conditions/`,
  },
};

export default function TermsConditionsPage() {
  const page = pages["terms-conditions"];

  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mt-4">
          <h1 className="text-2xl sm:text-4xl font-black text-[#0A2540] mb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div
            className="blog-content prose prose-slate max-w-none text-xs sm:text-sm"
            dangerouslySetInnerHTML={{
              __html: page?.contentHtml || "<p>Terms and conditions details.</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

