import React from "react";
import "./Navbar.scss";

import NavTop from "./NavTop/NavTop";

const Navbar = ({ darkNav }) => {
  return (
    <nav className="navbar">
      <NavTop darkNav={darkNav} />
    </nav>
  );
};

export default Navbar;
