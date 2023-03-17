import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <Layout>
        <div className="notfound-container">
          <span className="err404">404</span>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Retourner sur la page d’accueil</li>
          </NavLink>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
