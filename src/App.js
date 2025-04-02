// The imports
import React from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./index.css"; // Importing global styles

const App = () => {
  // The function to handle adding to cart
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to the cart!`);
  };

  // The name of the headers with the products
  return (
    <div>
      <Header />
      <div id="appliances">{/* Add appliance products here */}</div>
      <div id="groceries">{/* Add grocery products here */}</div>
      <div id="gadgets">{/* Add gadgets products here */}</div>
      <div id="clothing">{/* Add clothing products here */}</div>

      <div className="product-list">
        <ProductCard name="Asahy Power Juicer" onAddToCart={handleAddToCart} />
        <ProductCard
          name="Samsong Washing Machine"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          name="Hanabesh Electric Fan"
          onAddToCart={handleAddToCart}
        />
        <ProductCard name="Medea Aircon" onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default App;
