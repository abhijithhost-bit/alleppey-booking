"use client";

import { useState } from "react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";

const FAQS = [
  {
    q: "How much does a houseboat booking cost in Alleppey?",
    a: "Alleppey houseboat rates start from ₹6,500 to ₹8,500 for a 1-BHK Deluxe Houseboat (inclusive of private AC bedroom, 3-member crew, and all Kerala meals: lunch, sunset snacks, dinner, and breakfast). 2-BHK houseboats for families range between ₹10,500 and ₹14,000. Premium and Luxury glass houseboats start from ₹12,000 to ₹22,000+ depending on peak dates. By booking directly through our boat owners, you save 20% to 25% compared to online aggregators.",
  },
  {
    q: "What is the difference between Deluxe, Premium, and Luxury houseboats?",
    a: "Deluxe houseboats offer standard night-time air conditioning (typically 9:00 PM to 6:00 AM) in bedrooms. Premium houseboats provide full-time 24-hour air conditioning, superior teakwood finish, and upper sun decks. Luxury houseboats feature ultra-modern glass-enclosed living halls, jacuzzi/plunge options, top-tier audio-visual amenities, and executive gourmet chef service.",
  },
  {
    q: "When does the air conditioning (AC) operate?",
    a: "In Deluxe category houseboats, the AC in the bedroom operates from 9:00 PM to 6:00 AM while the boat is anchored for the night. In Premium and Luxury categories, the AC operates 24 hours (full-time) in the bedrooms and enclosed glass living areas.",
  },
  {
    q: "Are all meals included with the overnight houseboat?",
    a: "Yes! All overnight houseboat bookings include authentic Kerala cuisine prepared live by your personal onboard chef. This includes a Welcome Tender Coconut or fresh juice, traditional Kerala lunch with Karimeen fish fry or chicken roast, evening tea/coffee with banana fritters (pazham pori), a delicious dinner, and hot South Indian breakfast (idli/dosa/appam) with eggs the following morning. Pure vegetarian, Jain, and Halal preferences are accommodated upon request.",
  },
  {
    q: "Which is better for me: a Shikara Ride or a Houseboat?",
    a: "If you want the complete backwater lifestyle experience, romantic overnight stay, and gourmet meals on water, a Houseboat is unmatched. If you are short on time (2 to 4 hours) or traveling on a budget (starting at ₹800/hr), a Shikara is fantastic because its shallow wooden hull allows it to cruise through very narrow, scenic village canals that big houseboats cannot navigate.",
  },
  {
    q: "Where is the boarding jetty in Alleppey?",
    a: "Our boats primarily dock at Finishing Point Jetty, Punnamada, and Pallathuruthy in Alleppey. Upon booking confirmation, our operations coordinator sends you the exact GPS location on Google Maps along with your captain's direct mobile number. We also personally welcome you at the jetty upon arrival.",
  },
  {
    q: "How do I confirm my booking and what advance is required?",
    a: "You can check availability with us on WhatsApp or phone at +91 7012761588. To secure the date and boat, a nominal advance token (typically 20% to 30%) is paid via UPI or bank transfer. The remaining balance is paid directly upon boarding at the jetty.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-linear-to-b from-white via-emerald-50/20 to-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
            Traveler Guidance &amp; Clear Answers
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know before booking your Alleppey backwater cruise.
          </p>
        </div>

        {/* 60% White Accordion Cards with 30% Light Green Details & 10% Orange Indicators */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isOpen ? "bg-emerald-50/70" : "bg-white hover:bg-emerald-50/30"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100/80 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  {/* 10% Orange Toggle Arrow */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180 shadow-xs"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-emerald-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions High-Conversion WhatsApp Prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-50 border border-emerald-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base text-slate-900">
              Have a specific question about your dates or group?
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Our harbour coordinators are online right now to guide you.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Alleppey Booking, I have a quick question regarding boat tour booking.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/25 shrink-0 orange-pulse"
          >
            Ask on WhatsApp (Instant Reply)
          </a>
        </div>
      </div>
    </section>
  );
}
