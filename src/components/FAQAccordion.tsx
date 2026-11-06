"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about cruising the Kerala backwaters with Alleppey Booking",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-12 bg-white rounded-3xl border-2 border-[#EAE5DD] shadow-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 text-[#FF6600] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540]">
            {title}
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#EAE5DD] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A2540]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#FF6600]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

