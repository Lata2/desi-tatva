import './ReviewsSection.css';
import { reviews } from '../home/homeData';
import { FaHeart } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export default function ReviewsSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScroll =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft >= maxScroll) {
          // reset to start (infinite loop effect)
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({
            left: 320,
            behavior: 'smooth',
          });
        }
      }
    }, 2500); // speed (2.5 sec)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section section-alt">

      <div className="section-head">
        <p className="section-kicker">Social Proof</p>
        <h2>Reviews and customer confidence matter</h2>
      </div>

      <div className="review-slider" ref={sliderRef}>
        {reviews.map((review) => (
          <article key={review.name} className="review-card">
            <FaHeart className="review-icon" />
            <p>“{review.text}”</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>

    </section>
  );
}