import React, { useEffect, useRef } from "react";
import "./Quality.css";


export default function Quality() {
  const stepsRef = useRef([]);

  const processSteps = [
    { num: 1, title: "Sourcing", desc: "200+ Farmers", icon: "🌾", color: "#10B981" },
    { num: 2, title: "Cleaning", desc: "99.9% Pure", icon: "🧼", color: "#3B82F6" },
    { num: 3, title: "Grinding", desc: "Slow Stone", icon: "⚙️", color: "#F59E0B" },
    { num: 4, title: "Testing", desc: "Lab Tested", icon: "🔬", color: "#EF4444" },
    { num: 5, title: "Packaging", desc: "Airtight", icon: "📦", color: "#8B5CF6" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("animate"), i * 100);
        }
      });
    }, { threshold: 0.2 });

    stepsRef.current.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="quality-section">
      <div className="quality-header">
        <h2 className="quality-title">Quality <span>Process</span></h2>
        <p className="quality-desc">5 𝑺𝒕𝒆𝒑𝒔 𝒇𝒓𝒐𝒎 𝑭𝒂𝒓𝒎 𝒕𝒐 𝑻𝒂𝒃𝒍𝒆</p>
      </div>

      <div className="quality-steps">
        {processSteps.map((step, i) => (
          <div 
            key={i}
            className="step-item"
            ref={(el) => (stepsRef.current[i] = el)}
            style={{ '--step-color': step.color }}
          >
            <div className="step-icon">{step.icon}</div>
            <div className="step-number">{step.num}</div>
            <div className="step-info">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            <div className="step-line"></div>
          </div>
        ))}
      </div>

      {/* <div className="quality-cert">
        <span>FSSAI Certified</span>
      </div> */}
    </section>
  );
}