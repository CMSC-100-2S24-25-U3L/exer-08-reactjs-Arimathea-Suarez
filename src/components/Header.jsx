import React from "react";
import "../index.css"; // Import the styles

const Header = () => {
  // Header for the LAZADO with additional search bar for design only
  return (
    <header className="header">
      <h2>
        <span className="la">LA</span>
        <span className="za">ZA</span>
        <span className="do">DO</span>
      </h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products, brands, or categories"
        />
        <button>🔍</button>
      </div>
      <nav>
        <a href="#appliances">Appliances</a>
        <a href="#groceries">Groceries</a>
        <a href="#gadgets">Gadgets</a>
        <a href="#clothing">Clothing</a>
      </nav>
    </header>
  );
};

export default Header;
