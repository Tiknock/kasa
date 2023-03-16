import React from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="presentation-pic"></div>
      <div className="box">
        <Collapse type="fiabilité" />
      </div>
      <div className="box">
        <Collapse type="respect" />
      </div>
      <div className="box">
        <Collapse type="service" />
      </div>
      <div className="box">
        <Collapse type="sécurité" />
      </div>

      <Footer />
    </div>
  );
};

export default About;
