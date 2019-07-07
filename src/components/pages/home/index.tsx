// Pages home component
import React from "react";
import { withNavbarAndFooter } from "../../hoc";
import HomeHero from "./hero";
import LoanDetail from "./profile";
import SocialCredits from "./socialCredits";
import SimuLationReturn from "./simulation";
import Repayment from "./repayment";
import WhyUs from "./whyUs";

const Home: React.FC = () => (
  <React.Fragment>
    <HomeHero />
    <LoanDetail />
    <SocialCredits />
    <SimuLationReturn />
    <WhyUs />
    <Repayment />
  </React.Fragment>
);

export default withNavbarAndFooter(Home);
