"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/site";
import { SERVICES_DATA } from "../config/services";

export default function Navbar({ onOpenBookingModal }: { onOpenBookingModal?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-emerald-900/10 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                Alleppey<span className="text-emerald-700">Booking</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-emerald-800">
                Alleppey Boat Tour Packages
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Home
            </Link>

            {/* Packages & Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors py-2 cursor-pointer"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Tour Packages &amp; Services</span>
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

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
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
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1.5">
                          <span>{service.shortTitle}</span>
                          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.2 rounded">
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
                    <Link href="/#services" className="font-bold text-emerald-700 hover:underline">
                      View all comparison cards →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/private-houseboats"
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Private Houseboats
            </Link>

            <Link
              href="/sharing-houseboats"
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Sharing Houseboats
            </Link>

            <Link
              href="/shikara"
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Shikara
            </Link>

            <Link
              href="/#faqs"
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Desktop Direct Contact CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenBookingModal && (
              <button
                onClick={onOpenBookingModal}
                className="hidden xl:inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
              >
                Quick Quote
              </button>
            )}
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
              aria-label={`Call ${SITE_CONFIG.name} at ${SITE_CONFIG.phoneFormatted}`}
            >
              <svg
                className="w-4 h-4 text-emerald-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hi Alleppey Booking, I want to check Alleppey boat tour packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow transition-all whatsapp-pulse"
              aria-label="Chat with Alleppey Booking on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
              </svg>
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white shadow-xs"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
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
          <div className="lg:hidden py-4 border-t border-slate-200 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <span className="block px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Boat Tour Packages
            </span>

            <div className="grid grid-cols-2 gap-2 px-1">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-xs font-medium text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-100"
                >
                  <span className="font-bold block">{service.shortTitle}</span>
                  <span className="text-[10px] text-emerald-700">{service.startingPrice}</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-emerald-50"
              >
                All Packages &amp; Cards
              </Link>
              <Link
                href="/#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-emerald-50"
              >
                Why Choose Us
              </Link>
              <Link
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-emerald-50"
              >
                FAQs &amp; Backwater Guide
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200"
              >
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
              <a
                href={getWhatsAppUrl("Hi Alleppey Booking, I want to book a boat tour package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700"
              >
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
