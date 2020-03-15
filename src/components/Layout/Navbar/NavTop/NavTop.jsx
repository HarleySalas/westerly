import React from "react";
import { Link } from "gatsby";
import "./NavTop.scss";

import Arrow from "../../../../shared/icons/arrow-stroke-01.svg";

const NavTop = ({ darkNav }) => {
  return (
    <div className="nav-top">
      <div className="container nav-top__container">
        <Link to="/">
          <span className={`nav-top__logo ${darkNav && "nav-top__logo--dark"}`}>
            WESTERLY
          </span>
        </Link>
        <ul className="nav-top__ul">
          <li
            className={`nav-top__li nav-top__li--norm ${darkNav &&
              "nav-top__li--dark"}`}
          >
            <Link
              to="/about"
              className="nav-top__link"
              activeClassName="active"
            >
              About
            </Link>
          </li>
          <li
            className={`nav-top__li nav-top__li--norm ${darkNav &&
              "nav-top__li--dark"}`}
          >
            <Link
              to="/projects"
              className="nav-top__link"
              activeClassName="active"
            >
              Projects
            </Link>
          </li>
          <li
            className={`nav-top__li nav-top__li--btn ${darkNav &&
              "nav-top__li--btn--dark"}`}
          >
            <Link
              to="/contact"
              className="nav-top__link"
              activeClassName="active"
            >
              Contact{" "}
              <Arrow
                className={`nav-top__link__arrow ${darkNav &&
                  "nav-top__link__arrow--dark"}`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
