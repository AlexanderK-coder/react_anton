import React from "react";
// import "./header.css";

import { Main } from "../../pages/main/Main.jsx";
import { Music } from "../../pages/music/Music.jsx";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>AC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Main</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/musik">Music</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="mr-2">
            Log in
          </Button>
          <Button variant="primary">Sign in</Button>
        </Nav>
      </Navbar.Collapse>

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Navbar>
  );
};

export default Header;
