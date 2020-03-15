import React from "react";
import { Link } from "gatsby";
import "./footer.scss";

import Logo from "../../../shared/branding/logo_light-bg.svg";
import MBALogo from "../../../shared/mba-logo-01.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__col">
            <Logo className="footer__logo" />
          </div>
          <div className="footer__col">
            <div className="footer__wrapper">
              <span className="footer__label">Westerly, LLC.</span>
              <span className="footer__address">
                320 Dayton St. Suite 101
                <br />
                Edmonds, WA 98020
                <br />
                1.425.673.5229
                <br />
                info@westerlyRE.com
              </span>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__wrapper">
              <span className="footer__label">Design + Build</span>
              <ul className="footer__ul">
                <li className="footer__li">
                  <Link to="/" className="footer__link">
                    Home
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/about" className="footer__link">
                    About
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/projects" className="footer__link">
                    Projects
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/contact" className="footer__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__wrapper">
              <MBALogo className="footer__mba-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
