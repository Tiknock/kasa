import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Logement from "./Logement";

const Home = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/location")
      .then((res) => setLocation(res.data));
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="presentation-pic">
        <h1>Chez vous partout ailleurs</h1>
      </div>
      <ul className="cards-container">
        {location.map((logement) => (
          <NavLink
            to={{
              pathname: `/logement`,
              search: `id=${logement.id}`,
              state: { logement: logement },
            }}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <Card key={logement.id} logement={logement} />
          </NavLink>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;