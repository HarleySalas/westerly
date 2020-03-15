import React from "react";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/PageSections/HomePage/HomeHero/HomeHero";
import HomeCommunity from "../components/PageSections/HomePage/HomeCommunity/HomeCommunity";
import HomeCommitment from "../components/PageSections/HomePage/HomeCommitment/HomeCommitment";
import HomeUpdates from "../components/PageSections/HomePage/HomeUpdates/HomeUpdates";

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <HomeCommunity />
    <HomeCommitment />
    <HomeUpdates />
  </Layout>
);

export default IndexPage;
