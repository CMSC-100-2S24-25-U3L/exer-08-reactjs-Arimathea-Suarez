import React from "react";
import "../index.css";

// The labels for the different products to be hard-coded
const ProductCard = ({ name, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">Item with picture</div>
      <h3>{name}</h3>
      <button className="add-to-cart" onClick={() => onAddToCart(name)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
