import './WhyChooseUs.css';
import { uspItems } from '../home/homeData';

export default function WhyChooseUs() {
  return (
    <section className="section section-alt why-choose-section">
      <div className="section-head why-head">
        <p className="section-kicker">Why Choose Us</p>
        <h2>Why customers trust us time after time</h2>
      </div>

      <div className="usp-grid">
        {uspItems.map((item) => (
          <article key={item.title} className="usp-card">
            <div className="usp-icon">
              <item.icon />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}