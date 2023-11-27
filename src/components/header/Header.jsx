import React, { useState } from "react";
import { ReactComponent as Icon } from "./icon.svg";
import "./header.css";

import Main from "../../pages/main/Main.jsx";
import Music from "../../pages/music/Music.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState();
  return (
    <BrowserRouter>
      <div className="header">
        <div className="header_logo">LOGO</div>
        <nav className={`header_nav ${isOpen ? "active" : ""}`}>
          <ul className="header_nav_list">
            <li className="header_nav_item">
              <NavLink to="/"> Main</NavLink>
            </li>
            <li className="header_nav_item">
              <NavLink to="/music"> Music</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/music" element={<Music />} />
        </Routes>

        <button className="header_menu_button" onClick={() => setOpen(!isOpen)}>
          <Icon />
        </button>
      </div>
    </BrowserRouter>
  );
};

export default Header;
