"use client";

import Link from "next/link";
import { useState } from "react";
import siteConfig from "@/data/siteConfig.json";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSubDropdownOpen(false);
  };

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      { "@type": "WebPage", name: "Private Houseboat Fleet", url: `${siteConfig.url}/house-boat-alleppey/` },
      { "@type": "WebPage", name: "Shared Houseboats", url: `${siteConfig.url}/sharing-houseboat-in-alleppey/` },
      { "@type": "WebPage", name: "Shikara Ride", url: `${siteConfig.url}/shikara-ride-in-alleppey/` },
      { "@type": "WebPage", name: "Blogs", url: `${siteConfig.url}/blogs/` },
      { "@type": "WebPage", name: "Contact Us", url: `${siteConfig.url}/contact/` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />
      <header className="at-global-header" role="banner">
        {/* Logo */}
        <Link
          href="/"
          className="at-logo"
          rel="home"
          aria-label="Alleppey Booking Homepage"
          onClick={closeMobileMenu}
        >
          <span>Alleppey</span> Booking
        </Link>

        {/* Mobile menu toggle input */}
        <input
          type="checkbox"
          id="mobile-menu-check"
          className="at-mobile-toggle hidden"
          style={{ display: "none" }}
          aria-label="Toggle mobile navigation"
          aria-controls="primary-nav"
          checked={mobileMenuOpen}
          onChange={(e) => setMobileMenuOpen(e.target.checked)}
        />

        <label
          htmlFor="mobile-menu-check"
          className="at-hamburger md:hidden"
          tabIndex={0}
          role="button"
          aria-label="Menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMobileMenuOpen(!mobileMenuOpen);
            }
          }}
        >
          <span className="icon-open" aria-hidden="true">☰</span>
          <span className="icon-close" aria-hidden="true">✕</span>
        </label>

        {/* Navigation items */}
        <nav
          className="at-nav-container"
          id="primary-nav"
          role="navigation"
          aria-label="Primary navigation"
        >
          <div className="at-dropdown">
            <span
              className="at-nav-link"
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={() => setServicesOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setServicesOpen((prev) => !prev);
                }
                if (e.key === "Escape") setServicesOpen(false);
              }}
            >
              Services ▾
            </span>

            <ul className="at-dropdown-content list-none m-0 p-0">
              <li className={`at-sub-dropdown ${subDropdownOpen ? "mobile-open" : ""}`}>
                <div className="at-sub-link-wrap">
                  <Link
                    href="/house-boat-alleppey/"
                    onClick={closeMobileMenu}
                  >
                    Private Houseboat Fleet
                  </Link>

                  <span
                    className="at-sub-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Toggle Submenu"
                    aria-expanded={subDropdownOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSubDropdownOpen(!subDropdownOpen);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.stopPropagation();
                        setSubDropdownOpen(!subDropdownOpen);
                      }
                    }}
                  >
                    ▾
                  </span>
                </div>

                <ul className="at-sub-dropdown-content list-none m-0 p-0">
                  <li><Link href="/1-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>1 Bedroom Houseboat</Link></li>
                  <li><Link href="/2-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>2 Bedroom Houseboat</Link></li>
                  <li><Link href="/3-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>3 Bedroom Houseboat</Link></li>
                  <li><Link href="/4-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>4 Bedroom Houseboat</Link></li>
                  <li><Link href="/5-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>5 Bedroom Houseboat</Link></li>
                  <li><Link href="/6-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>6 Bedroom Houseboat</Link></li>
                  <li><Link href="/7-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>7 Bedroom Houseboat</Link></li>
                  <li><Link href="/8-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>8 Bedroom Houseboat</Link></li>
                  <li><Link href="/10-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>10 Bedroom Houseboat</Link></li>
                  <li><Link href="/12-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>12 Bedroom Houseboat</Link></li>
                  <li><Link href="/14-bedroom-houseboat-alleppey/" onClick={closeMobileMenu}>14 Bedroom Houseboat</Link></li>
                </ul>
              </li>

              <li><Link href="/sharing-houseboat-in-alleppey/" onClick={closeMobileMenu}>Shared Houseboats</Link></li>
              <li><Link href="/shikara-ride-in-alleppey/" onClick={closeMobileMenu}>Shikara</Link></li>
              <li><Link href="/kayaking-in-alleppey/" onClick={closeMobileMenu}>Kayaking</Link></li>
              <li><Link href="/speed-boat-in-alleppey/" onClick={closeMobileMenu}>Speed Boat</Link></li>
            </ul>
          </div>

          <Link href="/blogs/" className="at-nav-link" onClick={closeMobileMenu}>
            Blogs
          </Link>
          <Link href="/contact/" className="at-contact-btn" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </nav>
      </header>
    </>
  );
}
