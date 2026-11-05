import type { Metadata } from "next";
import pagesData from "@/data/pages.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import { PageRecord } from "@/types";

const pages = pagesData as Record<string, PageRecord>;

export const metadata: Metadata = {
  title: "Privacy Policy | Alleppey Booking",
  description:
    "Our privacy policy details how Alleppey Booking protects and handles customer contact details, inquiry data, and reservation information.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  const page = pages["privacy-policy"];

  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mt-4">
          <h1 className="text-2xl sm:text-4xl font-black text-[#0A2540] mb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div
            className="blog-content prose prose-slate max-w-none text-xs sm:text-sm"
            dangerouslySetInnerHTML={{
              __html: page?.contentHtml || "<p>Privacy policy details.</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

