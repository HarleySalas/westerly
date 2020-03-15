import React from "react";
import "./home-commitment.scss";

const HomeCommitment = () => {
  return (
    <div className="home-commitment">
      <div className="container home-commitment__container">
        <div className="home-commitment__col">
          <h2 className="home-commitment__title">Our Commitment</h2>
        </div>
        <div className="home-commitment__col">
          <p className="home-commitment__content">
            "Each home we build is brimming with exceptional quality and unique
            design features. From the foundation of a home to the finishing
            touches of crown molding, we are committed to thorough
            craftsmanship. We pride ourselves on building homes with current
            design trends that are exceptionally functional for your lifestyle."
          </p>
          <span className="home-commitment__by">
            &mdash; Katie, Jake and Chris &mdash; Owners
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCommitment;
