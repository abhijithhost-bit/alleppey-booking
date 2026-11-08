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
            "name": "6 Bedroom Houseboat",
            "item": "/6-bedroom-houseboat-alleppey/"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "6 Bedroom Houseboat Alleppey",
        "image": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg",
        "description": "Book a private 6 bedroom houseboat Alleppey perfect for large families and massive groups. Includes 6 AC bedrooms, 4-person crew, backwater cruise, and all Kerala meals.",
        "brand": {
          "@type": "Brand",
          "name": "Alleppey Booking"
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": "/6-bedroom-houseboat-alleppey/",
          "priceCurrency": "INR",
          "lowPrice": "32000",
          "highPrice": "70400",
          "offerCount": "3",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "124",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the 6 bedroom houseboat in Alleppey suitable for large corporate events or reunions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our 6 bedroom houseboat is uniquely designed for large groups. With extensive deck space and six individual air-conditioned suites, it provides both the social areas needed for corporate team-building or family reunions and the privacy that each guest deserves."
            }
          },
          {
            "@type": "Question",
            "name": "How many guests can comfortably stay on the 6 bedroom houseboat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 6 bedroom houseboat is our most spacious option, comfortably hosting up to 24 guests (and up to 60 for day cruises). We arrange premium bedding and extra mattresses to ensure that every member of your large group enjoys a restful stay on the backwaters."
            }
          },
          {
            "@type": "Question",
            "name": "Will a large group of 24 feel cramped on this houseboat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not at all. This specific houseboat is built with an extra-wide beam and an extended deck layout. It is specifically engineered to ensure that even with a full capacity of 24 guests, everyone has ample space to dine, socialize, and enjoy the scenic views comfortably."
            }
          }
        ]
      },
      {
        "@type": "ImageGallery",
        "name": "6 Bedroom Houseboat Inside Gallery",
        "description": "See the premium comfort you can expect from your 6 bedroom private houseboat in Alleppey.",
        "about": {
          "@type": "Thing",
          "name": "6 Bedroom Houseboat Alleppey"
        },
        "image": [
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg",
            "name": "Private 6 Bedroom Houseboat Alleppey Exterior",
            "description": "Exterior view of a luxury 6 bedroom houseboat Alleppey cruising on Vembanad Lake",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM-1.jpeg",
            "name": "Lake View AC Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Spacious air-conditioned guest room with lake views inside a 6 bedroom houseboat Alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM.jpeg",
            "name": "Traditional Wooden Corridor Interior",
            "description": "Elegant wooden hallway illuminated with warm hanging lights on our Alleppey backwater cruise",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-2.jpeg",
            "name": "Comfortable Guest Room Accommodation",
            "description": "Comfortable double bed with modern amenities for large group houseboat stays in Kerala",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-1.jpeg",
            "name": "Large Indoor Dining Lounge",
            "description": "Expansive indoor dining and lounge area perfect for a 6 bedroom houseboat Alleppey family trip",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM.jpeg",
            "name": "Open Air Upper Deck Balcony",
            "description": "Open-air upper deck balcony with artificial grass flooring for sightseeing along the backwaters",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-2.jpeg",
            "name": "Premium Private Bedroom Setup",
            "description": "Premium private bedroom featuring traditional wood finishes and scenic window views",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-1.jpeg",
            "name": "Well-Lit Sleeping Quarters",
            "description": "Well-lit sleeping quarters ensuring a restful night during your Alleppey group vacation",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM.jpeg",
            "name": "Luxury Suite with Wardrobe",
            "description": "Luxury suite equipped with a wooden wardrobe and comfortable bedding for guests",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-2.jpeg",
            "name": "Modern Attached Bathroom Facilities",
            "description": "Clean and modern attached western bathroom facilities included in our 6 bedroom houseboat Alleppey",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-1.jpeg",
            "name": "Luxury AC Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Luxurious AC bedroom inside a premium 6 bedroom houseboat Alleppey featuring a comfortable double bed and elegant modern decor.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM.jpeg",
            "name": "Spacious Suite - 6 Bedroom Houseboat Alleppey",
            "description": "Spacious suite with split AC, beautiful towel art, and striped blinds in our 6 bedroom houseboat Alleppey for premium large group comfort.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.38-PM.jpeg",
            "name": "Modern LED Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Modern bedroom with decorative LED lighting, beautiful wooden interiors, and large windows on a 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.38-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-2.jpeg",
            "name": "Premium Yellow Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Beautifully designed bedroom with warm yellow accents, round mirrors, and plush bedding on a private 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-1.jpeg",
            "name": "Attached Bathroom - 6 Bedroom Houseboat Alleppey",
            "description": "Clean and hygienic attached western bathroom with premium shower fittings and yellow tiles inside a luxury 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM.jpeg",
            "name": "Upper Deck Balcony - 6 Bedroom Houseboat Alleppey",
            "description": "Exclusive open-air upper deck balcony with artificial grass and backwater views on a 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-2.jpeg",
            "name": "Luxury Living Area - 6 Bedroom Houseboat Alleppey",
            "description": "Expansive air-conditioned living room with comfortable brown sofas and a flat screen TV in the 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-1.jpeg",
            "name": "Large Dining Hall - 6 Bedroom Houseboat Alleppey",
            "description": "Large lower deck dining hall with traditional zigzag wooden flooring and seating for 24 guests on a 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM.jpeg",
            "name": "Elegant Dining Setup - 6 Bedroom Houseboat Alleppey",
            "description": "Elegant dining table setup with a fresh fruit basket inside the spacious lounge of our premium 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-2.jpeg",
            "name": "Long Wooden Corridor - 6 Bedroom Houseboat Alleppey",
            "description": "A stunning view of the long wooden corridor and dining area typical of a luxury 6 bedroom houseboat Alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-1.jpeg",
            "name": "Onboard Kitchen - 6 Bedroom Houseboat Alleppey",
            "description": "Fully equipped onboard kitchen managed by a private chef, preparing fresh meals on a 6 bedroom houseboat alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM.jpeg",
            "name": "Guest AC Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Comfortable air-conditioned guest bedroom featuring traditional wooden decor and warm lighting on a 6 bedroom houseboat alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-2.jpeg",
            "name": "Spacious Lounge & Dining - 6 Bedroom Houseboat Alleppey",
            "description": "Expansive lounge and dining hall with beautiful wooden flooring and ceiling lights inside a 6 bedroom houseboat alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-2.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-1.jpeg",
            "name": "Premium Modern Bedroom - 6 Bedroom Houseboat Alleppey",
            "description": "Premium modern bedroom with stylish LED headboard, large scenic windows, and striped flooring on a 6 bedroom houseboat alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-1.jpeg"
          },
          {
            "@type": "ImageObject",
            "contentUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.27-PM.jpeg",
            "name": "Bedroom with Attached Bath - 6 Bedroom Houseboat Alleppey",
            "description": "Beautifully furnished AC bedroom with an attached modern shower washroom and premium decor on a private 6 bedroom houseboat alleppey.",
            "thumbnailUrl": "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.27-PM.jpeg"
          }
        ]
      }
    ]
  }
];

export default function SixBedroomView() {
  const [currentImg, setCurrentImg] = useState("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg");
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
        
<link rel="preload" as="image" href="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg" fetchPriority="high" />



<article className="ab-single-wrap" id="ab-single-houseboat">


<div className="ab-container">
    <header className="ab-sh-header">
        <nav aria-label="Breadcrumb" className="ab-sh-breadcrumbs">
            <a href="/" title="Back to Home">Home</a> &nbsp;›&nbsp; <a href="/house-boat-alleppey/" title="View all Houseboats">Houseboats</a> &nbsp;›&nbsp; 6 Bedroom Houseboat
        </nav>
        <h1 className="ab-sh-title">Private 6 Bedroom Houseboat Alleppey</h1>
        <div className="ab-sh-meta">
            <span id="ab-header-capacity"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> Up to 24 Guests</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 1 3-3h7z" /></svg> 6 AC Bedrooms</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.8/5 Rating</span>
        </div>
    </header>

    <div className="ab-sh-layout">
        <section className="ab-sh-gallery-container">
            <div className="ab-sh-main-image-wrap">
                <img id="ab-main-img" src={currentImg} alt="Exterior view of a luxury 6 bedroom houseboat Alleppey cruising on Vembanad Lake" title="Private 6 Bedroom Houseboat Alleppey Exterior" fetchPriority="high" width="1200" height="800" />
            </div>
            <div className="ab-sh-thumbnails">
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.33-PM-1.jpeg" alt="Exterior view of a luxury 6 bedroom houseboat Alleppey cruising on Vembanad Lake" title="Private 6 Bedroom Houseboat Alleppey Exterior" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM-1.jpeg" alt="Spacious air-conditioned guest room with lake views inside a 6 bedroom houseboat Alleppey" title="Lake View AC Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.42-PM.jpeg" alt="Elegant wooden hallway illuminated with warm hanging lights on our Alleppey backwater cruise" title="Traditional Wooden Corridor Interior" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-2.jpeg" alt="Comfortable double bed with modern amenities for large group houseboat stays in Kerala" title="Comfortable Guest Room Accommodation" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM-1.jpeg" alt="Expansive indoor dining and lounge area perfect for a 6 bedroom houseboat Alleppey family trip" title="Large Indoor Dining Lounge" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.41-PM.jpeg" alt="Open-air upper deck balcony with artificial grass flooring for sightseeing along the backwaters" title="Open Air Upper Deck Balcony" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-2.jpeg" alt="Premium private bedroom featuring traditional wood finishes and scenic window views" title="Premium Private Bedroom Setup" width="100" height="70" />
                </div>
                 <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM-1.jpeg" alt="Well-lit sleeping quarters ensuring a restful night during your Alleppey group vacation" title="Well-Lit Sleeping Quarters" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.40-PM.jpeg" alt="Luxury suite equipped with a wooden wardrobe and comfortable bedding for guests" title="Luxury Suite with Wardrobe" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-2.jpeg" alt="Clean and modern attached western bathroom facilities included in our 6 bedroom houseboat Alleppey" title="Modern Attached Bathroom Facilities" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM-1.jpeg" alt="Luxurious AC bedroom inside a premium 6 bedroom houseboat Alleppey featuring a comfortable double bed and elegant modern decor." title="Luxury AC Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.39-PM.jpeg" alt="Spacious suite with split AC, beautiful towel art, and striped blinds in our 6 bedroom houseboat Alleppey for premium large group comfort." title="Spacious Suite - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.38-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.38-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.38-PM.jpeg" alt="Modern bedroom with decorative LED lighting, beautiful wooden interiors, and large windows on a 6 bedroom houseboat Alleppey." title="Modern LED Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-2.jpeg" alt="Beautifully designed bedroom with warm yellow accents, round mirrors, and plush bedding on a private 6 bedroom houseboat Alleppey." title="Premium Yellow Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM-1.jpeg" alt="Clean and hygienic attached western bathroom with premium shower fittings and yellow tiles inside a luxury 6 bedroom houseboat Alleppey." title="Attached Bathroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.37-PM.jpeg" alt="Exclusive open-air upper deck balcony with artificial grass and backwater views on a 6 bedroom houseboat Alleppey." title="Upper Deck Balcony - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-2.jpeg" alt="Expansive air-conditioned living room with comfortable brown sofas and a flat screen TV in the 6 bedroom houseboat Alleppey." title="Luxury Living Area - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM-1.jpeg" alt="Large lower deck dining hall with traditional zigzag wooden flooring and seating for 24 guests on a 6 bedroom houseboat Alleppey." title="Large Dining Hall - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.36-PM.jpeg" alt="Elegant dining table setup with a fresh fruit basket inside the spacious lounge of our premium 6 bedroom houseboat Alleppey." title="Elegant Dining Setup - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-2.jpeg" alt="A stunning view of the long wooden corridor and dining area typical of a luxury 6 bedroom houseboat Alleppey." title="Long Wooden Corridor - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM-1.jpeg" alt="Fully equipped onboard kitchen managed by a private chef, preparing fresh meals on a 6 bedroom houseboat alleppey." title="Onboard Kitchen - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.35-PM.jpeg" alt="Comfortable air-conditioned guest bedroom featuring traditional wooden decor and warm lighting on a 6 bedroom houseboat alleppey." title="Guest AC Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-2.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-2.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-2.jpeg" alt="Expansive lounge and dining hall with beautiful wooden flooring and ceiling lights inside a 6 bedroom houseboat alleppey." title="Spacious Lounge & Dining - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-1.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-1.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.34-PM-1.jpeg" alt="Premium modern bedroom with stylish LED headboard, large scenic windows, and striped flooring on a 6 bedroom houseboat alleppey." title="Premium Modern Bedroom - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
                <div className="ab-thumb-wrap" onClick={() => setCurrentImg("/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.27-PM.jpeg")}>
                    <img className={`ab-thumb ${currentImg === "/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.27-PM.jpeg" ? 'active' : ''}`} src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-10.48.27-PM.jpeg" alt="Beautifully furnished AC bedroom with an attached modern shower washroom and premium decor on a private 6 bedroom houseboat alleppey." title="Bedroom with Attached Bath - 6 Bedroom Houseboat Alleppey" width="100" height="70" />
                </div>
            </div>
        </section>

        <main className="ab-sh-content">
            <div className="ab-sh-section">
                <h2>About Our Private 6 Bedroom Houseboat in Alleppey</h2>
                <p className="ab-sh-desc">Designed specifically for massive family vacations, large corporate outings, and grand group trips in Kerala, our <strong>6 bedroom houseboat Alleppey</strong> offers the ideal blend of shared living spaces and personal privacy. With six separate air-conditioned bedrooms—each featuring its own attached washroom—it’s the perfect setup for six couples, extended families, or a large group of friends of up to 24 people (and up to 60 guests for day cruises).</p>
                <p className="ab-sh-desc">Instead of booking multiple hotel rooms, stay together on the water. Bond over board games in the spacious common deck, dine together with panoramic views of the beautiful Vembanad Lake, and let our <strong>4-person dedicated crew</strong> handle all the navigation and culinary duties for a truly stress-free holiday.</p>
            </div>

            <div className="ab-sh-section">
                <h2>Houseboat Amenities &amp; Features</h2>
                <ul className="ab-sh-amenities">
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg><div>Air Conditioning<br /><span style={{"display":"inline-block","marginTop":"4px","padding":"3px 8px","background":"#fff4ed","color":"var(--brand-orange)","borderRadius":"4px","fontWeight":"700","fontSize":"10px","border":"1px solid #fed7aa","letterSpacing":"0.5px"}}>9:00 PM TO 6:00 AM</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg><div>Private Crew<br /><span style={{"color":"var(--text-muted)"}}>4-Person Dedicated Crew</span></div></li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg><div>6 Bedrooms + Bathrooms<br /><span style={{"color":"var(--text-muted)"}}>Clean &amp; well-maintained</span></div></li>
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
                            <div className="ab-time-item"><h3>Check-in &amp; Departure <span>12:00 PM</span></h3><p>Step aboard your private vessel from Alleppey. Once the whole group is settled, the captain steers the vessel onto Punnamada Lake.</p></div>
                            <div className="ab-time-item"><h3>Lunch Break <span>01:30 PM</span></h3><p>Gather in the dining hall for a freshly prepared traditional Kerala lunch buffet.</p></div>
                            <div className="ab-time-item"><h3>Scenic Sightseeing <span>02:30 PM</span></h3><p>Cruise through Vembanadu Lake, C Block, and Marthandam. Marvel at the unique below-sea-level paddy fields.</p></div>
                            <div className="ab-time-item"><h3>Evening Tea <span>04:00 PM</span></h3><p>Sip hot tea/coffee with local snacks on the upper deck during golden hour.</p></div>
                            <div className="ab-time-item"><h3>Night Halt <span>05:30 PM</span></h3><p>As per government regulations, the boat securely docks in a designated area for the night.</p></div>
                            <div className="ab-time-item"><h3>Dinner &amp; Rest <span>08:00 PM</span></h3><p>Enjoy your group dinner. <strong>AC in all 6 bedrooms is turned on at 9:00 PM.</strong></p></div>
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
                            <div className="ab-time-item"><h3>Check-in &amp; Departure <span>11:30 AM</span></h3><p>Step aboard your private vessel. Once settled, the captain steers the vessel onto Punnamada Lake.</p></div>
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
                            <p>Nehru Trophy Finishing Point, Alleppey. Our team will share the exact Google Maps location upon booking confirmation to ensure your entire group arrives easily.</p>
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
                        <summary>Is the 6 bedroom houseboat in Alleppey suitable for large corporate events or reunions? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">Yes! Our 6 bedroom houseboat is uniquely designed for large groups. With extensive deck space and six individual air-conditioned suites, it provides both the social areas needed for corporate team-building or family reunions and the privacy that each guest deserves.</div>
                    </details>
                    <details className="ab-faq-item" name="faq">
                        <summary>How many guests can comfortably stay on the 6 bedroom houseboat? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">The 6 bedroom houseboat is our most spacious option, comfortably hosting up to 24 guests (and up to 60 for day cruises). We arrange premium bedding and extra mattresses to ensure that every member of your large group enjoys a restful stay on the backwaters.</div>
                    </details>
                    <details className="ab-faq-item" name="faq">
                        <summary>Will a large group of 24 feel cramped on this houseboat? <span className="ab-faq-icon" aria-hidden="true" role="presentation">+</span></summary>
                        <div className="ab-faq-content">Not at all. This specific houseboat is built with an extra-wide beam and an extended deck layout. It is specifically engineered to ensure that even with a full capacity of 24 guests, everyone has ample space to dine, socialize, and enjoy the scenic views comfortably.</div>
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
                        <div className="ab-sh-price-amount"><span className="ab-price-from">From</span> ₹36,000</div>
                        <span className="ab-sh-price-subtitle">Whole boat • 6 bedroom houseboat • Up to 24 guests</span>
                        <div className="ab-sh-price-note">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                            <span>Estimated price shown. Final rates and boat allocation vary by group size, dates, and real-time availability. Message us for your exact quote!</span>
                        </div>
                    </div>
                    
                    <div className="ab-booking-unified">
                        <div className="ab-booking-field">
                            <label className="ab-field-label">Cruise Package</label>
                            <div className="ab-custom-select-wrapper">
                                <div className="ab-custom-select-trigger" id="custom-select-trigger">
                                    <div className="ab-cst-content">
                                        <span className="ab-cst-title">Overnight Cruise</span>
                                        <span className="ab-cst-subtitle">12:00 PM - 9:00 AM</span>
                                    </div>
                                    <svg className="ab-cst-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><polyline points="6 9 12 15 18 9" /></svg>
                                </div>
                                
                                <div className="ab-custom-select-options">
                                    <div className="ab-cso-item " data-value="overnight">
                                        <div className="ab-cso-title">
                                            <span className="ab-cso-title-text">Overnight Cruise</span>
                                            <span className="ab-cso-badge">Best Seller</span>
                                        </div>
                                        <span className="ab-cso-subtitle">12:00 PM - 9:00 AM</span>
                                    </div>
                                    <div className="ab-cso-item" data-value="day">
                                        <div className="ab-cso-title"><span className="ab-cso-title-text">Day Cruise</span></div>
                                        <span className="ab-cso-subtitle">11:30 AM - 5:00 PM</span>
                                    </div>
                                    <div className="ab-cso-item" data-value="night">
                                        <div className="ab-cso-title"><span className="ab-cso-title-text">Night Stay</span></div>
                                        <span className="ab-cso-subtitle">5:00 PM - 9:00 AM</span>
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
                            <label className="ab-field-label" htmlFor="ab-date">Check-in</label>
                            <DatePicker id="ab-date" className="ab-date-input" placeholder="Select check-in date" required />
                        </div>

                        <div className="ab-booking-field">
                            <label className="ab-field-label">Guests</label>
                            <div className="ab-guest-inner-row">
                                <div className="ab-guest-info"><span>Adults</span></div>
                                <div className="ab-guest-controls">
                                    <button type="button" id="btn-adult-minus" className="ab-ctrl-btn" aria-label="Decrease adults">-</button>
                                    <input type="text" id="val-adults" className="ab-guest-val" defaultValue="12" inputMode="numeric" pattern="[0-9]*" aria-label="Number of adults" />
                                    <button type="button" id="btn-adult-plus" className="ab-ctrl-btn" aria-label="Increase adults">+</button>
                                </div>
                            </div>
                            <div className="ab-guest-inner-row">
                                <div className="ab-guest-info"><span>Kids</span><small>Below 5</small></div>
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
                            <span id="ab-pb-base-label" style={{"display":"flex","alignItems":"center"}}>Base Price <span style={{"fontSize":"11.5px","fontWeight":"500","color":"#9ca3af","marginLeft":"4px"}}>(Up to 12 guests)</span></span>
                            <span id="ab-pb-base">₹36,000</span>
                        </div>
                        <div className="ab-pb-row" id="ab-pb-extra-row" style={{"display":"none"}}>
                            <span>Extra Guests Charge</span>
                            <span id="ab-pb-extra">₹0</span>
                        </div>
                        <hr className="ab-pb-divider" />
                        <div className="ab-pb-row ab-pb-total">
                            <span>Total Estimate</span>
                            <span id="ab-pb-total">₹36,000</span>
                        </div>
                    </div>

                    <div className="ab-capacity-note">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                        Maximum capacity is 24 guests total.
                    </div>

                    
                    <div className="ab-btn-row ab-hide-desktop">
                        <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20for%206%20Bedroom%20Houseboat%20Alleppey." className="ab-btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Check Availability">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            Check Availability
                        </a>
                        <a href="tel:+917012761588" className="ab-btn-call" aria-label="Call Us Directly">Call Us Directly</a>
                    </div>

                    
                    <div className="ab-hide-mobile" style={{"marginTop":"16px","textAlign":"center"}}>
                        <a href="tel:+917012761588" className="ab-btn-call" aria-label="Call Us Directly" style={{"width":"100%"}}>Call Us Directly</a>
                    </div>

                    <div className="ab-sidebar-review">
                        <div className="ab-sr-stars">★★★★★</div>
                        <div className="ab-sr-quote">"Absolutely magical. The crew treated us like royalty and the food was the best we had in Kerala!"</div>
                        <div className="ab-sr-author">Verified Guest</div>
                    </div>
                </div>

                
                <div className="ab-sh-price-card-footer ab-hide-mobile">
                    <div style={{"display":"flex","flexDirection":"column"}}>
                        <span style={{"fontSize":"10px","fontWeight":"600","color":"var(--text-muted)","textTransform":"uppercase","letterSpacing":"0.5px","lineHeight":"1"}}>Total Estimate</span>
                        <span id="ab-pb-total-footer" style={{"fontSize":"18px","fontWeight":"800","color":"var(--text-dark)","marginTop":"2px","lineHeight":"1.1"}}>₹36,000</span>
                    </div>
                    <a href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20for%206%20Bedroom%20Houseboat%20Alleppey." className="ab-btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Check Availability" style={{"padding":"10px 14px","margin":"0","width":"auto","fontSize":"13px"}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        Check Availability
                    </a>
                </div>

            </div>
        </aside>
    </div>
</div>

<div className="ab-mobile-sticky-bar ab-hide-bar">
    <div className="ab-msb-price">
        <span>Starting from</span>
        <strong>₹36,000</strong>
    </div>
    <button type="button" id="ab-sticky-scroll-btn" className="ab-btn-wa" style={{"padding":"12px 24px","fontSize":"14px","boxShadow":"0 4px 10px rgba(37, 211, 102, 0.3)","border":"none","cursor":"pointer"}} aria-label="Scroll to Check Availability">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        Check Availability
    </button>
</div>
</article>





      </div>
    </>
  );
}
