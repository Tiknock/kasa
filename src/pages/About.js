import React from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const About = () => {
  return (
    <div className="about-page">
      <Layout>
        <div className="about">
          <Banner content="A propos" />
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
      </Layout>
    </div>
  );
};

export default About;
