import React from "react";

const Card = ({ logement }) => {
  return (
    <article className="card">
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
    </article>
  );
};

export default Card;
