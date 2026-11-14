"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Eye, 
  MessageCircle,
  HelpCircle
} from "lucide-react";

export default function PrivacyPolicyView() {
  return (
    <div className="legal-pure w-full">
      {/* Hero Section */}
      <div className="pp-hero-wrapper">
        <div className="pp-hero-container">
          <span className="pp-badge">Data Protection &amp; Privacy</span>
          <h1 className="pp-hero-title">Privacy Policy</h1>
          <p className="pp-hero-subtitle">
            How Alleppey Booking safeguards your personal information, booking details, and privacy.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="pp-content-wrapper">
        <div className="pp-document-card">
          
          {/* Sticky Quick-Jump Pill Bar */}
          <div className="policy-sticky-nav-wrapper">
            <nav className="policy-sticky-nav" aria-label="Table of Contents">
              <a href="#promise" className="policy-pill policy-pill-active">
                <ShieldCheck size={13} /> Our Privacy Promise
              </a>
              <a href="#collected" className="policy-pill">1. Info We Collect</a>
              <a href="#how-used" className="policy-pill">2. How We Use It</a>
              <a href="#sharing" className="policy-pill">3. Crew Sharing</a>
              <a href="#security" className="policy-pill">4. Data Security</a>
              <a href="#rights" className="policy-pill">5. Your Rights</a>
              <a href="#contact" className="policy-pill">6. Contact Desk</a>
            </nav>
          </div>

          <span className="pp-last-updated">Last Updated: June 2026 • Alleppey Booking</span>

          {/* OUR PRIVACY PROMISE (3 TRUST PILLARS) */}
          <section id="promise" className="policy-glance-section">
            <div className="policy-glance-header">
              <h2 className="policy-glance-title">
                <ShieldCheck size={20} className="text-emerald-600" /> Our Privacy Promise to Every Traveler
              </h2>
              <span className="policy-glance-badge">100% Transparent</span>
            </div>

            <div className="policy-trust-grid">
              <div className="policy-trust-card">
                <div className="policy-trust-icon">
                  <FileText size={20} />
                </div>
                <div className="policy-trust-title">Why We Need Govt IDs</div>
                <p className="policy-trust-desc">
                  Kerala Tourism Police and district administration legally mandate guest identification for overnight backwater registries. Your ID is used exclusively for statutory compliance.
                </p>
              </div>

              <div className="policy-trust-card">
                <div className="policy-trust-icon">
                  <Lock size={20} />
                </div>
                <div className="policy-trust-title">Zero Spam Guarantee</div>
                <p className="policy-trust-desc">
                  We never sell, rent, or trade your phone number or email to third-party advertisers or telemarketers. No unwanted spam or promotional robo-calls.
                </p>
              </div>

              <div className="policy-trust-card">
                <div className="policy-trust-icon">
                  <Smartphone size={20} />
                </div>
                <div className="policy-trust-title">Trip Coordination Only</div>
                <p className="policy-trust-desc">
                  WhatsApp and calls are used strictly for sending Google Maps boarding jetty pins, coordinating arrival times with your boat captain, and noting your food preferences.
                </p>
              </div>
            </div>
          </section>

          {/* 1. Introduction */}
          <div className="pp-section">
            <h2>1. Introduction</h2>
            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <Sparkles size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>We treat your personal details with the utmost care and respect.</li>
                <li>We only collect details necessary to reserve your boat, feed you great authentic Kerala food, and satisfy local tourism safety laws.</li>
              </ul>
            </div>
            <p>
              At <strong>Alleppey Booking</strong> (accessible via alleppeybooking.com), one of our core commitments is preserving the trust and confidentiality of our visitors and guests. This Privacy Policy outlines what information is collected, how it is safeguarded, and how it is used to deliver a world-class backwater experience, aligned with the <strong>Digital Personal Data Protection Act (DPDP Act)</strong> and global privacy standards.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <section id="collected" className="pp-section">
            <h2>2. Information We Collect</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <Eye size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li><strong>Contact details:</strong> Name and WhatsApp phone number so we can send your booking voucher and jetty coordinates.</li>
                <li><strong>Identification:</strong> Aadhaar, Passport, or Driving License for all adults staying overnight (as required by Kerala Government rules).</li>
                <li><strong>Preferences:</strong> Group count, travel date, and dietary choices (e.g. Vegetarian, Non-Veg Karimeen, or child meals).</li>
              </ul>
            </div>
            <p>To successfully process reservations and satisfy state waterway safety regulations, we collect:</p>
            <ul>
              <li><strong>Contact Information:</strong> Your name, phone/WhatsApp number, and email address provided during quotation requests or reservations.</li>
              <li><strong>Government Identification:</strong> Photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) for all adult guests, as mandated by the Kerala Port Authority and Tourism Police for passenger manifests.</li>
              <li><strong>Booking &amp; Dietary Requirements:</strong> Travel dates, total group headcount, and dietary preferences (e.g., vegetarian, halal, Jain, spice levels) shared with on-board chefs.</li>
              <li><strong>Technical Web Analytics:</strong> Anonymized browser information, screen resolution, and aggregated visit data (via privacy-respecting analytics) to maintain website speed and security.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section id="how-used" className="pp-section">
            <h2>3. How We Use Your Information</h2>
            <div className="policy-plain-english variant-amber">
              <div className="policy-plain-english-header">
                <CheckCircle2 size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>We use your info to book the right boat, arrange your boarding, and ensure your Kerala lunch is prepared on time.</li>
                <li>We do not enroll you in aggressive marketing or share your number with outside vendors.</li>
              </ul>
            </div>
            <ul>
              <li>Process reservations and issue digital confirmation vouchers for houseboats, Shikaras, kayaking, or speedboats.</li>
              <li>Send live boarding jetty directions, boat captain contacts, and check-in guidance via WhatsApp or phone.</li>
              <li>Comply with statutory Kerala tourism laws requiring an official guest registry for overnight vessel halts.</li>
              <li>Ensure food allergies or special culinary requests are properly conveyed to the chef assigned to your vessel.</li>
            </ul>
          </section>

          {/* 4. Sharing Your Information */}
          <section id="sharing" className="pp-section">
            <h2>4. Sharing Your Information With Boat Crews &amp; Authorities</h2>
            <div className="policy-plain-english variant-purple">
              <div className="policy-plain-english-header">
                <Lock size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>The assigned boat captain receives your name and contact so they can welcome you at the boarding jetty.</li>
                <li>Your ID details are registered in the official boat passenger book shown to police/port officers upon inspection.</li>
                <li>We never sell or monetise your personal data. Period.</li>
              </ul>
            </div>
            <p>We do not sell, rent, or trade your personal data. We only disclose necessary details to the following trusted parties:</p>
            <ul>
              <li><strong>Assigned Boat Crew &amp; Operators:</strong> Basic passenger contact, group headcount, and dietary notes are shared with the captain and culinary team assigned to your boat so they can prepare for your arrival.</li>
              <li><strong>Government &amp; Law Enforcement:</strong> Guest identification records may be presented to the Kerala Port Conservator, Maritime Board, or local police authorities if legally required for statutory registry inspections.</li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section id="security" className="pp-section">
            <h2>5. Data Security &amp; Storage</h2>
            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <ShieldCheck size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>All website communications are protected by modern 256-bit SSL encryption (HTTPS).</li>
                <li>Identification documents are kept secure and purged when no longer required by statutory record laws.</li>
              </ul>
            </div>
            <p>
              We implement industry-standard technical, organizational, and physical security measures to guard your data against unauthorized access, loss, or misuse. Our website employs HTTPS/TLS encryption across all interactions.
            </p>
          </section>

          {/* 6. Your Privacy Rights */}
          <section id="rights" className="pp-section">
            <h2>6. Your Privacy Rights &amp; Choices</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <HelpCircle size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>You can ask us at any time what data we have about your past bookings.</li>
                <li>You can request deletion of your contact details from our support records once your trip is completed.</li>
              </ul>
            </div>
            <p>
              Under Indian law and international privacy principles, you have the right to request access to the personal information we hold regarding your bookings, request corrections of outdated details, or ask for the removal of your contact information once your trip is concluded and all statutory audit periods have elapsed.
            </p>
          </section>

          {/* 7. Contact & Support Desk */}
          <section id="contact" className="pp-section">
            <h2>7. Contact &amp; Grievance Desk</h2>
            <p>
              If you have any questions or data privacy requests, our support team is happy to assist:
            </p>
            
            <div className="pp-contact-box">
              <p><strong>Alleppey Booking</strong></p>
              <p><strong>Email:</strong> <a href="mailto:support@alleppeybooking.com" className="text-blue-600 font-semibold underline">support@alleppeybooking.com</a> / <a href="mailto:info@alleppeybooking.com" className="text-blue-600 font-semibold underline">info@alleppeybooking.com</a></p>
              <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/917012761588" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold underline">+91 70127 61588</a></p>
              <p><strong>Office:</strong> Punnamada Finishing Point Road, Punnamada, Alappuzha, Kerala 688013, India</p>
            </div>
          </section>

          {/* Instant WhatsApp Support CTA */}
          <div className="policy-support-cta">
            <div className="policy-support-info">
              <h3>Have a question about your privacy or booking details?</h3>
              <p>Our team is available on WhatsApp daily to help answer any questions about your data.</p>
            </div>
            <a 
              href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20have%20a%20question%20regarding%20Privacy%20%26%20Data%20handling."
              target="_blank"
              rel="noopener noreferrer"
              className="policy-support-btn"
            >
              <MessageCircle size={18} />
              <span>Ask on WhatsApp (2-Min Reply)</span>
            </a>
          </div>

          {/* Cross-links */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap gap-4">
            <span>Also see:</span>
            <Link href="/terms-conditions/" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/cancellation-refund-policy/" className="text-blue-600 hover:underline">
              Cancellation &amp; Refund Policy
            </Link>
            <span>•</span>
            <Link href="/contact/" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
