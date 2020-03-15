import React from "react";

import Layout from "../components/Layout/Layout";
import NotFound from "../components/PageSections/NotFound/NotFound";
import HomeUpdates from "../components/PageSections/HomePage/HomeUpdates/HomeUpdates";
const NotFoundPage = () => (
  <Layout title="404: Not found" darkNav>
    <NotFound />
    <HomeUpdates />
  </Layout>
);

export default NotFoundPage;
