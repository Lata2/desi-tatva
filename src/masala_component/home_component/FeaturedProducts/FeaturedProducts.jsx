import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './FeaturedProducts.css';


const products = [
  {
    name: 'Premium Chaas Masala',
    rating: 4.9,
    tag: 'Featured',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
  },
  {
    name: 'Thandai Special Mix',
    rating: 4.8,
    tag: 'Summer Special',
    img: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg',
  },
  {
    name: 'Garam Masala Blend',
    rating: 4.9,
    tag: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
  },
  {
    name: 'Biryani Masala',
    rating: 4.8,
    tag: 'Chef Choice',
    img: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="container section featured-section">
    <div className="section-head featured-head">
  <p className="section-kicker">✨ Featured Collection</p>

  <h2 className="featured-title">
    <span className="line1">Handpicked Premium Selection</span>

    <span className="line2">
      Pure Taste • Authentic Masalas • Home Made Feel
    </span>

    <span className="line3">
      “Har product mein ghar ka swaad ”
    </span>
  </h2>
</div>

      <div className="featured-grid">
        {products.map((item, index) => (
          <article className="featured-card" key={index}>
            <div className="featured-img">
              <img src={item.img} alt={item.name} />
              <span className="featured-tag">{item.tag}</span>
            </div>

            <div className="featured-body">
              <h3>{item.name}</h3>

              <div className="featured-rating">
                <FaStar />
                <span>{item.rating}</span>
              </div>

              <div className="featured-footer">
                <Link to="/products" className="view-more-btn">
                  View More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}