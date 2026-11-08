"use client";

import React, { useState } from "react";
import Link from "next/link";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the quickest way to get a response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Messaging us directly on WhatsApp is the fastest way to reach our team. We typically respond within minutes to answer questions or confirm your bookings."
        }
      },
      {
        "@type": "Question",
        "name": "Who do I contact on the day of my cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before your trip, we will provide you with the direct contact details of your boat captain (like our pro rider, Akshay). Your dedicated 3-person crew—captain, cook, and engine driver—will be waiting to welcome you upon arrival."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the boarding point located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because we manage multiple boats across the Alleppey backwaters, your specific boarding point will depend on your package. We will send you the exact Google Maps location via WhatsApp once your booking is confirmed."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a custom menu or mention dietary restrictions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Since your meals are prepared fresh by your onboard cook, we can easily accommodate vegetarian, vegan, or specific dietary requests. Just let us know when you message us to book."
        }
      },
      {
        "@type": "Question",
        "name": "How do I modify or cancel an existing booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To change your travel dates or upgrade your package, simply reply to your original booking confirmation on WhatsApp. We are flexible and will do our absolute best to adjust your itinerary."
        }
      }
    ]
  }
];

export default function ContactView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fName = (document.getElementById("wa-fname") as HTMLInputElement)?.value.trim() || "";
    const lName = (document.getElementById("wa-lname") as HTMLInputElement)?.value.trim() || "";
    const email = (document.getElementById("wa-email") as HTMLInputElement)?.value.trim() || "";
    const phone = (document.getElementById("wa-phone") as HTMLInputElement)?.value.trim() || "";
    const subject = (document.getElementById("wa-subject") as HTMLInputElement)?.value.trim() || "";
    const message = (document.getElementById("wa-message") as HTMLTextAreaElement)?.value.trim() || "";

    let waText = "Hello Alleppey Booking Team! 👋\n\n";
    if (fName || lName) waText += "*Name:* " + fName + " " + lName + "\n";
    if (email) waText += "*Email:* " + email + "\n";
    if (phone) waText += "*Phone:* " + phone + "\n";
    if (subject) waText += "*Subject:* " + subject + "\n";
    if (message) waText += "\n*Message:*\n" + message;

    const url = "https://wa.me/917012761588?text=" + encodeURIComponent(waText);
    window.open(url, "_blank");
  };

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

      <div className="contact-pure w-full">
        

<div className="ct-hero-wrapper">
    <div className="ct-hero-container">
        <span className="ct-badge">🎧 24/7 Local Support</span>
        <h1 className="ct-hero-title">We'd love to hear <span className="ct-highlight">from you.</span></h1>
        <p className="ct-hero-subtitle">Whether you have a question about booking a houseboat, customizing a backwater itinerary, or need immediate assistance, our Alleppey team is ready to help.</p>
    </div>
</div>

<div className="ct-main-wrapper">
    <div className="ct-grid-container">

        <div className="ct-info-col">
            <div className="ct-info-header">
                <h2>Get in Touch</h2>
                <p>Reach out directly using the details below, or fill out the form to instantly generate a WhatsApp message to our team.</p>
            </div>

            <div className="ct-info-card">
                <div className="ct-icon-box">📞</div>
                <div className="ct-info-text">
                    <h3>Call Us</h3>
                    <a href="tel:+917012761588" style={{"display":"block","paddingBottom":"4px"}}>+91 7012761588</a>
                    <a href="tel:+919947753154" style={{"display":"block","paddingBottom":"4px"}}>+91 9947753154</a>
                    <a href="tel:+916238794500" style={{"display":"block"}}>+91 6238794500</a>
                </div>
            </div>

            <div className="ct-info-card">
                <div className="ct-icon-box whatsapp">💬</div>
                <div className="ct-info-text">
                    <h3>WhatsApp Us</h3>
                    <a href="https://wa.me/917012761588" target="_blank">+91 7012761588</a>
                </div>
            </div>

            <div className="ct-info-card">
                <div className="ct-icon-box orange">✉️</div>
                <div className="ct-info-text">
                    <h3>Email Us</h3>
                    <a href="mailto:support@alleppeybooking.com">support@alleppeybooking.com</a>
                </div>
            </div>

            <div className="ct-info-card">
                <div className="ct-icon-box">📍</div>
                <div className="ct-info-text">
                    <h3>Office Location</h3>
                    <a href="https://maps.app.goo.gl/wMwqb2A2gbmX3huw7" target="_blank" style={{"display":"block","lineHeight":"1.5","fontSize":"14px","fontWeight":"600"}}>Punnamada Finishing Point Road, Punnamada, Finishing Point, Alappuzha, Kerala 688013</a>
                </div>
            </div>
            
            <p style={{"fontSize":"12px","color":"#888","marginTop":"10px"}}>
                <em>* Note: Houseboat check-ins start strictly at 12:00 PM. Please coordinate with our team regarding your exact boarding point prior to arrival.</em>
            </p>
        </div>

        <div className="ct-form-box">
            
            <div className="ct-247-banner">
                <span className="ct-247-dot"></span>
                We are 24/7 available for helping you.
            </div>

            <form onSubmit={handleWhatsAppSubmit}>
                
                <div className="ct-form-row">
                    <div className="ct-form-group">
                        <label className="ct-label">FIRST NAME</label>
                        <input type="text" id="wa-fname" className="ct-input" placeholder="John" />
                    </div>
                    <div className="ct-form-group">
                        <label className="ct-label">LAST NAME</label>
                        <input type="text" id="wa-lname" className="ct-input" placeholder="Doe" />
                    </div>
                </div>

                <div className="ct-form-row">
                    <div className="ct-form-group">
                        <label className="ct-label">EMAIL ADDRESS</label>
                        <input type="email" id="wa-email" className="ct-input" placeholder="john@example.com" />
                    </div>
                    <div className="ct-form-group">
                        <label className="ct-label">PHONE NUMBER (OPTIONAL)</label>
                        <input type="tel" id="wa-phone" className="ct-input" placeholder="+91 00000 00000" />
                    </div>
                </div>

                <div className="ct-form-group">
                    <label className="ct-label">SUBJECT / INQUIRY TYPE</label>
                    <input type="text" id="wa-subject" className="ct-input" placeholder="e.g., Booking a Private Houseboat" />
                </div>

                <div className="ct-form-group">
                    <label className="ct-label">YOUR MESSAGE</label>
                    <textarea id="wa-message" className="ct-textarea" placeholder="How can we help you plan your trip?"></textarea>
                </div>

                <button type="button" className="ct-wa-btn" >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    Send via WhatsApp →
                </button>
            </form>
        </div>

    </div>
</div>






<div className="faq-wrap">
  <p className="faq-label">SUPPORT & CONTACT</p>
  <h2 className="faq-title">How can we help you?</h2>

  <div className="faq-list">

    <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} >
        <span>What is the quickest way to get a response?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a" style={{"maxHeight":"200px"}}>
        <p>Messaging us directly on WhatsApp is the fastest way to reach our team. We typically respond within minutes to answer questions or confirm your bookings.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} >
        <span>Who do I contact on the day of my cruise?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Before your trip, we will provide you with the direct contact details of your boat captain (like our pro rider, Akshay). Your dedicated 3-person crew—captain, cook, and engine driver—will be waiting to welcome you upon arrival.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} >
        <span>Where is the boarding point located?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Because we manage multiple boats across the Alleppey backwaters, your specific boarding point will depend on your package. We will send you the exact Google Maps location via WhatsApp once your booking is confirmed.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} >
        <span>Can I request a custom menu or mention dietary restrictions?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>Yes! Since your meals are prepared fresh by your onboard cook, we can easily accommodate vegetarian, vegan, or specific dietary requests. Just let us know when you message us to book.</p>
      </div>
    </div>

    <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} >
        <span>How do I modify or cancel an existing booking?</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>To change your travel dates or upgrade your package, simply reply to your original booking confirmation on WhatsApp. We are flexible and will do our absolute best to adjust your itinerary.</p>
      </div>
    </div>

  </div>
</div>


      </div>
    </>
  );
}
