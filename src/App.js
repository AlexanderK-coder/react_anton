import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
