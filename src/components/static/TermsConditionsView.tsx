"use client";

import React from "react";
import Link from "next/link";

export default function TermsConditionsView() {
  return (
    <div className="legal-pure w-full">
      {/* Hero Section */}
      <div className="tc-hero-wrapper">
        <div className="tc-hero-container">
          <span className="tc-badge">Legal Information</span>
          <h1 className="tc-hero-title">Terms &amp; Conditions</h1>
          <p className="tc-hero-subtitle">
            Please read these terms carefully before booking your backwater experience with Alleppey Booking.
          </p>
        </div>
      </div>

      {/* Main Document Card */}
      <div className="tc-content-wrapper">
        <div className="tc-document-card">
          <span className="tc-last-updated">Last Updated: June 2026</span>

          {/* 1. General Booking & Payments */}
          <div className="tc-section">
            <h2>1. General Booking &amp; Payments</h2>
            <p>
              Welcome to Alleppey Booking (alleppeybooking.com). By accessing our website, communicating with our reservation desk, and booking our backwater experiences, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <ul>
              <li>
                <strong>Prepaid Bookings:</strong> All bookings require an advance payment to confirm the reservation. For certain services such as Shared Boathouses, payments are 100% prepaid. Any remaining balances must be settled in full at the time of check-in before vessel boarding.
              </li>
              <li>
                <strong>Identification Mandate:</strong> As required by Kerala tourism and maritime authorities, all adult guests must present a valid Government-issued photo ID (Passport, Aadhar Card, Driving License, or Voter ID) at check-in. Foreign nationals must provide their Passport with valid Indian Visa.
              </li>
              <li>
                <strong>Partnership Model:</strong> Alleppey Booking partners with vetted, licensed boat owners and operators across Alappuzha. While we ensure high operational standards, safety verification, and transparent tariffs, the direct navigation and physical vessel management are handled by licensed maritime crews.
              </li>
            </ul>
          </div>

          {/* 2. Houseboat Timings & Cruising Rules */}
          <div className="tc-section">
            <h2>2. Houseboat Timings &amp; Cruising Regulations</h2>
            <p>
              To comply with Kerala Maritime Board rules and protect passenger safety, strict operational schedules apply to all Houseboat stays (Private and Shared):
            </p>
            <ul>
              <li>
                <strong>Check-in Time:</strong> 12:00 PM (11:30 AM – 1:00 PM for Shared Boathouses). Check-in delays caused by late passenger arrivals cannot be compensated with extended morning cruising.
              </li>
              <li>
                <strong>Check-out Time:</strong> Strictly 9:00 AM following breakfast.
              </li>
              <li>
                <strong>Government Night Halt Rule:</strong> As mandated by Kerala Government waterways regulations, no backwater cruising is permitted after <strong>5:30 PM</strong>. Boats are securely docked along scenic village shores for the evening and overnight stay.
              </li>
              <li>
                <strong>Air Conditioning Schedule:</strong> In Deluxe Houseboats, bedroom AC runs exclusively from 9:00 PM to 6:00 AM. In Premium and Luxury categories, 24-hour AC is provided. Daytime AC for Deluxe boats is subject to an additional generator surcharge.
              </li>
            </ul>
          </div>

          {/* 3. Child Policy & Extra Guests */}
          <div className="tc-section">
            <h2>3. Child Policy &amp; Extra Guests</h2>
            <ul>
              <li>Children below 5 years of age stay complimentary when sharing existing bedding with parents.</li>
              <li>Children aged 5 years and above are counted as extra occupants and charged at standard published extra-person rates with mattress/bedding and meals included.</li>
              <li>Special culinary requests or deviations from the traditional Kerala set menu must be communicated to our team at least 24 hours prior to check-in.</li>
            </ul>
          </div>

          {/* 4. Cancellation & Refund Policy */}
          <div className="tc-section">
            <h2>4. Cancellation &amp; Refund Policy</h2>
            <p>Our standard advance cancellation schedule is as follows:</p>
            <ul>
              <li><strong>30 days or more prior to check-in:</strong> 90% refund of advance deposit (10% retained for banking and administrative processing).</li>
              <li><strong>15 to 29 days prior to check-in:</strong> 50% refund of advance deposit.</li>
              <li><strong>Less than 15 days prior to check-in:</strong> Non-refundable (0%), as the vessel, crew, and provisions are locked exclusively for your trip.</li>
              <li><strong>Company-Initiated Cancellations:</strong> If we must cancel due to severe unforeseen technical emergencies, a replacement vessel of equal or higher standard will be provided, or an immediate 100% full refund.</li>
            </ul>
            <p className="mt-3">
              For complete details on refund timelines, bank settlement modes, and date change guidelines, please visit our dedicated{" "}
              <Link href="/cancellation-refund-policy/" className="text-orange-600 font-bold underline hover:text-orange-700">
                Cancellation &amp; Refund Policy
              </Link>.
            </p>
          </div>

          {/* 5. Safety Briefings & Mandatory Protocols */}
          <div className="tc-section">
            <h2>5. Safety Briefings &amp; Life Jackets</h2>
            <p>
              Safety is our uncompromising priority across all Alleppey backwater journeys.
            </p>
            <ul>
              <li>
                <strong>Mandatory Safety Briefings:</strong> A comprehensive pre-departure safety briefing is mandatory for all guests before vessel departure. Guests must listen attentively to instructions covering emergency protocols, emergency exits, life-saving apparatus, and vessel stability rules.
              </li>
              <li>
                <strong>Life Jackets:</strong> Wearing certified life jackets is compulsory for all high-speed and open-water activities (Kayaking, Speedboats, and Shikara rides) and whenever directed by the captain on houseboats.
              </li>
              <li>
                <strong>Captain’s Maritime Authority:</strong> Under waterway regulations, the Boat Captain holds absolute authority regarding navigation, passenger safety, speed, and docking. The Captain reserves the right to adjust routes, delay departure, or dock early if weather, canal conditions, or passenger safety dictates.
              </li>
            </ul>
          </div>

          {/* 6. Guest Behavior & Code of Conduct */}
          <div className="tc-section">
            <h2>6. Guest Behavior &amp; Code of Conduct</h2>
            <p>
              We are committed to delivering peaceful, family-friendly backwater experiences and preserving the fragile ecosystem of the backwaters.
            </p>
            <ul>
              <li>
                <strong>Compliance with Operator &amp; Crew:</strong> Guests must strictly comply with all rules and instructions given by the boat captain, crew, and activity guides at all times.
              </li>
              <li>
                <strong>Zero Tolerance for Misconduct:</strong> Disorderly conduct, verbal or physical harassment of crew or other travelers, illegal drug possession, open-deck swimming while intoxicated, or intentional damage to property is strictly prohibited.
              </li>
              <li>
                <strong>Right of Removal Without Refund:</strong> Non-compliance with operator rules, safety directives, or disruptive behavior gives the operator the statutory right to terminate the cruise immediately and remove the non-compliant guest(s) from the vessel at the nearest jetty without any refund, credit, or compensation.
              </li>
              <li>
                <strong>Noise Regulations:</strong> To respect lakeside village communities and fellow boaters, loud music, portable sound systems, and high-volume celebrations are strictly prohibited on the open backwaters after 9:00 PM.
              </li>
            </ul>
          </div>

          {/* 7. Health, Fitness & Medical Disclosures */}
          <div className="tc-section">
            <h2>7. Health, Fitness &amp; Medical Disclosures</h2>
            <p>
              Backwater tours involve boarding floating vessels, traversing stepped wooden gangways, and navigating moving water surfaces.
            </p>
            <ul>
              <li>
                <strong>Physical Fitness Requirements:</strong> A basic level of mobility and fitness may be required for boarding and disembarking vessels. Activities like kayaking and speedboats require adequate physical agility.
              </li>
              <li>
                <strong>Mandatory Medical Disclosure:</strong> Guests must proactively disclose any relevant medical conditions in advance of booking, including but not limited to severe cardiac conditions, advanced pregnancy, limited physical mobility, severe motion/sea sickness, epilepsy, or life-threatening dietary allergies.
              </li>
              <li>
                <strong>Medical Assumption of Risk:</strong> Guests acknowledge that houseboats cruise through rural backwaters where road vehicle access and hospital facilities may require water transit time. Alleppey Booking and its partners are not responsible for health complications arising from undisclosed medical conditions.
              </li>
            </ul>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="tc-section">
            <h2>8. Limitation of Liability &amp; Personal Belongings</h2>
            <ul>
              <li>
                <strong>Limitation of Liability:</strong> We are not responsible or liable for any personal injury, illness, accidental loss, or property damage sustained during cruises, transfers, or water sports, unless directly caused by our proven gross negligence.
              </li>
              <li>
                <strong>Personal Valuables &amp; Electronics:</strong> Guests are entirely responsible for their own personal belongings, cash, jewellery, cameras, and mobile devices. Alleppey Booking and its partners accept no liability for items dropped into waterways, water damage, or lost baggage.
              </li>
              <li>
                <strong>Travel Insurance:</strong> We strongly advise all guests to maintain comprehensive travel and medical insurance prior to embarking on their holiday.
              </li>
            </ul>
          </div>

          {/* 9. Force Majeure */}
          <div className="tc-section">
            <h2>9. Force Majeure (Events Beyond Control)</h2>
            <p>
              Alleppey Booking and its operating partners shall not be held liable, nor deemed in breach of contract, for any failure, delay, cancellation, or curtailment of bookings or services caused by events beyond our reasonable control (Force Majeure).
            </p>
            <p>
              Such events include, without limitation: acts of God, severe tropical cyclones, flooding, monsoon red alerts issued by the Kerala State Disaster Management Authority (KSDMA) or Port Conservator, sudden canal closures, natural disasters, epidemics, strikes, hartals, state transport blockades, or government restrictions. In such circumstances, our standard Force Majeure provisions outlined in our <Link href="/cancellation-refund-policy/" className="text-orange-600 underline font-semibold">Cancellation &amp; Refund Policy</Link> shall govern.
            </p>
          </div>

          {/* 10. Governing Law & Legal Jurisdiction */}
          <div className="tc-section">
            <h2>10. Governing Law &amp; Legal Jurisdiction</h2>
            <p>
              These Terms and Conditions, booking agreements, and any disputes or claims arising out of or in connection with our website or services shall be governed by and construed in accordance with the substantive <strong>laws of India</strong>.
            </p>
            <p>
              Any legal proceedings, disputes, or claims shall be subject to the exclusive territorial and subject-matter jurisdiction of the competent courts in <strong>Alappuzha (Alleppey), Kerala, India</strong>.
            </p>
          </div>

          {/* 11. Support & Contact Information */}
          <div className="tc-section">
            <h2>11. Contact &amp; Support Desk</h2>
            <p>
              If you have any questions or require clarification regarding these terms, please contact our support desk:
            </p>
            <div className="tc-contact-box bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm space-y-1.5 mt-3">
              <p><strong>Alleppey Booking</strong></p>
              <p><strong>Operating Address:</strong> Punnamada Finishing Point Road, Punnamada, Alappuzha, Kerala 688013, India</p>
              <p><strong>WhatsApp / Support Desk:</strong> <a href="https://wa.me/917012761588" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold underline">+91 70127 61588</a></p>
              <p><strong>Email:</strong> <a href="mailto:support@alleppeybooking.com" className="text-blue-600 font-semibold underline">support@alleppeybooking.com</a> / <a href="mailto:info@alleppeybooking.com" className="text-blue-600 font-semibold underline">info@alleppeybooking.com</a></p>
              <p><strong>Desk Hours:</strong> Open Daily 6:00 AM – 11:00 PM IST</p>
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap gap-4">
            <span>Also see:</span>
            <Link href="/cancellation-refund-policy/" className="text-orange-600 hover:underline">
              Cancellation &amp; Refund Policy
            </Link>
            <span>•</span>
            <Link href="/privacy-policy/" className="text-orange-600 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact/" className="text-orange-600 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
