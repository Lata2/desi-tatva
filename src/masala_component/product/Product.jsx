import React, { useEffect, useMemo, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

export default function Product() {
 const [products] = useState([
  {
    id: 1,
    name: "Turmeric Powder",
    category: "Basic Spices",
    img: "https://thespiceway.com/cdn/shop/files/Turmeric_Powder_8oz.jpg?v=1751351642",
    price: 50,
    rating: 4.9,
    desc: "Pure organic turmeric for golden curries.",
    benefit: "Anti-inflammatory powerhouse.",
    ingredients: "100% Turmeric",
    usage: "1 tsp for curries.",
  },
  {
    id: 2,
    name: "Red Chilli Powder",
    category: "Basic Spices",
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80",
    price: 60,
    rating: 4.8,
    desc: "Bright color and strong taste for everyday cooking.",
    benefit: "Adds heat and rich color.",
    ingredients: "100% Red Chilli",
    usage: "Use as per taste.",
  },
 
  {
    id: 4,
    name: "Garam Masala",
    category: "Blended Masalas",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    price: 85,
    rating: 4.9,
    desc: "Classic Indian spice blend for deep flavor.",
    benefit: "Perfect finishing masala.",
    ingredients: "Spice Blend",
    usage: "Add at end of cooking.",
  },

]);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("name");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => filter === "all" || p.category === filter)
      .sort((a, b) =>
        sort === "price"
          ? a.price - b.price
          : sort === "popularity"
          ? b.rating - a.rating
          : a.name.localeCompare(b.name)
      );
  }, [products, filter, sort]);

  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section className="product-section">
      <div className="product-header">
        <h1 className="product-heading">
          Our <span>Products</span>
        </h1>
        <p className="product-subtitle">Simple, trusted, and carefully crafted essentials.</p>
      </div>

      <div className="product-filters">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All Categories</option>
          <option value="Basic Spices">Basic Spices</option>
          <option value="Blended Masalas">Blended Masalas</option>
          <option value="Special Mixes">Special Mixes</option>
        </select>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-img">
              <img src={p.img} alt={p.name} />
              <div className="quick-add">
                <button className="quick-btn">+</button>
              </div>
            </div>

            <div className="product-content">
              <span className="product-category">{p.category}</span>
              <h3>{p.name}</h3>
              <div className="rating">★ {p.rating} ({Math.round(p.rating * 20)} reviews)</div>
              <p className="desc">{p.desc}</p>
              <p className="benefit">{p.benefit}</p>

              <div className="product-bottom">
                <span className="price">₹{p.price}</span>
                <div className="product-actions">
                  <button className="btn-outline" onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
                    View
                  </button>
                  <button className="btn-solid">Add To Card</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}