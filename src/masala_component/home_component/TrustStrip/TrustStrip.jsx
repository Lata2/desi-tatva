import './TrustStrip.css';
import { FaCertificate, FaCheckCircle, FaLeaf, FaTruck } from 'react-icons/fa';

export default function TrustStrip() {
  return (
    <section className="section trust-section">

      {/* Heading */}
      <div className="trust-heading">
        <h2>Certifications & Trust</h2>
        <p>We ensure purity, safety, and fast service you can rely on</p>
      </div>

      <div className="trust-strip">

        <div className="trust-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
            alt="FSSAI Certified"
          />
          <div><FaCertificate /> FSSAI Certified</div>
        </div>

        <div className="trust-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Vegetarian"
          />
          <div><FaCheckCircle /> 100% Vegetarian</div>
        </div>

        <div className="trust-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2909/2909765.png"
            alt="Authentic Ingredients"
          />
          <div><FaLeaf /> Authentic Ingredients</div>
        </div>

        <div className="trust-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1048/1048313.png"
            alt="Fast Delivery"
          />
          <div><FaTruck /> Fast Delivery</div>
        </div>

      </div>
    </section>
  );
}