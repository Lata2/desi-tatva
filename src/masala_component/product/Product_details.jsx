import React, { useMemo, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./Product_details.css";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    {
      id: 2,
      name: "Garam Masala",
      img: "https://via.placeholder.com/400x300?text=Garam",
      price: 65,
    },
    {
      id: 3,
      name: "Sambar Powder",
      img: "https://via.placeholder.com/400x300?text=Sambar",
      price: 60,
    },
    {
      id: 4,
      name: "Chilli Powder",
      img: "https://via.placeholder.com/400x300?text=Chilli",
      price: 45,
    },
  ];

  const product = useMemo(() => {
    const passed = location.state?.product;

    const mockProducts = [
      {
        id: 1,
        name: "Turmeric Powder",
        img: "https://via.placeholder.com/600x500?text=Turmeric",
        price: 50,
        desc: "Pure organic turmeric powder for rich color & health benefits.",
        benefit: "Boosts immunity, anti-inflammatory",
        ingredients: "100% Pure Turmeric",
        usage: "Use in curries, milk, and daily cooking.",
      },
      {
        id: 2,
        name: "Garam Masala",
        img: "https://via.placeholder.com/600x500?text=Garam",
        price: 65,
        desc: "Traditional blend of aromatic spices.",
        benefit: "Enhances flavor instantly",
        ingredients: "Coriander, cumin, cloves, cardamom",
        usage: "Add at end of cooking.",
      },
    ];

    if (passed && passed.id == id) return passed;

    return mockProducts.find((p) => p.id == id);
  }, [id, location.state]);

  if (!product) {
    return (
      <section className="pdp-wrapper">
        <div className="pdp-container">
          <p>Product not found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pdp-wrapper">
      <div className="pdp-container">

        {/* BACK BUTTON */}
        <button className="pdp-back" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>

        {/* MAIN GRID */}
        <div className="pdp-grid">

          {/* IMAGE SECTION */}
          <div className="pdp-imageCard">
            <img src={product.img} alt={product.name} />

            <div className="pdp-thumbs">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={product.img}
                  alt="thumb"
                  onClick={() => setCurrentImage(i)}
                />
              ))}
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="pdp-infoCard">

            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-sub">{product.desc}</p>

            <div className="pdp-price">₹{product.price}</div>

            <div className="pdp-box">
              <p><b>Benefit:</b> {product.benefit}</p>
              <p><b>Ingredients:</b> {product.ingredients}</p>
              <p><b>Usage:</b> {product.usage}</p>
            </div>

            {/* QUANTITY */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pdp-actions">
              <button className="pdp-btn pdp-btn-cart">
                Add to Cart
              </button>

              <button className="pdp-btn pdp-btn-buy">
                Buy Now
              </button>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="pdp-related">
          <h2>Related Products</h2>

          <div className="pdp-relatedGrid">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="pdp-card"
                onClick={() =>
                  navigate(`/product/${item.id}`, { state: { product: item } })
                }
              >
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}