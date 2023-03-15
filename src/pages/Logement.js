import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "../components/Box";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import NotFound from "./NotFound";

const Logement = ({}) => {
  const location = useLocation();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    console.log(id);

    axios
      .get(`http://localhost:3002/location/${id}`)
      .then((res) => setLogement(res.data));
    console.log(logement);
  }, [location]);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <div className="logement-container">
        <Gallery logement={logement} />
        <div className="logement-header">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <ul className="tags-container">
              {logement.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
          </div>
          <div className="host-container">
            <div className="host-infos">
              <span className="host-name">{logement.host.name}</span>
              <img
                className="img-host"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <div className="rate-host">
              {[...Array(5)].map((_, index) => (
                <span className="star" key={index}>
                  <svg
                    viewBox="0 0 16 16"
                    fill={index < logement.rating ? "#FF6060" : "#E3E3E3"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="logement-body">
          <div className="box">
            <Box logement={logement} type="description" />
          </div>
          <div className="box">
            <Box logement={logement} type="équipements" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
