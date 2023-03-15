import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <Header />
      <div className="notfound-container">
        <span className="err404">404</span>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
