"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";
import { SERVICES_DATA } from "../config/services";

export default function Navbar({ onOpenBookingModal }: { onOpenBookingModal?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top High-Conversion Urgency & Trust Bar (30% Light Green + 10% Orange Trigger) */}
      <div className="bg-emerald-50/90 border-b border-emerald-200/60 py-2 px-4 sm:px-6 lg:px-8 text-xs text-slate-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold text-[11px] tracking-wide shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
              DIRECT RATES
            </span>
            <span className="hidden sm:inline font-medium text-slate-700">
              Zero Commission • 100% Kerala Tourism Certified Fleet • Live WhatsApp Boat Photos
            </span>
            <span className="sm:hidden font-medium text-slate-800 truncate">
              Direct Owner Rates • Zero Middleman Fee
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-semibold text-slate-800">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-800">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              4.9★ (3,400+ Reviews)
            </span>
            <a
              href={SITE_CONFIG.phoneTel}
              className="hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              <span>📞</span>
              <span>{SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Crisp White Header (60% White Dominant) */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Brand Logo with Emerald & Orange Identity */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 17h20c-1.5 3-4 5-8 5s-6.5-2-8-5Z" />
                  <path d="M5 17V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9" />
                  <path d="M9 11h6" />
                  <path d="M12 6V2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  <span>Alleppey</span>
                  <span className="text-emerald-700">Booking</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-0.5 inline-block" />
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-emerald-800">
                  Backwater Tours &amp; Houseboats
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Home
              </Link>

              {/* Tour Packages Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors py-2 cursor-pointer"
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Tour Packages &amp; Boats</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-emerald-700" : "text-slate-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu Container */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-xl border border-emerald-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 bg-emerald-50/70 rounded-xl mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider">
                        Verified Kerala Backwater Fleet
                      </span>
                      <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">
                        Best Price
                      </span>
                    </div>

                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <span className="text-xs font-bold">
                            {service.id === "private-houseboats"
                              ? "🏠"
                              : service.id === "sharing-houseboats"
                              ? "🤝"
                              : service.id === "shikara"
                              ? "🛶"
                              : service.id === "kayaking"
                              ? "🚣"
                              : service.id === "speed-boat"
                              ? "⚡"
                              : "🏡"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 flex items-center justify-between">
                            <span>{service.shortTitle}</span>
                            <span className="text-[11px] text-orange-700 font-extrabold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200/60">
                              {service.startingPrice}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {service.badge}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-1 pt-2 border-t border-slate-100 px-2 flex justify-between text-[11px]">
                      <Link href="/#services" className="font-bold text-emerald-700 hover:text-emerald-800">
                        Compare all boat categories →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/private-houseboats"
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Private Houseboats
              </Link>

              <Link
                href="/shikara"
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Shikara Rides
              </Link>

              <Link
                href="/#fare-calculator"
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors flex items-center gap-1"
              >
                <span>Fare Calculator</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                  Instant
                </span>
              </Link>

              <Link
                href="/#faqs"
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                FAQs
              </Link>
            </nav>

            {/* Desktop Contact & High-Converting Orange CTAs (10% Orange) */}
            <div className="hidden sm:flex items-center gap-3">
              {onOpenBookingModal && (
                <button
                  onClick={onOpenBookingModal}
                  className="hidden xl:inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
                >
                  Quick Quote
                </button>
              )}

              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
                aria-label={`Call ${SITE_CONFIG.name} at ${SITE_CONFIG.phoneFormatted}`}
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

              {/* High Conversion Orange Action Button */}
              <a
                href={getWhatsAppUrl("Hi Alleppey Booking, I want to check Alleppey boat tour packages & rates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all orange-pulse hover:scale-[1.02]"
                aria-label="Chat with Alleppey Booking on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                </svg>
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                </svg>
                <span>Book</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-emerald-100 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between px-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Select Boat Tour Category
                </span>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  Direct Rates
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 px-1">
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl text-xs font-semibold text-slate-800 bg-emerald-50/50 hover:bg-emerald-100/70 border border-emerald-100 transition-colors"
                  >
                    <span className="font-bold block text-slate-900">{service.shortTitle}</span>
                    <span className="text-[11px] font-extrabold text-orange-600">{service.startingPrice}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1">
                <Link
                  href="/#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-emerald-50"
                >
                  Featured Packages &amp; Rates
                </Link>
                <Link
                  href="/#fare-calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                >
                  Backwater Fare Estimator ⚡
                </Link>
                <Link
                  href="/#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-emerald-50"
                >
                  Why Direct Owner Booking
                </Link>
                <Link
                  href="/#faqs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-emerald-50"
                >
                  FAQs &amp; Guidance
                </Link>
              </div>

              {onOpenBookingModal && (
                <div className="pt-2 px-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBookingModal();
                    }}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    Open Custom Inquiry Form
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
