"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsView() {
  return (
    <div className="about-us-pure w-full">
      


<div className="au-hero-wrapper">
    <div className="au-hero-container">
        <span className="au-badge">⚓ Curated Experiences</span>
        <h1 className="au-hero-title">Welcome to <span className="au-highlight">Alleppey Booking.</span></h1>
        <p className="au-hero-subtitle">We partner with Alleppey's finest boat owners and local experts to bring you the absolute best backwater experiences and things to do.</p>
    </div>
</div>


<div className="au-story-wrapper">
    <div className="au-story-container">
        
        <div className="au-story-text">
            <span className="au-subtitle">Our Vision</span>
            <h2>Curating the Best of Alleppey.</h2>
            <p>What began as a deep-rooted passion for our hometown has evolved into Alleppey Booking. Founded by Abhijith R, our goal is simple: to provide the ultimate Kerala backwater experience by partnering with Alleppey's finest, highest-rated boat owners and service providers.</p>
            <p>We don't just offer boat rides; we cover all the best things to do in Alleppey. From the absolute luxury of premium houseboats and the peaceful glide of a kayak, to the adrenaline rush of a speedboat, we have handpicked a network of the best vessels and local teams to make it happen.</p>
            <p>By blending modern digital booking convenience with a curated network of local experts, we guarantee a seamless, transparent, and unforgettable journey for every single guest.</p>
        </div>

        <div className="au-story-image-box">
            <Image
                src="/wp-content/uploads/2026/06/WhatsApp-Image-2026-04-11-at-2.46.34-PM-3.webp"
                alt="Alleppey Backwaters - Traditional houseboat cruise"
                width={600}
                height={400}
                priority
                sizes="(max-width: 640px) 100vw, 600px"
                className="w-full h-auto block rounded-[20px]"
            />
            <div className="au-experience-badge">
                <h3>100%</h3>
                <p>Authentic Kerala</p>
            </div>
        </div>

    </div>
</div>


<div className="au-team-wrapper">
    <div className="au-section-header">
        <span className="au-subtitle">The People Behind the Scenes</span>
        <h2 style={{"fontSize":"32px","fontWeight":"800","color":"#1a2b3c","margin":"0"}}>Our Team & Network</h2>
    </div>

    <div className="au-team-grid">
        
        
        <div className="au-team-card">
            <div className="au-team-avatar">👨‍💻</div>
            <h3>Abhijith R & Team</h3>
            <span className="au-team-role">Management Team</span>
            <p>With a strong background in digital marketing, Abhijith and our dedicated team manage the operations to ensure that from your first click on our website to your final checkout, your experience is smooth, transparent, and professionally handled by our team.</p>
        </div>

        
        <div className="au-team-card">
            <div className="au-team-avatar" style={{"background":"#fff0e6","color":"#ff6600"}}>🤝</div>
            <h3>Our Local Partners</h3>
            <span className="au-team-role">Elite Boat Owners & Crews</span>
            <p>We have partnered exclusively with Alleppey's top-rated boat owners, captains, and guides. This strict selection process ensures you are always guided by experienced professionals on safe, well-maintained vessels.</p>
        </div>

    </div>

    
    <div className="au-features-container">
        
        <div className="au-feature-card">
            <div className="au-feature-icon">💎</div>
            <h4>Handpicked Providers</h4>
            <p>We do the hard work for you. We only partner with service providers who have a proven track record of excellent hospitality and safety.</p>
        </div>

        <div className="au-feature-card">
            <div className="au-feature-icon">🦺</div>
            <h4>Uncompromising Safety</h4>
            <p>Your safety is our top priority. All vessels within our partner network are government-registered, strictly maintained, and fully equipped.</p>
        </div>

        <div className="au-feature-card">
            <div className="au-feature-icon">🌿</div>
            <h4>Deep Local Roots</h4>
            <p>Because our network is built purely on local Alleppey operators, you gain access to hidden canals, authentic local dining, and true Kerala culture.</p>
        </div>

    </div>
</div>
    </div>
  );
}
