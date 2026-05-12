import React, { useEffect, useRef } from "react";
import "./Choose.css";

export default function Choose() {
  const cardsRef = useRef([]);

  const reasons = [
    {
      icon: "🌿",
      title: "Premium Raw Materials",
      desc: "200+ trusted farmers",
      stat: "Grade A Only",
      color: "#C6A75E"
    },
    {
      icon: "✅", 
      title: "No Artificial Additives",
      desc: "100% Pure Natural",
      stat: "Zero Fillers",
      color: "#10B981"
    },
    {
      icon: "🔥",
      title: "Consistent Taste",
      desc: "Same flavor every pack",
      stat: "3 Gen Recipes",
      color: "#F59E0B"
    },
    {
      icon: "🏭",
      title: "Hygienic Packaging",
      desc: "FSSAI Certified",
      stat: "Airtight Fresh",
      color: "#3B82F6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("animate"), index * 100);
        }
      });
    }, { threshold: 0.2 });

    cardsRef.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="choose-section">
      <div className="section-bg"></div>
      
      <div className="choose-header">
        <div className="title-badge">Trusted Since 1969</div>
        <h1 className="choose-title">Why <span>Choose Us</span></h1>
      </div>

      <div className="choose-grid">
        {reasons.map((reason, i) => (
          <div 
            key={i} 
            className="choose-card" 
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ '--card-color': reason.color }}
          >
            <div className="card-icon"><span>{reason.icon}</span></div>
            <div className="card-content">
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
            <div className="card-stat"><span>{reason.stat}</span></div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>

      {/* <div className="cert-bar">
        <div className="cert-icons">
          <span>FSSAI</span><span>ISO</span><span>Halal</span>
        </div>
      </div> */}
    </section>
  );
}