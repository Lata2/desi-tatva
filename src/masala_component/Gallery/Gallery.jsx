import React from 'react';
import './Gallery.css';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/30893353/pexels-photo-30893353.jpeg', alt: 'Spice grinding factory', caption: 'Our Raipur Factory' },
  { src: 'https://images.pexels.com/photos/30893353/pexels-photo-30893353.jpeg', alt: 'Turmeric packing', caption: 'Quality Packing' },
  { src: 'https://images.pexels.com/photos/30893353/pexels-photo-30893353.jpeg', alt: 'Workers sorting spices', caption: 'Hand-sorted Spices' },
  { src: 'https://images.pexels.com/photos/30893353/pexels-photo-30893353.jpeg', alt: 'Masala blends', caption: 'Fresh Blends' },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h1>Our Story in Pictures</h1>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img.src} alt={img.alt} />
              <div className="caption">{img.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
