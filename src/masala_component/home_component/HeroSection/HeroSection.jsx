import { Link } from 'react-router-dom';
import './HeroSection.css';

import heroImg from '../../../image/desi_img2.png';
import storyImg from '../../../image/desi_img1.png';
import bannerImg from '../../../image/desi_img4.png';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-strip">
            <span>Free Shipping above ₹499</span>
            <span>COD Available</span>
            <span>No Preservatives</span>
          </div>

          <p className="hero-kicker">Authentic Indian beverage & food mixes</p>

          <h1 className="hero-title">
            𝑫𝒆𝒔𝒉 𝒌𝒂  स्वाद 𝑨𝒃 𝑯𝒂𝒓 घर 𝑻𝒂𝒌
          </h1>
  <span className="hero-quote">
    “हर घर की रसोई में असली स्वाद और अपनापन ”
  </span>
          <p className="hero-text">
            Ready-to-use mixes for beverages, masalas and festive recipes — built for busy families
            who still want real taste.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <a href="#best-sellers" className="btn btn-secondary">
              Explore Products
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-box box1">
              <strong >10,000+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="trust-box box2">
              <strong>Since 1969</strong>
              <span>Trusted flavour legacy</span>
            </div>
            <div className="trust-box box3">
              <strong>FSSAI</strong>
              <span>Certified quality</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="custom-slider">
              <img src={heroImg} className="slide slide-1" alt="Featured product" />
              <img src={storyImg} className="slide slide-2" alt="Ingredients" />
              <img src={bannerImg} className="slide slide-3" alt="Brand banner" />
            </div>

            <div className="hero-float hero-float-top">
              <span className="hero-float-dot" />
              <div>
                <strong>Premium Quality</strong>
                <p>Freshly crafted blends</p>
              </div>
            </div>

            <div className="hero-float hero-float-bottom">
              <strong>100% Authentic Taste</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}