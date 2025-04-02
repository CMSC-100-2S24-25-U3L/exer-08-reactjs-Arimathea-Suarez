import React from "react";

const NavButton = ({ name, url, onClick }) => {
  return (
    <button onClick={() => onClick(name)} className="nav-button">
      <a href={url}>{name}</a>
    </button>
  );
};

export default NavButton;
