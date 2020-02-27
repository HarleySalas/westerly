import React from "react";
import { Link } from "gatsby";
import "./NavTop.scss";

const NavTop = () => {
  return (
    <div className="nav-top">
      <div className="container nav-top__container">
        <ul className="nav-top__ul">
          <li className="nav-top__li">
            <Link
              to="/about"
              className="nav-top__link"
              activeClassName="active"
            >
              About
            </Link>
          </li>
          <li className="nav-top__li">
            <Link
              to="/contact"
              className="nav-top__link"
              activeClassName="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
