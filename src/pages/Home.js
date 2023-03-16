import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
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
      <Banner content="Chez vous, partout ailleurs" />
      <div className="cards-container">
        {location.map((logement) => (
          <NavLink
            key={logement.id}
            to={{
              pathname: `/logement`,
              search: `id=${logement.id}`,
              state: { logement: logement },
            }}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <Card logement={logement} />
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
