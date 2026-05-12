import React from 'react';
import "./Legal.css";

export default function Terms() {
  return (
    <section className="legal-section">
      <div className="container">
        <h1>Terms & Conditions</h1>
        <div className="legal-content">
          <h2>1. General</h2>
          <p>Masala Magic Pvt Ltd ("we", "us") operates masalamagic.com. By using our site, you agree to these terms.</p>

          <h2>2. Orders & Payments</h2>
          <ul>
            <li>Prices exclude taxes (GST added at checkout)</li>
            <li>Payment via COD, UPI, Cards</li>
            <li>Order confirmation via SMS/email</li>
            <li>We reserve right to cancel orders</li>
          </ul>

          <h2>3. Shipping</h2>
          <ul>
            <li>Raipur: Free (min ₹2000), 24 hrs</li>
            <li>Chhattisgarh: ₹50, 2-3 days</li>
            <li>India: ₹100, 4-7 days</li>
          </ul>

          <h2>4. Returns & Refunds</h2>
          <ul>
            <li>7 days for defective/wrong products</li>
            <li>No returns on opened packs</li>
            <li>Refund within 5-7 days</li>
          </ul>

          <h2>5. Account & Security</h2>
          <p>You are responsible for account security. Notify us of unauthorized use.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Our liability limited to order value. Products for consumption as-is.</p>

          <p><em>Last updated: April 2026 | <a href="/contact">Contact Us</a></em></p>
        </div>
      </div>
    </section>
  );
}