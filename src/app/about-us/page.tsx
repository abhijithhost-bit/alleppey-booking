import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Alleppey Booking Kerala Backwaters",
  description:
    "Learn about Alleppey Booking — Kerala's verified houseboat and boating service rooted in Punnamada, Alappuzha. Transparent pricing, safety certified crew, and local chefs.",
  alternates: {
    canonical: `${siteConfig.url}/about-us/`,
  },
  openGraph: {
    title: "About Us | Alleppey Booking Kerala Backwaters",
    description: "Learn about Alleppey Booking and our verified local backwater fleet.",
    url: `${siteConfig.url}/about-us/`,
  },
};

export default function AboutUsPage() {
  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About Us" }]} />

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mt-4">
          <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Our Story &amp; Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2540] mt-3 mb-6 tracking-tight">
            About Alleppey Booking
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Welcome to <strong>Alleppey Booking</strong>, your trusted, government-registered gateway to discovering the enchanting backwaters of Alappuzha, fondly known worldwide as the &quot;Venice of the East.&quot;
            </p>
            <p>
              Born and rooted along the tranquil banks of Vembanad Lake, our mission is simple: provide travelers from across the globe with transparent, reliable, and authentic backwater experiences without middleman markups or surprise charges.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] pt-4">Why Travelers Trust Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-[#0A2540] text-sm">100% Verified Fleet</h3>
                <p className="text-xs text-slate-500 mt-1">Every vessel is inspected, licensed by Kerala Inland Vessel authorities, and equipped with safety gear.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-[#0A2540] text-sm">Dedicated Onboard Chefs</h3>
                <p className="text-xs text-slate-500 mt-1">Fresh, local Kerala culinary feasts prepared live on board according to your spice and dietary preferences.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-[#0A2540] text-sm">Direct Local Pricing</h3>
                <p className="text-xs text-slate-500 mt-1">Zero hidden fees, transparent booking on WhatsApp, and guaranteed best rates for couples and families.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-[#0A2540] text-sm">Complete Water Transport</h3>
                <p className="text-xs text-slate-500 mt-1">From cozy 1-bedroom houseboats to 14-bedroom double-deckers, traditional Shikaras, kayaks, and speedboats.</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-[#0A2540] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Have Questions About Planning Your Trip?</h3>
                <p className="text-xs text-slate-300 mt-1">Our booking desk is available 7 days a week on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/917012761588"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-bold text-xs bg-[#2CD664] hover:bg-[#22B350] text-white flex-shrink-0 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

