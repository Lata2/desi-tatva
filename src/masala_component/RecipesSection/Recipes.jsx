import React, { useState } from "react";
import "./Recipes.css";

export default function Recipes() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: "paneer",
      title: "Paneer Butter Masala",
      time: "30 mins",
      level: "Easy",
      servings: "4",
      desc: "Creamy restaurant-style curry",
      ingredients: ["500g paneer", "3 tomatoes", "2 onions", "Garam masala", "Butter + cream"],
      steps: [
        "Sauté onions + tomatoes",
        "Add spices",
        "Cook paneer in gravy",
        "Garnish & serve"
      ],
      tips: "Use fresh cream for best taste!",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800"
    },
    {
      id: "biryani",
      title: "Chicken Biryani",
      time: "45 mins",
      level: "Medium",
      servings: "6",
      desc: "Layered dum biryani",
      ingredients: ["Chicken", "Rice", "Masala", "Mint", "Saffron"],
      steps: [
        "Marinate chicken",
        "Boil rice",
        "Layer properly",
        "Cook on dum"
      ],
      tips: "Seal lid with dough!",
      img: "https://images.unsplash.com/photo-1600628422019-48a0c8a4c8e7?w=800"
    }
  ];

  return (
    <section className="recipes-hero">

      <div className="recipes-header">
        <h1 className="main-title">
          Authentic Indian <span>Recipes</span>
        </h1>
        <p className="hero-desc">
          Cook restaurant-style food at home 🍛
        </p>
      </div>

      {/* TABS */}
      <div className="recipe-tabs">
        {recipes.map((r, i) => (
          <button
            key={r.id}
            className={`tab-btn ${activeTab === i ? "active" : ""}`}
            onClick={() => {
              setActiveTab(i);
              setSelectedRecipe(r);
            }}
          >
            <img src={r.img} alt={r.title} />
            <span>{r.title}</span>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {selectedRecipe && (
        <div
          className="recipe-modal"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedRecipe(null)}
            >
              ×
            </button>

            <div className="modal-header">
              <img src={selectedRecipe.img} alt="" />
              <div>
                <h2>{selectedRecipe.title}</h2>
                <div className="recipe-meta">
                  <span>{selectedRecipe.time}</span>
                  <span>{selectedRecipe.level}</span>
                  <span>{selectedRecipe.servings}</span>
                </div>
              </div>
            </div>

            <div className="recipe-body">

              <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>

              <div className="steps">
                <h3>Steps</h3>
                {selectedRecipe.steps.map((s, idx) => (
                  <div key={idx} className="step-item">
                    <div className="step-number">{idx + 1}</div>
                    <p>{s}</p>
                  </div>
                ))}
                <div className="pro-tip">
                  💡 {selectedRecipe.tips}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}