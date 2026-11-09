"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Private Houseboat",
        "url": "https://alleppeybooking.com/house-boat-alleppey/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shared Boathouses",
        "url": "https://alleppeybooking.com/sharing-houseboat-in-alleppey/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Shikara",
        "url": "https://alleppeybooking.com/shikara-ride-in-alleppey/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Kayaking",
        "url": "https://alleppeybooking.com/kayaking-in-alleppey/"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Speedboat",
        "url": "https://alleppeybooking.com/speed-boat-in-alleppey/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book Your Alleppey Boat Tour",
    "description": "A seamless 3-step process to book your houseboat or backwater experience in Alleppey.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Activity",
        "text": "Explore our various packages, routes, and durations. Compare options to find the perfect fit for your itinerary."
      },
      {
        "@type": "HowToStep",
        "name": "Customize & Date",
        "text": "Pick your preferred travel dates, specify your group size, and let us know your authentic Kerala dining preferences."
      },
      {
        "@type": "HowToStep",
        "name": "Confirm & Enjoy",
        "text": "Secure your slot instantly online. You will receive all boarding details and start times directly via Whatsapp."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Alleppey Experiences Gallery",
    "description": "Glimpses of premium houseboats, shikara rides, and authentic Kerala backwater tours by Alleppey Booking.",
    "about": {
      "@type": "Thing",
      "name": "Alleppey Boat House Booking and Backwater Tours"
    },
    "image": [
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp",
        "name": "Traditional Kerala Lunch",
        "description": "Tourists enjoying a traditional Kerala lunch at an Alleppey backwater restaurant.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.28-PM-1.webp",
        "name": "Authentic Kerala Meals",
        "description": "Close-up of a traditional Kerala meal served on a banana leaf during a houseboat cruise.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.28-PM-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp",
        "name": "Shikara Boat Ride in Alleppey",
        "description": "Tourists relaxing on the open deck of a Shikara boat in the Kerala backwaters.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp",
        "name": "Kayaking in Alleppey Backwaters",
        "description": "Group of people kayaking through the narrow canals of the Kerala backwaters.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20251221-WA0043.jpg",
        "name": "Private Alleppey Houseboat",
        "description": "Traditional Kerala private houseboat cruising the calm backwaters of Alleppey.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20251221-WA0043.jpg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-23-at-10.32.04-PM-5-1.jpeg",
        "name": "Luxury Houseboat at Night",
        "description": "Luxury Alleppey houseboat illuminated at dusk on Vembanad Lake.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-23-at-10.32.04-PM-5-1.jpeg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/956393213fea4f638e89e8e1e2f60202.webp",
        "name": "Houseboat Bedroom Interior",
        "description": "Air-conditioned bedroom interior inside a budget-friendly shared boathouse in Alleppey.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/956393213fea4f638e89e8e1e2f60202.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp",
        "name": "Speedboat Ride in Alleppey",
        "description": "Family enjoying a sunset speedboat ride across the wide waters of Alleppey.",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp"
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "TravelAgency",
    "name": "Alleppey Booking",
    "url": "https://alleppeybooking.com/",
    "image": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp",
    "telephone": "+917012761588",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alleppey",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "description": "Book budget-friendly shared boathouses, houseboats, shikara rides, and kayaking in Alleppey.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "ratingCount": 2000
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Such a great overnight trip! The shared boathouse is amazing value. You get a private AC room but can chill in the common area. Booking via WhatsApp was super easy. Definitely recommend!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ananya & Vikram"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "The 2-hour kayaking session was easily the highlight of our Kerala trip! Our guide took us through narrow canals that bigger boats can't reach. Totally worth it."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James & Sarah"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Worth every rupee! We did the 1-night private houseboat. The crew was so polite and cooked an amazing karimeen fish fry. Waking up to the peaceful backwaters was unforgettable."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kavita Nair"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Went with my family. Akshai was our captain and he was fantastic—so patient with the kids! The speedboat ride was thrilling and very safe. Highly recommend."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Meera Pillai"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Booked a full day of activities including kayaking and a speedboat ride. The team cleared all our doubts on WhatsApp before we paid. Very reasonable prices and great service!"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book Alleppey Boat Tour Packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The easiest way is to message us on WhatsApp — we confirm your booking in minutes. You can also use the booking form on any listing page."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a private and sharing houseboat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A private houseboat is exclusively for your group with full privacy, personal crew, and customised meals. We also offer budget-friendly shared boathouses where you can book a private cabin while sharing the common areas—great for couples."
        }
      },
      {
        "@type": "Question",
        "name": "Are meals included in the houseboat price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our Alleppey boat tour packages include authentic Kerala meals — breakfast, lunch, evening snacks, and dinner. Meals are freshly prepared by our onboard chef using local ingredients."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to visit Alleppey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "October to February is the best time to enjoy our Alleppey boat tour packages, when the weather is cool and pleasant. March to May is warm but still good. June to September is monsoon season — the backwaters are lush and beautiful, though occasional rain is expected."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe for children and non-swimmers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Safety is a top priority across all our Alleppey boat tour packages. All our boats are equipped with life jackets and safety equipment. Our crew is trained in water safety. Children are welcome and we take extra precautions for families with young kids."
        }
      },
      {
        "@type": "Question",
        "name": "Can I do a same-day booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, same-day bookings are possible depending on availability. WhatsApp us and we will confirm within minutes. We recommend booking at least 1-2 weeks in advance during peak season."
        }
      },
      {
        "@type": "Question",
        "name": "What is your cancellation policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our cancellation policy depends on the specific service or package you have booked (such as premium houseboats, shikara rides, group kayaking, or speedboat tours). Since each experience has different operational requirements, please refer to the specific cancellation terms provided at the time of your booking. However, we understand that travel plans can change, and we always do our best to be flexible and help you reschedule your trip whenever possible! If you have questions about the policy for a specific package, please feel free to contact our team."
        }
      }
    ]
  }
];

export default function HomePageView() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [reviewIndex, setReviewIndex] = useState<number>(0);

  const maxReviewIndex = 2; // For desktop 4 cards, total 6 cards

  const handleReviewNav = (dir: number) => {
    setReviewIndex((prev) => Math.max(0, Math.min(prev + dir, maxReviewIndex)));
  };

  const handleOpenLightbox = (element: HTMLElement) => {
    const img = element.querySelector("img");
    if (img) {
      setLightbox({
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt") || "",
        title: img.getAttribute("title") || img.getAttribute("alt") || "",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {homeSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="home-pure-page w-full">
        <section className="custom-hero-wrapper" aria-label="Alleppey Boat Tour Packages Banner">
    <div className="custom-hero-overlay" aria-hidden="true"></div>

    <header className="custom-hero-content">
        <h1 className="custom-hero-title"><span className="custom-text-green">Alleppey</span> Boat Tour Packages</h1>
        <p className="custom-hero-sub">Houseboats - Shared Boathouses - Shikara Rides - Kayaking - Speedboats</p>
        <p className="custom-hero-sub">Starting from ₹499 · Verified operators · No hidden charges</p>

        <div className="custom-reviews-box" aria-label="Rated 4.8 out of 5 stars based on 2000 plus reviews">
            <div className="custom-avatars" aria-hidden="true">
                <div>🧑🏻</div><div>👨🏽</div><div>👩🏻</div><div>🧔🏽</div>
            </div>
            <div className="custom-stars-text">
                <div className="custom-stars" aria-hidden="true">★★★★★ 4.8</div>
                <div className="custom-review-count">2,000+ reviews</div>
            </div>
        </div>

        <div className="custom-hero-buttons">
            <a href="#packages" className="custom-btn-green" title="View our Alleppey Tour Packages">View All Packages <span aria-hidden="true">→</span></a>
            <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20would%20like%20to%20know%20more%20about%20your%20boat%20tour%20packages." target="_blank" rel="noopener noreferrer" className="custom-btn-white" title="Contact us directly on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#2cd664" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
            </a>
        </div>
    </header>

    <div className="custom-bottom-stats" aria-label="Business Statistics">
        <div className="custom-stat-item">
            <div className="custom-stat-icon" aria-hidden="true">✓</div>
            <div><strong>2000+</strong><br /><span className="text-[#ccc] text-xs">Happy Guests</span></div>
        </div>
        <div className="custom-stat-item">
            <div className="custom-stat-icon" aria-hidden="true">G</div>
            <div><strong>4.8★</strong><br /><span className="text-[#ccc] text-xs">Google Rating</span></div>
        </div>
        <div className="custom-stat-item">
            <div className="custom-stat-icon" aria-hidden="true">✓</div>
            <div><strong>3+</strong><br /><span className="text-[#ccc] text-xs">Years Running</span></div>
        </div>
    </div>
</section>


<div className="at-offers-section" id="packages">
    <div className="at-section-header">
        <span className="at-subtitle">What We Offer</span>
        <h2 className="at-title">Best Alleppey Boat Tour Packages</h2>
    </div>

    <div className="at-cards-wrapper">
        
        
        <Link href="/house-boat-alleppey/" className="at-card">
            <div className="at-card-bg" style={{"backgroundImage":"url('/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-12.29.36-PM.webp')"}}></div>
            <div className="at-card-overlay"></div>
            <div className="at-card-content">
                <span className="at-card-tag">Exclusive</span>
                <h3 className="at-card-title">Private Houseboat</h3>
                <p className="at-card-desc">Rent an entire boat exclusively for your group. Choose from Deluxe, Premium, or Luxury setups.</p>
                <div className="at-card-footer">
                    <div className="at-price-box">
                        <span className="at-price-label">FROM</span>
                        <span className="at-price-amount">₹9000</span>
                    </div>
                    <span className="at-book-btn">Check Availability →</span>
                </div>
            </div>
        </Link>

        
        <Link href="/sharing-houseboat-in-alleppey/" className="at-card">
            <div className="at-card-bg" style={{"backgroundImage":"url('/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-3.webp')"}}></div>
            <div className="at-card-overlay"></div>
            <div className="at-card-content">
                <span className="at-card-tag">Budget Friendly</span>
                <h3 className="at-card-title">Shared Boathouses</h3>
                <p className="at-card-desc">Book a private cabin on a shared boat. Same route, same Kerala meals, same crew at a lower price.</p>
                <div className="at-card-footer">
                    <div className="at-price-box">
                        <span className="at-price-label">FROM</span>
                        <span className="at-price-amount">₹5999</span>
                    </div>
                    <span className="at-book-btn">Check Availability →</span>
                </div>
            </div>
        </Link>

        
        <Link href="/shikara-ride-in-alleppey/" className="at-card">
            <div className="at-card-bg" style={{"backgroundImage":"url('/wp-content/uploads/2026/06/shikara-adventure.webp')"}}></div>
            <div className="at-card-overlay"></div>
            <div className="at-card-content">
                <span className="at-card-tag">Day Trip</span>
                <h3 className="at-card-title">Shikara</h3>
                <p className="at-card-desc">Experience Alleppey Backwaters comfortably and peacefully without a heavy budget.</p>
                <div className="at-card-footer">
                    <div className="at-price-box">
                        <span className="at-price-label">FROM</span>
                        <span className="at-price-amount">₹1000</span>
                    </div>
                    <span className="at-book-btn">Check Availability →</span>
                </div>
            </div>
        </Link>

        
        <Link href="/kayaking-in-alleppey/" className="at-card">
            <div className="at-card-bg" style={{"backgroundImage":"url('/wp-content/uploads/2026/06/4.webp')"}}></div>
            <div className="at-card-overlay"></div>
            <div className="at-card-content">
                <span className="at-card-tag">Experience</span>
                <h3 className="at-card-title">Kayaking</h3>
                <p className="at-card-desc">Paddle through the open backwaters. (Note: Narrow canal access is only available in 2-hour sessions).</p>
                <div className="at-card-footer">
                    <div className="at-price-box">
                        <span className="at-price-label">FROM</span>
                        <span className="at-price-amount">₹500</span>
                    </div>
                    <span className="at-book-btn">Check Availability →</span>
                </div>
            </div>
        </Link>

        
        <Link href="/speed-boat-in-alleppey/" className="at-card">
            <div className="at-card-bg" style={{"backgroundImage":"url('/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp')"}}></div>
            <div className="at-card-overlay"></div>
            <div className="at-card-content">
                <span className="at-card-tag">Adventure</span>
                <h3 className="at-card-title">Speedboat</h3>
                <p className="at-card-desc">Cover more of Alleppey in less time. ₹400 per person (minimum 3 guests required or ₹1300 base charge).</p>
                <div className="at-card-footer">
                    <div className="at-price-box">
                        <span className="at-price-label">FROM</span>
                        <span className="at-price-amount">₹400</span>
                    </div>
                    <span className="at-book-btn">Check Availability →</span>
                </div>
            </div>
        </Link>
    </div>
</div>





<section className="btb-wrap" aria-label="Booking Process">
  <header className="btb-header">
    <span className="btb-label">SEAMLESS JOURNEY</span>
    <h2 className="btb-title">How to Book Your Experience</h2>
  </header>

  <ol className="btb-grid">
    <li className="btb-card">
      <div className="btb-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
      </div>
      <div className="btb-text-content">
        <h3>Select Activity</h3>
        <p>Explore our various packages, routes, and durations. Compare options to find the perfect fit for your itinerary.</p>
      </div>
    </li>

    <li className="btb-dash" aria-hidden="true"><div className="btb-dash-line"></div></li>

    <li className="btb-card">
      <div className="btb-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
      </div>
      <div className="btb-text-content">
        <h3>Customize & Date</h3>
        <p>Pick your preferred travel dates, specify your group size, and let us know your authentic Kerala dining preferences.</p>
      </div>
    </li>

    <li className="btb-dash" aria-hidden="true"><div className="btb-dash-line"></div></li>

    <li className="btb-card">
      <div className="btb-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
      </div>
      <div className="btb-text-content">
        <h3>Confirm & Enjoy</h3>
        <p>Secure your slot instantly online. You will receive all boarding details and start times directly via WhatsApp.</p>
      </div>
    </li>
  </ol>
</section>




<section className="why-wrapper" aria-label="Why Choose Us">
    <div className="why-container">
        
        
        <div className="why-image-col">
            
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/wp-content/uploads/2026/06/IMG-20230703-WA0000.jpg"
                alt="Couple kayaking in the green backwaters"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="why-main-img object-cover"
              />
            </div>
            
            <div className="why-badge">
                <div className="why-badge-icon" aria-hidden="true">👍</div>
                <div className="why-badge-text">
                    <strong>2k+</strong>
                    <span>Happy Travelers</span>
                </div>
            </div>
        </div>

        
        <div className="why-text-col">
            <span className="why-subtitle">Trusted Local Experts</span>
            
            <h2 className="why-title">Your Complete Alleppey Backwater Experience.</h2>
            
            <p className="why-desc">We provide a full range of adventures. Whether you are looking for a relaxing overnight cruise, a quick thrill on the open water, or a peaceful paddle through the village canals, we have something perfect for every traveler.</p>
            
            <div className="why-features-grid">
                
                <div className="why-feature-card">
                    <div className="why-feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
                    </div>
                    <h3>Diverse Backwater Fleet</h3>
                    <p>Choose from private cruises, budget-friendly shared boathouses, high-speed boats, and peaceful kayaks.</p>
                </div>

                <div className="why-feature-card">
                    <div className="why-feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h3>100% Safe & Verified</h3>
                    <p>Rigorous pre-trip safety checks, high-quality life jackets, and scheduled maintenance keep our entire fleet in top condition.</p>
                </div>

                <div className="why-feature-card">
                    <div className="why-feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <h3>Expert Crews & Guides</h3>
                    <p>From licensed boat captains to experienced guides, our professional team ensures you are in safe hands on every trip.</p>
                </div>

                <div className="why-feature-card">
                    <div className="why-feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    </div>
                    <h3>Transparent Pricing</h3>
                    <p>Enjoy a stress-free experience with clear, upfront pricing. What you see is exactly what you pay, with zero hidden fees.</p>
                </div>

            </div>
        </div>

    </div>
</section>




<section className="gal-wrap" itemScope itemType="https://schema.org/ImageGallery">
  <div className="gal-header">
    <h2 className="gal-title">Alleppey Experiences</h2>
    <p className="gal-sub">Glimpses of our premium houseboats, shikara rides, and authentic Kerala backwater tours.</p>
  </div>
  
  <div className="gal-grid">
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Traditional Kerala Lunch image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Traditional Kerala Lunch" />
      <meta itemProp="description" content="Tourists enjoying a traditional Kerala lunch at an Alleppey backwater restaurant." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.27-PM-1.webp" alt="Tourists enjoying a traditional Kerala lunch on an Alleppey backwater tour" title="Traditional Kerala Lunch" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Authentic Kerala Meals image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Authentic Kerala Meals" />
      <meta itemProp="description" content="Close-up of a traditional Kerala meal served on a banana leaf during a houseboat cruise." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.28-PM-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.28-PM-1.webp" alt="Close-up of a traditional Kerala meal served on a banana leaf during a houseboat cruise" title="Authentic Kerala Meals" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Shikara Boat Deck image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Shikara Boat Ride in Alleppey" />
      <meta itemProp="description" content="Tourists relaxing on the open deck of a Shikara boat in the Kerala backwaters." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp" />
      <Image src="/wp-content/uploads/2026/06/IMG-20250517-WA0011-1.webp" alt="Tourists relaxing on the open deck of a Shikara boat ride in Alleppey" title="Shikara Boat Deck" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Backwater Kayaking image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Kayaking in Alleppey Backwaters" />
      <meta itemProp="description" content="Group of people kayaking through the narrow canals of the Kerala backwaters." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp" alt="Group of people kayaking in the Alleppey Kerala backwaters" title="Backwater Kayaking" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Traditional Houseboat image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Private Alleppey Houseboat" />
      <meta itemProp="description" content="Traditional Kerala private houseboat cruising the calm backwaters of Alleppey." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/IMG-20251221-WA0043.jpg" />
      <Image src="/wp-content/uploads/2026/06/IMG-20251221-WA0043.jpg" alt="Traditional Kerala private houseboat cruising the calm Alleppey backwaters" title="Traditional Houseboat" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Luxury Cruise at Dusk image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Luxury Houseboat at Night" />
      <meta itemProp="description" content="Luxury Alleppey houseboat illuminated at dusk on Vembanad Lake." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-23-at-10.32.04-PM-5-1.jpeg" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-23-at-10.32.04-PM-5-1.jpeg" alt="Luxury Alleppey cruise boat illuminated at dusk on the backwaters" title="Luxury Cruise at Dusk" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View AC Bedroom Interior image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Houseboat Bedroom Interior" />
      <meta itemProp="description" content="Air-conditioned bedroom interior inside a budget-friendly shared boathouse in Alleppey." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/956393213fea4f638e89e8e1e2f60202.webp" />
      <Image src="/wp-content/uploads/2026/06/956393213fea4f638e89e8e1e2f60202.webp" alt="Air-conditioned bedroom interior inside a shared boathouse in Alleppey" title="AC Bedroom Interior" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Sunset Speedboat Ride image" onClick={(e) => handleOpenLightbox(e.currentTarget)}  itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Speedboat Ride in Alleppey" />
      <meta itemProp="description" content="Family enjoying a sunset speedboat ride across the wide waters of Alleppey." />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp" alt="Family enjoying a sunset speedboat ride in Alleppey backwaters" title="Sunset Speedboat Ride" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
  </div>
</section>



<div className="rev-wrap" id="ab-guest-reviews">


  <div className="rev-label">GUEST REVIEWS</div>
  <h2 className="rev-title">What our guests say</h2>
  <p className="rev-sub">Over 2,000 happy travellers and counting. Here is what they wrote on Google.</p>

  <div style={{"position":"relative","maxWidth":"1200px","margin":"0 auto","padding":"0 20px"}}>
    <div className="rev-outer">
      <div className="rev-track" id="revTrack" style={{ transform: `translateX(-${reviewIndex * 316}px)`, transition: "transform 0.4s ease" }}>

        
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#2e7d32"}}>RS</div>
              <div>
                <p className="rev-name">Rahul Sharma</p>
                <p className="rev-time">1 month ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Such a great overnight trip! The shared boathouse is amazing value. You get a private AC room but can chill in the common area. Booking via WhatsApp was super easy. Definitely recommend!</p>
        </div>

        
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#1565c0"}}>AN</div>
              <div>
                <p className="rev-name">Ananya & Vikram</p>
                <p className="rev-time">3 weeks ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">The 2-hour kayaking session was easily the highlight of our Kerala trip! Our guide took us through narrow canals that bigger boats can't reach. Totally worth it.</p>
        </div>

        
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#6a1b9a"}}>JA</div>
              <div>
                <p className="rev-name">James & Sarah</p>
                <p className="rev-time">1 month ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Worth every rupee! We did the 1-night private houseboat. The crew was so polite and cooked an amazing karimeen fish fry. Waking up to the peaceful backwaters was unforgettable.</p>
        </div>

        
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#00838f"}}>KN</div>
              <div>
                <p className="rev-name">Kavita Nair</p>
                <p className="rev-time">2 months ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Went with my family. Akshai was our captain and he was fantastic—so patient with the kids! The speedboat ride was thrilling and very safe. Highly recommend.</p>
        </div>

        
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#c62828"}}>MP</div>
              <div>
                <p className="rev-name">Meera Pillai</p>
                <p className="rev-time">2 weeks ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Booked a full day of activities including kayaking and a speedboat ride. The team cleared all our doubts on WhatsApp before we paid. Very reasonable prices and great service!</p>
        </div>

      </div>
    </div>
    
    
    <button type="button" className="rev-prev" id="revPrev" onClick={() => handleReviewNav(-1)} aria-label="Previous Review">‹</button>
    <button type="button" className="rev-next" id="revNext" onClick={() => handleReviewNav(1)} aria-label="Next Review">›</button>
  </div>
  
  <div className="rev-dots" id="revDots"></div>
</div>









<div className="faq-wrap">
  <p className="faq-label">GOT QUESTIONS?</p>
  <h2 className="faq-title">Everything you need to know</h2>

  <div className="faq-list">

    <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} >
        <span>How do I book Alleppey Boat Tour Packages?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>The easiest way is to message us on WhatsApp — we confirm your booking in minutes. You can also use the booking form on any listing page.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} >
        <span>What is the difference between a private and sharing houseboat?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>A private houseboat is exclusively for your group with full privacy, personal crew, and customised meals. We also offer <strong>budget-friendly shared boathouses</strong> where you can book a private cabin while sharing the common areas—great for couples.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} >
        <span>Are meals included in the houseboat price?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Yes! All our <strong>Alleppey boat tour packages</strong> include authentic Kerala meals — breakfast, lunch, evening snacks, and dinner. Meals are freshly prepared by our onboard chef using local ingredients.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} >
        <span>What is the best time to visit Alleppey?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>October to February is the best time to enjoy our <strong>Alleppey boat tour packages</strong>, when the weather is cool and pleasant. March to May is warm but still good. June to September is monsoon season — the backwaters are lush and beautiful, though occasional rain is expected.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} >
        <span>Is it safe for children and non-swimmers?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Absolutely. Safety is a top priority across all our <strong>Alleppey boat tour packages</strong>. All our boats are equipped with life jackets and safety equipment. Our crew is trained in water safety. Children are welcome and we take extra precautions for families with young kids.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 5 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} >
        <span>Can I do a same-day booking?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Yes, same-day bookings are possible depending on availability. WhatsApp us and we will confirm within minutes. We recommend booking at least 1-2 weeks in advance during peak season.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 6 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} >
        <span>What is your cancellation policy?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Our cancellation policy depends on the specific service or package you have booked (such as premium houseboats, shikara rides, group kayaking, or speedboat tours). Since each experience has different operational requirements, please refer to the specific cancellation terms provided at the time of your booking. However, we understand that travel plans can change, and we always do our best to be flexible and help you reschedule your trip whenever possible! If you have questions about the policy for a specific package, please feel free to contact our team.</p>
      </div>
    </div>

  </div>
</div>


      </div>

      {/* Interactive Lightbox Modal */}
      {lightbox && (
        <div
          id="gal-lightbox"
          className="gal-lightbox active"
          style={{ display: "flex", opacity: 1, visibility: "visible" }}
          onClick={() => setLightbox(null)}
        >
          <div className="gal-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gal-close"
              aria-label="Close Lightbox"
              onClick={() => setLightbox(null)}
            >
              &times;
            </button>
            <Image
              id="gal-lightbox-img"
              src={lightbox.src}
              alt={lightbox.title || "Alleppey Backwaters Houseboat Gallery Experience"}
              width={1200}
              height={800}
              style={{ maxHeight: "80vh", maxWidth: "90vw", objectFit: "contain", borderRadius: "12px" }}
              unoptimized
            />
            <div id="gal-caption">{lightbox.title}</div>
          </div>
        </div>
      )}
    </>
  );
}