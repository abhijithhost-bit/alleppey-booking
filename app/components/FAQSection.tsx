"use client";

import { useState } from "react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";

const FAQS = [
  {
    q: "How much does a houseboat booking cost in Alleppey?",
    a: "Alleppey houseboat rates typically start from ₹6,500 to ₹8,500 for a 1-BHK Deluxe Houseboat (inclusive of private AC bedroom, crew, and all Kerala meals: lunch, sunset snacks, dinner, and breakfast). 2-BHK houseboats for families range between ₹10,500 and ₹14,000. Premium and Luxury glass houseboats start from ₹12,000 to ₹22,000+ depending on season and peak holidays.",
  },
  {
    q: "What is the difference between Deluxe, Premium, and Luxury houseboats?",
    a: "Deluxe houseboats offer standard night-time air conditioning (typically 9:00 PM to 6:00 AM) in bedrooms. Premium houseboats provide full-time 24-hour air conditioning, superior teakwood interiors, and upper sun decks. Luxury houseboats feature ultra-modern glass-enclosed living halls, jacuzzi/plunge options, top-tier audio-visual amenities, and executive gourmet chef service.",
  },
  {
    q: "When does the air conditioning (AC) work?",
    a: "In Deluxe category houseboats, the AC in the bedroom operates from 9:00 PM to 6:00 AM while the boat is anchored. In Premium and Luxury categories, the AC operates 24 hours (full-time) in the bedrooms and enclosed living areas.",
  },
  {
    q: "Are all meals included with the overnight houseboat?",
    a: "Yes! All overnight houseboat bookings include authentic Kerala cuisine prepared live by your personal onboard chef. This includes a Welcome Tender Coconut or juice, traditional Kerala lunch with Karimeen fish fry or chicken roast, evening tea/coffee with banana fritters (pazham pori), a delicious dinner, and hot South Indian breakfast (idli/dosa/appam) with eggs the following morning. Pure vegetarian, Jain, and Halal preferences are accommodated upon request.",
  },
  {
    q: "Which is better for me: a Shikara Ride or a Houseboat?",
    a: "If you want the complete backwater lifestyle experience, romantic overnight stay, and full gourmet meals on water, a Houseboat is unmatched. If you are short on time (2 to 4 hours) or traveling on a budget (starting at ₹800/hr), a Shikara is fantastic because its shallow hull allows it to cruise through very narrow, scenic village canals that big houseboats cannot navigate.",
  },
  {
    q: "Where is the boarding jetty in Alleppey?",
    a: "Our boats primarily dock at Finishing Point Jetty, Punnamada, and Pallathuruthy in Alleppey. Upon booking confirmation, our operations team sends you the exact GPS location on Google Maps along with your captain's direct mobile number.",
  },
  {
    q: "How do I confirm my booking and what advance is required?",
    a: "You can check availability with us on WhatsApp or phone at +91 7012761588. To secure the date and boat, a nominal advance token (typically 20% to 30%) is paid via UPI or bank transfer. The remaining balance is paid upon boarding.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
            Traveler Guidance &amp; FAQs
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know before booking your Alleppey backwater cruise.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 text-slate-600 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-50 text-emerald-700 border-emerald-300" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="font-bold text-base text-slate-900">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Speak directly with our local Alleppey cruise team for immediate help.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hi Alleppey Booking, I have a few questions before booking.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
            >
              Ask on WhatsApp
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
