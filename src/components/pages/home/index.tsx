// Pages home component
import React from "react";
import { withNavbar } from "../../hoc";
import HomeHeroLoan from "./heroLoan";
import HomeDetailLoan from "./detailLoan";

const Home: React.FC = () => (
  <React.Fragment>
    <HomeHeroLoan />
    <HomeDetailLoan />
  </React.Fragment>
);

export default withNavbar(Home);
