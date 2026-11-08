"use client";

import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "@/components/DatePicker";

const schemas = [
  {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Houseboats",
            "item": "/house-boat-alleppey/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "10 Bedroom Luxury Houseboat",
            "item": "/10-bedroom-houseboat-alleppey/"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Private 10 Bedroom Houseboat Alleppey",
        "image": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp",
        "description": "Book a massive 10 bedroom houseboat Alleppey designed exclusively for mega groups of up to 40 guests (up to 120 for day cruises). Features 10 AC suites, an elite 6-person crew, and an extra-wide backwater viewing deck ideal for events.",
        "brand": {
          "@type": "Brand",
          "name": "Alleppey Booking"
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": "/10-bedroom-houseboat-alleppey/",
          "priceCurrency": "INR",
          "lowPrice": "40000",
          "highPrice": "104000",
          "offerCount": "3",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "108",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the 10 bedroom houseboat Alleppey suitable for corporate offsites and weddings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! As one of the largest vessels in the Kerala backwaters, it boasts a massive upper deck perfect for ceremonies, DJ nights, and corporate meetings, comfortably accommodating all 40 passengers (up to 120 for day cruises)."
            }
          },
          {
            "@type": "Question",
            "name": "How is food served for a large group on a boat house in Alleppey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy a multi-chef culinary team to manage a full buffet-style catering setup. This ensures that every guest enjoys hot, authentic Kerala cuisine simultaneously in our spacious dining hall without long wait times."
            }
          },
          {
            "@type": "Question",
            "name": "Are all 10 bedrooms located on a single level?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To maximize space and provide panoramic views, our 10 bedroom boats typically feature a double-decker architecture. The luxurious AC suites are spread across both the lower and upper decks, offering ultimate privacy."
            }
          }
        ]
      },
      {
        "@type": "ImageGallery",
        "name": "10 Bedroom Houseboat Inside Gallery",
        "description": "Explore the immense layout and luxury suites of our 10 bedroom private houseboat in Alleppey, capable of hosting 40 guests.",
        "about": {
          "@type": "Thing",
          "name": "Private 10 Bedroom Houseboat Alleppey"
        },
        "image": [
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp",
            "name": "Grand 10 Bedroom Houseboat Exterior",
            "description": "Illuminated Royal Waves 10 bedroom houseboat alleppey exterior at dusk",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror.webp",
            "name": "10 Bedroom Houseboat Profile",
            "description": "Royal Waves 10 bedroom houseboat alleppey cruising the backwaters during daytime",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-livingarea.webp",
            "name": "Luxury Living Area and Lounge",
            "description": "Spacious living area with modern sofa inside the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-livingarea.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bedroom.webp",
            "name": "Premium AC Bedroom Suite",
            "description": "Luxury suite with circular lighted headboard in the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bedroom.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-8.jpeg",
            "name": "Scenic Window Bedroom",
            "description": "Air-conditioned guest room with backwater views on the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-8.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-7.jpeg",
            "name": "Elegant Guest Bedroom",
            "description": "Modern bedroom interior with geometric wall decor on the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-7.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-4.jpeg",
            "name": "Wooden Interior Bedroom",
            "description": "Comfortable bedding and wooden interiors inside the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-4.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-3.jpeg",
            "name": "Cozy Private Cabin",
            "description": "Cozy and well-lit private cabin inside the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-3.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bathroom.webp",
            "name": "Modern Attached Bathroom",
            "description": "Clean attached marble bathroom with modern fittings in the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bathroom.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-starecase.webp",
            "name": "Upper Deck Staircase Access",
            "description": "Illuminated wooden staircase leading to the upper deck of the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-starecase.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-dinighall.webp",
            "name": "Elegant Group Dining Hall",
            "description": "Massive dining hall with elegant table setups inside the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom-dinighall.webp"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom.webp",
            "name": "Expansive Wooden Lounge Deck",
            "description": "Expansive wooden lounge and dining deck with decorative lighting on the 10 bedroom houseboat alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/royalwawes-10-bedroom.webp"
          }
        ]
      }
    ]
  }
];

export default function TenBedroomView() {
  const [currentImg, setCurrentImg] = useState("/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp");
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

      <div className="houseboat-detail-pure w-full">



<article className="ab-single-wrap" id="ab-single-houseboat">


<div className="ab-container">
    <header className="ab-sh-header">
        <nav aria-label="Breadcrumb" className="ab-sh-breadcrumbs">
            <a href="/" title="Back to Home">Home</a> &nbsp;›&nbsp; <a href="/house-boat-alleppey/" title="View all Houseboats">Houseboats</a> &nbsp;›&nbsp; 10 Bedroom Houseboat
        </nav>
        <h1 className="ab-sh-title">Private 10 Bedroom Houseboat Alleppey</h1>
        <div className="ab-sh-meta">
            <span id="ab-header-capacity"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> Up to 40 Guests</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 1 3-3h7z" /></svg> 10 AC Bedrooms</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.9/5 Rating</span>
        </div>
    </header>

    <div className="ab-sh-layout">
        <section className="ab-sh-gallery-container">
            <div className="ab-sh-main-image-wrap">
                <img id="ab-main-img" src={currentImg} alt="Illuminated Royal Waves 10 bedroom houseboat alleppey exterior at dusk" title="Royal Waves 10 Bedroom Houseboat Exterior" fetchPriority="high" width="1200" height="800" />
            </div>
            <div className="ab-sh-thumbnails">
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror-2.webp" alt="Illuminated Royal Waves 10 bedroom houseboat alleppey exterior at dusk" title="Royal Waves 10 Bedroom Houseboat Exterior" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-exteror.webp" alt="Royal Waves 10 bedroom houseboat alleppey cruising the backwaters during daytime" title="10 Bedroom Houseboat Profile" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-livingarea.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-livingarea.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-livingarea.webp" alt="Spacious living area with modern sofa inside the 10 bedroom houseboat alleppey" title="Luxury Living Area and Lounge" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-bedroom.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bedroom.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-bedroom.webp" alt="Luxury suite with circular lighted headboard in the 10 bedroom houseboat alleppey" title="Premium AC Bedroom Suite" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-8.jpeg")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-8.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-8.jpeg" alt="Air-conditioned guest room with backwater views on the 10 bedroom houseboat alleppey" title="Scenic Window Bedroom" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-7.jpeg")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-7.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.12-PM-7.jpeg" alt="Modern bedroom interior with geometric wall decor on the 10 bedroom houseboat alleppey" title="Elegant Guest Bedroom" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-4.jpeg")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-4.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-4.jpeg" alt="Comfortable bedding and wooden interiors inside the 10 bedroom houseboat alleppey" title="Wooden Interior Bedroom" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-3.jpeg")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-3.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.09.11-PM-3.jpeg" alt="Cozy and well-lit private cabin inside the 10 bedroom houseboat alleppey" title="Cozy Private Cabin" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-bathroom.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-bathroom.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-bathroom.webp" alt="Clean attached marble bathroom with modern fittings in the 10 bedroom houseboat alleppey" title="Modern Attached Bathroom" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-starecase.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-starecase.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-starecase.webp" alt="Illuminated wooden staircase leading to the upper deck of the 10 bedroom houseboat alleppey" title="Upper Deck Staircase Access" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom-dinighall.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom-dinighall.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom-dinighall.webp" alt="Massive dining hall with elegant table setups inside the 10 bedroom houseboat alleppey" title="Elegant Group Dining Hall" width="100" height="70" /></div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/royalwawes-10-bedroom.webp")}><img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/royalwawes-10-bedroom.webp" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/royalwawes-10-bedroom.webp" alt="Expansive wooden lounge and dining deck with decorative lighting on the 10 bedroom houseboat alleppey" title="Expansive Wooden Lounge Deck" width="100" height="70" /></div>
            </div>
        </section>

        <main className="ab-sh-content">
            <div className="ab-sh-section">
                <h2>About The Premium 10 Bedroom Houseboat in Alleppey</h2>
                <p className="ab-sh-desc">Searching for the ultimate venue for a destination wedding, corporate offsite, or massive family get-together? Our luxurious <strong>10 bedroom houseboat Alleppey</strong> offers an unparalleled floating experience on the Vembanad Lake. With a sprawling layout designed to comfortably host up to 40 guests (and up to 120 for day cruises), it entirely eliminates the logistical headache of splitting your large group across multiple smaller boats.</p>
                <p className="ab-sh-desc">This mega-vessel features ten private, beautifully appointed suites, each equipped with modern air-conditioning and attached western bathrooms. To guarantee exceptional hospitality for such a massive party, the boat is fully staffed by an expert <strong>6-person crew</strong>. Our specialized chefs curate grand buffet-style Kerala meals in the vast dining hall, ensuring your backwater journey is seamless, majestic, and completely unforgettable.</p>
            </div>

            <div className="ab-sh-section">
                <h2>Houseboat Amenities &amp; Features</h2>
                <ul className="ab-sh-amenities">
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg><div>Air Conditioning<br /><span style={{"display":"inline-block","marginTop":"4px","padding":"3px 8px","background":"#fff4ed","color":"var(--brand-orange)","borderRadius":"4px","fontWeight":"700","fontSize":"10px","border":"1px solid #fed7aa","letterSpacing":"0.5px"}}>9:00 PM TO 6:00 AM</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg><div>Private Crew<br /><span style={{"color":"var(--text-muted)"}}>6-Person Dedicated Crew</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg><div>10 Bedrooms + Bathrooms<br /><span style={{"color":"var(--text-muted)"}}>Clean &amp; well-maintained</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><div>100% Private<br /><span style={{"color":"var(--text-muted)"}}>The whole boat is yours</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg><div>Backwater Cruise<br /><span style={{"color":"var(--text-muted)"}}>Scenic sightseeing options</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg><div>Meals &amp; Snacks<br /><span style={{"color":"var(--text-muted)"}}>Freshly prepared on board</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg><div>All Inclusive<br /><span style={{"color":"var(--text-muted)"}}>Taxes &amp; fuel charges covered</span></div></li>
                </ul>
            </div>

            <div className="ab-sh-section">
                <h2>Cruise Packages, Itinerary &amp; Menu</h2>
                <p className="ab-sh-desc" style={{"marginBottom":"20px"}}>We offer three distinct cruise experiences. Select a package below to view its specific timeline and catering details. <strong style={{"color":"var(--brand-navy)"}}>Note:</strong> Please inform us of any specific dietary requirements at the time of booking.</p>
                <div className="ab-tabs-container">
                    <div className="ab-tabs-nav">
                        <button className="ab-tab-btn active" data-target="tab-overnight" type="button"><span className="badge">Best Seller</span><span className="tab-title">Overnight Cruise</span><small>12:00 PM - 9:00 AM</small></button>
                        <button className="ab-tab-btn" data-target="tab-day" type="button"><span className="tab-title">Day Cruise</span><small>11:30 AM - 5:00 PM</small></button>
                        <button className="ab-tab-btn" data-target="tab-night" type="button"><span className="tab-title">Night Stay</span><small>5:00 PM - 9:00 AM</small></button>
                    </div>
                    <div id="tab-overnight" className="ab-tab-content active">
                        <div className="ab-menu-wrapper">
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍹</div><div className="ab-menu-content"><h3>Welcome Drink</h3><p className="ab-menu-text">Fresh Fruit Juice.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍛</div><div className="ab-menu-content"><h3>Traditional Lunch</h3><p className="ab-menu-text">Rice, Sambar, Karimeen Fry (Pearl Spot), Thoran, Salad, Curd, Papad, and Pickles.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">☕</div><div className="ab-menu-content"><h3>Evening Tea &amp; Snacks</h3><p className="ab-menu-text">Tea or Coffee with Banana Fritters or Onion Pakoras.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍽️</div><div className="ab-menu-content"><h3>Dinner Service</h3><p className="ab-menu-text">Chappathi, Rice, Chicken Curry, Mixed Veg Curries, Dal, and Curd.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🥞</div><div className="ab-menu-content"><h3>Morning Breakfast</h3><p className="ab-menu-text">Idly, Sambar, Chutney, and Tea or Coffee.</p></div></div>
                        </div>
                        <div className="ab-timeline">
                            <div className="ab-time-day">Day 1: Arrival &amp; Backwater Cruise</div>
                            <div className="ab-time-item"><h3>Check-in &amp; Departure <span>12:00 PM</span></h3><p>Step aboard your giant floating venue. Once settled, the captain steers the vessel onto Punnamada Lake.</p></div>
                            <div className="ab-time-item"><h3>Lunch Break <span>01:30 PM</span></h3><p>Gather in the dining hall for a freshly prepared traditional Kerala lunch buffet.</p></div>
                            <div className="ab-time-item"><h3>Scenic Sightseeing <span>02:30 PM</span></h3><p>Cruise through Vembanadu Lake, C Block, and Marthandam. Marvel at the unique below-sea-level paddy fields.</p></div>
                            <div className="ab-time-item"><h3>Evening Tea <span>04:00 PM</span></h3><p>Sip hot tea/coffee with local snacks on the upper deck during golden hour.</p></div>
                            <div className="ab-time-item"><h3>Night Halt <span>05:30 PM</span></h3><p>As per government regulations, the boat securely docks in a designated area for the night.</p></div>
                            <div className="ab-time-item"><h3>Dinner &amp; Rest <span>08:00 PM</span></h3><p>Enjoy your group dinner. <strong>AC in all 10 bedrooms is turned on at 9:00 PM.</strong></p></div>
                            <div className="ab-time-day">Day 2: Morning Cruise &amp; Departure</div>
                            <div className="ab-time-item"><h3>Morning Cruise <span>08:00 AM</span></h3><p>Travel through Meenapally Kayal and Pallathuruthy while served a hearty breakfast onboard.</p></div>
                            <div className="ab-time-item"><h3>Check-out <span>09:00 AM</span></h3><p>Arrive back at the original Alleppey docking point, concluding your trip.</p></div>
                        </div>
                    </div>
                    <div id="tab-day" className="ab-tab-content">
                        <div className="ab-menu-wrapper">
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍹</div><div className="ab-menu-content"><h3>Welcome Drink</h3><p className="ab-menu-text">Fresh Fruit Juice upon arrival.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍛</div><div className="ab-menu-content"><h3>Traditional Lunch</h3><p className="ab-menu-text">Rice, Sambar, Karimeen Fry (Pearl Spot), Thoran, Salad, Curd, Papad, and Pickles.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">☕</div><div className="ab-menu-content"><h3>Evening Tea &amp; Snacks</h3><p className="ab-menu-text">Tea or Coffee with Banana Fritters or Onion Pakoras before check-out.</p></div></div>
                        </div>
                        <div className="ab-timeline">
                            <div className="ab-time-day">Day Cruise Itinerary</div>
                            <div className="ab-time-item"><h3>Check-in &amp; Departure <span>11:30 AM</span></h3><p>Step aboard your giant floating venue. Once settled, the captain steers the vessel onto Punnamada Lake.</p></div>
                            <div className="ab-time-item"><h3>Lunch Break <span>01:30 PM</span></h3><p>Gather in the dining hall for a freshly prepared traditional Kerala lunch buffet.</p></div>
                            <div className="ab-time-item"><h3>Scenic Sightseeing <span>02:30 PM</span></h3><p>Cruise through Vembanadu Lake, C Block, and Marthandam. Marvel at the unique below-sea-level paddy fields.</p></div>
                            <div className="ab-time-item"><h3>Evening Tea <span>04:00 PM</span></h3><p>Sip hot tea/coffee with local snacks on the upper deck during golden hour.</p></div>
                            <div className="ab-time-item"><h3>Checkout <span>05:00 PM</span></h3><p>Checkout at same location of boarding point.</p></div>
                        </div>
                    </div>
                    <div id="tab-night" className="ab-tab-content">
                        <div className="ab-menu-wrapper">
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🍽️</div><div className="ab-menu-content"><h3>Dinner Service</h3><p className="ab-menu-text">Chappathi, Rice, Chicken Curry, Mixed Veg Curries, Dal, and Curd.</p></div></div>
                            <div className="ab-menu-course"><div className="ab-menu-icon" aria-hidden="true">🥞</div><div className="ab-menu-content"><h3>Morning Breakfast</h3><p className="ab-menu-text">Idly, Sambar, Chutney, and Tea or Coffee.</p></div></div>
                        </div>
                        <div className="ab-timeline">
                            <div className="ab-time-day">Night Stay Itinerary</div>
                            <div className="ab-time-item"><h3>Check-in &amp; Cruise <span>05:00 PM</span></h3><p>1 hour cruise to Kuppappuram.</p></div>
                            <div className="ab-time-item"><h3>Night Halt <span>06:00 PM</span></h3><p>Will halt the boat near the village area for the night.</p></div>
                            <div className="ab-time-item"><h3>Morning Breakfast <span>07:30 AM</span></h3><p>Freshly prepared traditional morning breakfast.</p></div>
                            <div className="ab-time-item"><h3>Morning Cruise <span>08:00 AM</span></h3><p>1 hour cruise through Punnamada Lake.</p></div>
                            <div className="ab-time-item"><h3>Checkout <span>09:00 AM</span></h3><p>Checkout at same location of boarding point.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ab-sh-section">
                <h2>Houseboat Boarding &amp; Logistics in Alleppey</h2>
                <div className="ab-tc-grid">
                    <div className="ab-tc-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        <div>
                            <strong>Boarding Point</strong>
                            <p>Due to the immense size of the 10 bedroom boat, boarding is exclusively at Nehru Trophy Finishing Point, Alleppey. Our team will share the exact Google Maps location to coordinate your entire party easily.</p>
                        </div>
                    </div>
                    <div className="ab-tc-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        <div>
                            <strong>Safe Parking</strong>
                            <p>Paid, secure parking is available near the docking area where multiple vehicles or large buses can be left overnight safely.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ab-sh-section">
                <h2>Terms &amp; Conditions</h2>
                <p className="ab-sh-desc">Essential guidelines to ensure a smooth, secure, and enjoyable backwater journey for your entire group.</p>
                <div className="ab-tc-grid" id="ab-tc-dynamic-grid">
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p><strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p><strong>Check in:</strong> 12 noon. <strong>Check out:</strong> 09:00 AM.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>Guests are not allowed to sleep outside the bedrooms for safety reasons.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>Beverages and any cook-to-order items will be charged extra on actuals.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>Meal plan applied on APAI / full board basis (inclusive of breakfast, lunch &amp; dinner).</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>You can enjoy complete privacy in the boat; it is exclusively booked for your group.</p></div>
                    <div className="ab-tc-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5" /></svg><p>The boat will be anchored in a designated backwater area during the night and will not cruise after 17:30 hrs.</p></div>
                </div>
            </div>

            <div className="ab-sh-section">
                <h2>Good to Know</h2>
                <ul className="ab-sh-policies">
                    <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg><span><strong>Booking Confirmation:</strong> A standard advance payment is required to reserve your houseboat and block the dates. Bookings are not confirmed without this initial deposit.</span></li>
                    <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg><span><strong>Dynamic Pricing:</strong> Fares are subject to change during peak seasons, public holidays, and weekends. Please request a quote for your exact travel dates.</span></li>
                    <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg><span><strong>Fleet Availability:</strong> The photos shown are representative of our premium fleet. The exact boat assigned will depend on real-time availability on your travel dates.</span></li>
                </ul>
            </div>

            <div className="ab-sh-section">
                <h2>Frequently Asked Questions</h2>
                <div className="ab-faq-container">
                    <details className="ab-faq-item" name="faq">
                        <summary>Is the 10 bedroom houseboat Alleppey suitable for corporate offsites and weddings? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">Yes! As one of the largest vessels in the Kerala backwaters, it boasts a massive upper deck perfect for ceremonies, DJ nights, and corporate meetings, comfortably accommodating all 40 passengers (up to 120 for day cruises).</div>
                    </details>
                    <details className="ab-faq-item" name="faq">
                        <summary>How is food served for a large group on a boat house in Alleppey? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">We deploy a multi-chef culinary team to manage a full buffet-style catering setup. This ensures that every guest enjoys hot, authentic Kerala cuisine simultaneously in our spacious dining hall without long wait times.</div>
                    </details>
                    <details className="ab-faq-item" name="faq">
                        <summary>Are all 10 bedrooms located on a single level? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">To maximize space and provide panoramic views, our 10 bedroom boats typically feature a double-decker architecture. The luxurious AC suites are spread across both the lower and upper decks, offering ultimate privacy.</div>
                    </details>
                </div>
            </div>

            <div style={{"textAlign":"center","marginTop":"10px"}}>
                <a href="/house-boat-alleppey/" className="ab-btn-outline" title="Explore more houseboats options">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                    Explore More Houseboats
                </a>
            </div>
        </main>

        <aside className="ab-sh-sidebar" id="booking-widget">
            <div className="ab-sh-price-card">
                
                
                <div className="ab-sh-price-card-body">
                    <div className="ab-sh-price-header">
                        <div className="ab-header-top-badge">
                            <span className="ab-private-badge">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                100% Private Charter
                            </span>
                            <span className="ab-dtpc-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Verified Boat
                            </span>
                        </div>
                        <div className="ab-sh-price-amount"><span className="ab-price-from">From</span> ₹60,000<span className="ab-price-period">/ trip</span></div>
                        <span className="ab-sh-price-subtitle">Whole boat • 10 bedroom houseboat • Up to 40 guests</span>
                        
                        <div className="ab-trust-strip">
                            <div className="ab-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span>All 3 Kerala Meals + Tea Included</span>
                            </div>
                            <div className="ab-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span>Private Dedicated Crew (Captain + Chef)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ab-booking-unified">
                        <div className="ab-booking-field">
                            <label className="ab-field-label">Cruise Package</label>
                            <div className="ab-custom-select-wrapper">
                                <div className="ab-custom-select-trigger" id="custom-select-trigger">
                                    <div className="ab-cst-content">
                                        <span className="ab-cst-title">Overnight Cruise</span>
                                        <span className="ab-cst-subtitle">12:00 PM - 9:00 AM (Next Day)</span>
                                    </div>
                                    <svg className="ab-cst-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><polyline points="6 9 12 15 18 9" /></svg>
                                </div>
                                
                                <div className="ab-custom-select-options">
                                    <div className="ab-cso-item selected" data-value="overnight">
                                        <div className="ab-cso-title">
                                            <span className="ab-cso-title-text">Overnight Cruise</span>
                                            <span className="ab-cso-badge">Best Seller</span>
                                        </div>
                                        <span className="ab-cso-subtitle">12:00 PM - 9:00 AM (All Meals Included)</span>
                                    </div>
                                    <div className="ab-cso-item" data-value="day">
                                        <div className="ab-cso-title"><span className="ab-cso-title-text">Day Cruise</span></div>
                                        <span className="ab-cso-subtitle">11:30 AM - 5:00 PM (Lunch + Snacks)</span>
                                    </div>
                                    <div className="ab-cso-item" data-value="night">
                                        <div className="ab-cso-title"><span className="ab-cso-title-text">Night Stay</span></div>
                                        <span className="ab-cso-subtitle">5:00 PM - 9:00 AM (Dinner + Breakfast)</span>
                                    </div>
                                </div>
                                
                                <div style={{"display":"none","visibility":"hidden","height":"0","overflow":"hidden"}}>
                                    <select id="ab-cruise-type" aria-hidden="true" tabIndex={-1}>
                                        <option value="overnight" >Overnight Cruise</option>
                                        <option value="day">Day Cruise</option>
                                        <option value="night">Night Stay</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="ab-booking-field ab-date-field">
                            <label className="ab-field-label" htmlFor="ab-date">Check-in Date</label>
                            <DatePicker id="ab-date" className="ab-date-input" placeholder="Select check-in date" required />
                        </div>

                        <div className="ab-booking-field">
                            <label className="ab-field-label">Guests</label>
                            <div className="ab-guest-inner-row">
                                <div className="ab-guest-info"><span>Adults</span><small>Age 5 and above</small></div>
                                <div className="ab-guest-controls">
                                    <button type="button" id="btn-adult-minus" className="ab-ctrl-btn" aria-label="Decrease adults">-</button>
                                    <input type="text" id="val-adults" className="ab-guest-val" defaultValue="20" inputMode="numeric" pattern="[0-9]*" aria-label="Number of adults" />
                                    <button type="button" id="btn-adult-plus" className="ab-ctrl-btn" aria-label="Increase adults">+</button>
                                </div>
                            </div>
                            <div className="ab-guest-inner-row">
                                <div className="ab-guest-info"><span>Kids</span><small>Below 5 years (Free)</small></div>
                                <div className="ab-guest-controls">
                                    <button type="button" id="btn-kid-minus" className="ab-ctrl-btn" aria-label="Decrease kids">-</button>
                                    <input type="text" id="val-kids" className="ab-guest-val" defaultValue="0" inputMode="numeric" pattern="[0-9]*" aria-label="Number of kids" />
                                    <button type="button" id="btn-kid-plus" className="ab-ctrl-btn" aria-label="Increase kids">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ab-price-breakdown" id="ab-price-breakdown">
                        <div className="ab-pb-row">
                            <span id="ab-pb-base-label" style={{"display":"flex","alignItems":"center"}}>Base Price <span style={{"fontSize":"11.5px","fontWeight":"500","color":"#9ca3af","marginLeft":"4px"}}>(Up to 20 Adults)</span></span>
                            <span id="ab-pb-base">₹60,000</span>
                        </div>
                        <div className="ab-pb-row" id="ab-pb-extra-row" style={{"display":"none"}}>
                            <span>Extra Adults Charge</span>
                            <span id="ab-pb-extra">₹0</span>
                        </div>
                        <hr className="ab-pb-divider" />
                        <div className="ab-pb-row ab-pb-total">
                            <span>Total Estimate</span>
                            <span id="ab-pb-total">₹60,000</span>
                        </div>
                    </div>

                    <div className="ab-capacity-note">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                        Maximum capacity is 40 guests total.
                    </div>
                    <div className="ab-sidebar-review">
                        <div className="ab-sr-stars">★★★★★</div>
                        <div className="ab-sr-quote">"Absolutely magical. The crew treated us like royalty and the food was the best we had in Kerala!"</div>
                        <div className="ab-sr-author">Verified Guest</div>
                    </div>
                </div>

                <div className="ab-sh-price-card-docked">
                    <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20for%2010%20Bedroom%20Houseboat%20Alleppey." className="ab-btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Check Availability on WhatsApp">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        Check Availability on WhatsApp
                    </a>
                    <div className="ab-response-guarantee">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        Usually replies in 2 mins
                    </div>
                    <a href="tel:+917012761588" className="ab-docked-call-link" aria-label="Call Us Directly">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Prefer to call? +91 70127 61588
                    </a>
                </div>

            </div>
        </aside>
    </div>
</div>

<div className="ab-mobile-sticky-bar ab-hide-bar">
    <div className="ab-msb-info" id="ab-sticky-scroll-btn" role="button" tabIndex={0} aria-label="Tap to customize booking details">
        <div className="ab-msb-price">
            <span>Total Estimate</span>
            <strong>₹60,000</strong>
        </div>
        <button type="button" className="ab-msb-modify-btn" aria-label="Customize details">
            Modify details <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
    </div>
    <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20for%2010%20Bedroom%20Houseboat%20Alleppey." className="ab-btn-wa ab-msb-cta" target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        WhatsApp
    </a>
</div>
</article>





      </div>
    </>
  );
}
