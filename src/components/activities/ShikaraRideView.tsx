"use client";

import React, { useState } from "react";
import Link from "next/link";

const schemas = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "name": "Shikara Ride in Alleppey",
        "description": "Experience the Kerala backwaters comfortably and peacefully. Perfect for sightseeing, birdwatching, and capturing beautiful memories on a budget.",
        "touristType": [
          "Couples",
          "Families",
          "Nature Lovers"
        ],
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "ImageGallery",
        "name": "Shikara Ride in Alleppey Gallery",
        "description": "Beautiful views captured by guests on their Shikara ride in Alleppey.",
        "about": {
          "@type": "Thing",
          "name": "Alleppey Shikara Boat Ride"
        },
        "image": [
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp",
            "name": "Tourists Relaxing on Shikara Deck",
            "description": "Tourists relaxing and enjoying the view from the front deck of a shikara boat in Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/shikara-adventure.webp",
            "name": "Family on Traditional Shikara",
            "description": "A happy family posing on a traditional wooden shikara boat near the lush green shores of Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/shikara-adventure.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/08/shikara-000.jpg",
            "name": "Scenic Shikara Ride in Alleppey",
            "description": "Two people standing at the bow of a colorful traditional boat with a woven roof during a scenic shikara ride in Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/08/shikara-000.jpg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.33-PM-1-1.jpeg",
            "name": "Tourist with Eagle in Alleppey",
            "description": "A female tourist smiling with a large eagle perched on her shoulder near the Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.33-PM-1-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.28.24-PM-1.jpeg",
            "name": "Couple Enjoying Boat Ride",
            "description": "A romantic couple leaning back and relaxing on the front rails of a shikara boat in Kerala.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.28.24-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/08/shikara-001.jpg",
            "name": "Family Enjoying a Shikara Ride in Alleppey",
            "description": "A family of three posing on the yellow deck of a boat while enjoying a relaxing shikara ride in Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/08/shikara-001.jpg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/IMG-20250106-WA0007.webp",
            "name": "Shikara Cruising Backwaters",
            "description": "A traditional wooden shikara boat cruising smoothly across the wide Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/IMG-20250106-WA0007.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp",
            "name": "Tourists Dining by Backwaters",
            "description": "A group of tourists enjoying a meal around a table under a colorful umbrella near the Alleppey backwaters.",
            "thumbnailUrl": "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I book a Shikara ride in Alleppey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The easiest way to book is to message us on WhatsApp. We will confirm your timing and availability within minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a Shikara and a Houseboat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Houseboat is large, slow, and includes bedrooms and cooked meals, making it great for overnight stays. A Shikara is smaller, open-air, and much cheaper. It is designed for 2 to 6-hour daytime cruising and offers a closer, open-air connection to the beautiful backwaters."
            }
          },
          {
            "@type": "Question",
            "name": "Are meals included in the Shikara price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, food is not cooked on a Shikara. However, the driver will happily stop at authentic local toddy shops or lakeside restaurants where you can purchase fresh Karimeen fish fry and local Kerala meals."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best time for a Shikara ride?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The absolute best time for a Shikara ride in Alleppey is the 6:00 AM sunrise slot. The water is incredibly calm, the weather is cool, and you will see amazing birdlife. The 4:00 PM sunset ride is also highly recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe for children and non-swimmers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. All boats are equipped with life jackets, and the water in the backwater channels is very calm. The boats have protective roofing to shade you from the sun."
            }
          }
        ]
      }
    ]
  }
];

export default function ShikaraRideView() {
  const [currentImg, setCurrentImg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="activity-pure w-full">
        <link rel="preload" as="image" href="/wp-content/uploads/2026/06/shikara-adventure.webp" />



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />



<header className="sh-hero-wrapper">
    <div className="sh-hero-container">
        <div className="sh-hero-text">
            <span className="sh-badge">🌿 Peaceful Day Trips</span>
            <h1 className="sh-hero-title">Book a <strong>Shikara Ride in <span className="sh-highlight">Alleppey</span></strong>.</h1>
            <p className="sh-hero-subtitle">Experience the Kerala backwaters comfortably and peacefully. Perfect for sightseeing, birdwatching, and capturing beautiful memories on a budget.</p>
            
            <div className="sh-feature-list">
                <div className="sh-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Uninterrupted Lake & Backwater Views
                </div>
                <div className="sh-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Comfortable Seating Arrangement
                </div>
                <div className="sh-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Affordable Hourly Rates
                </div>
            </div>
        </div>

        <div className="sh-booking-box" id="ab-booking-form" role="form" aria-label="Book your shikara ride">
            <h2 className="sh-box-title">Book <em>Now</em></h2>
            
            <div className="sh-form-group">
                <label className="sh-form-label" htmlFor="shikara-duration">DURATION...</label>
                <select id="shikara-duration" className="sh-form-control" aria-required="true">
                    <option value="" disabled >Select Hours</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="5 Hours">5 Hours</option>
                    <option value="6 Hours">6 Hours</option>
                    <option value="Full Day">Full Day</option>
                </select>
            </div>

            <div className="sh-form-group">
                <label className="sh-form-label" htmlFor="shikara-guests">NUMBER OF GUESTS...</label>
                <select id="shikara-guests" className="sh-form-control" aria-required="true">
                    <option value="" disabled >Select Persons</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3 Persons">3 Persons</option>
                    <option value="4 Persons">4 Persons</option>
                    <option value="5 Persons">5 Persons</option>
                    <option value="6 Persons">6 Persons</option>
                    <option value="7+ Persons">7+ Persons</option>
                </select>
            </div>

            <div className="sh-form-group">
                <label className="sh-form-label" htmlFor="shikara-date-picker">SELECT DATE</label>
                <div className="sh-date-wrapper">
                    <input type="text" id="shikara-date-picker" className="sh-form-control" placeholder="Pick a date" readOnly aria-required="true" />
                    <svg aria-hidden="true" className="sh-calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>
            </div>

            <a id="shikara-submit" className="sh-submit-btn" href="#" target="_blank" rel="noopener noreferrer" aria-label="Check Rates and Availability via WhatsApp">Check Rates & Availability →</a>

            <p className="sh-price-text"><strong>Prices vary by group size and duration</strong><br />Message us for an instant custom quote</p>
            
            <a href="#pricing-section" className="sh-skip-link">View estimated price chart ↓</a>
        </div>
    </div>
</header>

<main>
    
    <div className="sk-trust-wrapper">
        <div className="sk-trust-container">
            
            <div className="sk-trust-item">
                <div className="sk-trust-icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div className="sk-trust-text">
                    <span className="sk-trust-title">Govt. Approved</span>
                    <span className="sk-trust-sub">Registered Boats</span>
                </div>
            </div>

            <div className="sk-trust-item">
                <div className="sk-trust-icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
                </div>
                <div className="sk-trust-text">
                    <span className="sk-trust-title">100% Safety</span>
                    <span className="sk-trust-sub">Life Jackets Provided</span>
                </div>
            </div>

            <div className="sk-trust-item">
                <div className="sk-trust-icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <div className="sk-trust-text">
                    <span className="sk-trust-title">4.8/5 Rating</span>
                    <span className="sk-trust-sub">On Google Reviews</span>
                </div>
            </div>

            <div className="sk-trust-item">
                <div className="sk-trust-icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" ry="4"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
                </div>
                <div className="sk-trust-text">
                    <span className="sk-trust-title">Pay & Park</span>
                    <span className="sk-trust-sub">Available at Venue</span>
                </div>
            </div>

        </div>
    </div>

    <button className="ab-scroll-to-book" id="abSmartBookBtn" aria-label="Scroll to booking section">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5" />
            <polyline points="5 12 12 5 19 12" />
        </svg>
        Book Now
    </button>

    
    <section className="gal-wrap" aria-labelledby="gallery-heading">
      <div className="gal-header">
        <h2 id="gallery-heading" className="gal-title">Our Gallery</h2>
        <p className="gal-sub">Beautiful views captured by guests on their Shikara ride in Alleppey.</p>
      </div>
      
      <div className="gal-grid">
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Tourists Relaxing on Shikara Deck image"  >
          <img src="/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp" alt="Tourists relaxing and enjoying the view from the front deck of a shikara boat in Alleppey backwaters." title="Tourists Relaxing on Shikara Deck" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Family on Traditional Shikara image"  >
          <img src="/wp-content/uploads/2026/06/shikara-adventure.webp" alt="A happy family posing on a traditional wooden shikara boat near the lush green shores of Alleppey." title="Family on Traditional Shikara" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View image of a colorful boat on a scenic shikara ride in Alleppey"  >
          <img src="/wp-content/uploads/2026/08/shikara-000.jpg" alt="Two people standing at the bow of a colorful traditional boat with a woven roof during a scenic shikara ride in Alleppey backwaters." title="Scenic Shikara Ride in Alleppey" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Tourist with Eagle in Alleppey image"  >
          <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.33-PM-1-1.jpeg" alt="A female tourist smiling with a large eagle perched on her shoulder near the Alleppey backwaters." title="Tourist with Eagle in Alleppey" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Couple Enjoying Boat Ride image"  >
          <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.28.24-PM-1.jpeg" alt="A romantic couple leaning back and relaxing on the front rails of a shikara boat in Kerala." title="Couple Enjoying Boat Ride" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View image of a family enjoying a shikara ride in Alleppey"  >
          <img src="/wp-content/uploads/2026/08/shikara-001.jpg" alt="A family of three posing on the yellow deck of a boat while enjoying a relaxing shikara ride in Alleppey backwaters." title="Family Enjoying a Shikara Ride in Alleppey" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Shikara Cruising Backwaters image"  >
          <img src="/wp-content/uploads/2026/06/IMG-20250106-WA0007.webp" alt="A traditional wooden shikara boat cruising smoothly across the wide Alleppey backwaters." title="Shikara Cruising Backwaters" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
        
        <figure className="gal-item" tabIndex={0} role="button" aria-label="View Tourists Dining by Backwaters image"  >
          <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp" alt="A group of tourists enjoying a meal around a table under a colorful umbrella near the Alleppey backwaters." title="Tourists Dining by Backwaters" loading="lazy" decoding="async" width="800" height="600" />
          <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div>
        </figure>
      </div>
    </section>

    

    
    <section className="sk-section-wrapper">
        <div className="sk-concept-area">
            <div className="sk-concept-grid">
                
                <div className="sk-text-box">
                    <span className="sk-subtitle">The Experience</span>
                    <h2 className="sk-title sk-title-margin">What to Expect on Your Cruise</h2>
                    <p>A Shikara ride in Alleppey is the perfect way to spend a few hours gliding through the serene backwaters. Designed for daytime cruising, these elegant wooden boats feature comfortable, cushioned seating and an open design that allows the gentle backwater breeze to flow through unhindered.</p>
                    <p>Depending on the duration you select, your route will guide you past historic temples, traditional village settlements, the picturesque waters of <strong>Kayinakari</strong>, the famous <strong>Alleppey Boat Race Track</strong>, and the vast expanse of <span className="vembanad-highlight">Vembanad Lake</span>. Because Shikaras lack a massive upper deck, they easily navigate under low bridges and into deeply shaded, authentic canals that large houseboats cannot reach.</p>
                    
                    
                    <div className="sk-addon-card">
                        <div className="sk-addon-icon">⚡</div>
                        <div className="sk-addon-text">
                            <h3>Speedboat Experience Add-On <span className="sk-addon-badge">Optional Thrill</span></h3>
                            <p>Want an extra adrenaline rush during your cruise? You can pause your peaceful ride for an exciting <strong>10-minute (~10 km) Speedboat experience</strong> for just <strong>₹300 per person</strong>!</p>
                        </div>
                    </div>

                    <p style={{"fontSize":"14px","fontStyle":"italic","color":"var(--text-muted)","marginTop":"20px"}}>Looking for an overnight stay instead? Explore our premium <a href="/house-boat-alleppey/" className="sk-promo-link">Alleppey boathouse packages</a>, or check our dedicated <a href="/speed-boat-in-alleppey/" className="sk-promo-link">speed boat options</a>.</p>
                    
                    <div className="sk-tags-wrap">
                        <span className="sk-tag"><span aria-hidden="true">📸</span> Perfect for Photography</span>
                        <span className="sk-tag"><span aria-hidden="true">🌅</span> Sunrise & Sunset Rides</span>
                    </div>
                </div>

                <div className="sk-highlight-box">
                    <h3 className="sk-route-title">✨ Why Choose a Shikara?</h3>
                    <div className="sk-feature-list">
                        <div className="sk-feature-item">
                            <div className="sk-feature-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2v20M17 7l-5 5-5-5M17 17l-5-5-5 5"/></svg>
                            </div>
                            <div className="sk-feature-text">
                                <h3>Unobstructed Scenery</h3>
                                <p>Get up close to the natural beauty of the backwaters with an open design that larger vessels can't match.</p>
                            </div>
                        </div>
                        <div className="sk-feature-item">
                            <div className="sk-feature-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <div className="sk-feature-text">
                                <h3>Relaxed Seating</h3>
                                <p>Enjoy open, airy, and comfortably cushioned seating with 360-degree panoramic views of the water.</p>
                            </div>
                        </div>
                        <div className="sk-feature-item">
                            <div className="sk-feature-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <div className="sk-feature-text">
                                <h3>Flexible Scheduling</h3>
                                <p>Book by the hour. Tailor your trip to fit perfectly into your travel itinerary, from 1 hour to a full day.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="sk-guidelines-area">
            <div className="sk-guide-container">
                <div className="sk-section-header">
                    <span className="sk-subtitle">Need to Know</span>
                    <h2 className="sk-title">Shikara Trip Details</h2>
                </div>

                <div className="sk-guide-grid">
                    
                    <div className="sk-guide-card">
                        <div className="sk-guide-icon" aria-hidden="true">⏰</div>
                        <div className="sk-guide-text">
                            <h3>Operating Hours</h3>
                            <p>Shikara boats are available for cruising from <strong>6:00 AM to 6:00 PM</strong>. Booking a Shikara ride in Alleppey at 6:00 AM is highly recommended for incredible sunrise views and bird watching.</p>
                        </div>
                    </div>

                    <div className="sk-guide-card">
                        <div className="sk-guide-icon" aria-hidden="true">💰</div>
                        <div className="sk-guide-text">
                            <h3>Pricing Structure</h3>
                            <p>Shikaras are charged on an <strong>hourly basis</strong>, not per person. The base rate covers the entire boat for your  group size during your booked time slot.</p>
                        </div>
                    </div>

                    <div className="sk-guide-card">
                        <div className="sk-guide-icon" aria-hidden="true">🍽️</div>
                        <div className="sk-guide-text">
                            <h3>Food & Dining</h3>
                            <p>Food is not cooked onboard a Shikara. However, you are welcome to bring your own snacks, or the driver can stop at authentic local <strong>toddy shops and lakeside restaurants</strong> upon request.</p>
                        </div>
                    </div>

                    <div className="sk-guide-card">
                        <div className="sk-guide-icon" aria-hidden="true">⚓</div>
                        <div className="sk-guide-text">
                            <h3>Safety First</h3>
                            <p>All our Shikara boats are government-registered and equipped with life jackets. A professional, experienced driver/guide will accompany you safely throughout your journey.</p>
                        </div>
                    </div>

                </div>

                <div id="pricing-section" className="sk-section-header" style={{"marginTop":"60px","marginBottom":"30px"}}>
                    <span className="sk-subtitle">Plan Your Route</span>
                    <h2 className="sk-title" style={{"fontSize":"32px"}}>Shikara Ride Routes & Pricing</h2>
                </div>
                
                <div className="sk-table-container">
                    <table className="sk-seo-table" aria-label="Alleppey Shikara Ride Prices and Routes">
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>Estimated Price</th>
                                <th>Ideal Route & Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>2 Hours</strong></td>
                                <td>₹2,000 - ₹2,500</td>
                                <td>Starts from Alleppey (2km from town), Punnamada Lake, Vilakumaram canal, SNDP village canals, Alleppey boat race track (starting point to finishing point), then back to starting location.</td>
                            </tr>
                            <tr>
                                <td><strong>3 Hours</strong> <span className="sk-table-badge">Most Popular</span></td>
                                <td>₹3,000 - ₹3,500</td>
                                <td>Starts from Alleppey (2km from town), Punnamada Lake, Kuppappuram village, then enters <span className="vembanad-highlight">Vembanad Lake</span>, SAI boat house, boat race track (starting point to finishing point), then back to starting location.</td>
                            </tr>
                            <tr>
                                <td><strong>4 Hours</strong></td>
                                <td>₹4,000 - ₹4,500</td>
                                <td>Starts from Alleppey (2km from town), Punnamada Lake, Kanjitta, narrow village canals, Kayinakari boat terminal, Meenappally villages, <span className="vembanad-highlight">Vembanad Lake</span>, boat race track (starting point to finishing point), then back to starting location.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </section>

    
    <section className="sk-hiw-area">
        <div className="sk-hiw-container">
            <div className="sk-section-header">
                <span className="sk-subtitle">Easy Steps</span>
                <h2 className="sk-title">How It Works</h2>
            </div>
            <div className="sk-hiw-grid">
                <div className="sk-hiw-card">
                    <div className="sk-hiw-number">1</div>
                    <h3>Select Details & Request</h3>
                    <p>Choose your duration, guest count, and date in the form above, then click to message us on WhatsApp.</p>
                </div>
                <div className="sk-hiw-card">
                    <div className="sk-hiw-number">2</div>
                    <h3>Confirm with 25% Advance</h3>
                    <p>We'll verify availability within minutes. Pay a small 25% advance deposit to lock in your boat and timing.</p>
                </div>
                <div className="sk-hiw-card">
                    <div className="sk-hiw-number">3</div>
                    <h3>Arrive & Set Sail</h3>
                    <p>Reach our boarding jetty, pay the remaining 75% balance, and step onboard for your relaxing cruise!</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rev-wrap" aria-labelledby="reviews-heading">
      <div className="rev-label">GUEST REVIEWS</div>
      <h2 id="reviews-heading" className="rev-title">What our guests say</h2>
      <p className="rev-sub">Over 2,000 happy travellers and counting. Here's what they wrote on Google.</p>

      <div style={{"position":"relative","padding":"0 24px"}}>
        <div className="rev-outer">
          <div className="rev-track" id="revTrack">

            <div className="rev-slide">
              <div className="rev-head">
                <div className="rev-user">
                  <div className="rev-avatar" style={{"background":"#2e7d32"}}>DP</div>
                  <div>
                    <p className="rev-name">Deepak Patel</p>
                    <p className="rev-time">1 month ago</p>
                  </div>
                </div>
                <div className="rev-gicon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                </div>
              </div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Booked a morning trip and it was incredible. Taking this tour gave us such beautiful, uninterrupted views of the water. It was so peaceful and great value for money. WhatsApp booking was super easy too.</p>
            </div>

            <div className="rev-slide">
              <div className="rev-head">
                <div className="rev-user">
                  <div className="rev-avatar" style={{"background":"#1565c0"}}>SP</div>
                  <div>
                    <p className="rev-name">Sneha & Pratik</p>
                    <p className="rev-time">3 weeks ago</p>
                  </div>
                </div>
                <div className="rev-gicon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                </div>
              </div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">We did a 3-hour tour and it was the highlight of our entire Kerala trip. The boat guide took us to a local toddy shop for lunch. Enjoying a <strong>Shikara ride in Alleppey</strong> is much more authentic than eating on a houseboat. Highly recommend!</p>
            </div>

            <div className="rev-slide">
              <div className="rev-head">
                <div className="rev-user">
                  <div className="rev-avatar" style={{"background":"#6a1b9a"}}>TW</div>
                  <div>
                    <p className="rev-name">Tom Williams</p>
                    <p className="rev-time">1 month ago</p>
                  </div>
                </div>
                <div className="rev-gicon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                </div>
              </div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Came all the way from the UK and this was worth every rupee. The open-air seating during our <strong>Shikara ride in Alleppey</strong> means you get a constant breeze, so it never felt too hot. We took hundreds of photos of the kingfishers.</p>
            </div>

            <div className="rev-slide">
              <div className="rev-head">
                <div className="rev-user">
                  <div className="rev-avatar" style={{"background":"#00838f"}}>NM</div>
                  <div>
                    <p className="rev-name">Nidhi Menon</p>
                    <p className="rev-time">2 months ago</p>
                  </div>
                </div>
                <div className="rev-gicon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                </div>
              </div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Family trip with two kids. If you have young ones, a <strong>Shikara ride in Alleppey</strong> is perfect. It's covered from the sun, safe, and the driver let the kids sit up front. They loved watching the birds and enjoying the breeze over the water.</p>
            </div>

            <div className="rev-slide">
              <div className="rev-head">
                <div className="rev-user">
                  <div className="rev-avatar" style={{"background":"#c62828"}}>PG</div>
                  <div>
                    <p className="rev-name">Pooja Gupta</p>
                    <p className="rev-time">2 weeks ago</p>
                  </div>
                </div>
                <div className="rev-gicon">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                </div>
              </div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Booked the sunset slot for our anniversary. Experiencing a <strong>Shikara ride in Alleppey</strong> while navigating the backwaters at golden hour was magical. Because the boat is smaller, we got away from the noisy, crowded areas. Absolutely romantic and memorable experience!</p>
            </div>

          </div>
        </div>
        <button className="rev-prev" id="revPrev" aria-label="Previous Review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="rev-next" id="revNext" aria-label="Next Review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div className="rev-dots" id="revDots"></div>
    </section>

    
    <section className="sk-logistics-area">
        <div className="sk-logistics-container">
            <div className="sk-section-header">
                <span className="sk-subtitle">Getting Here</span>
                <h2 className="sk-title">Boarding Location & Logistics</h2>
            </div>
            <div className="sk-logistics-grid">
                <div className="sk-map-frame">
                    <iframe title="Map showing boarding location for Shikara ride in Alleppey" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d245.944450335839!2d76.3633801!3d9.4990565!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1785909781417!5m2!1sen!2sin" width="100%" height="100%" style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div className="sk-logistics-card">
                    <div className="sk-log-item">
                        <div className="sk-log-icon">🅿️</div>
                        <div>
                            <strong>Parking Facilities:</strong><br />
                            Dedicated Pay & Park spaces available directly at the boarding point.
                        </div>
                    </div>
                    <div className="sk-log-item">
                        <div className="sk-log-icon">🚆</div>
                        <div>
                            <strong>From Alleppey Railway Station:</strong><br />
                            7 km (~15 minutes drive by auto/cab).
                        </div>
                    </div>
                    <div className="sk-log-item">
                        <div className="sk-log-icon">🚌</div>
                        <div>
                            <strong>From Alleppey KSRTC Bus Stand:</strong><br />
                            3 km (~8 minutes drive).
                        </div>
                    </div>
                    <a href="https://maps.app.goo.gl/t51tmTUfLzc3Fo8j8" target="_blank" rel="noopener noreferrer" className="sk-map-btn">
                        📍 Open Boarding Location in Google Maps
                    </a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="faq-wrap" aria-labelledby="faq-heading">
      <p className="faq-label">GOT QUESTIONS?</p>
      <h2 id="faq-heading" className="faq-title">Everything you need to know</h2>

      <div className="faq-list">
        <div className={`faq-item ${openFaq === 0 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} >
            <span>How do I book a Shikara ride in Alleppey?</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </div>
          <div className="faq-a" style={{"maxHeight":"200px"}}>
            <p>The easiest way to book is to message us on WhatsApp. We will confirm your timing and availability within minutes.</p>
          </div>
        </div>

        <div className={`faq-item ${openFaq === 1 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} >
            <span>What is the difference between a Shikara and a Houseboat?</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </div>
          <div className="faq-a">
            <p>A Houseboat is large, slow, and includes bedrooms and cooked meals, making it great for overnight stays. A Shikara is smaller, open-air, and much cheaper. It is designed for 2 to 6-hour daytime cruising and offers a closer, open-air connection to the beautiful backwaters.</p>
          </div>
        </div>

        <div className={`faq-item ${openFaq === 2 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} >
            <span>Are meals included in the Shikara price?</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </div>
          <div className="faq-a">
            <p>No, food is not cooked on a Shikara. However, the driver will happily stop at authentic local toddy shops or lakeside restaurants where you can purchase fresh Karimeen fish fry and local Kerala meals.</p>
          </div>
        </div>

        <div className={`faq-item ${openFaq === 3 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} >
            <span>What is the best time for a Shikara ride?</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </div>
          <div className="faq-a">
            <p>The absolute best time for a Shikara ride in Alleppey is the 6:00 AM sunrise slot. The water is incredibly calm, the weather is cool, and you will see amazing birdlife. The 4:00 PM sunset ride is also highly recommended.</p>
          </div>
        </div>

        <div className={`faq-item ${openFaq === 4 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} >
            <span>Is it safe for children and non-swimmers?</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </div>
          <div className="faq-a">
            <p>Yes, absolutely. All boats are equipped with life jackets, and the water in the backwater channels is very calm. The boats have protective roofing to shade you from the sun.</p>
          </div>
        </div>
      </div>
    </section>
</main>






      </div>
    </>
  );
}
