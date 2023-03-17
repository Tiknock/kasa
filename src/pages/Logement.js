import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import SildeShow from "../components/SildeShow";
import Tag from "../components/Tag";
import Layout from "../components/Layout";

const Logement = ({}) => {
  const location = useLocation();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    console.log(id);

    axios
      .get(`http://localhost:3002/location/${id}`)
      .then((res) => setLogement(res.data))
      .catch(() => navigate("*"));
    console.log(logement);
  }, [location]);

  if (!logement) {
    return null;
  }

  return (
    <Layout
      children=<div className="logement-container">
        <SildeShow logement={logement} />
        <div className="logement-header">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <ul className="tags-container">
              {logement.tags.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
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
            <Collapse logement={logement} type="description" />
          </div>
          <div className="box">
            <Collapse logement={logement} type="équipements" />
          </div>
        </div>
      </div>
    />
  );
};

export default Logement;
