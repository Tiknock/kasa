import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <h3>{logement.title}</h3>
      <img src={logement.cover} alt={logement.title} />
    </li>
  );
};

export default Card;
