import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Home = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/location")
      .then((res) => setLocation(res.data));
  }, []);
  return (
    <Layout>
      <div className="home">
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
      </div>
    </Layout>
  );
};

export default Home;
