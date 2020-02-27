import React from "react";
import "./layout.scss";

import Page from "./Page/Page";
import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <div className="Layout">
      <SEO title={title} />
      <Navbar />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
