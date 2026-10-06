"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <Link href="/" className="navbar__logo" aria-label="Alleppey Booking Home">
          <span className="navbar__logo-leaf">🌿</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-bold">Alleppey</span>
            <span className="navbar__logo-light">Booking</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="navbar__links" aria-label="Main navigation">
          <Link href="/packages" className="navbar__link">Packages</Link>
          <Link href="/#gallery" className="navbar__link">Gallery</Link>
          <Link href="/#why-us" className="navbar__link">About</Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/packages"
          id="navbar-book-now-btn"
          className="btn btn--orange navbar__cta"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-bar ${menuOpen ? "bar--open-top" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "bar--open-mid" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "bar--open-bot" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="navbar__mobile-menu" aria-label="Mobile navigation">
          <Link href="/packages" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link href="/#gallery" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/#why-us" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/packages"
            className="btn btn--orange navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
