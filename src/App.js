// import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Main from "./pages/main/Main";
import Music from "./pages/music/Music";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/music" element={<Music />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
