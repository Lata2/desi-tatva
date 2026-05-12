import './NewsletterSection.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function NewsletterSection() {
  return (
    <section className="newsletter-fixed">

      <div className="newsletter-content">

        <div className="newsletter-text">
          <p className="section-kicker">Newsletter / Lead Capture</p>
          <h2>Get ₹50 OFF on your first order</h2>
          <p>Subscribe with email or WhatsApp to hear about offers, recipes and combo packs.</p>
        </div>

        <div className="newsletter-actions">
          <a href="mailto:support@desitatva.com" className="bn email-bn">
            <FaEnvelope /> Email Signup
          </a>

          <a href="https://wa.me/919876543210" className="bn whatsapp-bn" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
}