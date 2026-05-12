import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-grid">
          <div>
            <h2 className="footer-brand">देशी Tatva</h2>
            <p>
              Authentic Indian beverage mixes and masalas — ready in minutes, made for repeat
              orders, and designed for modern e-commerce.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div>
            <h4>Shop Links</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/recipes">Recipes / Blog</Link></li>
              <li><Link to="/dealer">Bulk / B2B</Link></li>
            </ul>
          </div>

          <div>
            <h4>Policies</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div className="contact-item"><FaMapMarkerAlt /> <span>Raipur, Chhattisgarh</span></div>
            <div className="contact-item"><FaPhone /> <span>+91 98765 43210</span></div>
            <div className="contact-item"><FaEnvelope /> <span>support@desitatva.com</span></div>
            <div className="contact-item"><FaShieldAlt /> <span>FSSAI Certified</span></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Desi Tatva. All rights reserved.</p>
          <span>Cash on Delivery | UPI | Cards</span>
        </div>
      </div>
    </footer>
  );
}
