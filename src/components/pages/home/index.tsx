// Pages home component
import React from "react";
import { withNavbarAndFooter } from "../../hoc";
import HomeHeroLoan from "./heroLoan";
import HomeDetailLoan from "./detailLoan";
import HomeHero from "./hero";

const Home: React.FC = () => (
  <React.Fragment>
    <HomeHero />
  </React.Fragment>
);

export default withNavbarAndFooter(Home);
