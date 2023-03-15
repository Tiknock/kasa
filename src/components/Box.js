import React, { useState } from "react";

const Box = ({ logement, type }) => {
  const [visible, setVisible] = useState(false);
  let title;
  let content;
  console.log(type);
  switch (type) {
    case "description":
      title = "Description";
      content = <p>{logement.description}</p>;
      break;
    case "équipements":
      title = "Equipements";
      content = (
        <ul>
          {logement.equipments.map((equipment, index) => {
            return <li key={index}>{equipment}</li>;
          })}
        </ul>
      );
      break;
    case "fiabilité":
      title = "Fiabilité";
      content =
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
      break;
    case "respect":
      title = "Respect";
      content =
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
      break;
    case "service":
      title = "Service";
      content =
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
      break;
    case "sécurité":
      title = "Sécurité";
      content =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
      break;
    default:
      return null;
  }

  return (
    <div className="box">
      <div
        className="unroll"
        onClick={(e) => {
          visible ? setVisible(false) : setVisible(true);
          console.log(visible);
        }}
      >
        <h2>{title}</h2>
        {/* A dérouler */}
        <span>
          {visible ? (
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.15993 0.653343L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653343L13.9999 11.4933L3.15993 0.653343Z"
                fill="white"
              />
            </svg>
          )}
        </span>
      </div>
      {visible ? <div className="content-box">{content}</div> : ""}
    </div>
  );
};

export default Box;
