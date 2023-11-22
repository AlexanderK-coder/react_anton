import React, { useState } from "react";
import { ReactComponent as Icon } from "./media/icon.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState();
  return (
    <div className="header">
      <div className="header_logo">LOGO</div>
      <nav className={`header_nav ${isOpen ? "active" : ""}`}>
        <div className="header_nav_list">
          <li className="header_nav_item">Main</li>
          <li className="header_nav_item">About</li>
          <li className="header_nav_item">Adress</li>
          <li className="header_nav_item">Contact</li>
          <li className="header_nav_item">Login</li>
        </div>
      </nav>
      <button className="header_menu_button" onClick={() => setOpen(!isOpen)}>
        <Icon />
      </button>
    </div>
  );
};

export default Header;
