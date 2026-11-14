"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Wind, 
  LifeBuoy, 
  Users, 
  Scale, 
  Sparkles,
  MessageCircle,
  HelpCircle,
  AlertCircle
} from "lucide-react";

export default function TermsConditionsView() {
  return (
    <div className="legal-pure w-full">
      {/* Hero Section */}
      <div className="tc-hero-wrapper">
        <div className="tc-hero-container">
          <span className="tc-badge">Transparent Policies</span>
          <h1 className="tc-hero-title">Terms &amp; Conditions</h1>
          <p className="tc-hero-subtitle">
            Clear, honest, and traveler-friendly booking guidelines for your Alleppey backwater journey.
          </p>
        </div>
      </div>

      {/* Main Document Card */}
      <div className="tc-content-wrapper">
        <div className="tc-document-card">
          
          {/* Sticky Quick-Jump Pill Bar */}
          <div className="policy-sticky-nav-wrapper">
            <nav className="policy-sticky-nav" aria-label="Table of Contents">
              <a href="#glance" className="policy-pill policy-pill-active">
                <Sparkles size={13} /> At a Glance
              </a>
              <a href="#payments" className="policy-pill">1. Payments</a>
              <a href="#timings" className="policy-pill">2. Timings &amp; AC</a>
              <a href="#child-extra" className="policy-pill">3. Children</a>
              <a href="#cancellation" className="policy-pill">4. Cancellation</a>
              <a href="#safety" className="policy-pill">5. Safety</a>
              <a href="#conduct" className="policy-pill">6. Guest Conduct</a>
              <a href="#health" className="policy-pill">7. Health &amp; Fitness</a>
              <a href="#liability" className="policy-pill">8. Liability</a>
              <a href="#force-majeure" className="policy-pill">9. Force Majeure</a>
              <a href="#legal" className="policy-pill">10. Legal &amp; Courts</a>
            </nav>
          </div>

          <span className="tc-last-updated">Last Updated: June 2026 • Alleppey Booking</span>

          {/* AT A GLANCE CARDS */}
          <section id="glance" className="policy-glance-section">
            <div className="policy-glance-header">
              <h2 className="policy-glance-title">
                <Sparkles size={18} className="text-amber-500" /> Key Rules at a Glance (Quick Summary)
              </h2>
              <span className="policy-glance-badge">2-Min Read</span>
            </div>

            <div className="policy-glance-grid">
              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-blue">
                  <ShieldCheck size={18} />
                </div>
                <div className="policy-glance-label">Advance to Secure</div>
                <p className="policy-glance-desc">
                  An advance payment locks your vessel, dedicated crew, and chef. Balance is payable at check-in.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-amber">
                  <Clock size={18} />
                </div>
                <div className="policy-glance-label">5:30 PM Night Halt</div>
                <p className="policy-glance-desc">
                  Kerala Government prohibits cruising after 5:30 PM. The boat safely docks for evening dinner &amp; overnight stay.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-teal">
                  <Wind size={18} />
                </div>
                <div className="policy-glance-label">Deluxe AC Schedule</div>
                <p className="policy-glance-desc">
                  Deluxe bedroom AC runs 9:00 PM – 6:00 AM. Premium &amp; Luxury houseboats include 24-hour AC.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-emerald">
                  <LifeBuoy size={18} />
                </div>
                <div className="policy-glance-label">Safety &amp; Briefings</div>
                <p className="policy-glance-desc">
                  Pre-departure safety demo is compulsory. Life jackets are provided and mandatory on open boats.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-rose">
                  <Users size={18} />
                </div>
                <div className="policy-glance-label">Family Environment</div>
                <p className="policy-glance-desc">
                  Zero tolerance for misconduct or crew harassment. Loud sound systems are banned after 9:00 PM.
                </p>
              </div>

              <div className="policy-glance-card">
                <div className="policy-glance-icon policy-icon-purple">
                  <Scale size={18} />
                </div>
                <div className="policy-glance-label">Alleppey Courts</div>
                <p className="policy-glance-desc">
                  Governed under the laws of India, with exclusive jurisdiction in courts of Alappuzha (Alleppey), Kerala.
                </p>
              </div>
            </div>
          </section>

          {/* 1. General Booking & Payments */}
          <section id="payments" className="tc-section">
            <h2>1. General Booking &amp; Payments</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <Sparkles size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Your advance payment guarantees that your boat and crew are reserved exclusively for your travel date.</li>
                <li>Please bring a Government ID (Aadhaar, Passport, DL) for all adult guests; it is required by local Kerala tourism police.</li>
                <li>Any remaining balance is payable at the boarding jetty before cruising begins.</li>
              </ul>
            </div>
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
          </section>

          {/* 2. Houseboat Timings & Cruising Rules */}
          <section id="timings" className="tc-section">
            <h2>2. Houseboat Timings &amp; Cruising Regulations</h2>
            <div className="policy-plain-english variant-amber">
              <div className="policy-plain-english-header">
                <Clock size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Check-in is around 12:00 PM and check-out is 9:00 AM following breakfast.</li>
                <li>By Kerala Government law, all houseboats must stop moving and dock safely by <strong>5:30 PM</strong> to protect local fishermen and night waterways. You stay, relax, and dine on the docked boat.</li>
                <li>If you booked a <strong>Deluxe</strong> boat, bedroom AC operates from 9:00 PM to 6:00 AM. If you require full-time AC, choose our <strong>Premium</strong> or <strong>Luxury</strong> fleet.</li>
              </ul>
            </div>
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
          </section>

          {/* 3. Child Policy & Extra Guests */}
          <section id="child-extra" className="tc-section">
            <h2>3. Child Policy &amp; Extra Guests</h2>
            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <Users size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Kids below 5 years stay completely free (sharing bed with parents).</li>
                <li>Children 5 years and above are counted as extra guests with a comfortable mattress and freshly prepared meals included.</li>
                <li>Have food preferences (less spicy, Jain, vegetarian)? Tell us at least 24 hours prior to check-in so our on-board chef can shop fresh!</li>
              </ul>
            </div>
            <ul>
              <li>Children below 5 years of age stay complimentary when sharing existing bedding with parents.</li>
              <li>Children aged 5 years and above are counted as extra occupants and charged at standard published extra-person rates with mattress/bedding and meals included.</li>
              <li>Special culinary requests or deviations from the traditional Kerala set menu must be communicated to our team at least 24 hours prior to check-in.</li>
            </ul>
          </section>

          {/* 4. Cancellation & Refund Policy */}
          <section id="cancellation" className="tc-section">
            <h2>4. Cancellation &amp; Refund Policy</h2>
            <div className="policy-plain-english variant-rose">
              <div className="policy-plain-english-header">
                <AlertCircle size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li><strong>30+ days notice:</strong> 90% refund (10% covers banking fees).</li>
                <li><strong>15–29 days notice:</strong> 50% refund.</li>
                <li><strong>Under 15 days:</strong> Non-refundable, as the vessel is locked exclusively for you.</li>
                <li>If official weather alerts stop boats, you get a 100% free date reschedule or full refund.</li>
              </ul>
            </div>
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
          </section>

          {/* 5. Safety Briefings & Mandatory Protocols */}
          <section id="safety" className="tc-section">
            <h2>5. Safety Briefings &amp; Life Jackets</h2>
            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <LifeBuoy size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>A short safety briefing is given before departure so everyone knows where life jackets and safety gear are located.</li>
                <li>Life jackets must be worn on Shikaras, Kayaks, and Speedboats.</li>
                <li>The boat captain is in charge of your safety on the water; please follow their instructions.</li>
              </ul>
            </div>
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
          </section>

          {/* 6. Guest Behavior & Code of Conduct */}
          <section id="conduct" className="tc-section">
            <h2>6. Guest Behavior &amp; Code of Conduct</h2>
            <div className="policy-plain-english variant-amber">
              <div className="policy-plain-english-header">
                <Users size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Treat our boat crew, local villagers, and fellow tourists with courtesy and respect.</li>
                <li>Intoxicated swimming, dangerous stunts, and illegal drugs are strictly forbidden.</li>
                <li>Guests violating safety rules or harassing crew will be offloaded at the nearest jetty without any refund.</li>
                <li>Loud music must be switched off after 9:00 PM to respect quiet village life.</li>
              </ul>
            </div>
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
          </section>

          {/* 7. Health, Fitness & Medical Disclosures */}
          <section id="health" className="tc-section">
            <h2>7. Health, Fitness &amp; Medical Disclosures</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <HelpCircle size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Boarding a boat involves steps and gangways; please let us know if anyone in your group has mobility limitations.</li>
                <li>If you are pregnant, have severe cardiac conditions, or critical allergies, notify us beforehand so we can arrange suitable ground support.</li>
                <li>Houseboats cruise through inland villages where hospitals are a short boat ride away.</li>
              </ul>
            </div>
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
          </section>

          {/* 8. Limitation of Liability */}
          <section id="liability" className="tc-section">
            <h2>8. Limitation of Liability &amp; Personal Belongings</h2>
            <div className="policy-plain-english variant-purple">
              <div className="policy-plain-english-header">
                <ShieldCheck size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>Please take care of your personal phones, cameras, jewellery, and luggage. Don't leave gadgets unattended near the boat edges!</li>
                <li>We are not responsible for accidental loss or slips unless caused by our direct negligence. Travel insurance is always a smart choice.</li>
              </ul>
            </div>
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
          </section>

          {/* 9. Force Majeure */}
          <section id="force-majeure" className="tc-section">
            <h2>9. Force Majeure (Events Beyond Control)</h2>
            <div className="policy-plain-english variant-emerald">
              <div className="policy-plain-english-header">
                <AlertCircle size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>If severe weather (red alerts, cyclone warnings) or unexpected government locks prevent cruising, we won't leave you stranded.</li>
                <li>You will be offered a 100% free date reschedule or a full refund as per our Cancellation &amp; Refund Policy.</li>
              </ul>
            </div>
            <p>
              Alleppey Booking and its operating partners shall not be held liable, nor deemed in breach of contract, for any failure, delay, cancellation, or curtailment of bookings or services caused by events beyond our reasonable control (Force Majeure).
            </p>
            <p>
              Such events include, without limitation: acts of God, severe tropical cyclones, flooding, monsoon red alerts issued by the Kerala State Disaster Management Authority (KSDMA) or Port Conservator, sudden canal closures, natural disasters, epidemics, strikes, hartals, state transport blockades, or government restrictions. In such circumstances, our standard Force Majeure provisions outlined in our <Link href="/cancellation-refund-policy/" className="text-orange-600 underline font-semibold">Cancellation &amp; Refund Policy</Link> shall govern.
            </p>
          </section>

          {/* 10. Governing Law & Legal Jurisdiction */}
          <section id="legal" className="tc-section">
            <h2>10. Governing Law &amp; Legal Jurisdiction</h2>
            <div className="policy-plain-english variant-sky">
              <div className="policy-plain-english-header">
                <Scale size={14} /> In Plain English: What this means for you
              </div>
              <ul>
                <li>All bookings and customer relations are governed under Indian law.</li>
                <li>Any legal matters are handled exclusively by the courts in Alappuzha (Alleppey), Kerala.</li>
              </ul>
            </div>
            <p>
              These Terms and Conditions, booking agreements, and any disputes or claims arising out of or in connection with our website or services shall be governed by and construed in accordance with the substantive <strong>laws of India</strong>.
            </p>
            <p>
              Any legal proceedings, disputes, or claims shall be subject to the exclusive territorial and subject-matter jurisdiction of the competent courts in <strong>Alappuzha (Alleppey), Kerala, India</strong>.
            </p>
          </section>

          {/* Instant WhatsApp Support CTA */}
          <div className="policy-support-cta">
            <div className="policy-support-info">
              <h3>Have questions about our Terms &amp; Conditions?</h3>
              <p>Our Alleppey booking desk is online daily from 6:00 AM to 11:00 PM IST to assist you.</p>
            </div>
            <a 
              href="https://wa.me/917012761588?text=Hi%20Alleppey%20Booking!%20I%20have%20a%20question%20regarding%20your%20Terms%20%26%20Conditions."
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
