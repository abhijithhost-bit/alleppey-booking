"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "@/components/DatePicker";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Speed Boat in Alleppey Gallery",
    "description": "Check out these real moments from guests who booked a speed boat in Alleppey.",
    "about": {
      "@type": "Thing",
      "name": "Alleppey Speed Boat Rides"
    },
    "image": [
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp",
        "name": "Group speed boat fun",
        "description": "Group of family and friends wearing life jackets having fun on our 10 minutes package during sunset speed boat in alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp",
        "name": "Sunset family speed boat ride",
        "description": "Family enjoying a sunset speed boat in alleppey ride on the backwaters",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM-1-scaled.jpeg",
        "name": "Couple speed boat ride",
        "description": "Happy couple wearing life jackets enjoying a ride on a speed boat in Alleppey backwaters",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM-1-scaled.jpeg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-scaled.webp",
        "name": "Friends group speed boat",
        "description": "Happy friends enjoying a group ride on a speed boat in Alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-scaled.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-3-scaled.jpeg",
        "name": "Family enjoying speed boat",
        "description": "Smiling family having fun on a speed boat in Alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-3-scaled.jpeg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.57.55-PM-scaled.webp",
        "name": "Family on yellow boat",
        "description": "Parents and child on a yellow speed boat in Alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.57.55-PM-scaled.webp"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM.jpeg",
        "name": "Couples speed boat trip",
        "description": "Friends and couples having fun on a speed boat in Alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM.jpeg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-2-scaled.webp",
        "name": "Scenic backwater views",
        "description": "Scenic evening backwater view from a speed boat in Alleppey",
        "thumbnailUrl": "https://alleppeybooking.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-2-scaled.webp"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a speed boat in Alleppey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The easiest and fastest way to book a speed boat in Alleppey is to message us directly on WhatsApp. We confirm your ride, timing, and availability within minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How many people can fit in one speed boat in Alleppey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our premium private speed boats can comfortably seat up to 7 passengers. Pricing depends on your group size, and a minimum base charge applies if you have fewer than 3 guests."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe for children and non-swimmers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Safety is our top priority. We provide high-quality life jackets for all passengers, which are strictly mandatory. You do not need to know how to swim to enjoy a speed boat in Alleppey."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a 10-minute and a 1-hour ride?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 10-minute ride is a quick adrenaline rush on Punnamada Lake. A 1-hour ride covers up to 30km, taking you deep into village canals, past coconut groves, and across the vast Vembanad Lake for a complete sightseeing experience."
        }
      },
      {
        "@type": "Question",
        "name": "What are the operating hours for speedboats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate daily from 6:00 AM to 6:30 PM. For the best lighting and cooler weather, we highly recommend booking your speed boat in Alleppey during the early morning sunrise or late afternoon sunset."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a speed boat in Alleppey on the same day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, same-day bookings are definitely possible depending on boat availability. Just send us a quick WhatsApp message and we will get your boat ready for you."
        }
      },
      {
        "@type": "Question",
        "name": "What should I bring for the ride?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When riding a speed boat in Alleppey, we recommend comfortable clothing, sunglasses, a hat, and sunscreen. Because you will be traveling at high speeds, make sure to hold onto your phones, cameras, and loose items securely!"
        }
      }
    ]
  }
];

export default function SpeedBoatView() {
  const [currentImg, setCurrentImg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [duration, setDuration] = useState("30 Minute Ride");
  const [guests, setGuests] = useState("4 Persons");
  const [date, setDate] = useState("");

  const whatsappUrl = `https://wa.me/917012761588?text=${encodeURIComponent(
    `Hi Alleppey Booking, I want to book an Alleppey Speed Boat Ride.\n- Duration: ${duration}\n- Guests: ${guests}\n- Date: ${date || "Flexible / Upcoming"}\nPlease confirm rates and available slots.`
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



<article itemScope itemType="https://schema.org/TouristTrip">

<header className="sb-hero-wrapper">
    <div className="sb-hero-container">
        
        <div className="sb-hero-text">
            <span className="sb-badge">⚡ Fast-Paced Adventure</span>
            <h1 className="sb-hero-title" itemProp="name">Book a <strong>Speed Boat in <span className="sb-highlight">Alleppey</span></strong>.</h1>
            
            <p className="sb-hero-subtitle" itemProp="description">Short on time but want to see it all? Booking a premium speed boat is the fastest way to explore the vast expanse of Vembanad Lake and the iconic backwater canals.</p>
            
            <div className="sb-feature-list">
                <div className="sb-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    Premium 7-Seater Private Boat
                </div>
                <div className="sb-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    60 HP High-Power Outboard Engine
                </div>
                <div className="sb-feature-item">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    Highly Experienced Captains
                </div>
            </div>
        </div>

        
        <div className="sb-booking-box" id="ab-booking-form" role="form" aria-label="Book your speedboat">
            <h2 className="sb-box-title">Book <em>Now</em></h2>
            
            <div className="sb-form-group">
                <label className="sb-form-label" htmlFor="sb-duration">DURATION</label>
                <select id="sb-duration" className="sb-form-control" aria-required="true" value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="10 Minute Ride">10 Minute Ride</option>
                    <option value="30 Minute Ride">30 Minute Ride</option>
                    <option value="1 Hour Ride">1 Hour Ride</option>
                </select>
            </div>

            <div className="sb-form-group">
                <label className="sb-form-label" htmlFor="sb-guests">NUMBER OF GUESTS</label>
                <select id="sb-guests" className="sb-form-control" aria-required="true" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3 Persons">3 Persons</option>
                    <option value="4 Persons">4 Persons</option>
                    <option value="5 Persons">5 Persons</option>
                    <option value="6 Persons">6 Persons</option> 
                    <option value="7+ Persons">7+ Persons</option>
                </select>
            </div>

            <div className="sb-form-group">
                <label className="sb-form-label" htmlFor="sb-date-picker">SELECT DATE</label>
                <div className="sb-date-wrapper">
                    <DatePicker id="sb-date-picker" className="sb-form-control" value={date} onChange={setDate} placeholder="Select check-in date" />
                </div>
            </div>

            <a id="sb-submit" className="sb-submit-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Check Rates and Availability via WhatsApp">Check Rates & Availability →</a>

            
            <p className="sb-price-text" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="INR" />
                <strong>Starting at ₹<span itemProp="price" content="300">400</span> per person</strong><br />Message us for an instant custom quote
            </p>
        </div>
        
    </div>
</header>


<main className="sb-section-wrapper">
    <div className="sb-concept-area">
        <div className="sb-concept-grid">
            
            <div className="sb-text-box">
                <span className="sb-subtitle-text">The Experience</span>
                <h2 className="sb-title-text" style={{"marginBottom":"25px"}}>The Ultimate Backwater Thrill</h2>
                
                <p>Craving adrenaline? Renting a private <strong>speed boat in Alleppey</strong> is the ultimate way to maximize a tight sightseeing schedule. Step aboard our premium 7-seater vessel—powered by a 60 HP outboard engine—and slice through the expansive backwaters in a fraction of the time.</p>
                
                <p>Highly recommended for families and groups looking to book a thrilling ride. </p>
                
                
                <p style={{"fontSize":"14px","fontStyle":"italic","color":"#6b7280"}}>Looking for a more relaxed pace? Explore our traditional <Link href="/shikara-ride-in-alleppey/" style={{"color":"#ff6600","textDecoration":"none","fontWeight":"600"}} title="Book Shikara Ride in Alleppey">Shikara rides</Link>, or book an overnight stay on a premium <Link href="/house-boat-alleppey/" style={{"color":"#ff6600","textDecoration":"none","fontWeight":"600"}} title="Book Alleppey Houseboat">Kerala Houseboat</Link>.</p>
                
                <div className="sb-pill-container">
                    <span className="sb-pill">🚤 Premium 7-Seater Capacity</span>
                    <span className="sb-pill">⚡ 60 HP Engine Power</span>
                    <span className="sb-pill">🦺 100% Safety Assured</span>
                </div>
            </div>

            <div className="sb-highlight-box">
                <h3 className="sb-route-title">🚀 Why Choose a Speedboat?</h3>
                <div className="sb-feature-col">
                    <div className="sb-feature-col-item">
                        <div className="sb-feature-icon" aria-hidden="true">⏱️</div>
                        <div className="sb-feature-text">
                            <h3>Time Efficiency</h3>
                            <p>See the full structural beauty of our major lake networks and surrounding attractions without dedicating half your day to a slow cruise.</p>
                        </div>
                    </div>
                    <div className="sb-feature-col-item">
                        <div className="sb-feature-icon" aria-hidden="true">🎢</div>
                        <div className="sb-feature-text">
                            <h3>Pure Adrenaline</h3>
                            <p>An exciting, bumpy, and thrilling ride over the wakes that is perfect for thrill-seekers of all ages.</p>
                        </div>
                    </div>
                    <div className="sb-feature-col-item">
                        <div className="sb-feature-icon" aria-hidden="true">⚓</div>
                        <div className="sb-feature-text">
                            <h3>Expert Navigation</h3>
                            <p>Driven by highly trained local captains who know the safest and most exciting routes on the water.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="sb-routes-area">
        <div className="sb-guide-container">
            <div className="sb-section-header" style={{"marginBottom":"40px"}}>
                <span className="sb-subtitle-text">Where We Go</span>
                <h2 className="sb-title-text">Our Popular Route Packages</h2>
                <p style={{"color":"#6b7280","fontSize":"16px","marginTop":"15px"}}>Discover the most scenic paths when you hire a <strong>speed boat in Alleppey</strong>.</p>
            </div>

            <div className="sb-guide-grid" style={{"gridTemplateColumns":"1fr","gap":"25px"}}>
                
                <div className="sb-route-card" style={{"borderLeft":"5px solid #2cd664"}}>
                    <div className="sb-guide-icon" style={{"background":"#e6f9ed","color":"#2cd664"}} aria-hidden="true">🗺️</div>
                    <div style={{"flex":"1"}}>
                        <h3>1-Hour Full Village Safari (30km)</h3>
                        
                        <p style={{"margin":"0 0 10px 0","fontSize":"13px","color":"#6b7280","lineHeight":"1.5"}}><strong>Route:</strong> Starts from Alleppey (2km from town) → Boat Race Track → Village Narrow Canals → Kainakary Terminal → Coconut Groves → <a href="https://www.keralatourism.org/" style={{"color":"#2cd664","textDecoration":"none","fontWeight":"600"}} target="_blank" rel="noopener noreferrer" title="Kerala Tourism Official Website">Vembanad Lake</a>.</p>
                        <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20would%20like%20to%20check%20availability%20for%20the%201-Hour%20Full%20Village%20Safari%20(Speedboat)%20package." target="_blank" rel="noopener noreferrer" className="sb-route-price">
                            ₹5,000 - ₹6,000
                        </a>
                        <span className="sb-route-note">*Actual pricing depends on your group size. Click price to book.</span>
                    </div>
                </div>

                <div className="sb-route-card" style={{"borderLeft":"5px solid #ff6600"}}>
                    <div className="sb-guide-icon" aria-hidden="true">🌊</div>
                    <div style={{"flex":"1"}}>
                        <h3>30-Minute Lake Loop (15km)</h3>
                        <p style={{"margin":"0 0 10px 0","fontSize":"13px","color":"#6b7280","lineHeight":"1.5"}}><strong>Route:</strong> Starts from Alleppey → Boat Race Track → Vembanad Lake → Punnamada Lake.</p>
                        <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20would%20like%20to%20check%20availability%20for%20the%2030-Minute%20Lake%20Loop%20(Speedboat)%20package." target="_blank" rel="noopener noreferrer" className="sb-route-price">
                            ₹2,500 - ₹3,000
                        </a>
                        <span className="sb-route-note">*Actual pricing depends on your group size. Click price to book.</span>
                    </div>
                </div>

                <div className="sb-route-card" style={{"borderLeft":"5px solid #1a2b3c"}}>
                    <div className="sb-guide-icon" style={{"background":"#f3f4f6","color":"#1f2937"}} aria-hidden="true">⚡</div>
                    <div style={{"flex":"1"}}>
                        <h3>10-Minute Fun Ride (7km)</h3>
                        <p style={{"margin":"0 0 10px 0","fontSize":"13px","color":"#6b7280","lineHeight":"1.5"}}><strong>Route:</strong> A quick, adrenaline-pumping 7 km fun ride specifically exploring the beautiful Punnamada Lake.</p>
                        <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20would%20like%20to%20check%20availability%20for%20the%2010-Minute%20Fun%20Ride%20(Speedboat)%20package." target="_blank" rel="noopener noreferrer" className="sb-route-price">
                            ₹400 Per Person
                        </a>
                        <span className="sb-route-note">*Base boat charge is ₹1300 (covers up to 3 people). Additional guests are ₹400 per person. Click price to book.</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="sb-guidelines-area">
        <div className="sb-guide-container">
            <div className="sb-section-header">
                <span className="sb-subtitle-text">Need to Know</span>
                <h2 className="sb-title-text">Trip Policies & Information</h2>
            </div>

            <div className="sb-guide-grid">
                
                <div className="sb-guide-card">
                    <div className="sb-guide-icon" aria-hidden="true">💵</div>
                    <div className="sb-guide-text">
                        
                        <h3>Minimums & Boarding</h3>
                        <p>Please note that a minimum of 3 guests is generally required. If you have fewer than 3 guests, a <strong>base minimum charge of ₹1300 applies</strong> for the boat to launch and cover operational fuel limits.</p>
                    </div>
                </div>

                <div className="sb-guide-card">
                    <div className="sb-guide-icon" aria-hidden="true">🦺</div>
                    <div className="sb-guide-text">
                        <h3>Safety Equipment</h3>
                        <p>Safety is our absolute top priority during your adventure. High-quality <strong>life jackets are strictly mandatory</strong> and provided for every single passenger on board.</p>
                    </div>
                </div>

                <div className="sb-guide-card">
                    <div className="sb-guide-icon" aria-hidden="true">☀️</div>
                    <div className="sb-guide-text">
                        <h3>Operating Hours</h3>
                        <p>We operate daily from <strong>6:00 AM to 6:30 PM</strong>. For the most beautiful backwater views and cooler weather, we highly recommend booking a sunrise or sunset ride!</p>
                    </div>
                </div>

                <div className="sb-guide-card">
                    <div className="sb-guide-icon" aria-hidden="true">📸</div>
                    <div className="sb-guide-text">
                        <h3>What to Secure</h3>
                        <p>Due to high speeds and sudden bumps over the wakes, make sure to hold firmly onto your phones, cameras, and loose items like hats and sunglasses to avoid them dropping into the lake!</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main>

</article>


<div className="ab-scroll-to-book" id="abSmartBookBtn">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <polyline points="5 12 12 5 19 12" />
    </svg>
    Book Now
</div>










<section className="gal-wrap" itemScope itemType="https://schema.org/ImageGallery">
  <div className="gal-header">
    <h2 className="gal-title">Our Gallery</h2>
    <p className="gal-sub">Check out these real moments from guests who booked a speed boat in Alleppey.</p>
  </div>
  
  <div className="gal-grid">
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Group speed boat fun image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Group speed boat fun" />
      <meta itemProp="description" content="Group of family and friends wearing life jackets having fun on our 10 minutes package during sunset speed boat in alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.31-PM-1.webp" alt="Group of family and friends wearing life jackets having fun on our 10 minutes package during sunset speed boat in alleppey" title="Group speed boat fun" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Sunset family speed boat ride image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Sunset family speed boat ride" />
      <meta itemProp="description" content="Family enjoying a sunset speed boat in alleppey ride on the backwaters" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.32-PM-1.webp" alt="Family enjoying a sunset speed boat in alleppey ride on the backwaters" title="Sunset family speed boat ride" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" priority />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Couple speed boat ride image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Couple speed boat ride" />
      <meta itemProp="description" content="Happy couple wearing life jackets enjoying a ride on a speed boat in Alleppey backwaters" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM-1-scaled.jpeg" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM-1-scaled.jpeg" alt="Happy couple wearing life jackets enjoying a ride on a speed boat in Alleppey backwaters" title="Couple speed boat ride" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Friends group speed boat image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Friends group speed boat" />
      <meta itemProp="description" content="Happy friends enjoying a group ride on a speed boat in Alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-scaled.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-scaled.webp" alt="Happy friends enjoying a group ride on a speed boat in Alleppey" title="Friends group speed boat" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Family enjoying speed boat image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Family enjoying speed boat" />
      <meta itemProp="description" content="Smiling family having fun on a speed boat in Alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-3-scaled.jpeg" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-3-scaled.jpeg" alt="Smiling family having fun on a speed boat in Alleppey" title="Family enjoying speed boat" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Family on yellow boat image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Family on yellow boat" />
      <meta itemProp="description" content="Parents and child on a yellow speed boat in Alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.57.55-PM-scaled.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.57.55-PM-scaled.webp" alt="Parents and child on a yellow speed boat in Alleppey" title="Family on yellow boat" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Couples speed boat trip image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Couples speed boat trip" />
      <meta itemProp="description" content="Friends and couples having fun on a speed boat in Alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM.jpeg" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.27.29-PM.jpeg" alt="Friends and couples having fun on a speed boat in Alleppey" title="Couples speed boat trip" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
    
    
    <figure className="gal-item" tabIndex={0} role="button" aria-label="View Scenic backwater views image"   itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
      <meta itemProp="name" content="Scenic backwater views" />
      <meta itemProp="description" content="Scenic evening backwater view from a speed boat in Alleppey" />
      <link itemProp="contentUrl" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-2-scaled.webp" />
      <Image src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-9.24.32-PM-2-scaled.webp" alt="Scenic evening backwater view from a speed boat in Alleppey" title="Scenic backwater views" width={800} height={600} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px" />
      <div className="gal-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
      </div>
    </figure>
  </div>
</section>











<div className="rev-wrap">
  <div className="rev-label">GUEST REVIEWS</div>
  <h2 className="rev-title">What our guests say</h2>
  <p className="rev-sub">Over 2,000 happy travellers and counting. Here's what they wrote on Google.</p>

  <div style={{"position":"relative","padding":"0 24px"}}>
    <div className="rev-outer">
      <div className="rev-track" id="revTrack">

        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#2e7d32"}}>VS</div>
              <div>
                <p className="rev-name">Vikram Singh</p>
                <p className="rev-time">2 weeks ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">We only had a few hours in town, so this was the perfect choice. Hiring a speed boat in Alleppey allowed us to see the vast Vembanad lake and the village areas quickly. The captain was highly experienced and made the bumpy ride super fun for our group!</p>
        </div>

        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#1565c0"}}>NR</div>
              <div>
                <p className="rev-name">Neha & Rahul</p>
                <p className="rev-time">1 month ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Absolutely exhilarating! We booked the 1-hour safari route. Finding a reliable speed boat in Alleppey was easy with them. The boat was a premium 7-seater and felt very safe. They provided life jackets for everyone before we even stepped on board.</p>
        </div>

        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#6a1b9a"}}>MT</div>
              <div>
                <p className="rev-name">Michael T.</p>
                <p className="rev-time">3 weeks ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Took the sunset ride on the 30-minute lake loop. If you want the best views, taking a speed boat in Alleppey at dusk is highly recommended. The wind in our hair and the golden sunset reflecting on the water made it an unforgettable evening. We will definitely do this again!</p>
        </div>

        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#00838f"}}>AS</div>
              <div>
                <p className="rev-name">Anita Sharma</p>
                <p className="rev-time">1 month ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">If you are looking for an adrenaline rush, booking a speed boat in Alleppey is a completely must-do experience! We opted for the fast ride and the 60 HP engine made it so thrilling. The local captain knew exactly where to go to give us the best open-water experience.</p>
        </div>

        <div className="rev-slide">
          <div className="rev-head">
            <div className="rev-user">
              <div className="rev-avatar" style={{"background":"#c62828"}}>JE</div>
              <div>
                <p className="rev-name">James & Emily</p>
                <p className="rev-time">2 months ago</p>
              </div>
            </div>
            <div className="rev-gicon">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            </div>
          </div>
          <div className="rev-stars">★★★★★</div>
          <p className="rev-text">Our family trip was made perfect by this ride. We originally wanted a slow cruise, but decided to rent a speed boat in Alleppey to save time and keep the teenagers entertained. It was the best decision! The kids loved the speed, and we still got to see the beautiful canals.</p>
        </div>

      </div>
    </div>
    <button className="rev-prev" id="revPrev" aria-label="Previous Review">‹</button>
    <button className="rev-next" id="revNext" aria-label="Next Review">›</button>
  </div>
  <div className="rev-dots" id="revDots"></div>
</div>






<div className="faq-wrap">
  <p className="faq-label">GOT QUESTIONS?</p>
  <h2 className="faq-title">Everything you need to know</h2>

  <div className="faq-list">

    <div className={`faq-item ${openFaq === 0 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} >
        <span>How do I book a speed boat in Alleppey?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>The easiest and fastest way to book a speed boat in Alleppey is to message us directly on WhatsApp. We confirm your ride, timing, and availability within minutes.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 1 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} >
        <span>How many people can fit in one speed boat in Alleppey?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>Our premium private speed boats can comfortably seat up to 7 passengers. Pricing depends on your group size, and a minimum base charge applies if you have fewer than 3 guests.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 2 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} >
        <span>Is it safe for children and non-swimmers?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>Absolutely. Safety is our top priority. We provide high-quality life jackets for all passengers, which are strictly mandatory. You don't need to know how to swim to enjoy a speed boat in Alleppey.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 3 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} >
        <span>What is the difference between a 10-minute and a 1-hour ride?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>A 10-minute ride is a quick adrenaline rush specifically on Punnamada Lake. A 1-hour ride covers up to 30km, taking you deep into village narrow canals, past coconut groves, and across the vast Vembanad Lake for a complete sightseeing experience.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 4 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} >
        <span>What are the operating hours for speedboats?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>We operate daily from 6:00 AM to 6:30 PM. For the most beautiful lighting and cooler weather, we highly recommend booking your speed boat in Alleppey during the early morning (sunrise) or late afternoon (sunset).</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 5 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} >
        <span>Can I book a speed boat in Alleppey on the same day?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>Yes, same-day bookings are definitely possible depending on boat availability. Just send us a quick WhatsApp message and we will get your boat ready for you!</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 6 ? 'open active' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} >
        <span>What should I bring for the ride?</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">
        <p>When riding a speed boat in Alleppey, we recommend comfortable clothing, sunglasses, a hat, and sunscreen. Because you will be traveling at high speeds and over wakes, make sure to hold firmly onto your phones, cameras, and loose items securely!</p>
      </div>
    </div>

  </div>
</div>


      </div>
    </>
  );
}
