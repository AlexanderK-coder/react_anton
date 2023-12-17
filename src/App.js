import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";

// import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="cont">
        <Header />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
