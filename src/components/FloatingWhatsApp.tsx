"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20looking%20to%20book%20a%20houseboat%2Fboating%20experience%20in%20Alleppey.%20Please%20share%20packages%20and%20rates.";

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex items-center group"
    >
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-full shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with booking expert 👋
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alleppey Booking on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#2CD664] hover:bg-[#22B350] text-white rounded-full shadow-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}

