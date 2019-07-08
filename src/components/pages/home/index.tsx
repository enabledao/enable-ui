// Pages home component
import React from "react";
import { withNavbarAndFooter } from "../../hoc";
import HomeHero from "./hero";
import LoanDetail from "./profile";
import SocialCredits from "./socialCredits";
import SimuLationReturn from "./simulation";
import Repayment from "./repayment";
import Cta from "./cta";
import WhyUs from "./whyUs";

const Home: React.FC = () => (
  <React.Fragment>
    <HomeHero />
    <LoanDetail />
    <WhyUs />
    <SimuLationReturn />
    <SocialCredits />
    <Repayment />
    <Cta />
  </React.Fragment>
);

export default withNavbarAndFooter(Home);
