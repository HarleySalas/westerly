import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Parallax } from "react-scroll-parallax";
import "./home-hero.scss";

import Button from "../../../Button/Button";

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query homeHeroImg {
      image: file(relativePath: { eq: "hero-images/hero-img.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="home-hero">
      <div className="home-hero__wrapper">
        <Parallax y={[-15, 15]}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            fadeIn={true}
            durationFadeIn={1000}
            draggable={false}
            loading="eager"
            // alt="Architecture Example"
            className="home-hero__img-wrapper"
            imgStyle={{
              userSelect: "none",
            }}
            backgroundColor="#29382a"
            // placeholderClassName="home-hero__img-placeholder"
          />
        </Parallax>
        <div className="home-hero__img-overlay">
          <div className="container home-hero__container">
            <h1 className="home-hero__heading">
              We Look Forward to Building With You
            </h1>
            <Button
              btnText="View Projects"
              btnStyle="primary"
              linkTo="/projects"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
