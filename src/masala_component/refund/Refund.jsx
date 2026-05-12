import React from 'react';
// import "./Refund.css";

export default function Refund() {
  return (
    <section className="legal-section">
      <div className="container">
        <h1>Refund Policy</h1>
        <div className="policy-grid">
          <div className="policy-card eligible">
            <h3>✅ Eligible for Refund</h3>
            <ul>
              <li>Wrong product delivered</li>
              <li>Defective/damaged packaging</li>
              <li>Short quantity</li>
              <li>Non-delivery (7 days after dispatch)</li>
            </ul>
            <p><strong>Process:</strong> Photo proof → Refund 100% within 5-7 days</p>
          </div>
          
          <div className="policy-card not-eligible">
            <h3>❌ Not Eligible</h3>
            <ul>
              <li>Opened/used packs</li>
              <li>Change of mind</li>
              <li>Expired products (check before opening)</li>
            </ul>
          </div>
        </div>

        <div className="refund-steps">
          <h2>How to Claim Refund</h2>
          <ol>
            <li>Email <strong>support@masalamagic.com</strong> with Order ID + photos</li>
            <li>We verify within 24 hrs</li>
            <li>Refund to original payment method</li>
            <li>Track status in <a href="/account">Account</a></li>
          </ol>
        </div>

        <div className="important-note">
          <h3>⚠️ Consumer Rights (India)</h3>
          <p>Protected under Consumer Protection Act 2019. 7-day cooling-off for defectives.</p>
        </div>
      </div>
    </section>
  );
}