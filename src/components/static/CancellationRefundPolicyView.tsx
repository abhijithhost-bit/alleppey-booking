"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  CloudRain, 
  Clock, 
  RotateCcw, 
  CreditCard, 
  HelpCircle, 
  MessageCircle, 
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export default function CancellationRefundPolicyView() {
  return (
    <div className="legal-pure w-full">
      {/* Hero Section */}
      <div className="cr-hero-wrapper">
        <div className="cr-hero-container">
          <span className="cr-badge">Guest Protection</span>
          <h1 className="cr-hero-title">Cancellation &amp; Refund Policy</h1>
          <p className="cr-hero-subtitle">
            Fair, transparent, and hassle-free cancellation terms and refund procedures for your Alleppey backwater holiday.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="cr-content-wrapper">
        <div className="cr-document-card">
          
          {/* Sticky Quick-Jump Pill Bar */}
          <div className="policy-sticky-nav-wrapper">
            <nav className="policy-sticky-nav" aria-label="Table of Contents">
              <a href="#glance" className="policy-pill policy-pill-active">
                <Sparkles size={13} /> At a Glance
              </a>
              <a href="#refund-slabs" className="policy-pill">1. Refund Slabs</a>
              <a href="#weather-guide" className="policy-pill">2. Rain &amp; Weather</a>
              <a href="#peak-season" className="policy-pill">3. Peak Holidays</a>
              <a href="#rescheduling" className="policy-pill">4. Date Changes</a>
              <a href="#night-halt" className="policy-pill">5. 5:30 PM Curfew</a>
              <a href="#activities" className="policy-pill">6. Boating Activities</a>
              <a href="#payout" className="policy-pill">7. Refund Timelines</a>
              <a href="#how-to-cancel" className="policy-pill">8. How to Cancel</a>
              <a href="#faq" className="policy-pill">9. FAQ</a>
            </nav>
          </div>

          <span className="cr-last-updated">Last Updated: June 2026 • Alleppey Booking</span>

          {/* AT A GLANCE (TL;DR) CARDS */}
          <section id="glance" className="policy-glance-section">
            <div className="policy-glance-header">
              <h2 className="policy-glance-title">
                <Sparkles size={18} className="text-amber-500" /> Refund Terms at a Glance (TL;DR)
              </h2>
              <span className="policy-glance-badge">Instant Summary</span>
            </div>

            <div className="policy-glance-grid">
              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-emerald">
                  <CheckCircle2 size={18} />
                </div>
                <div className="policy-glance-label">30+ Days: 90% Back</div>
                <p className="policy-glance-desc">
                  90% refund of advance deposit. A nominal 10% is retained for banking and administrative fees.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-amber">
                  <RotateCcw size={18} />
                </div>
                <div className="policy-glance-label">15–29 Days: 50% Back</div>
                <p className="policy-glance-desc">
                  50% refund. Alternatively, you can request a complimentary date reschedule (Section 4).
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-rose">
                  <AlertTriangle size={18} />
                </div>
                <div className="policy-glance-label">&lt;15 Days: No Refund</div>
                <p className="policy-glance-desc">
                  Advance is non-refundable, as the vessel, crew, and fresh food provisions are blocked exclusively for you.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-blue">
                  <CloudRain size={18} />
                </div>
                <div className="policy-glance-label">Red Alert Weather</div>
                <p className="policy-glance-desc">
                  If Kerala Government bans cruising due to severe storms, you receive a 100% free reschedule or full refund.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-teal">
                  <CreditCard size={18} />
                </div>
                <div className="policy-glance-label">5–7 Day Payout</div>
                <p className="policy-glance-desc">
                  Approved refunds are credited directly back to your original payment method (Bank/UPI/Card).
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Standard Slabs & Visual Timeline */}
          <section id="refund-slabs" className="cr-section">
            <h2>1. Standard Cancellation &amp; Refund Slabs</h2>

            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <Sparkles size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>The earlier you let us know, the more money you get back.</li>
                <li>If you cancel at least 30 days ahead, you get almost all your money back (90%).</li>
                <li>Between 15 and 29 days, you get half back (50%), or you can shift your dates for free!</li>
                <li>Under 15 days, boat owners have turned away other guests, so advances cannot be refunded.</li>
              </ul>
            </div>

            {/* Visual Color-Coded Refund Timeline Cards */}
            <div className="policy-refund-timeline">
              <div className="policy-timeline-card policy-card-success">
                <div>
                  <div className="policy-timeline-days">30 Days or More</div>
                  <div className="policy-timeline-refund">90% Refund</div>
                </div>
                <p className="policy-timeline-detail">
                  10% retained for payment gateway and administrative costs. Best flexibility.
                </p>
              </div>

              <div className="policy-timeline-card policy-card-warning">
                <div>
                  <div className="policy-timeline-days">15 to 29 Days</div>
                  <div className="policy-timeline-refund">50% Refund</div>
                </div>
                <p className="policy-timeline-detail">
                  50% refunded. Tip: You can choose to reschedule your date instead of losing 50%!
                </p>
              </div>

              <div className="policy-timeline-card policy-card-danger">
                <div>
                  <div className="policy-timeline-days">Less than 15 Days</div>
                  <div className="policy-timeline-refund">0% (No Refund)</div>
                </div>
                <p className="policy-timeline-detail">
                  Advance non-refundable as the captain, crew, and boat are reserved exclusively for you.
                </p>
              </div>
            </div>

            <div className="cr-table-wrapper">
              <table className="cr-table">
                <thead>
                  <tr>
                    <th>Time of Cancellation</th>
                    <th>Refund Slabs</th>
                    <th>Policy Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>30 days or more</strong> prior to check-in</td>
                    <td>
                      <span className="cr-badge-success">90% Refund</span>
                    </td>
                    <td>90% of the advance amount is refunded. A nominal 10% is retained to cover administrative and banking gateway processing costs.</td>
                  </tr>
                  <tr>
                    <td><strong>15 to 29 days</strong> prior to check-in</td>
                    <td>
                      <span className="cr-badge-warning">50% Refund</span>
                    </td>
                    <td>50% of the advance amount is refunded. The remaining 50% covers boat reservation holds and operational scheduling.</td>
                  </tr>
                  <tr>
                    <td><strong>Less than 15 days</strong> prior to check-in</td>
                    <td>
                      <span className="cr-badge-danger">No Refund (0%)</span>
                    </td>
                    <td>Advance payment is completely non-refundable, as the vessel, crew, and culinary supplies are blocked exclusively for your party.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Weather & Monsoon Guide */}
          <section id="weather-guide" className="cr-section">
            <h2>2. Kerala Rain, Monsoon &amp; Weather Directives</h2>

            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <CloudRain size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Kerala backwaters are famous for gentle tropical showers! All boats are fully roofed and weatherproofed with scenic side-blinds. Passing rain does not cancel trips.</li>
                <li>However, if the Government or Port Authority issues an official <strong>Red Alert</strong> or bans cruising for passenger safety, you are 100% protected: choose a free date change or a full refund!</li>
              </ul>
            </div>

            {/* Visual Weather Guide Box */}
            <div className="policy-weather-guide">
              <div className="policy-weather-header">
                <CloudRain size={20} />
                <span>How We Handle Backwater Weather in Kerala</span>
              </div>
              <div className="policy-weather-grid">
                <div className="policy-weather-item">
                  <strong>🌦️ Normal Passing Rain (Cruises Run Normally)</strong>
                  <p>
                    All houseboats and Shikaras are equipped with all-weather waterproof canopies, covered dining lounges, and roll-down rain blinds. Rain makes Alleppey greener and more magical!
                  </p>
                </div>
                <div className="policy-weather-item">
                  <strong>⚠️ Official Govt Red Alert (100% Protected)</strong>
                  <p>
                    If the Kerala Maritime Board or Disaster Management Authority halts navigation due to extreme cyclones, you get a <strong>100% free date reschedule</strong> or a <strong>full refund</strong>.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Safety is our paramount priority. All backwater operations comply strictly with directives issued by the <strong>Kerala Maritime Board</strong>, the <strong>Port Conservator (Alappuzha)</strong>, and the <strong>Kerala State Disaster Management Authority (KSDMA)</strong>.
            </p>
            <ul>
              <li>
                <strong>Official Weather Prohibitions:</strong> If the Government authorities or Port Officer ban boat navigation due to heavy cyclones, severe monsoon red alerts, high water currents, or adverse weather, you will be offered:
                <ul className="mt-2">
                  <li><strong>Option A (Free Rescheduling):</strong> Full credit transferred to a rescheduled date within 6 months, subject to boat category availability.</li>
                  <li><strong>Option B (Full Refund):</strong> A 100% refund of your advance payment, minus nominal banking/payment gateway transaction charges.</li>
                </ul>
              </li>
              <li>
                <strong>Company-Initiated Cancellations:</strong> In the rare event that Alleppey Booking must cancel a cruise due to sudden mechanical failure of the assigned boat or an unforeseen emergency, we will arrange an equal or upgraded replacement vessel. If a satisfactory replacement is unavailable, we will provide an immediate <strong>100% full refund</strong>.
              </li>
            </ul>
          </section>

          {/* Section 3: Peak Season */}
          <section id="peak-season" className="cr-section">
            <h2>3. Peak Season &amp; Holiday Bookings</h2>

            <div className="policy-plain-english variant-amber">
              <div className="policy-plain-english-header">
                <Calendar size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Dates like Christmas &amp; New Year (Dec 20 – Jan 5) and the Nehru Trophy Boat Race are in super high demand.</li>
                <li>Because operators demand full upfront holds, cancellations during peak dates must be made at least 30 days prior. Within 30 days, peak bookings cannot be refunded.</li>
              </ul>
            </div>

            <ul>
              <li><strong>Peak Winter Season:</strong> December 20th through January 5th.</li>
              <li><strong>Nehru Trophy Boat Race Weekend:</strong> Typically second Saturday of August and adjacent dates.</li>
              <li><strong>Diwali &amp; Pooja Holiday Weeks:</strong> Official Kerala peak demand windows.</li>
            </ul>
            <div className="cr-warning-box">
              <strong>Important Notice for Peak Dates:</strong> Due to extreme festive demand and non-refundable commitments with boat owners, cancellations for peak period bookings made within <strong>30 days of the trip date are 100% non-refundable</strong>.
            </div>
          </section>

          {/* Section 4: Date Rescheduling */}
          <section id="rescheduling" className="cr-section">
            <h2>4. Date Rescheduling Policy</h2>

            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <RotateCcw size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Need to change your travel date? Let us know at least 15 days in advance and we will reschedule your trip for free!</li>
                <li>If moving from an off-season weekday to a peak weekend or December holiday, you only pay the seasonal price difference.</li>
              </ul>
            </div>

            <ul>
              <li><strong>Notice Period:</strong> Rescheduling requests must be sent in writing at least <strong>15 days prior</strong> to the original check-in date.</li>
              <li><strong>Number of Changes:</strong> One (1) complimentary date modification is permitted per booking.</li>
              <li><strong>Tariff Differences:</strong> If the revised date falls in a higher seasonal pricing tier (e.g., shifting from an off-season weekday to a peak weekend or December holiday), the guest must pay the seasonal difference.</li>
              <li><strong>Requests under 15 days:</strong> Requests received fewer than 15 days before check-in will be treated as a cancellation under Section 1.</li>
            </ul>
          </section>

          {/* Section 5: No-Show & Night Halt Regulations */}
          <section id="night-halt" className="cr-section">
            <h2>5. No-Show &amp; 5:30 PM Night Halt Regulations</h2>

            <div className="policy-plain-english variant-amber">
              <div className="policy-plain-english-header">
                <Clock size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Please arrive by 12:00 PM to enjoy your full 5+ hours of backwater cruising before boats must dock at 5:30 PM.</li>
                <li>If you are running late on the highway or train, call us before 3:00 PM so we can guide you.</li>
                <li>Guests failing to arrive or contact our team will be marked as a No-Show and their advance is forfeited.</li>
              </ul>
            </div>

            <ul>
              <li><strong>Scheduled Check-In:</strong> Standard check-in is between 12:00 PM and 1:00 PM.</li>
              <li><strong>Delayed Arrival:</strong> If you are delayed in transit, you must notify our operations team before 3:00 PM. Cruising time lost due to late arrival cannot be compensated the following morning, as statutory check-out remains 9:00 AM.</li>
              <li><strong>Late Arrival Past 5:30 PM:</strong> If guests arrive after 5:30 PM, the boat will already be securely anchored at the night-halt station. Guests will be ferried to the boat for dinner and stay, but daytime cruising hours for that day are forfeited.</li>
              <li><strong>No-Show:</strong> Guests who fail to arrive by 6:00 PM on the check-in date without communicating with our team will be marked as a No-Show. The reservation will be released and <strong>100% of the booking amount will be forfeited</strong>.</li>
            </ul>
          </section>

          {/* Section 6: Activities */}
          <section id="activities" className="cr-section">
            <h2>6. Activity-Specific Policies (Shared Boats, Shikaras, Kayaks)</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <Sparkles size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li><strong>Shared Houseboats:</strong> Cabins are 100% prepaid and non-refundable within 10 days of the cruise.</li>
                <li><strong>Shikaras, Kayaking &amp; Speedboats:</strong> Free rescheduling or cancellation credit up to 24 hours before your ride!</li>
              </ul>
            </div>
            <ul>
              <li>
                <strong>Shared Houseboat Cabins:</strong> Shared boathouse packages operate on fixed group departure times. Cabins are 100% prepaid. Cancellations under 10 days or failure to board at the designated shared departure window are non-refundable.
              </li>
              <li>
                <strong>Shikara Rides, Kayaking &amp; Speedboats:</strong> Short hourly activities can be rescheduled or cancelled with full credit up to <strong>24 hours</strong> prior to the ride start time. Cancellations with less than 24 hours notice are non-refundable.
              </li>
            </ul>
          </section>

          {/* Section 7: Refund Timelines & Method */}
          <section id="payout" className="cr-section">
            <h2>7. Refund Processing Timeline &amp; Payment Method</h2>

            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <CreditCard size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>We initiate approved refunds within 24 to 48 hours.</li>
                <li>Money arrives back into your original bank account or UPI ID in 5 to 7 working days.</li>
                <li>We share the bank reference number (UTR) on WhatsApp as soon as it is processed!</li>
              </ul>
            </div>

            <ul>
              <li><strong>Mode of Refund:</strong> Refunds are credited strictly back to the original payment source (UPI ID, Net Banking account, or Debit/Credit card used during payment).</li>
              <li><strong>Processing Time:</strong> Refunds are initiated within <strong>24 to 48 hours</strong> of approval and typically reflect in your account within <strong>5 to 7 business working days</strong>, depending on your bank's settlement cycle.</li>
              <li><strong>Receipt:</strong> A digital refund confirmation slip and bank reference number (UTR) will be sent to you via WhatsApp and email.</li>
            </ul>
          </section>

          {/* Section 8: How to Cancel */}
          <section id="how-to-cancel" className="cr-section">
            <h2>8. How to Request a Cancellation</h2>
            <div className="policy-plain-english variant-purple">
              <div className="policy-plain-english-header">
                <MessageCircle size={14} /> 3 Simple Steps to Cancel or Reschedule
              </div>
              <ul>
                <li><strong>Step 1:</strong> Send a WhatsApp message to <a href="https://wa.me/917012761588" className="text-emerald-700 font-bold underline">+91 70127 61588</a> or email support@alleppeybooking.com.</li>
                <li><strong>Step 2:</strong> State your primary guest name, booking date, and reason for cancellation/rescheduling.</li>
                <li><strong>Step 3:</strong> Our desk will confirm your cancellation immediately and calculate your refund slab.</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Mini FAQ Accordion */}
          <section id="faq" className="cr-section">
            <h2>9. Frequently Asked Questions (FAQ)</h2>
            <p className="text-slate-600 text-sm mb-4">
              Quick answers to the questions travelers ask our team most frequently:
            </p>

            <div className="policy-accordion-group">
              <details className="policy-accordion-item" open>
                <summary className="policy-accordion-summary">
                  How and when will I get my refund back?
                </summary>
                <div className="policy-accordion-content">
                  Once your cancellation is approved, we process the refund directly to your original payment method (Bank Account, UPI, or Card) within 24 to 48 hours. Depending on your bank's clearing time, the funds typically reflect in your account within 5 to 7 business days. We will send you the Bank UTR reference number on WhatsApp.
                </div>
              </details>

              <details className="policy-accordion-item">
                <summary className="policy-accordion-summary">
                  Can I change my travel dates instead of cancelling?
                </summary>
                <div className="policy-accordion-content">
                  Yes, absolutely! We offer one (1) free date modification if you notify us at least 15 days before your trip. Your advance deposit is transferred 100% to the new date. If the new date falls in a higher seasonal rate (e.g. holiday weekend), you only pay the seasonal price difference.
                </div>
              </details>

              <details className="policy-accordion-item">
                <summary className="policy-accordion-summary">
                  What if it rains on the day of our houseboat trip?
                </summary>
                <div className="policy-accordion-content">
                  Rain in Alleppey is normal, beautiful, and part of the lush backwater charm! All houseboats and Shikaras have full waterproof roofings and roll-down rain blinds. In the rare event that the Kerala Government issues a severe Red Alert or cyclone warning prohibiting boat movements, you get a 100% free date reschedule or a full refund.
                </div>
              </details>

              <details className="policy-accordion-item">
                <summary className="policy-accordion-summary">
                  What happens if our flight or train to Kerala is delayed?
                </summary>
                <div className="policy-accordion-content">
                  Please call or WhatsApp our operations desk immediately. Standard check-in is 12:00 PM, but you can board anytime before 5:30 PM (when the government mandates night docking). If you arrive after 5:30 PM, we will boat-ferry you to the docked houseboat for dinner and your overnight stay.
                </div>
              </details>

              <details className="policy-accordion-item">
                <summary className="policy-accordion-summary">
                  Are bookings during Christmas and New Year refundable?
                </summary>
                <div className="policy-accordion-content">
                  Because boats for Christmas and New Year (Dec 20 – Jan 5) and Nehru Trophy Boat Race are in extreme demand and locked months in advance, cancellations made within 30 days of check-in are strictly non-refundable. Cancellations made 30+ days prior receive a 90% refund.
                </div>
              </details>
            </div>
          </section>

          {/* Instant WhatsApp Support CTA */}
          <div className="policy-support-cta">
            <div className="policy-support-info">
              <h3>Need help with a cancellation or rescheduling?</h3>
              <p>Chat directly with our Alleppey team on WhatsApp. We provide instant assistance within 2 minutes.</p>
            </div>
            <a 
              href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20have%20a%20question%20regarding%20Cancellation%20%26%20Refunds."
              target="_blank"
              rel="noopener noreferrer"
              className="policy-support-btn"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp (2-Min Reply)</span>
            </a>
          </div>

          {/* Bottom cross-links */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap gap-4">
            <span>Also see:</span>
            <Link href="/terms-conditions/" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy/" className="text-blue-600 hover:underline">
              Privacy Policy
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
