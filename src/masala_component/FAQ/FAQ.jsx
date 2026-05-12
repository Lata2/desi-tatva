import React, { useState } from 'react';
import "./FAQ.css";

const faqs = [
  {
    q: "What is the shelf life of Masala Magic products?",
    a: "All our masalas have 12+ months shelf life when stored in cool, dry place. Always check pack for exact date."
  },
  {
    q: "How to store spices properly?",
    a: "Keep in airtight containers away from sunlight & moisture. Avoid fridge - absorbs odors. Use within 6-8 months after opening."
  },
  {
    q: "How much masala per serving?",
    a: "1 tsp (5g) per person for curries. ½ tsp for rice/vegetables. Adjust to taste."
  },
  {
    q: "Are products preservative-free?",
    a: "Yes! 100% natural, no artificial colors/preservatives. Pure spice goodness."
  },
  {
    q: "Can I use for restaurant?",
    a: "Perfect for bulk! Contact our dealer team for wholesale pricing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-intro">Everything about our masalas</p>
        
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={`arrow ${openIndex === idx ? 'open' : ''}`}>▼</span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}