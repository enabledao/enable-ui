import React from "react";
import { withNavbarAndFooter } from "../../hoc";
import HomeHero from "./hero";
import Cta from "./cta";
import TabHome from "./tab";
import ModalWip from "./modalWip";
import { ShowModal } from "../../lib";

class Home extends React.Component<{}, {}> {
  componentDidMount() {
    ShowModal(<ModalWip />);
  }

  render() {
    return (
      <React.Fragment>
        <HomeHero />
        <TabHome />
        <Cta />
      </React.Fragment>
    );
  }
}

export default withNavbarAndFooter(Home);
