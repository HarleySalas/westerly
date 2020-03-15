import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./layout.scss";

import Page from "./Page/Page";
import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, title, darkNav }) => {
  return (
    <div className="Layout">
      <SEO title={title} />
      <Navbar darkNav={darkNav} />
      <ParallaxProvider>
        <Page>{children}</Page>
      </ParallaxProvider>
      <Footer />
    </div>
  );
};

export default Layout;
