import React from 'react';
// import "./Legal.css";

export default function Privacy() {
  return (
    <section className="legal-section">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="legal-content">
          <h2>1. Information We Collect</h2>
          <p>We collect personal information like name, phone, email, address when you:</p>
          <ul>
           <li>Place orders</li>
            <li>Create account</li>
            <li>Contact support</li>
            <li>Subscribe to newsletter</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
        
          <ul>
            <li>Process & deliver orders</li>
            <li>Send order updates</li>
            <li>Marketing (opt-out anytime)</li>
            <li>Improve services</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>We share with:</p>
          <ul>
            <li>Courier partners (delivery only)</li>
            <li>Payment gateways</li>
            <li>Legal authorities (if required)</li>
          </ul>

          <h2>4. Your Rights (Under DPDP Act 2023)</h2>
        
          <ul>
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Delete data (subject to legal)</li>
            <li>Opt-out marketing</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>We use essential cookies for cart & login. No tracking cookies.</p>

          <p><strong>Contact:</strong> privacy@masalamagic.com | Last updated: April 2026</p>
        </div>
      </div>
    </section>
  );
}