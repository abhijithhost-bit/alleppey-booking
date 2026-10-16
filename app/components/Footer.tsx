import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* Top CTA Strip */}
      <div className="bg-emerald-950/70 border-b border-emerald-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold">
              Ready to Cruise the Backwaters of Alleppey?
            </h3>
            <p className="text-emerald-300/90 text-xs sm:text-sm mt-1">
              Direct owner bookings, lowest rates guaranteed, and zero commission.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneTel}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            >
              Call {SITE_CONFIG.phone}
            </a>
            <a
              href={getWhatsAppUrl("Hi Alleppey Booking, I'm ready to book a boat cruise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-md"
            >
              Book on WhatsApp
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
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                AB
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                Alleppey<span className="text-emerald-400">Booking</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted partner for authentic houseboat vacations, private shikara rides, and scenic backwater day cruises in Alappuzha, Kerala.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="text-slate-300 font-semibold">📍 Boarding &amp; Office:</p>
              <p>{SITE_CONFIG.address.street}</p>
              <p>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} –{" "}
                {SITE_CONFIG.address.postalCode}
              </p>
            </div>
          </div>

          {/* Boat Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Alleppey Boat Tours &amp; Stays
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/private-houseboats" className="hover:text-emerald-400 transition-colors">
                  Private Houseboats (1 to 7 BHK)
                </Link>
              </li>
              <li>
                <Link href="/sharing-houseboats" className="hover:text-emerald-400 transition-colors">
                  Sharing Houseboats (From ₹3,999)
                </Link>
              </li>
              <li>
                <Link href="/shikara" className="hover:text-emerald-400 transition-colors">
                  Shikara Boat Rides (From ₹800/hr)
                </Link>
              </li>
              <li>
                <Link href="/kayaking" className="hover:text-emerald-400 transition-colors">
                  Backwater Kayaking &amp; Canoe
                </Link>
              </li>
              <li>
                <Link href="/speed-boat" className="hover:text-emerald-400 transition-colors">
                  Speed Boat Lake Thrills
                </Link>
              </li>
              <li>
                <Link href="/homestays" className="hover:text-emerald-400 transition-colors">
                  Waterfront Backwater Homestays
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Backwater Routes */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Scenic Routes &amp; Sights
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Punnamada Lake (Nehru Trophy Track)</li>
              <li>Vembanad Lake (Largest backwater expanse)</li>
              <li>Kuttanad (Paddy fields below sea level)</li>
              <li>Nedumudy &amp; Pallathuruthy River Canals</li>
              <li>Champakkulam Snake Boat &amp; Ancient Church</li>
              <li>Pathiramanal Island (Migratory bird haven)</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block text-slate-500 font-medium">WhatsApp / Call:</span>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="text-emerald-400 font-bold text-base hover:underline"
                >
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="block text-slate-500 font-medium">Email:</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-slate-300 hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <span className="block text-slate-500 font-medium">Support Hours:</span>
                <span className="text-slate-300">24 Hours / 7 Days a Week</span>
              </div>
              <div className="pt-2">
                <span className="inline-block text-[11px] bg-slate-900 border border-slate-800 text-emerald-400 px-3 py-1.5 rounded-lg">
                  ✓ Kerala Tourism Recognized Fleet
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#packages" className="hover:text-slate-300 transition-colors">
              Packages
            </Link>
            <Link href="#why-us" className="hover:text-slate-300 transition-colors">
              Safety &amp; Fleet
            </Link>
            <Link href="#faqs" className="hover:text-slate-300 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
