"use client";

import React from "react";
import Link from "next/link";

export default function CancellationRefundPolicyView() {
  return (
    <div className="legal-pure w-full">
      {/* Hero Section */}
      <div className="cr-hero-wrapper">
        <div className="cr-hero-container">
          <span className="cr-badge">Customer Assurance</span>
          <h1 className="cr-hero-title">Cancellation &amp; Refund Policy</h1>
          <p className="cr-hero-subtitle">
            Transparent, fair, and reliable cancellation guidelines and refund procedures for all Alleppey backwater experiences.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="cr-content-wrapper">
        <div className="cr-document-card">
          <span className="cr-last-updated">Last Updated: June 2026</span>

          {/* Section 1: Overview */}
          <div className="cr-section">
            <h2>1. Overview &amp; Booking Advances</h2>
            <p>
              At <strong>Alleppey Booking</strong> (alleppeybooking.com), we connect travelers with verified, high-quality backwater boat operators across Alappuzha, Kerala. Because houseboats, private crews, chefs, and perishable fresh food supplies are reserved exclusively for your scheduled date upon reservation, advance deposits are required to secure each trip.
            </p>
            <p>
              This Cancellation and Refund Policy governs all reservations made through our website, WhatsApp booking desk, or official telephone lines. By confirming a booking with an advance deposit, you acknowledge and agree to the terms below.
            </p>
          </div>

          {/* Section 2: Slabs & Table */}
          <div className="cr-section">
            <h2>2. Standard Cancellation &amp; Refund Slabs</h2>
            <p>
              If you need to cancel your booking, the following refund schedule applies based on how many days prior to the check-in date your formal cancellation request is received:
            </p>

            <div className="cr-table-wrapper">
              <table className="cr-table">
                <thead>
                  <tr>
                    <th>Time of Cancellation</th>
                    <th>Refund Percentage</th>
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

            <div className="cr-notice-box">
              <strong>💡 Pro Tip:</strong> If your travel plans change within 15 to 29 days, consider requesting a <strong>Date Reschedule</strong> (Section 5) rather than cancelling, allowing you to preserve your booking deposit.
            </div>
          </div>

          {/* Section 3: Peak Season */}
          <div className="cr-section">
            <h2>3. Peak Season &amp; Holiday Bookings</h2>
            <p>
              Special cancellation terms apply to high-demand holiday travel periods:
            </p>
            <ul>
              <li><strong>Peak Winter Season:</strong> December 20th through January 5th.</li>
              <li><strong>Nehru Trophy Boat Race Weekend:</strong> Typically second Saturday of August and adjacent dates.</li>
              <li><strong>Diwali &amp; Pooja Holiday Weeks:</strong> Official Kerala peak demand windows.</li>
            </ul>
            <div className="cr-warning-box">
              <strong>Important Notice for Peak Dates:</strong> Due to extreme festive demand and non-refundable commitments with boat owners, cancellations for peak period bookings made within <strong>30 days of the trip date are 100% non-refundable</strong>.
            </div>
          </div>

          {/* Section 4: Weather & Force Majeure */}
          <div className="cr-section">
            <h2>4. Weather Directives &amp; Force Majeure</h2>
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
              <li>
                <strong>Normal / Passing Rain:</strong> Alleppey is famous for its tropical climate. Passing rains, light showers, or overcast skies do not qualify for cancellation or refund. All houseboats and Shikaras are fully covered and sheltered with all-weather vinyl and bamboo roofs.
              </li>
            </ul>
          </div>

          {/* Section 5: Date Rescheduling */}
          <div className="cr-section">
            <h2>5. Date Rescheduling Policy</h2>
            <p>
              We understand that personal emergencies and flight schedule changes occur. We allow date changes under the following terms:
            </p>
            <ul>
              <li><strong>Notice Period:</strong> Rescheduling requests must be sent in writing at least <strong>15 days prior</strong> to the original check-in date.</li>
              <li><strong>Number of Changes:</strong> One (1) complimentary date modification is permitted per booking.</li>
              <li><strong>Tariff Differences:</strong> If the revised date falls in a higher seasonal pricing tier (e.g., shifting from an off-season weekday to a peak weekend or December holiday), the guest must pay the seasonal difference.</li>
              <li><strong>Requests under 15 days:</strong> Requests received fewer than 15 days before check-in will be treated as a cancellation under Section 2.</li>
            </ul>
          </div>

          {/* Section 6: No-Show & Night Halt Regulations */}
          <div className="cr-section">
            <h2>6. No-Show &amp; Late Arrival Policy</h2>
            <p>
              To maintain public waterway safety, the <strong>Kerala Government strictly prohibits backwater cruising after 5:30 PM</strong>.
            </p>
            <ul>
              <li><strong>Scheduled Check-In:</strong> Standard check-in is between 12:00 PM and 1:00 PM.</li>
              <li><strong>Delayed Arrival:</strong> If you are delayed in transit, you must notify our operations team before 3:00 PM. Cruising time lost due to late arrival cannot be compensated the following morning, as statutory check-out remains 9:00 AM.</li>
              <li><strong>Late Arrival Past 5:30 PM:</strong> If guests arrive after 5:30 PM, the boat will already be securely anchored at the night-halt station. Guests will be ferried to the boat for dinner and stay, but daytime cruising hours for that day are forfeited.</li>
              <li><strong>No-Show:</strong> Guests who fail to arrive by 6:00 PM on the check-in date without communicating with our team will be marked as a No-Show. The reservation will be released and <strong>100% of the booking amount will be forfeited</strong>.</li>
            </ul>
          </div>

          {/* Section 7: Activities */}
          <div className="cr-section">
            <h2>7. Activity-Specific Policies</h2>
            <ul>
              <li>
                <strong>Shared Houseboat Cabins:</strong> Shared boathouse packages operate on fixed group departure times. Cabins are 100% prepaid. Cancellations under 10 days or failure to board at the designated shared departure window are non-refundable.
              </li>
              <li>
                <strong>Shikara Rides, Kayaking &amp; Speedboats:</strong> Short hourly activities can be rescheduled or cancelled with full credit up to <strong>24 hours</strong> prior to the ride start time. Cancellations with less than 24 hours notice are non-refundable.
              </li>
            </ul>
          </div>

          {/* Section 8: Refund Timelines & Method */}
          <div className="cr-section">
            <h2>8. Refund Processing Timeline &amp; Method</h2>
            <p>
              Once your formal cancellation is confirmed and approved by our support desk:
            </p>
            <ul>
              <li><strong>Mode of Refund:</strong> Refunds are credited strictly back to the original payment source (UPI ID, Net Banking account, or Debit/Credit card used during payment).</li>
              <li><strong>Processing Time:</strong> Refunds are initiated within <strong>24 to 48 hours</strong> of approval and typically reflect in your account within <strong>5 to 7 business working days</strong>, depending on your bank's settlement cycle.</li>
              <li><strong>Receipt:</strong> A digital refund confirmation slip and bank reference number (UTR) will be sent to you via WhatsApp and email.</li>
            </ul>
          </div>

          {/* Section 9: How to Cancel */}
          <div className="cr-section">
            <h2>9. How to Request a Cancellation</h2>
            <p>
              All cancellation or rescheduling requests must be submitted in writing through our verified channels:
            </p>
            <ul>
              <li><strong>Step 1:</strong> Send a written message via WhatsApp to <strong>+91 70127 61588</strong> or email <strong>support@alleppeybooking.com</strong>.</li>
              <li><strong>Step 2:</strong> Include your <strong>Booking Confirmation / Receipt Number</strong>, primary guest name, and reason for cancellation.</li>
              <li><strong>Step 3:</strong> Our reservation desk will verify the timestamp, calculate the refund slab according to this policy, and share the cancellation acknowledgment.</li>
            </ul>
          </div>

          {/* Section 10: Contact Information */}
          <div className="cr-section">
            <h2>10. Contact &amp; Support Desk</h2>
            <p>
              If you have any questions regarding our terms, need assistance with your booking, or wish to clarify any clause, please contact our support desk:
            </p>
            <div className="cr-contact-box">
              <p><strong>Brand:</strong> Alleppey Booking</p>
              <p><strong>Primary Support &amp; WhatsApp:</strong> <a href="https://wa.me/917012761588" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold underline">+91 70127 61588</a></p>
              <p><strong>Alternative Phone:</strong> +91 99477 53154 / +91 62387 94500</p>
              <p><strong>Email:</strong> <a href="mailto:support@alleppeybooking.com" className="text-blue-600 font-semibold underline">support@alleppeybooking.com</a> / <a href="mailto:info@alleppeybooking.com" className="text-blue-600 font-semibold underline">info@alleppeybooking.com</a></p>
              <p><strong>Operating Office:</strong> Punnamada Finishing Point Road, Punnamada, Alappuzha, Kerala 688013, India</p>
              <p><strong>Support Hours:</strong> Daily 6:00 AM – 11:00 PM IST</p>
            </div>
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
