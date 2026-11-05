"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, ChevronDown, Menu, X } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";
import navigation from "@/data/navigation.json";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [houseboatDropdownOpen, setHouseboatDropdownOpen] = useState(false);
  const [mobileHouseboatOpen, setMobileHouseboatOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Contact Strip */}
      <div className="bg-[#0A2540] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:+917012761588"
              className="flex items-center gap-1.5 hover:text-[#2CD664] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2CD664]" />
              <span>+91 70127 61588</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="tel:+919947753154"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#2CD664] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2CD664]" />
              <span>+91 99477 53154</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="mailto:support@alleppeybooking.com"
              className="hidden md:flex items-center gap-1.5 hover:text-[#2CD664] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>support@alleppeybooking.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-slate-300">
              Government Verified Houseboats & Boating in Alleppey
            </span>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2CD664] font-semibold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#2CD664]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
              <Image
                src={siteConfig.logo}
                alt="Alleppey Booking"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A2540]">
                Alleppey<span className="text-[#FF6600]">Booking</span>
              </span>
              <span className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                Kerala Backwater Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Home
            </Link>

            {/* Houseboats Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHouseboatDropdownOpen(true)}
              onMouseLeave={() => setHouseboatDropdownOpen(false)}
            >
              <Link
                href="/house-boat-alleppey/"
                className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] flex items-center gap-1 py-4 transition-colors"
              >
                <span>Houseboats Fleet</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {houseboatDropdownOpen && (
                <div className="absolute top-full -left-20 w-[480px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in duration-150">
                  <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Private & Sharing Houseboats
                    </span>
                    <Link
                      href="/alleppey-boat-house-booking/"
                      className="text-xs font-semibold text-[#FF6600] hover:underline"
                    >
                      View Itinerary →
                    </Link>
                  </div>
                  {navigation[1]?.children?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#FF6600] hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/sharing-houseboat-in-alleppey/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Sharing Houseboat
            </Link>
            <Link
              href="/shikara-ride-in-alleppey/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Shikara
            </Link>
            <Link
              href="/kayaking-in-alleppey/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Kayaking
            </Link>
            <Link
              href="/speed-boat-in-alleppey/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Speedboat
            </Link>
            <Link
              href="/blogs/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/contact/"
              className="text-sm font-semibold text-slate-700 hover:text-[#FF6600] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20want%20to%20check%20rates%20and%20availability%20for%20houseboat%20booking"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-[#2CD664] text-white hover:bg-[#22B350] transition-all shadow-md shadow-green-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileHouseboatOpen(!mobileHouseboatOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Houseboats Fleet</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileHouseboatOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileHouseboatOpen && (
              <div className="pl-6 pt-2 pb-1 space-y-2 border-l-2 border-orange-200 ml-4">
                <Link
                  href="/house-boat-alleppey/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-[#FF6600]"
                >
                  Overview & All Houseboats
                </Link>
                <Link
                  href="/alleppey-boat-house-booking/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-slate-900"
                >
                  Houseboat Itinerary Guide
                </Link>
                {navigation[1]?.children
                  ?.filter((c) => c.href.includes("bedroom") || c.href.includes("sharing"))
                  .map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-slate-600 hover:text-slate-900"
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <Link
            href="/sharing-houseboat-in-alleppey/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Sharing Houseboat
          </Link>
          <Link
            href="/shikara-ride-in-alleppey/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Shikara Ride
          </Link>
          <Link
            href="/kayaking-in-alleppey/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Kayaking
          </Link>
          <Link
            href="/speed-boat-in-alleppey/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Speedboat
          </Link>
          <Link
            href="/blogs/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Blogs & Travel Guides
          </Link>
          <Link
            href="/about-us/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            About Us
          </Link>
          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+917012761588"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold bg-[#0A2540] text-white"
            >
              <Phone className="w-4 h-4 text-[#2CD664]" />
              <span>Call: +91 70127 61588</span>
            </a>
            <a
              href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20interested%20in%20booking%20a%20boat%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold bg-[#2CD664] text-white"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

