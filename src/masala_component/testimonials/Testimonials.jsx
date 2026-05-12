import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      text: "Best spices ever! Pure taste and amazing aroma.",
      name: "Priya Sharma"
    },
    {
      text: "Amazing quality! Feels like homemade masalas.",
      name: "Rahul Verma"
    },
    {
      text: "Packaging is very hygienic and premium.",
      name: "Anjali Gupta"
    }
  ];

  return (
    <section className="test-section">
      <h2 className="test-title">
        Customer <span>Testimonials</span>
      </h2>

      <div className="test-container">
        {reviews.map((r, i) => (
          <div key={i} className="test-card">
            <p className="review">“{r.text}”</p>
            <h4 className="name">— {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}