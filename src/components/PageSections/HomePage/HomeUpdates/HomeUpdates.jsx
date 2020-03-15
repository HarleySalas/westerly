import React from "react";
import "./home-updates.scss";

import Button from "../../../Button/Button";

const HomeUpdates = () => {
  return (
    <section className="home-updates">
      <div className="container home-updates__container">
        <h2 className="home-updates__title">Follow Our New Projects</h2>
        <span className="home-updates__subtitle">
          Sign up to receive news and updates.
        </span>
        <form className="home-updates__form">
          <input
            type="text"
            className="home-updates__form__input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="home-updates__form__input"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="home-updates__form__input"
            placeholder="Email Address"
          />
          <Button btnStyle="primary" btnText="Sign Up" />
        </form>
      </div>
    </section>
  );
};

export default HomeUpdates;
