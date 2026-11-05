import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white">
                Alleppey<span className="text-[#FF6600]">Booking</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Official online booking portal for verified Kerala backwater houseboats, traditional Shikara boat rides, kayaking tours, and speed boats in Alappuzha (Venice of the East).
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
              <span>Government Verified Boats & Certified Crew</span>
            </div>
          </div>

          {/* Houseboat Fleet */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Houseboat Fleet
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <Link href="/sharing-houseboat-in-alleppey/" className="hover:text-white transition-colors">
                  Sharing Houseboat
                </Link>
              </li>
              <li>
                <Link href="/1-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  1 Bedroom (Couples)
                </Link>
              </li>
              <li>
                <Link href="/2-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  2 Bedroom (Family)
                </Link>
              </li>
              <li>
                <Link href="/3-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  3 Bedroom (Group)
                </Link>
              </li>
              <li>
                <Link href="/4-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  4 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/5-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  5 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/6-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  6 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/7-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  7 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/8-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  8 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/10-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  10 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/12-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  12 Bedroom
                </Link>
              </li>
              <li>
                <Link href="/14-bedroom-houseboat-alleppey/" className="hover:text-white transition-colors">
                  14 Bedroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities & Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Boating & Activities
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/shikara-ride-in-alleppey/" className="hover:text-white transition-colors">
                  Shikara Boat Rides (Village Canals)
                </Link>
              </li>
              <li>
                <Link href="/kayaking-in-alleppey/" className="hover:text-white transition-colors">
                  Backwater Kayaking (Sunrise & Sunset)
                </Link>
              </li>
              <li>
                <Link href="/speed-boat-in-alleppey/" className="hover:text-white transition-colors">
                  High-Speed Motorboat Cruises
                </Link>
              </li>
              <li>
                <Link href="/alleppey-boat-house-booking/" className="hover:text-white transition-colors">
                  Complete Houseboat Itinerary Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs/" className="hover:text-white transition-colors">
                  Alleppey Travel Blogs & Guides
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-white transition-colors">
                  About Our Crew & Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+917012761588"
                className="flex items-center gap-2 hover:text-[#2CD664] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
                <span>+91 70127 61588 / +91 99477 53154</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2CD664] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
                <span>WhatsApp: +91 70127 61588</span>
              </a>
              <a
                href="mailto:support@alleppeybooking.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>support@alleppeybooking.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Finishing Point Road, Punnamada, Alappuzha, Kerala 688013</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Desk: 6:00 AM - 11:00 PM IST (All 7 Days)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Alleppey Booking. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions/" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact/" className="hover:text-slate-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

