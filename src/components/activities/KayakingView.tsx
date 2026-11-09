"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "@/components/DatePicker";

const schemas = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        "name": "Kayaking in Alleppey by Alleppey Booking",
        "description": "Eco-friendly guided kayaking tours in the Alleppey backwaters. Explore narrow village canals, spot local birdlife, and enjoy sunrise/sunset paddling.",
        "touristType": "Nature lovers, Photographers, Families",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "2145"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "500",
          "availability": "https://schema.org/InStock",
          "url": "https://alleppeybooking.com/kayaking-in-alleppey/"
        }
      },
      {
        "@type": "TravelAgency",
        "name": "Alleppey Booking",
        "image": "https://alleppeybooking.com/wp-content/uploads/2026/06/4.webp",
        "telephone": "+917012761588",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Finishing Point Area",
          "addressLocality": "Alappuzha",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "url": "https://alleppeybooking.com/"
      },
      {
        "@type": "ImageGallery",
        "name": "Kayaking in Alleppey Gallery",
        "description": "Check out these real moments from guests who booked a kayaking tour in Alleppey.",
        "about": {
          "@type": "Thing",
          "name": "Alleppey Kayaking Tours"
        },
        "image": [
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20230703-WA0000.jpg",
            "name": "Couple enjoying kayaking",
            "description": "Couple enjoying a guided kayaking in Alleppey backwater tour",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/IMG-20230703-WA0000.jpg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp",
            "name": "Friends kayaking together",
            "description": "Big group of friends kayaking in Alleppey backwaters",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM.jpeg",
            "name": "Four friends kayaking",
            "description": "Four friends having fun kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM.webp",
            "name": "Group posing on kayaks",
            "description": "Group posing on colorful boats while kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM-1.jpeg",
            "name": "Paddling through green canal",
            "description": "Two women paddling through a narrow green canal while kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM-1.jpeg",
            "name": "Solo traveler kayaking",
            "description": "Solo traveler enjoying a peaceful afternoon kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.19-PM.jpeg",
            "name": "Couple on open water",
            "description": "Cheerful couple out on the open water kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.19-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.18.02-PM-scaled.jpeg",
            "name": "Playful kayaking moment",
            "description": "Enjoying a fun, playful moment kayaking in Alleppey",
            "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.18.02-PM-scaled.jpeg"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I book Kayaking in Alleppey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The easiest way is to message us on WhatsApp — we confirm your booking in minutes. You can also use the booking form on this page to check availability."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need previous kayaking experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not at all! Kayaking in Alleppey is very beginner-friendly. Our local guides will provide a quick training session and safety briefing before you hit the water, making it perfect for first-timers."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best time for kayaking in Alleppey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time is during the early morning sunrise (around 6:00 AM) or late afternoon sunset (around 4:00 PM). These times offer the most beautiful light, cooler weather, and the best chance to spot active birdlife."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe for non-swimmers and children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We provide high-quality life jackets for all participants, and you do not need to know how to swim. Children are welcome, and our guides accompany you to ensure complete safety on the backwaters."
            }
          },
          {
            "@type": "Question",
            "name": "What should I wear and bring for the tour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend wearing comfortable, breathable clothing that you don't mind getting a little splashed. It is also a great idea to bring a hat, sunglasses, sunscreen, and a bottle of drinking water."
            }
          },
          {
            "@type": "Question",
            "name": "Which routes do the kayak tours cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 1-hour sessions cover the open water and lake edges. If you want the complete kayaking in Alleppey experience through the peaceful, narrow village canals, we highly recommend booking the 2-hour session."
            }
          },
          {
            "@type": "Question",
            "name": "What is your cancellation policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cancellations made 48 hours before the trip receive a full refund. Cancellations within 24 hours receive a 50% refund. No-shows are non-refundable. We always try to help you reschedule whenever possible!"
            }
          }
        ]
      }
    ]
  }
];

export default function KayakingView() {
  const [currentImg, setCurrentImg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [duration, setDuration] = useState("2 Hours (Includes Village Canals)");
  const [preferredTime, setPreferredTime] = useState("Sunset (4:30 PM - 6:30 PM) - Popular");
  const [guests, setGuests] = useState("2 Persons");
  const [date, setDate] = useState("");

  const whatsappUrl = `https://wa.me/917012761588?text=${encodeURIComponent(
    `Hi Alleppey Booking, I want to book a Kayaking Tour in Alleppey.\n- Duration: ${duration}\n- Time: ${preferredTime}\n- Kayakers: ${guests}\n- Date: ${date || "Flexible / Upcoming"}\nPlease confirm availability and rates.`
  )}`;

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






<article className="ky-wrapper-master">
<header className="ky-hero-wrapper">
    <div className="ky-hero-container">
        <div className="ky-hero-text">
            <span className="ky-badge">🛶 Eco-Friendly Exploration</span>
            <h1 className="ky-hero-title">Best <span className="ky-highlight">Kayaking in Alleppey</span></h1>
            <p className="ky-hero-subtitle">Experience the ultimate <strong>kayaking tour in Alleppey</strong>. Escape the engine noise and glide through tranquil Kerala backwaters. Weave through narrow village canals, spot vibrant birdlife, and capture stunning water-level photos on your paddle.</p>
            <div className="ky-feature-list">
                <div className="ky-feature-item"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Zero Engine Noise, Complete Peace</div>
                <div className="ky-feature-item"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Perfect for Birdwatching & Photography</div>
                <div className="ky-feature-item"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Beginner-Friendly with Safety Guides</div>
            </div>
        </div>
        
        <div className="ky-booking-box" id="ab-booking-form" role="form" aria-label="Book your kayak tour">
            <h2 className="ky-box-title">Book Your <em>Kayak</em></h2>
            <div className="ky-form-group">
                <label className="ky-form-label" htmlFor="ky-duration">DURATION</label>
                <select id="ky-duration" className="ky-form-control" aria-required="true" value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="1 Hour (Open Water / Lake Edge)">1 Hour (Open Water / Lake Edge)</option>
                    <option value="2 Hours (Includes Village Canals)">2 Hours (Includes Village Canals)</option>
                </select>
            </div>
            <div className="ky-form-group">
                <label className="ky-form-label" htmlFor="ky-time">PREFERRED TIME</label>
                <select id="ky-time" className="ky-form-control" aria-required="true" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
                    <option value="Sunrise (6:00 AM - 8:00 AM)">Sunrise (6:00 AM - 8:00 AM)</option>
                    <option value="Daytime (8:00 AM - 4:00 PM)">Daytime (8:00 AM - 4:00 PM)</option>
                    <option value="Sunset (4:30 PM - 6:30 PM) - Popular">Sunset (4:30 PM - 6:30 PM) - Popular</option>
                </select>
            </div>
            <div className="ky-form-group">
                <label className="ky-form-label" htmlFor="ky-guests">NUMBER OF KAYAKERS</label>
                <select id="ky-guests" className="ky-form-control" aria-required="true" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3 Persons">3 Persons</option>
                    <option value="4 Persons">4 Persons</option>
                    <option value="5+ Persons">5+ Persons</option>
                </select>
            </div>
            <div className="ky-form-group">
                <label className="ky-form-label" htmlFor="ky-date-picker">SELECT DATE</label>
                <div className="ky-date-wrapper">
                    <DatePicker id="ky-date-picker" className="ky-form-control" value={date} onChange={setDate} placeholder="Select check-in date" />
                </div>
            </div>
            <a id="ky-submit" className="ky-submit-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Check Rates and Availability via WhatsApp">Check Rates & Availability →</a>
            <p className="ky-price-text"><strong>Starting at just ₹500</strong><br />Message us for an instant custom quote</p>
        </div>
    </div>
    
    <div className="ky-shape-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,26 L1440,60 L0,60 Z" fill="#fdfdfd" />
      </svg>
    </div>
</header>

<main>
    <div className="ky-section-wrapper">
        <div className="ky-container">
            <div className="ky-section-header" style={{"marginBottom":"20px"}}>
                <span className="ky-subtitle-text">The Experience</span>
                <h2 className="ky-title-text">Explore Alleppey on a Guided Kayak Tour.</h2>
            </div>
            <div className="ky-concept-grid">
                <div className="ky-text-box">
                    <p>There is no better way to feel the true pulse of the <a href="https://www.keralatourism.org/" className="ky-seo-link" target="_blank" rel="noopener noreferrer" title="Kerala Tourism Official Website">Kerala backwaters</a> than from the seat of a kayak. As the top-rated choice for <strong>kayaking in Alleppey</strong>, we let you dictate the pace. Pause for beautiful sunrise or sunset photographs, or simply float in silence whenever you please.</p>
                    <p>Highly rewarding for both beginners and experienced paddlers, this eco-friendly adventure provides a unique vantage point right at water level. It connects you intimately with the environment, the local fishermen casting their nets, and the rhythm of narrow canal village life in Alappuzha.</p>
                    <div style={{"marginTop":"30px","display":"flex","gap":"15px","flexWrap":"wrap"}}>
                        <span style={{"background":"#f4f7f6","padding":"8px 15px","borderRadius":"30px","fontSize":"12px","fontWeight":"600","color":"#1a2b3c"}}>🛶 Single & Double Kayaks</span>
                        <span style={{"background":"#f4f7f6","padding":"8px 15px","borderRadius":"30px","fontSize":"12px","fontWeight":"600","color":"#1a2b3c"}}>🦺 Guide Supervised</span>
                    </div>
                    <div className="ky-inc-exc-grid">
                        <div className="ky-list-card inclusions">
                            <h3>What's Included</h3>
                            <ul>
                                <li>Free Open Boat Transfer</li>
                                <li>Premium Kayak & Paddles</li>
                                <li>High-Quality Life Jackets</li>
                                <li>Expert Local Guide</li>
                            </ul>
                        </div>
                        <div className="ky-list-card exclusions">
                            <h3>What's Excluded</h3>
                            <ul>
                                <li>Foods & Beverages</li>
                                <li>Restroom Facilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="ky-highlight-box" style={{"borderLeftColor":"#ff6600","padding":"25px"}}>
                        <h3 className="ky-route-title">1 Hour Session <span className="ky-price-tag">₹500 / Person</span></h3>
                        <div className="ky-feature-col">
                            <div className="ky-feature-col-item">
                                <div className="ky-feature-icon" aria-hidden="true">🌊</div>
                                <div className="ky-feature-text">
                                    <h3>Punnamada Lake Experience</h3>
                                    <p>Perfect for beginners. A quick, refreshing paddle on the beautiful expanse of Punnamada Lake. (Note: 1-hour sessions stay on the open water as there isn't enough time to reach the deep canals).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ky-highlight-box" style={{"borderLeftColor":"#2cd664","padding":"25px"}}>
                        <h3 className="ky-route-title">2 Hour Session <span className="ky-price-tag">₹650 / Person</span></h3>
                        <div className="ky-feature-col">
                            <div className="ky-feature-col-item">
                                <div className="ky-feature-icon" aria-hidden="true">🌴</div>
                                <div className="ky-feature-text">
                                    <h3>Narrow Village Canals (Popular)</h3>
                                    <p>Our highly recommended backwater experience. Leave the wide lake behind and paddle deep into the tranquil, narrow village canals untouched by motorized boats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ky-highlight-box">
                        <h3 className="ky-route-title">🌿 Why Choose Us?</h3>
                        <div className="ky-feature-col">
                            <div className="ky-feature-col-item">
                                <div className="ky-feature-icon" aria-hidden="true">🛥️</div>
                                <div className="ky-feature-text">
                                    <h3>Complimentary Boat Transfers</h3>
                                    <p>Your experience includes a free open motorboat ride for your pickup and drop-off. Enjoy the wider waterways before you even grab your paddle!</p>
                                </div>
                            </div>
                            <div className="ky-feature-col-item">
                                <div className="ky-feature-icon" aria-hidden="true">🦺</div>
                                <div className="ky-feature-text">
                                    <h3>Premium Safety Gear</h3>
                                    <p>Your safety is our priority. We provide properly fitted, high-buoyancy life jackets, so even non-swimmers can relax and enjoy the ride.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="gal-wrap">
      <div className="gal-header">
        <span className="ky-subtitle-text">GALLERY</span>
        <h2 className="gal-title">Our Visual Diary</h2>
        <p className="gal-sub">Check out these real moments from guests who booked a kayaking tour in Alleppey.</p>
      </div>
      <div className="gal-grid">
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/IMG-20230703-WA0000.jpg" width={800} height={600} alt="Couple enjoying a guided kayaking tour in Alleppey" title="Couple enjoying kayaking" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-1-1.webp" width={800} height={600} alt="Group of friends kayaking the Kerala backwaters" title="Friends kayaking together" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM.jpeg" width={800} height={600} alt="Four friends paddling their kayaks in Alappuzha" title="Four friends kayaking" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM.webp" width={800} height={600} alt="Group on colorful kayaks during backwater tour" title="Group posing on kayaks" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.18-PM-1.jpeg" width={800} height={600} alt="Paddling through a narrow green canal in Alleppey" title="Paddling through green canal" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.17-PM-1.jpeg" width={800} height={600} alt="Solo traveler enjoying kayaking in Alleppey" title="Solo traveler kayaking" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.16.19-PM.jpeg" width={800} height={600} alt="Couple on open water during a Kerala kayak tour" title="Couple on open water" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
        <figure className="gal-item" tabIndex={0} >
          <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-1.18.02-PM-scaled.jpeg" width={800} height={600} alt="Playful moment while kayaking the backwaters" title="Playful kayaking moment" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
          <div className="gal-overlay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
        </figure>
      </div>
    </section>

    

    <div className="ky-section-wrapper">
        <div className="ky-container">
            <div className="ky-section-header">
                <span className="ky-subtitle-text">Make The Right Choice</span>
                <h2 className="ky-title-text">Alleppey Kayaking vs. Houseboats</h2>
                <p style={{"color":"#666","maxWidth":"600px","margin":"10px auto 0"}}>Many guests wonder if they should kayak if they are already booking a houseboat. The short answer? You need both to truly see Alappuzha.</p>
            </div>
            <div className="ky-vs-grid">
                <div className="ky-vs-card">
                    <h3>Houseboats & Shikaras</h3>
                    <p style={{"color":"#666","fontSize":"14px","marginBottom":"20px"}}>Perfect for relaxation, dining, and cruising the main rivers in ultimate comfort.</p>
                    <ul className="ky-vs-list">
                        <li>Cruises on wide, deep rivers and main lakes.</li>
                        <li>Motorized, allowing you to cover larger distances.</li>
                        <li>Includes prepared Kerala meals and beds.</li>
                        <li>Restricted from entering narrow, shallow canals.</li>
                    </ul>
                </div>
                <div className="ky-vs-card active">
                    <h3>Kayaking (2-Hour Tour)</h3>
                    <p style={{"color":"#666","fontSize":"14px","marginBottom":"20px"}}>The only way to access the hidden, 3-foot wide village canals and interact closely with nature.</p>
                    <ul className="ky-vs-list">
                        <li>Accesses the deepest, narrowest village canals.</li>
                        <li>100% silent, eco-friendly, and non-motorized.</li>
                        <li>Water-level perspective for incredible photography.</li>
                        <li>Active, immersive, and perfect for spotting rare birds.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="ky-section-wrapper bg-alt">
        <div className="ky-container">
            <div className="ky-section-header">
                <span className="ky-subtitle-text">Keep Your Eyes Open</span>
                <h2 className="ky-title-text">What You'll Spot on the Water</h2>
                <p style={{"color":"#666","maxWidth":"600px","margin":"10px auto 0"}}>Because kayaks glide silently, they don't scare away the local wildlife. Here is what you can expect to see along your kayaking route.</p>
            </div>
            <div className="ky-spot-grid">
                <div className="ky-spot-card">
                    <div className="ky-spot-icon">🦤</div>
                    <h3>Vibrant Birdlife</h3>
                    <p>Get up close to majestic Kingfishers, Cormorants, Egrets, and local ducks hunting in the shallows.</p>
                </div>
                <div className="ky-spot-card">
                    <div className="ky-spot-icon">🛖</div>
                    <h3>Village Life</h3>
                    <p>Witness true backwater culture: children waving from the banks and locals washing clothes by the water.</p>
                </div>
                <div className="ky-spot-card">
                    <div className="ky-spot-icon">🛶</div>
                    <h3>Traditional Fishing</h3>
                    <p>Watch skilled fishermen gracefully casting traditional nets from their small wooden canoes.</p>
                </div>
                <div className="ky-spot-card">
                    <div className="ky-spot-icon">🪷</div>
                    <h3>Lush Flora</h3>
                    <p>Paddle directly through patches of blooming water lilies and beneath lush, drooping coconut canopies.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="ky-section-wrapper">
        <div className="ky-container-wide">
            <div className="ky-section-header">
                <span className="ky-subtitle-text">The 2-Hour Plan</span>
                <h2 className="ky-title-text">Step-by-Step Kayaking Itinerary</h2>
            </div>
            <div className="ky-step-grid">
                <div className="ky-step-card">
                    <div className="ky-step-num">01</div>
                    <span className="ky-step-time">🛥️ 00:00 - The Arrival</span>
                    <h3 className="ky-step-title">Free Open Boat Transfer</h3>
                    <p className="ky-step-desc">Arrive at our designated meeting point. Instead of walking, we provide a complimentary motorboat ride that takes you across the wider lake to our exclusive kayak launching point.</p>
                </div>
                <div className="ky-step-card">
                    <div className="ky-step-num">02</div>
                    <span className="ky-step-time">🦺 00:15 - Preparation</span>
                    <h3 className="ky-step-title">Safety Briefing & Launch</h3>
                    <p className="ky-step-desc">Meet your local guide, get fitted for your high-quality life jacket, and receive a quick, beginner-friendly lesson on how to paddle and steer. Then, it's time to hit the water!</p>
                </div>
                <div className="ky-step-card">
                    <div className="ky-step-num">03</div>
                    <span className="ky-step-time">🌿 00:30 - Exploration</span>
                    <h3 className="ky-step-title">Entering the Canals</h3>
                    <p className="ky-step-desc">Leave the open lake behind. You will weave your way into the narrow, silent village canals where the real magic of Alleppey happens. Enjoy the complete absence of engine noise.</p>
                </div>
                <div className="ky-step-card">
                    <div className="ky-step-num">04</div>
                    <span className="ky-step-time">📸 01:30 - Golden Hour Magic</span>
                    <h3 className="ky-step-title">Capture the Moment</h3>
                    <p className="ky-step-desc">Pause your paddling to take in the breathtaking views. If you booked a Sunrise or Sunset session, this is the perfect moment to capture incredible photos reflecting off the water.</p>
                </div>
                <div className="ky-step-card">
                    <div className="ky-step-num">05</div>
                    <span className="ky-step-time">🛶 02:00 - Conclusion</span>
                    <h3 className="ky-step-title">Return to Base</h3>
                    <p className="ky-step-desc">Paddle back to the launch point feeling refreshed and energized. We will safely transfer you back to the main docking area via the open boat.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="ky-section-wrapper bg-alt">
        <div className="ky-container">
            <div className="ky-guides-grid">
                <div className="ky-guides-img" role="img" aria-label="Guides helping guests in a kayak"></div>
                <div className="ky-guides-content">
                    <span className="ky-subtitle-text">Safety First</span>
                    <h2 className="ky-title-text" style={{"marginBottom":"20px","fontSize":"32px"}}>Meet Your Local Guides</h2>
                    <p style={{"color":"#666","fontSize":"15px","lineHeight":"1.7"}}>We believe that a great guide turns a good trip into an unforgettable adventure. Our kayaking guides are born and raised in Alleppey. They know every hidden turn of the canals and are experts at spotting local wildlife.</p>
                    <ul>
                        <li><strong>100% Beginner Friendly:</strong> You don't need to know how to swim.</li>
                        <li><strong>Premium Life Jackets:</strong> Provided for all ages and sizes.</li>
                        <li><strong>Always Accompanied:</strong> Your guide paddles with you the entire route.</li>
                        <li><strong>First-Aid Trained:</strong> Ensuring complete peace of mind on the water.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="ky-section-wrapper">
        <div className="ky-container">
            <div className="ky-section-header">
                <span className="ky-subtitle-text">Need to Know</span>
                <h2 className="ky-title-text">Trip Policies & Rules</h2>
            </div>
            <div className="ky-guide-grid">
                <div className="ky-guide-card" style={{"borderLeft":"4px solid #ff6600"}}>
                    <div className="ky-guide-icon" aria-hidden="true">🗺️</div>
                    <div className="ky-guide-text">
                        <h3>Important: Route Access Limits</h3>
                        <p><strong>1-Hour Sessions</strong> are restricted to open water and lake edges. Because of distance and time constraints, <strong>narrow village canals are only accessible if you book a 2-Hour kayak tour.</strong></p>
                    </div>
                </div>
                <div className="ky-guide-card">
                    <div className="ky-guide-icon" aria-hidden="true">🦺</div>
                    <div className="ky-guide-text">
                        <h3>Safety & Guidance</h3>
                        <p>Every guest is provided with a high-quality life jacket—you don't need to know how to swim to enjoy kayaking! A local guide will brief you on paddling basics before you launch.</p>
                    </div>
                </div>
                <div className="ky-guide-card">
                    <div className="ky-guide-icon" aria-hidden="true">👕</div>
                    <div className="ky-guide-text">
                        <h3>What to Wear & Bring</h3>
                        <p>Dress in comfortable, breathable clothing (you might get a little splashed!). We highly recommend bringing a hat, sunglasses, sunscreen, and drinking water.</p>
                    </div>
                </div>
                <div className="ky-guide-card">
                    <div className="ky-guide-icon" aria-hidden="true">☀️</div>
                    <div className="ky-guide-text">
                        <h3>Best Times to Paddle</h3>
                        <p>To avoid the harsh midday sun, we strongly suggest booking your session for the <strong>early morning (sunrise) or late afternoon (sunset)</strong> when the light over the backwaters is most beautiful.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<div className="rev-wrap">
  <div className="rev-label">GUEST REVIEWS</div>
  <h2 className="rev-title">Reviews of Our Kayaking Tours</h2>
  <p className="rev-sub">Over 2,000 happy travellers and counting. Here's what they wrote on Google about kayaking in Alleppey.</p>
  <div style={{"position":"relative","padding":"0 24px"}}>
    <div className="rev-outer">
      <div className="rev-track" id="revTrack">
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user"><div className="rev-avatar" style={{"background":"#d84315"}}>AN</div><div><p className="rev-name">Arjun & Neha</p><p className="rev-time">2 weeks ago</p></div></div>
            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Such a brilliant way to spend our morning! We paddled out just as the sun was coming up. Our guide was incredibly friendly and showed us exactly how to navigate the narrow village waterways. Highly recommended.</p>
        </div>
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user"><div className="rev-avatar" style={{"background":"#283593"}}>MT</div><div><p className="rev-name">Michael T.</p><p className="rev-time">1 month ago</p></div></div>
            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">I’ve travelled all over India, and this was easily my favorite day. If you are looking for the best kayaking in Alleppey, book with these guys. The equipment was top quality, and paddling through the silent canals away from noisy motorboats was unforgettable.</p>
        </div>
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user"><div className="rev-avatar" style={{"background":"#00695c"}}>PD</div><div><p className="rev-name">Priya Desai</p><p className="rev-time">3 months ago</p></div></div>
            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">My friends and I booked a sunset paddle and had the best time. The team handles all bookings smoothly on WhatsApp. Experiencing kayaking in Alleppey during the golden hour is simply breathtaking. We even spotted some beautiful kingfishers!</p>
        </div>
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user"><div className="rev-avatar" style={{"background":"#c2185b"}}>SH</div><div><p className="rev-name">Sharma</p><p className="rev-time">2 months ago</p></div></div>
            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Fantastic experience for our family. We were worried our teenagers might get bored, but they absolutely loved the sunrise kayaking in Alleppey. Our guide, Abhimanue, was very polite and professional, and made us feel completely safe on the water. A perfect, active morning experience.</p>
        </div>
        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user"><div className="rev-avatar" style={{"background":"#4527a0"}}>RK</div><div><p className="rev-name">Rohan Kumar</p><p className="rev-time">4 weeks ago</p></div></div>
            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Great pricing and an amazing local experience. We skipped the large boats and opted for this instead. For anyone planning their Kerala itinerary, doing some kayaking in Alleppey is an absolute must. You get so much closer to the local village life. 10/10.</p>
        </div>
      </div>
    </div>
    <button className="rev-prev" id="revPrev" aria-label="Previous Review">‹</button>
    <button className="rev-next" id="revNext" aria-label="Next Review">›</button>
  </div>
  <div className="rev-dots" id="revDots"></div>
</div>

<div className="ky-section-wrapper bg-alt">
    <div className="ky-container">
        <div className="ky-section-header">
            <span className="ky-subtitle-text">Getting Here</span>
            <h2 className="ky-title-text">Location & Directions</h2>
        </div>
        <div className="ky-location-grid">
            <div className="ky-contact-card">
                <div className="ky-contact-item">
                    <h3>📍 Meeting Point</h3>
                    <address style={{"fontStyle":"normal"}}>Alleppey Booking<br />Finishing Point Area<br />Alappuzha, Kerala, India</address>
                    <a href="https://maps.app.goo.gl/xAsvLrjnXZRMegiK9" target="_blank" rel="noopener noreferrer" className="ky-map-btn">Open Exact Pin in Google Maps →</a>
                </div>
                <div className="ky-contact-item">
                    <h3>📞 Contact Us</h3>
                    <p>WhatsApp: +91 70127 61588<br />Available Daily: 6:00 AM – 9:00 PM</p>
                </div>
                <div className="ky-contact-item">
                    <h3>🚗 Parking Details</h3>
                    <p>Convenient and secure 'Pay & Park' facilities are located right next to our launch point. We will send you the exact Google Maps parking pin along with your WhatsApp booking confirmation.</p>
                </div>
            </div>
            <div className="ky-map-container">
                <iframe src="https://maps.google.com/maps?q=Finishing%20Point%20Area,%20Alappuzha,%20Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Map of Alleppey Kayaking location"></iframe>
            </div>
        </div>
    </div>
</div>

<div className="faq-wrap">
  <div className="faq-inner">
      <p className="faq-label">GOT QUESTIONS?</p>
      <h2 className="faq-title">Everything You Need to Know</h2>
      <div className="faq-list">
        <div className={`faq-item ${openFaq === 0 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} ><span>How do I book kayaking in Alleppey?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>The easiest way is to message us on WhatsApp — we confirm your booking in minutes. You can also use the booking form on this page to check availability.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 1 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} ><span>Do I need previous kayaking experience?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>Not at all! <strong>Kayaking in Alleppey</strong> is very beginner-friendly. Our local guides will provide a quick training session and safety briefing before you hit the water.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 2 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} ><span>What is the best time for kayaking in Alleppey?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>The best time is during the early morning sunrise (around 6:00 AM) or late afternoon sunset (around 4:00 PM). These times offer the most beautiful light and cooler weather.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 3 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} ><span>Is it safe for non-swimmers and children?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>Absolutely. We provide high-quality life jackets for all participants, and you do not need to know how to swim. Children are welcome, and our guides accompany you.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 4 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} ><span>What should I wear and bring for the tour?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>We recommend wearing comfortable, breathable clothing that you don't mind getting a little splashed. It is also a great idea to bring a hat, sunglasses, sunscreen, and a bottle of drinking water.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 5 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} ><span>Which routes do the kayak tours cover?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>Our 1-hour sessions cover the open water and lake edges. If you want the complete <strong>kayaking in Alleppey</strong> experience through the peaceful, narrow village canals, we highly recommend booking the 2-hour session.</p></div>
        </div>
        <div className={`faq-item ${openFaq === 6 ? 'open active' : ''}`}>
          <div className="faq-q" onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} ><span>What is your cancellation policy?</span><span className="faq-icon">+</span></div>
          <div className="faq-a"><p>Cancellations made 48 hours before the trip receive a full refund. Cancellations within 24 hours receive a 50% refund. No-shows are non-refundable. We always try to help you reschedule whenever possible!</p></div>
        </div>
      </div>
  </div>
</div>

<div className="ab-scroll-to-book" id="abSmartBookBtn">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><polyline points="5 12 12 5 19 12" /></svg> Book Now
</div>
</article>






      </div>
    </>
  );
}
