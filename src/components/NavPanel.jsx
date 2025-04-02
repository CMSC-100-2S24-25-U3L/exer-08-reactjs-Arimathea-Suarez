import React from "react";
import NavButton from "./NavButton";

const NavigationPanel = () => {
  const menus = [
    { name: "Appliances", url: "#", id: 1 },
    { name: "Groceries", url: "#", id: 2 },
    { name: "Gadgets", url: "#", id: 3 },
    { name: "Clothing", url: "#", id: 4 },
  ];

  const handleButtonClick = (name) => {
    console.log(`${name} button clicked!`);
  };

  return (
    <div className="navigation-panel">
      {menus.map((menu) => (
        <NavButton
          key={menu.id}
          name={menu.name}
          url={menu.url}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default NavigationPanel;
