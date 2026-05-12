import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Formspree)
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1><span>Get In</span> Touch</h1>
        <p> We'd love to hear from you. Reach out and let's discuss your project. </p>
      </div>
      

      <div className="contact-content">
        
        {/* Left: Contact Info */}
        <div className="contact-info">
           <div className="map-section">
        <h3 className="map-title">Our Location</h3>
        <div className="map-container">
          <iframe
            title="Raipur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5!2d81.6299!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f4a7d3b5b5b5%3A0x4b5e5f5e5f5e5f5e!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1630000000000"
            loading="lazy"
            className="map-iframe"
          ></iframe>
        </div>
      </div>
      <br />
        <div style={{display:'flex', justifyContent:'space-evenly'}}>

          <div className="info-card phone-card">
            <div className="icon-wrapper">📞</div>
           <div> 
            <h3>Phone</h3>
            <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-card email-card">
            <div className="icon-wrapper">📧</div>
           <div> <h3>Email</h3>
            <p>support@masala.com</p>
            </div>
          </div>

          <div className="info-card location-card">
            <div className="icon-wrapper">📍</div>
           <div> <h3>Address</h3>
            <p>Raipur, Chhattisgarh, India</p>
            </div>
          </div>
</div>
        
        </div>

        {/* Right: Form */}
        <div className="contact-form">
          <h2>Send Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
     
    </div>
  );
}