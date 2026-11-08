"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are houseboats safe for children and infants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! Our houseboats are fully enclosed with safety rails. Our crew is highly trained, and life jackets are available on board for all age groups."
      }
    },
    {
      "@type": "Question",
      "name": "What are the standard AC timings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For standard Deluxe and Premium packages, the air conditioning in the bedrooms is turned on from 9:00 PM to 6:00 AM while the boat is docked for the night."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide pure vegetarian food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we prepare excellent pure vegetarian meals in a clean, separate kitchen area upon request. Please inform us of any dietary restrictions beforehand."
      }
    },
    {
      "@type": "Question",
      "name": "Can the houseboat cruise at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. As per strict Kerala government regulations, all houseboats must dock safely by the riverbank at 5:30 PM. Cruising resumes the next morning at 8:00 AM."
      }
    }
  ]
};

const AB_IMAGES = [ 
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-18-at-2.58.55-PM-scaled.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-18-at-7.50.12-PM-3-scaled.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-17-at-9.39.28-AM-1.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-14-at-6.02.35-PM.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-14-at-12.29.10-PM-1.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.22.31-PM-3-scaled.jpeg",
  "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-3.webp",
  "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.28-AM.jpeg",
  "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-12.29.36-PM.webp",
  "/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-18-at-3.27.15-PM-2.jpeg"
];

const AB_HOUSEBOATS = [ 
  {n:1,  price:11000, priceDay:8000,  priceNight:7500,  base:2,  max:4,  badge:"Best for Couples",  desc:"A cozy private cruise for two — perfect for honeymoons and quiet getaways.", link:"/1-bedroom-houseboat-alleppey/"},
  {n:2,  price:14000, priceDay:12000, priceNight:9000,  base:4,  max:8,  badge:"Most Popular",      desc:"Our most-booked size — ideal for couples travelling together or close friends.", link:"/2-bedroom-houseboat-alleppey/"},
  {n:3,  price:18000, priceDay:14000, priceNight:13500, base:6,  max:12, badge:"",                  desc:"Comfortable space for a small family or a close-knit group of friends.", link:"/3-bedroom-houseboat-alleppey/"},
  {n:4,  price:24000, priceDay:20000, priceNight:18000, base:8,  max:16, badge:"Family Favourite",  desc:"Room to spread out — a favourite for family reunions and festive trips.", link:"/4-bedroom-houseboat-alleppey/"},
  {n:5,  price:30000, priceDay:26000, priceNight:22500, base:10, max:20, badge:"",                  desc:"Generous decks and bedrooms suited for extended family getaways.", link:"/5-bedroom-houseboat-alleppey/"},
  {n:6,  price:36000, priceDay:32000, priceNight:27000, base:12, max:24, badge:"",                  desc:"A full boat for larger friend groups, without compromising on comfort.", link:"/6-bedroom-houseboat-alleppey/"},
  {n:7,  price:42000, priceDay:28000, priceNight:31500, base:14, max:28, badge:"Best for Groups",   desc:"Purpose-built for bigger group tours, with ample common deck space.", link:"/7-bedroom-houseboat-alleppey/"},
  {n:8,  price:48000, priceDay:32000, priceNight:36000, base:16, max:32, badge:"",                  desc:"A spacious charter for large families or company outings.", link:"/8-bedroom-houseboat-alleppey/"},
  {n:10, price:60000, priceDay:40000, priceNight:45000, base:20, max:40, badge:"",                  desc:"A grand vessel suited for wedding parties and milestone celebrations.", link:"/10-bedroom-houseboat-alleppey/"},
  {n:12, price:72000, priceDay:48000, priceNight:54000, base:24, max:48, badge:"",                  desc:"One of our biggest boats — built for grand family or corporate events.", link:"/12-bedroom-houseboat-alleppey/"},
  {n:14, price:84000, priceDay:56000, priceNight:63000, base:28, max:56, badge:"Flagship Boat",     desc:"Our flagship vessel — the largest houseboat in our Alleppey fleet.", link:"/14-bedroom-houseboat-alleppey/"}
];

export default function FleetPageView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCard = (cardId: string) => {
    const el = document.getElementById(cardId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const money = (v: number) => "₹" + v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const waLink = (n: number) =>
    "https://wa.me/917012761588?text=" +
    encodeURIComponent(
      "Hi Alleppey Booking! I'm interested in the " +
        n +
        " Bedroom Houseboat. Could you share availability and exact rates for Day/Night/Overnight?"
    );

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="fleet-pure-page w-full" suppressHydrationWarning>
        <div className="ab-hb-wrap" id="ab-houseboats-alleppey">


  <header className="ab-hb-hero">
    <div className="ab-hb-hero-inner">
        <span className="ab-hb-eyebrow">Premium Fleet Collection</span>
        <h1>Experience the Finest <span style={{"color":"var(--brand-green)"}}>House Boat Alleppey</span> Fleet</h1>
        <p>From cozy 1-bedroom romantic retreats to massive 14-bedroom floating venues. Compare the best <strong>houseboat alleppey rates</strong> and secure your stay with verified operators, air-conditioned comfort, and authentic Kerala cuisine included.</p>
        
        <nav className="ab-hb-scale-wrap" aria-label="Browse houseboats by bedroom count">
            <span className="ab-hb-scale-tag">1 BR</span>
            <div className="ab-hb-scale" id="ab-hb-pillnav">
              {AB_HOUSEBOATS.map((b) => (
                <button
                  key={b.n}
                  type="button"
                  className="ab-hb-pill"
                  onClick={() => scrollToCard(`hb-card-${b.n}`)}
                  title={`View ${b.n} Bedroom Houseboat`}
                >
                  {b.n}
                </button>
              ))}
            </div>
            <span className="ab-hb-scale-tag">14 BR</span>
        </nav>

        <div className="ab-hb-hero-actions">
            <a className="ab-hb-btn ab-hb-btn-primary" href="#ab-hb-compact">Browse All Houseboats ↓</a>
            <a className="ab-hb-btn ab-hb-btn-outline" id="ab-hb-hero-wa" href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20want%20to%20enquire%20about%20your%20Alleppey%20Houseboat%20fleet." target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                WhatsApp Us
            </a>
        </div>
        
        <div className="ab-hb-trust-badges">
            <span className="ab-hb-trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.8/5 Rated</span>
            <span className="ab-hb-trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> DTPC Verified</span>
            <span className="ab-hb-trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg> Zero Hidden Fees</span>
        </div>
    </div>
    <div className="ab-hb-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,26 L1440,60 L0,60 Z" fill="#fdfdfd" />
      </svg>
    </div>
  </header>

  <section className="ab-hb-section" id="ab-hb-compact">
    
    <h2 className="ab-hb-sr-only">Alleppey Houseboat Packages</h2>
    <div className="ab-hb-grid" id="ab-hb-grid-a">
              {AB_HOUSEBOATS.map((item, i) => {
                const img = AB_IMAGES[i % AB_IMAGES.length];
                const bedWord = item.n > 1 ? "Bedrooms" : "Bedroom";
                const altTag = item.n + " Bedroom House Boat Alleppey";
                const pageLink = item.link || "/alleppey-boat-house-booking/";

                return (
                  <article
                    key={item.n}
                    className="ab-hb-card"
                    id={"ab-hb-card-" + item.n}
                    itemScope
                    itemType="https://schema.org/Product"
                  >
                    <meta itemProp="name" content={altTag} />
                    <div className="ab-hb-img-wrap">
                      <img src={img} alt="Alleppey Houseboat Fleet Luxury Bedroom Cruise" title={altTag} width="400" height="260" decoding="async" itemProp="image" />
                      {item.badge && <span className="ab-hb-badge">{item.badge}</span>}
                    </div>
                    <div className="ab-hb-card-content">
                      <h3>{item.n} Bedroom Houseboat</h3>
                      <p className="ab-hb-tagline" itemProp="description">
                        {item.desc}
                      </p>
                      <ul className="ab-hb-meta">
                        <li>👤 Base {item.base} / Max {item.max} Guests</li>
                        <li>🛏️ {item.n} {bedWord}</li>
                        <li>🍽️ Meals Included</li>
                      </ul>
                      <ul className="ab-hb-highlights">
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {" "}9 PM to 6 AM AC in bedrooms
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {" "}Private Crew (Captain, Cook)
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {" "}Vembanad Lake &amp; village cruise
                        </li>
                      </ul>
                      <div className="ab-hb-alt-prices">
                        <span className="ab-hb-alt-price">
                          ☀️ Day Cruise: <strong>{money(item.priceDay)}</strong>
                        </span>
                        <span className="ab-hb-alt-price">
                          🌙 Night Stay: <strong>{money(item.priceNight)}</strong>
                        </span>
                      </div>
                      <div className="ab-hb-price-wrap" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="priceCurrency" content="INR" />
                        <meta itemProp="price" content={String(item.price)} />
                        <div>
                          <span className="ab-hb-price-label">Overnight From</span>
                          <span className="ab-hb-price-value">{money(item.price)}</span>
                        </div>
                        <div className="ab-hb-card-disclaimer">
                          Varies by season.<br />
                          <strong>Check availability ↓</strong>
                        </div>
                      </div>
                      <div className="ab-hb-actions">
                        <Link
                          className="ab-hb-btn-details"
                          href={pageLink}
                          title={"View Details for " + item.n + " Bedroom Houseboat"}
                        >
                          View Details
                        </Link>
                        <a
                          className="ab-hb-btn-quick-wa"
                          href={waLink(item.n)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={"WhatsApp Inquiry for " + item.n + " Bedroom Houseboat"}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                          {" "}Quick WhatsApp Inquiry
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
    <p className="ab-hb-note">*Starting prices shown are examples — please confirm exact rates on WhatsApp. Final price depends on season, boat tier (Deluxe / Premium / Luxury) and availability.</p>
    
    <div className="ab-hb-bottom-actions">
        <Link className="ab-hb-btn ab-hb-btn-primary" style={{"borderRadius":"50px","padding":"14px 28px"}} href="/house-boat-alleppey/">View All Itineraries</Link>
        <a className="ab-hb-btn ab-hb-btn-outline-dark" id="ab-hb-bottom-wa-custom" href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20would%20like%20to%20get%20a%20custom%20houseboat%20package%20quote." target="_blank" rel="noopener noreferrer">Get Custom Quote via WhatsApp</a>
    </div>

    <div className="ab-hb-features-grid">
        <div className="ab-hb-feature-item">
            <div className="ab-hb-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
            <h3>Professional Boat Crew</h3>
            <p>Every private tour includes an experienced local captain, a chef, and an engine driver dedicated to your safety and comfort.</p>
        </div>
        <div className="ab-hb-feature-item">
            <div className="ab-hb-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
            <h3>Safe & Verified Fleet</h3>
            <p>Our fleet strictly adheres to government regulations. We provide safe docking by 5:30 PM and secure parking at the Alleppey Finishing Point.</p>
        </div>
        <div className="ab-hb-feature-item">
            <div className="ab-hb-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg></div>
            <h3>Authentic Kerala Cuisine</h3>
            <p>Enjoy meals prepared fresh on board. From welcome drinks to traditional Karimeen fry and evening tea, your dining experience is fully included.</p>
        </div>
    </div>

    <section className="ab-hb-cross-sell">
        <h2>Looking for a different experience?</h2>
        <p>Whether you want a short canal ride or a budget-friendly group stay, explore our other premium backwater services in Alleppey.</p>
        <div className="ab-hb-cs-grid">
            <Link href="/sharing-houseboat-in-alleppey/" className="ab-hb-cs-card">
                <h3>Shared Houseboats <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></h3>
                <p>Enjoy the classic backwater experience on our budget-friendly shared boathouses.</p>
            </Link>
            <Link href="/shikara-ride-in-alleppey/" className="ab-hb-cs-card">
                <h3>Shikara Rides <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></h3>
                <p>Explore the narrow village canals peacefully and get closer to local backwater life.</p>
            </Link>
            <Link href="/speed-boat-in-alleppey/" className="ab-hb-cs-card">
                <h3>Speed Boat Cruises <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></h3>
                <p>Thrilling, fast-paced rides across the wide open waters of Vembanad Lake.</p>
            </Link>
            <Link href="/kayaking-in-alleppey/" className="ab-hb-cs-card">
                <h3>Kayaking <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></h3>
                <p>Paddle at your own pace and experience the tranquility of nature up close.</p>
            </Link>
        </div>
    </section>

    <section className="ab-hb-faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="ab-hb-faq-item" name="faq">
            <summary>Are houseboats safe for children and infants? <span className="ab-hb-faq-icon">+</span></summary>
            <div className="ab-hb-faq-content">Yes, absolutely! Our houseboats are fully enclosed with safety rails. Our crew is highly trained, and life jackets are available on board for all age groups.</div>
        </details>
        <details className="ab-hb-faq-item" name="faq">
            <summary>What are the standard AC timings? <span className="ab-hb-faq-icon">+</span></summary>
            <div className="ab-hb-faq-content">For standard Deluxe and Premium packages, the air conditioning in the bedrooms is turned on from 9:00 PM to 6:00 AM while the boat is docked for the night.</div>
        </details>
        <details className="ab-hb-faq-item" name="faq">
            <summary>Do you provide pure vegetarian food? <span className="ab-hb-faq-icon">+</span></summary>
            <div className="ab-hb-faq-content">Yes, we prepare excellent pure vegetarian meals in a clean, separate kitchen area upon request. Please inform us of any dietary restrictions beforehand.</div>
        </details>
        <details className="ab-hb-faq-item" name="faq">
            <summary>Can the houseboat cruise at night? <span className="ab-hb-faq-icon">+</span></summary>
            <div className="ab-hb-faq-content">No. As per strict Kerala government regulations, all houseboats must dock safely by the riverbank at 5:30 PM. Cruising resumes the next morning at 8:00 AM.</div>
        </details>
    </section>

    <article className="ab-hb-seo-content">
        <h2>Find Your Perfect House Boat Alleppey (Alappuzha)</h2>
        <p>Staying on a premium <strong>house boat alleppey</strong> is widely considered one of the most authentic and serene travel experiences in India. Navigating the vast expanse of Vembanad Lake and winding through the intricate network of village canals offers a rare glimpse into the traditional waterfront lifestyle of Kerala. When searching for the best <strong>boat house in alleppey</strong>, it is crucial to choose verified operators with transparent pricing.</p>
        <p>Whether you are planning a quiet romantic getaway or a large family gathering, our diverse <strong>alappuzha boat house</strong> fleet ranges from comfortable 1-bedroom private boats to expansive 14-bedroom floating venues. Every journey is curated to provide maximum comfort. Check our <strong>alleppey boat house price</strong> options above, featuring an expert on-board crew and freshly prepared local cuisine, ensuring your backwater cruise is safe, transparent, and entirely memorable.</p>
    </article>
  </section>
</div>




      </div>
    </>
  );
}
