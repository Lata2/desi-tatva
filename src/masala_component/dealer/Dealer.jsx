import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Dealer.css";

export default function Dealer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    businessType: "",
    experience: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit - replace with API/emailjs
    console.log("Dealer form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3s
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", location: "", businessType: "", experience: "", message: "" });
    }, 3000);
  };

  return (
    <section className="dealer-section">
      <div className="container">
        
        {/* Hero */}
        <div className="dealer-hero">
          <h1 className="hero-title">
        𝑩𝒆𝒄𝒐𝒎𝒆 𝒂   <span>𝑴𝒂𝒔𝒂𝒍𝒂 𝑴𝒂𝒈𝒊𝒄</span> 𝑫𝒆𝒂𝒍𝒆𝒓
          </h1>
          <p className="hero-desc">
            Join 500+ distributors across Chhattisgarh & India. 
            Exclusive wholesale pricing, fast delivery, marketing support.
          </p>
        </div>

        <div className="dealer-content">
          
          {/* Form */}
          <div className="dealer-form-card">
            <h2>Dealer Application</h2>
            <p className="form-subtitle">Fill details to become our partner (5 mins)</p>
            
            <form onSubmit={handleSubmit} className="dealer-form">
              
              {/* Personal Info */}
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="99999 99999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              {/* Business Info */}
              <div className="form-row">
                <div className="form-group">
                  <label>Location / City *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Raipur, Durg, Bhilai, etc."
                  />
                </div>
                <div className="form-group">
                  <label>Business Type *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select business type</option>
                    <option value="General Store">General/Kirana Store</option>
                    <option value="Supermarket">Supermarket/Departmental</option>
                    <option value="Wholesale">Wholesale Distributor</option>
                    <option value="Restaurant">Restaurant/Catering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Experience (Years)</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 Year</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why partner with us? Expected order volume?"
                />
              </div>

              <button type="submit" className="ct-btn">
                {submitted ? "✅ Submitted!" : "Become a Partner"}
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="dealer-benefits">
            <h3>Why Partner With Us?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">₹</div>
                <h4>Wholesale Pricing</h4>
                <p>30-40% margins on MRP</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🚚</div>
                <h4>Free Delivery</h4>
                <p>Raipur & nearby (min ₹2000)</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📦</div>
                <h4>Fast Supply</h4>
                <p>24-48 hrs delivery</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎁</div>
                <h4>Marketing Support</h4>
                <p>Free POS materials, schemes</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="quick-contact">
              <h4>Ready to Start? Call Now!</h4>
              <div className="contact-buttons">
                <a href="tel:+919999999999" className="contact-btn phone">
                  <FaPhone /> +91 99999 99999
                </a>
                <a href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20become%20dealer" className="contact-btn whatsapp">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="mailto:dealers@masalamagic.com" className="contact-btn email">
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}