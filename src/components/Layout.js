import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, mainTitle }) => {
  return (
    <>
      <Header />
      <main className={mainTitle}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
