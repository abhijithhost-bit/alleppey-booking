import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Users, ShieldCheck, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import activitiesData from "@/data/activities.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import { Activity } from "@/types";

const activity = (activitiesData as Activity[]).find(
  (a) => a.slug === "shikara-ride-in-alleppey"
)!;

export const metadata: Metadata = {
  title: activity.seo.title,
  description: activity.seo.description,
  alternates: {
    canonical: `${siteConfig.url}/shikara-ride-in-alleppey/`,
  },
  openGraph: {
    title: activity.seo.title,
    description: activity.seo.description,
    url: `${siteConfig.url}/shikara-ride-in-alleppey/`,
    images: [{ url: `${siteConfig.url}${activity.image}` }],
  },
};

export default function ShikaraRidePage() {
  const whatsappUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
    activity.title
  )}`;

  return (
    <article className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: activity.title }]} />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mt-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <span className="absolute top-4 left-4 bg-[#FF6600] text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {activity.badge}
                </span>
                <div className="absolute bottom-4 right-4 bg-[#0A2540]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-extrabold">
                  {activity.priceDisplay}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2CD664] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                Narrow Canal Village Tours
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-[#0A2540] tracking-tight">
                {activity.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activity.tagline}
              </p>

              <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6600]" />
                  <span className="font-semibold text-slate-800">{activity.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#2CD664]" />
                  <span className="font-semibold text-slate-800">{activity.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">Life Jackets &amp; Local Boatman</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center justify-center gap-2 shadow-md shadow-green-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+917012761588"
                  className="py-3.5 px-5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0A2540]" />
                  <span>Call Captain</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] mb-6">
            Tour Highlights &amp; What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activity.inclusions.map((inc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2CD664] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {inc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12">
          <BookingForm initialService={activity.title} />
        </div>

        {activity.faqs && <FAQAccordion items={activity.faqs} />}
      </div>
    </article>
  );
}

