import React, { useEffect, useRef } from "react";
import "./Offer.css";

export default function Offers() {
  const cardsRef = useRef([]);

  const offers = [
    {
      title: "Festive Combo",
      desc: "4 Essential Spices",
      price: "₹499",
      oldPrice: "₹699",
      discount: "28% OFF"
    },
    {
      title: "Kitchen Pack", 
      desc: "Daily Essentials",
      price: "₹299",
      oldPrice: "₹399",
      discount: "25% OFF"
    },
    {
      title: "Biryani Kit",
      desc: "Complete Set",
      price: "₹399",
      oldPrice: "₹499",
      discount: "20% OFF"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("show"), i * 100);
        }
      });
    });
    cardsRef.current.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="offers-section">
      <h2 className="section-title">Special <span>Offers</span></h2>
      
      <div className="offers-grid">
        {offers.map((offer, i) => (
          <div 
            key={i}
            className="offer-card"
            ref={el => cardsRef.current[i] = el}
          >
            <div className="discount-tag">{offer.discount}</div>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <div className="price-row">
              <span className="old-price">₹{offer.oldPrice}</span>
              <span className="new-price">₹{offer.price}</span>
            </div>
            <button className="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}