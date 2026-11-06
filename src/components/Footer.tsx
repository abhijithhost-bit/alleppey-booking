import Link from "next/link";

export default function Footer() {
  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Alleppey Booking",
    url: "https://alleppeybooking.com/",
    description:
      "Your perfect Alleppey getaway. We provide the best-verified operators for houseboats, shikara rides, kayaking, and speedboats with zero hidden charges.",
    telephone: ["+917012761588", "+919947753154", "+916238794500"],
    email: "support@alleppeybooking.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Punnamada Finishing Point Road, Punnamada",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688013",
      addressCountry: "IN",
    },
    sameAs: ["https://wa.me/917012761588"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      <footer className="at-footer" role="contentinfo" aria-label="Site Footer">
        <div className="at-footer-container">
          <div className="at-footer-brand">
            <h2>
              <span>Alleppey</span> Booking
            </h2>
            <p>
              Your perfect Alleppey getaway. We provide the best-verified
              operators for houseboats, shikara rides, kayaking, and speedboats
              with zero hidden charges.
            </p>
          </div>

          <div>
            <h3 className="at-footer-title" id="footer-links-title">
              Quick Links
            </h3>
            <ul className="at-footer-links" aria-labelledby="footer-links-title">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs/">Blog</Link>
              </li>
              <li>
                <Link href="/contact/">Contact Us</Link>
              </li>
              <li>
                <Link href="/about-us/">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions/">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="at-footer-title" id="footer-services-title">
              Our Services
            </h3>
            <ul
              className="at-footer-links"
              aria-labelledby="footer-services-title"
            >
              <li>
                <Link href="/alleppey-boat-house-booking/">
                  Private houseboats
                </Link>
              </li>
              <li>
                <Link href="/sharing-houseboat-in-alleppey/">
                  Shared Boathouses
                </Link>
              </li>
              <li>
                <Link href="/shikara-ride-in-alleppey/">Shikara</Link>
              </li>
              <li>
                <Link href="/kayaking-in-alleppey/">Kayaking</Link>
              </li>
              <li>
                <Link href="/speed-boat-in-alleppey/">Speed boat</Link>
              </li>
            </ul>
          </div>

          <div className="at-footer-contact">
            <h3 className="at-footer-title">Get in Touch</h3>

            <address>
              <div className="at-footer-contact-item">
                <svg
                  className="at-footer-contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <a
                  href="https://maps.app.goo.gl/wMwqb2A2gbmX3huw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                >
                  Punnamada Finishing Point Road, Punnamada, Alappuzha, Kerala
                  688013
                </a>
              </div>

              <div className="at-footer-contact-item">
                <svg
                  className="at-footer-contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="at-footer-phone-list">
                  <a href="tel:+917012761588">+91 7012761588</a>
                  <a href="tel:+919947753154">+91 9947753154</a>
                  <a href="tel:+916238794500">+91 6238794500</a>
                </div>
              </div>

              <div className="at-footer-contact-item">
                <svg
                  className="at-footer-contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:support@alleppeybooking.com">
                  support@alleppeybooking.com
                </a>
              </div>
            </address>

            <a
              href="https://wa.me/917012761588"
              target="_blank"
              rel="noopener noreferrer"
              className="at-footer-btn"
              aria-label="Chat with us on WhatsApp"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="at-footer-bottom">
          <div>&copy; 2026 Alleppey Booking. All Rights Reserved.</div>
          <div>Made for Alleppey Explorers</div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="at-floating-actions">
        <a
          href="tel:+917012761588"
          className="at-float-btn at-float-call"
          data-tooltip="Call Us"
          aria-label="Call Alleppey Booking"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.57c0-.55-.45-1-1-1z" />
          </svg>
        </a>

        <a
          href="https://wa.me/917012761588"
          target="_blank"
          rel="noopener noreferrer"
          className="at-float-btn at-float-wa"
          data-tooltip="Chat on WhatsApp"
          aria-label="Chat with Alleppey Booking on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </>
  );
}
