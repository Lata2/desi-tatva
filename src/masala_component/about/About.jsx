import React from "react";
import "./About.css";
import heroImage from "../../image/desi_img1.png";
// import lowResImage from "../../image/desi_img3.png ";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="about-hero">
        {/* <div 
          className="about-hero-bg"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        /> */}
    <img className="about-hero-bg" src={heroImage} alt="Hero Background" />
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-tag">Since 1969</span>
            <h1 className="about-hero-title">
              From Our Kitchen<br/>
              <span>To Yours</span>
            </h1>
            <p className="about-hero-text">
              Three generations of spice mastery, bringing authentic Indian flavors to millions of homes.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT: ORIGIN + TIMELINE */}
          <div className="about-content">
            <span className="about-tag">Our Origin</span>
            <h2 className="about-title">Legacy Since 1969</h2>
            
            <div className="about-timeline">
              <div className="about-timeline-item">
                <span className="about-year">1969</span>
                <p>Started as family kitchen blending spices for neighbors</p>
              </div>
              <div className="about-timeline-item">
                <span className="about-year">1985</span>
                <p>First commercial production with traditional stone grinding</p>
              </div>
              <div className="about-timeline-item">
                <span className="about-year">2026</span>
                <p>Modern manufacturing with 100% traditional recipes</p>
              </div>
            </div>
          </div>

          {/* RIGHT: MISSION VISION */}
          <div className="about-cards">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>Deliver pure, high-quality spices that enhance every Indian meal with authentic taste, aroma, and tradition.</p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>Become India's most trusted spice brand, loved globally for quality, innovation, and preserving culinary heritage.</p>
            </div>
            <div className="about-card quote-card">
              <h3>Founder's Words</h3>
              <p>"Every pinch of our spice carries the love and tradition of three generations."<br/><strong>— Shri Ram Prasad Ji (Founder)</strong></p>
            </div>
          </div>
        </div>
      </section>

  

      {/* TEAM */}
      <section className="about-team">
        <div className="about-container">
          <h2 className="about-title">Our Dedicated Team</h2>
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="team-avatar">RK</div>
              <h4>Ram Kumar</h4>
              <p>Master Blender (3rd Gen)</p>
            </div>
            <div className="about-team-card">
              <div className="team-avatar">SP</div>
              <h4>Sita Prasad</h4>
              <p>Quality Head</p>
            </div>
            <div className="about-team-card">
              <div className="team-avatar">MJ</div>
              <h4>Mohan Ji</h4>
              <p>Farm Sourcing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}