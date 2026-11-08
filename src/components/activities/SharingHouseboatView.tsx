"use client";

import React, { useState } from "react";
import Link from "next/link";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sharing Houseboat in Alleppey",
    "description": "Sharing houseboat in Alleppey is the perfect way to experience the vast backwaters on a budget. Enjoy a private AC bedroom, the exact same cruising route, and authentic meals.",
    "image": [
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-3.webp",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.21-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.20-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.28-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.21-AM-1.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.23-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.26-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.29-AM.jpeg",
      "/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.29-AM-1.jpeg"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Alleppey Booking"
    },
    "offers": {
      "@type": "Offer",
      "url": "/sharing-houseboat-in-alleppey/",
      "priceCurrency": "INR",
      "price": "5999",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a sharing houseboat in Alleppey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The easiest way is to message us on WhatsApp. We confirm your room booking, availability, and pricing in minutes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a private and sharing houseboat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A private houseboat is exclusively for your group with full privacy. A sharing houseboat in Alleppey lets you book a private cabin on a shared boat, which is a budget-friendly option where you share common areas like the deck with other travellers."
        }
      },
      {
        "@type": "Question",
        "name": "Are meals included in the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our packages include authentic Kerala meals — breakfast, lunch, evening snacks, and dinner. Meals are freshly prepared by our onboard chef."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to visit Alleppey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "October to February is the best time when the weather is cool and pleasant. June to September is monsoon season — the backwaters are lush and beautiful, though occasional rain is expected."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe for children and solo travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our boats are equipped with life jackets and safety equipment. The shared environment makes it a highly secure and social experience for solo travellers and small families."
        }
      },
      {
        "@type": "Question",
        "name": "Can I do a same-day booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, same-day bookings are possible depending on room availability. WhatsApp us and we will confirm within minutes. We recommend booking at least 1-2 days in advance during peak season."
        }
      }
    ]
  }
];

export default function SharingHouseboatView() {
  const [currentImg, setCurrentImg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rooms, setRooms] = useState("1 Bedroom");
  const [guests, setGuests] = useState("2 Persons");
  const [date, setDate] = useState("");

  const whatsappUrl = `https://wa.me/917012761588?text=${encodeURIComponent(
    `Hi Alleppey Booking, I want to book a Sharing Houseboat in Alleppey.\n- Rooms: ${rooms}\n- Guests: ${guests}\n- Date: ${date || "Flexible / Upcoming"}\nPlease confirm rates and cabin photos.`
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
        <link rel="dns-prefetch" href="https://wa.me" />
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
<link rel="preload" as="image" href="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-3.webp" />









<article>
    
    <header className="hb-hero-wrapper">
        <div className="hb-hero-container">
            <div className="hb-hero-text">
                <span className="hb-badge">✨ Smart Traveler Choice</span>
                <h1 className="hb-hero-title">Book a <strong>Sharing Houseboat in <span className="hb-highlight">Alleppey</span></strong>.</h1>
                <p className="hb-hero-subtitle">Sharing houseboat in Alleppey is the perfect way to experience the vast backwaters on a budget. Enjoy a private AC bedroom, the exact same cruising route, and authentic meals.</p>
                <div className="hb-feature-list">
                    <div className="hb-feature-item">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        Private AC Room & Attached Bath
                    </div>
                    <div className="hb-feature-item">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        Full Kerala Meals Included
                    </div>
                    <div className="hb-feature-item">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        Access to Scenic Shared Deck
                    </div>
                </div>
            </div>

            
            <div className="hb-booking-box" id="ab-booking-form" role="form" aria-label="Book your shared houseboat room">
                <h2 className="hb-box-title">Reserve Your <em>Room</em></h2>
                <div className="hb-form-group">
                    <label className="hb-form-label" htmlFor="shared-rooms">I WANT TO BOOK...</label>
                    <select id="shared-rooms" className="hb-form-control" aria-required="true" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                    </select>
                </div>
                <div className="hb-form-group">
                    <label className="hb-form-label" htmlFor="shared-guests">NUMBER OF GUESTS...</label>
                    <select id="shared-guests" className="hb-form-control" aria-required="true" value={guests} onChange={(e) => setGuests(e.target.value)}>
                        <option value="1 Person">1 Person</option>
                        <option value="2 Persons">2 Persons</option>
                        <option value="3 Persons">3 Persons</option>
                        <option value="4 Persons">4 Persons</option>
                        <option value="5 Persons">5 Persons</option>
                        <option value="6 Persons">6 Persons</option>
                        <option value="7 Persons">7 Persons</option>
                        <option value="8 Persons">8 Persons</option>
                        <option value="9+ Persons">9+ Persons</option>
                    </select>
                </div>
                <div className="hb-form-group">
                    <label className="hb-form-label" htmlFor="shared-date-picker">SELECT DATE</label>
                    <div className="hb-date-wrapper">
                        <input type="date" id="shared-date-picker" className="hb-form-control" value={date} onChange={(e) => setDate(e.target.value)} aria-required="true" />
                    </div>
                </div>
                <a id="shared-submit" className="hb-submit-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Check Rates and Availability via WhatsApp">Check Rates & Availability →</a>
                <p className="hb-price-text"><strong>Starting from just ₹5999</strong><br />Message us for an instant custom quote</p>
            </div>
        </div>
    </header>

    
    <section className="sh-section-wrapper">
        
        <div className="sh-concept-area">
            <div className="sh-concept-grid">
                <div className="sh-text-box">
                    <span className="sh-subtitle">The Experience</span>
                    <h2 className="sh-title" style={{"marginBottom":"25px"}}>What is a Shared Boathouse?</h2>
                    <p>When you book a sharing houseboat in Alleppey, you get a private cabin (equipped with a comfortable bed and clean, attached toilet) on a larger luxury vessel. You will share the beautiful common areas—like the living room, dining space, and open sundeck—with a few other travelers.</p>
                    <p>It is the absolute perfect budget-friendly solution for solo travelers, backpackers, or couples who want to experience a sharing houseboat in Alleppey affordably. You get the exact same scenic route, personal chef, and authentic food as a private rental, just with shared communal spaces.</p>
                    <p style={{"fontSize":"14px","fontStyle":"italic","color":"#6b7280"}}>Traveling with a large family? Explore our <a href="/house-boat-alleppey/" style={{"color":"#ff6600","textDecoration":"none","fontWeight":"600"}}>Private Houseboat options</a>. Short on time? Check out our fast <a href="/speed-boat-in-alleppey/" style={{"color":"#ff6600","textDecoration":"none","fontWeight":"600"}}>Alleppey Speed Boat</a> tours.</p>
                    <div style={{"marginTop":"35px","display":"flex","gap":"12px","flexWrap":"wrap"}}>
                        <span style={{"background":"#ffffff","border":"1px solid #e5e7eb","padding":"10px 18px","borderRadius":"30px","fontSize":"13px","fontWeight":"600","color":"#374151","boxShadow":"0 4px 6px -1px rgba(0, 0, 0, 0.05)"}} aria-hidden="true">👨‍🍳 Personal Chef Onboard</span>
                        <span style={{"background":"#ffffff","border":"1px solid #e5e7eb","padding":"10px 18px","borderRadius":"30px","fontSize":"13px","fontWeight":"600","color":"#374151","boxShadow":"0 4px 6px -1px rgba(0, 0, 0, 0.05)"}} aria-hidden="true">🎵 Music System</span>
                        <span style={{"background":"#ffffff","border":"1px solid #e5e7eb","padding":"10px 18px","borderRadius":"30px","fontSize":"13px","fontWeight":"600","color":"#374151","boxShadow":"0 4px 6px -1px rgba(0, 0, 0, 0.05)"}} aria-hidden="true">⚓ Experienced Crew</span>
                    </div>
                </div>
                <div className="sh-highlight-box">
                    <h3 className="sh-route-title" aria-hidden="true">📍 Scenic Cruising Route</h3>
                    <ol className="sh-route-timeline">
                        <li className="sh-route-stop">
                            <h4>Day 1: 1:30 PM (Start)</h4>
                            <p>Depart from Alleppey. Cruise through Punnamada Lake and the vast <a href="https://www.keralatourism.org/" style={{"color":"#2cd664","textDecoration":"none","fontWeight":"600"}} target="_blank" rel="noopener">Vembanadu Lake</a>.</p>
                        </li>
                        <li className="sh-route-stop">
                            <h4>Afternoon Cruise</h4>
                            <p>Navigate through R-Block and C-Block (fascinating man-made paddy fields cultivated below sea level), Rani, Chithira, and Marthandam villages.</p>
                        </li>
                        <li className="sh-route-stop">
                            <h4>5:30 PM (Docking)</h4>
                            <p>The boat docks safely near Kuppapuram village for the night. Explore the village area while dinner is prepared.</p>
                        </li>
                        <li className="sh-route-stop">
                            <h4>Day 2: Morning Return</h4>
                            <p>Depart Kuppapuram, travel through Meenapally Kayal before returning to Alleppey for 9:00 AM check-out.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        
        <div className="sh-menu-area">
            <div className="sh-section-header">
                <span className="sh-subtitle">Culinary Journey</span>
                <h2 className="sh-title">Onboard Menu</h2>
            </div>
            <ul className="sh-menu-grid">
                <li className="sh-menu-card">
                    <div className="sh-menu-icon" aria-hidden="true">🍹</div>
                    <h3>Welcome</h3>
                    <p>Refreshing soft drinks (Lemon or Tang) served to guests upon boarding.</p>
                </li>
                <li className="sh-menu-card">
                    <div className="sh-menu-icon" aria-hidden="true">🍛</div>
                    <h3>Lunch</h3>
                    <p>Rice, Karimeen (Pearl Spot) Fish Fry, Sambar, Curd, Cabbage Thoran, Payar Mezhukku, Pappad, Pickle & Salad.</p>
                </li>
                <li className="sh-menu-card">
                    <div className="sh-menu-icon" aria-hidden="true">☕</div>
                    <h3>Evening</h3>
                    <p>Hot Tea or Coffee served with traditional Pazhampori (Kerala Banana Fritters).</p>
                </li>
                <li className="sh-menu-card">
                    <div className="sh-menu-icon" aria-hidden="true">🍽️</div>
                    <h3>Dinner & Breakfast</h3>
                    <p><strong>Dinner:</strong> Rice, Chapathi, Chicken Curry, Dal, Vendakka Mezhukku.<br /><strong>Breakfast:</strong> Idly, Sambar, Chutney, Tea & Pineapple.</p>
                </li>
            </ul>
            <div className="sh-menu-note">
                <span aria-hidden="true">⚠️</span> <strong>Dietary Note:</strong> If you require extra food or any changes to this menu, please inform us at least 1 day prior to your sharing houseboat in Alleppey trip.
            </div>
        </div>

        
        <div className="sh-guidelines-area">
            <div className="sh-section-header">
                <span className="sh-subtitle">Need to Know</span>
                <h2 className="sh-title">Important Guidelines</h2>
                <p style={{"color":"#6b7280","fontSize":"16px","marginTop":"15px"}}>Read our essential policies before embarking on your sharing houseboat in Alleppey journey.</p>
            </div>
            <ul className="sh-guide-grid">
                <li className="sh-guide-card">
                    <div className="sh-guide-icon" aria-hidden="true">⏰</div>
                    <div className="sh-guide-text">
                        <h3>Strict Timings</h3>
                        <p><strong>Check-in:</strong> 11:30 AM - 1:00 PM. <strong>Check-out:</strong> 9:00 AM sharp. Management is not responsible for late arrivals. Check-out time will be strictly followed to prepare for the next guests.</p>
                    </div>
                </li>
                <li className="sh-guide-card">
                    <div className="sh-guide-icon" aria-hidden="true">❄️</div>
                    <div className="sh-guide-text">
                        <h3>Air Conditioning Rules</h3>
                        <p>In Deluxe Shared Houseboats, AC in the private bedrooms operates only from <strong>9:00 PM to 6:00 AM</strong>. If daytime AC is required, an extra charge of <strong>₹2000/- per room</strong> applies.</p>
                    </div>
                </li>
                <li className="sh-guide-card">
                    <div className="sh-guide-icon" aria-hidden="true">👶</div>
                    <div className="sh-guide-text">
                        <h3>Child Policy</h3>
                        <p>Children <strong>below 5 years</strong> of age are complimentary when sharing a bed with parents. Children above 5 years will be counted as an extra person when booking a room on a sharing houseboat in Alleppey.</p>
                    </div>
                </li>
                <li className="sh-guide-card">
                    <div className="sh-guide-icon" aria-hidden="true">💳</div>
                    <div className="sh-guide-text">
                        <h3>Payment & Night Halts</h3>
                        <p>All payments are <strong>100% prepaid</strong> (full amount must be paid at check-in). After 5:30 PM, government regulations prohibit cruising; the boat will dock safely near a village for the night.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    
    <section className="gal-wrap">
        <div className="gal-header">
            <h2 className="gal-title">Our Gallery</h2>
            <p className="gal-sub">Take a look inside the premium facilities of a sharing houseboat in Alleppey.</p>
        </div>
        <div className="gal-grid">
            
            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Private AC Bedroom image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.21-AM.jpeg" alt="Exterior view of a premium sharing houseboat in Alleppey cruising on the backwaters at dusk with beautiful warm lighting." title="Private AC Bedroom" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Attached Bathroom image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.20-AM.jpeg" alt="Front view of the Vembanad Queen shared houseboat in Alleppey navigating the tranquil Kerala backwaters under a cloudy sky" title="Attached Bathroom" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Upper Deck Views image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.28-AM.jpeg" alt="A sharing houseboat in Alleppey docked alongside a scenic paved walkway surrounded by tropical palm trees" title="Upper Deck Views" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Onboard Dining image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.21-AM-1.jpeg" alt="Spacious indoor living area inside a shared Alleppey boathouse, featuring a comfortable sectional sofa and panoramic water views" title="Onboard Dining" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Living Room Area image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.23-AM.jpeg" alt="Cozy private AC bedroom with warm lighting and comfortable bedding available on a sharing houseboat in Alleppey" title="Living Room Area" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Sundeck Seating image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.26-AM.jpeg" alt="Modern private cabin with stylish wall decor and a double bed on a budget backwater cruise in Alleppey" title="Sundeck Seating" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Wooden Interiors image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.29-AM.jpeg" alt="Traditional wooden interiors of a private bedroom with a green tufted headboard on a sharing houseboat in Alleppey." title="Wooden Interiors" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

            <figure className="gal-item" tabIndex={0} role="button" aria-label="View Exterior Boat View image"  >
                <img src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-11-at-9.49.29-AM-1.jpeg" alt="Clean and modern attached bathroom featuring decorative patterned tiles inside an Alleppey shared houseboat." title="Exterior Boat View" decoding="async" width="800" height="600" />
                <div className="gal-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></div>
            </figure>

        </div>
    </section>

    
    <section className="rev-wrap">
        <div className="rev-label">GUEST REVIEWS</div>
        <h2 className="rev-title">What our guests say</h2>
        <p className="rev-sub">Over 2,000 happy travellers and counting. Here's what they wrote on Google.</p>
        <div style={{"position":"relative","padding":"0 24px"}}>
            <div className="rev-outer">
                <div className="rev-track" id="revTrack">
                    <div className="rev-slide">
                        <div className="rev-head">
                            <div className="rev-user">
                                <div className="rev-avatar" style={{"background":"#2e7d32"}}>AP</div>
                                <div><p className="rev-name">Amit & Priya</p><p className="rev-time">2 weeks ago</p></div>
                            </div>
                            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
                        </div>
                        <div className="rev-stars">★★★★★</div>
                        <p className="rev-text">We wanted to experience the backwaters without spending a fortune, and booking a private AC cabin on a shared boat was the perfect solution. The food was incredible, and we met some lovely travelers on the upper deck. Highly recommended!</p>
                    </div>
                    <div className="rev-slide">
                        <div className="rev-head">
                            <div className="rev-user">
                                <div className="rev-avatar" style={{"background":"#1565c0"}}>RD</div>
                                <div><p className="rev-name">Rohan Das</p><p className="rev-time">1 month ago</p></div>
                            </div>
                            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
                        </div>
                        <div className="rev-stars">★★★★★</div>
                        <p className="rev-text">As a solo backpacker, finding a <strong>sharing houseboat in Alleppey</strong> was a game-changer. I got my own clean room with an attached bath, and hanging out on the sundeck sharing travel stories was amazing. Great crew and smooth booking via WhatsApp.</p>
                    </div>
                    <div className="rev-slide">
                        <div className="rev-head">
                            <div className="rev-user">
                                <div className="rev-avatar" style={{"background":"#6a1b9a"}}>JT</div>
                                <div><p className="rev-name">Jessica & Tom</p><p className="rev-time">3 weeks ago</p></div>
                            </div>
                            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
                        </div>
                        <div className="rev-stars">★★★★★</div>
                        <p className="rev-text">Such a brilliant concept! We weren't sure what to expect from a sharing houseboat in Alleppey, but it felt just like a boutique floating hotel. The AC worked perfectly at night, and the chef accommodated our vegetarian diet without any fuss.</p>
                    </div>
                    <div className="rev-slide">
                        <div className="rev-head">
                            <div className="rev-user">
                                <div className="rev-avatar" style={{"background":"#00838f"}}>SR</div>
                                <div><p className="rev-name">Sneha Reddy</p><p className="rev-time">1 month ago</p></div>
                            </div>
                            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
                        </div>
                        <div className="rev-stars">★★★★★</div>
                        <p className="rev-text">I booked this trip for my parents and me. Choosing a sharing houseboat in Alleppey saved us money while giving us the exact same luxury cruising experience. The staff was very respectful, and the boat docked safely by 5:30 PM for a peaceful night's sleep.</p>
                    </div>
                    <div className="rev-slide">
                        <div className="rev-head">
                            <div className="rev-user">
                                <div className="rev-avatar" style={{"background":"#c62828"}}>AK</div>
                                <div><p className="rev-name">Arun Kumar</p><p className="rev-time">2 months ago</p></div>
                            </div>
                            <div className="rev-gicon"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg></div>
                        </div>
                        <div className="rev-stars">★★★★★</div>
                        <p className="rev-text">Everything from the welcome drink to the morning breakfast was top-notch. If you are on a budget, booking a room on a sharing houseboat in Alleppey is the absolute best way to see the canals. Clean, punctual, and beautiful views!</p>
                    </div>
                </div>
            </div>
            <button className="rev-prev" id="revPrev" aria-label="Previous Review">‹</button>
            <button className="rev-next" id="revNext" aria-label="Next Review">›</button>
        </div>
        <div className="rev-dots" id="revDots"></div>
    </section>

    
    <section className="faq-wrap">
        <p className="faq-label">GOT QUESTIONS?</p>
        <h2 className="faq-title">Everything you need to know</h2>
        <div className="faq-list">
            
            <div className={`faq-item ${openFaq === 0 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}  aria-expanded="true" role="button">
                    <span>How do I book a sharing houseboat in Alleppey?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a" style={{"maxHeight":"200px"}}>
                    <p>The easiest way is to message us on WhatsApp. We confirm your room booking, availability, and pricing in minutes.</p>
                </div>
            </div>
            
            <div className={`faq-item ${openFaq === 1 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}  aria-expanded="false" role="button">
                    <span>What is the difference between a private and sharing houseboat?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a">
                    <p>A private houseboat is exclusively for your group with full privacy. A <strong>sharing houseboat in Alleppey</strong> lets you book a private cabin on a shared boat, which is a budget-friendly option where you share common areas like the deck with other travellers.</p>
                </div>
            </div>
            
            <div className={`faq-item ${openFaq === 2 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}  aria-expanded="false" role="button">
                    <span>Are meals included in the price?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a">
                    <p>Yes! All our packages include authentic Kerala meals — breakfast, lunch, evening snacks, and dinner. Meals are freshly prepared by our onboard chef.</p>
                </div>
            </div>
            
            <div className={`faq-item ${openFaq === 3 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}  aria-expanded="false" role="button">
                    <span>What is the best time to visit Alleppey?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a">
                    <p>October to February is the best time when the weather is cool and pleasant. June to September is monsoon season — the backwaters are lush and beautiful, though occasional rain is expected.</p>
                </div>
            </div>
            
            <div className={`faq-item ${openFaq === 4 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}  aria-expanded="false" role="button">
                    <span>Is it safe for children and solo travellers?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a">
                    <p>Absolutely. All our boats are equipped with life jackets and safety equipment. The shared environment makes it a highly secure and social experience for solo travellers and small families.</p>
                </div>
            </div>
            
            <div className={`faq-item ${openFaq === 5 ? 'open active' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}  aria-expanded="false" role="button">
                    <span>Can I do a same-day booking?</span><span className="faq-icon" aria-hidden="true">+</span>
                </div>
                <div className="faq-a">
                    <p>Yes, same-day bookings are possible depending on room availability. WhatsApp us and we will confirm within minutes. We recommend booking at least 1-2 days in advance during peak season.</p>
                </div>
            </div>
            
        </div>
    </section>
</article>






<a href="#ab-booking-form" className="ab-scroll-to-book" id="abSmartBookBtn" aria-label="Scroll to Booking Form">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5" /><polyline points="5 12 12 5 19 12" /></svg>
    Book Now
</a>




      </div>
    </>
  );
}
