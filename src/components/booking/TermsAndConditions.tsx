"use client";

import React from "react";
import { useBooking } from "./BookingContext";
import { PACKAGE_TERMS } from "@/lib/pricing";
import { Check } from "lucide-react";

export default function TermsAndConditions() {
  const { packageId } = useBooking();
  const terms = PACKAGE_TERMS[packageId] || PACKAGE_TERMS.overnight;

  return (
    <div className="ab-sh-section mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">
        Terms &amp; Conditions
      </h2>
      <p className="ab-sh-desc text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
        Essential guidelines to ensure a smooth, secure, and enjoyable backwater journey.
      </p>

      <div
        className="ab-tc-grid grid grid-cols-1 md:grid-cols-2 gap-3"
        id="ab-tc-dynamic-grid"
      >
        {terms.map((htmlText, idx) => (
          <div
            key={idx}
            className="ab-tc-item flex items-start gap-3 p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-xs"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={12} className="stroke-[3]" />
            </span>
            <div
              className="text-xs sm:text-sm text-slate-700 leading-relaxed [&>strong]:text-brand-navy [&>strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: htmlText }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

