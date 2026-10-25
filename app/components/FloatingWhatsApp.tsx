"use client";

import { getWhatsAppUrl, SITE_CONFIG } from "../config/site";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (10% High-Conversion Vibrant Orange with 30% Green Accent) */}
      <aside
        aria-label="Direct Boat Booking Contact"
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5"
      >
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-emerald-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Harbour Coordinator Online</span>
        </div>

        <a
          href={getWhatsAppUrl("Hi Alleppey Booking, I want to check boat availability and rates.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black text-sm shadow-2xl shadow-orange-500/35 hover:scale-105 transition-all orange-pulse"
          aria-label="Direct WhatsApp Booking"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
          </svg>
          <span>WhatsApp Booking (Instant)</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar (60% White + 30% Light Green + 10% Orange) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-emerald-100 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={SITE_CONFIG.phoneTel}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 font-bold text-xs transition-colors"
          aria-label="Direct Phone Call"
        >
          <svg
            className="w-4 h-4 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Call Us</span>
        </a>

        <a
          href={getWhatsAppUrl("Hi Alleppey Booking, I want to book a boat today.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-extrabold text-xs shadow-md shadow-orange-500/25 orange-pulse"
          aria-label="Instant WhatsApp Booking"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
          </svg>
          <span>WhatsApp Booking (Direct Rates)</span>
        </a>
      </div>
    </>
  );
}
