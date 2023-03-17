import React from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout
      children=<div className="about">
        <Banner />
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
      </div>
    />
  );
};

export default About;
