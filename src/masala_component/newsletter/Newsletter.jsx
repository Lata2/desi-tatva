import React, { useState } from 'react';
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Mock EmailJS
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h1>Spice Up Your Inbox</h1>
        <p>Monthly recipes, 10% off coupons, new masala launches</p>
        
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
          <button type="submit" disabled={subscribed}>
            {subscribed ? '✅ Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <div className="recipes-preview">
          <h3>Latest Recipes</h3>
          <div>Turmeric Chicken • Chana Masala • Sambar Rice</div>
        </div>
      </div>
    </section>
  );
}