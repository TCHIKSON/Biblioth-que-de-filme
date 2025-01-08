import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Roter/home";
import MoviesPage from "./Roter/Moovies";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Bibliothèque de films
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Mes Films
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
