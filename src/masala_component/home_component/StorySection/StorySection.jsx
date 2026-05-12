import './StorySection.css';
import { Link } from 'react-router-dom';

export default function StorySection() {
  return (
    <section className="section story-section">
      <div className="story-grid">
        <div className="story-copy">
          <p className="section-kicker">Brand Story</p>
          <h2>
            <span className="story-highlight">Since 1969,</span> bringing authentic flavours home
          </h2>
          <p className="story-summary">
            A legacy of authentic taste, trusted quality, and everyday convenience — crafted for families who value tradition.
          </p>

          <div className="story-badges">
            <span>GMP Certified</span>
            <span>Pan-India Delivery</span>
            <span>10,000+ Happy Customers</span>
          </div>

          <Link to="/about" className="story-link">
            Read our full story
          </Link>
        </div>
      </div>
    </section>
  );
}