import React from "react";
import Box from "../components/Box";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="presentation-pic"></div>
      <div className="box">
        {/* equipement */}
        <Box type="fiabilité" />
      </div>
      <div className="box">
        {/* equipement */}
        <Box type="respect" />
      </div>
      <div className="box">
        {/* equipement */}
        <Box type="service" />
      </div>
      <div className="box">
        {/* equipement */}
        <Box type="sécurité" />
      </div>

      <Footer />
    </div>
  );
};

export default About;
