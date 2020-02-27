import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./home-test.scss";

import { selectCount } from "../../../../redux/test/test.selectors";
import {
  incrementCounter,
  decrementCounter,
} from "../../../../redux/test/test.actions";

import Button from "../../../Button/Button";

const HomeTest = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <section className="home-test">
      <div className="container home-test__container">
        <h2 className="home-test__heading">Redux Test</h2>
        <span className="home-test__count">{count}</span>
        <div className="home-test__button-wrapper">
          <Button
            btnText="-"
            btnStyle="black"
            onClick={() => decrementCounter()}
            addClass="home-test__button"
          />
          <Button
            btnText="+"
            btnStyle="black"
            onClick={() => incrementCounter()}
            addClass="home-test__button"
          />
        </div>
        <Link to="/page-2" className="home-test__link">
          Go to page 2
        </Link>
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});

const mapStateToProps = createStructuredSelector({
  count: selectCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeTest);
