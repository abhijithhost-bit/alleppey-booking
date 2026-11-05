import Link from "next/link";
import { MessageCircle, Home, Compass, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-xl mx-auto text-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
          Page Not Found (404)
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0A2540] mt-4 mb-3">
          Looks Like You Drifted Off Course!
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
          The page or cruise package you are looking for may have moved or been updated. Let us help you navigate back to the serene Kerala backwaters.
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs mb-8 text-left">
          <Link
            href="/1-bedroom-houseboat-alleppey/"
            className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#FF6600] border border-slate-100 font-semibold transition-colors"
          >
            → 1 Bedroom (Couples)
          </Link>
          <Link
            href="/2-bedroom-houseboat-alleppey/"
            className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#FF6600] border border-slate-100 font-semibold transition-colors"
          >
            → 2 Bedroom (Family)
          </Link>
          <Link
            href="/sharing-houseboat-in-alleppey/"
            className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#FF6600] border border-slate-100 font-semibold transition-colors"
          >
            → Sharing Houseboat
          </Link>
          <Link
            href="/shikara-ride-in-alleppey/"
            className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#FF6600] border border-slate-100 font-semibold transition-colors"
          >
            → Shikara Boat Rides
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#0A2540] hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20looking%20for%20a%20specific%20boat%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Captain on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

