import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* Top Pre-Footer High-Conversion Strip (30% Light Green + 10% Orange Action) */}
      <div className="bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-900 border-b border-emerald-700/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs font-bold mb-2">
              <span>🌴 Kerala Backwater Booking Hub</span>
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-black">
              Ready to Cruise the Backwaters of Alleppey?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              Direct boat owner rates, guaranteed lowest price, and zero middleman commissions.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneTel}
              className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            >
              Call {SITE_CONFIG.phone}
            </a>
            {/* 10% Orange Button */}
            <a
              href={getWhatsAppUrl("Hi Alleppey Booking, I'm ready to book a boat cruise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all shadow-lg shadow-orange-950/30 orange-pulse"
            >
              Book on WhatsApp ⚡
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-black text-sm shadow-md">
                AB
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-white font-extrabold text-xl tracking-tight">
                  Alleppey<span className="text-emerald-400">Booking</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-0.5 inline-block" />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your direct booking gateway for certified private luxury houseboats, budget sharing houseboats, scenic village shikara canal rides, and sunrise kayaking in Alappuzha, Kerala.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p className="text-slate-200 font-semibold">📍 Boarding Office &amp; Jetty:</p>
              <p>{SITE_CONFIG.address.street}</p>
              <p>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} –{" "}
                {SITE_CONFIG.address.postalCode}
              </p>
            </div>
          </div>

          {/* Boat Categories */}
          <div>
            <h4 className="text-emerald-400 font-bold text-xs tracking-wider uppercase mb-4">
              Alleppey Boat Tours &amp; Stays
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/private-houseboats" className="hover:text-orange-400 transition-colors">
                  Private Houseboats (1 to 7 BHK)
                </Link>
              </li>
              <li>
                <Link href="/sharing-houseboats" className="hover:text-orange-400 transition-colors">
                  Sharing Houseboats (From ₹3,999)
                </Link>
              </li>
              <li>
                <Link href="/shikara" className="hover:text-orange-400 transition-colors">
                  Shikara Boat Rides (From ₹800/hr)
                </Link>
              </li>
              <li>
                <Link href="/kayaking" className="hover:text-orange-400 transition-colors">
                  Backwater Kayaking &amp; Canoe
                </Link>
              </li>
              <li>
                <Link href="/speed-boat" className="hover:text-orange-400 transition-colors">
                  Speed Boat Lake Thrills
                </Link>
              </li>
              <li>
                <Link href="/homestays" className="hover:text-orange-400 transition-colors">
                  Waterfront Backwater Homestays
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Helpful Links */}
          <div>
            <h4 className="text-emerald-400 font-bold text-xs tracking-wider uppercase mb-4">
              Traveler Information
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#fare-calculator" className="hover:text-orange-400 transition-colors">
                  Backwater Fare Estimator
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-orange-400 transition-colors">
                  Best-Seller Packages
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-orange-400 transition-colors">
                  Direct Boat Owner Advantages
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-orange-400 transition-colors">
                  Houseboat Booking FAQs
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Hi, I want a custom group quote for Alleppey boat tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Custom Group &amp; Corporate Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Guarantees */}
          <div className="space-y-4">
            <h4 className="text-emerald-400 font-bold text-xs tracking-wider uppercase mb-4">
              Trust &amp; Certifications
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Kerala Tourism Dept. Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>FSSAI Quality Checked Kitchens</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Life Jackets &amp; First Aid</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Licensed Local Master Captains</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-1">Direct Call Assistance:</span>
              <a
                href={SITE_CONFIG.phoneTel}
                className="text-white font-bold text-base hover:text-orange-400 transition-colors block"
              >
                📞 {SITE_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Direct boat booking platform.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Verified Jetty Operations</span>
            <span>•</span>
            <span>Zero Brokerage</span>
            <span>•</span>
            <span>Alappuzha, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
