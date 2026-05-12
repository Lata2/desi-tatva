import './BestSellers.css';
import { bestSeller } from '../home/homeData';
import { FaStar } from 'react-icons/fa';

export default function BestSellers() {
  return (
    <section className="section section-alt" id="best-sellers">
      <div className="section-head">
        <p className="section-kicker">🔥 Best Sellers</p>
        <h2>Top products, combo packs & family favourites</h2>
        <p className="section-subtext">
          Ghar ka asli swad ab har kitchen tak
        </p>
      </div>

      <div className="best-seller-grid">
        {bestSeller?.map((item, index) => (
          <article key={index} className="product-card">
            <div className="img-box">
              <img src={item.img} alt={item.name} />
              <span className="tag">{item.tag}</span>
            </div>

            <h3>{item.name}</h3>

            <div className="rating">
              <FaStar />
              <span>{item.rating}</span>
            </div>

            <p>Authentic Indian taste crafted for daily cooking.</p>

            <button className="btn">View Details</button>
          </article>
        ))}
      </div>
    </section>
  );
}