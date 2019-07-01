// Pages home component
import React from "react";
import { withNavbarAndFooter } from "../../hoc";
import HomeHero from "./hero";
import LoanDetail from "./profile";
import SocialCredits from "./socialCredits";

const Home: React.FC = () => (
  <React.Fragment>
    <HomeHero />
    <LoanDetail />
    <SocialCredits />
  </React.Fragment>
);

export default withNavbarAndFooter(Home);
