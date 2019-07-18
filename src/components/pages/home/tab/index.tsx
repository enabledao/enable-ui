import React from "react";
import FaqTab from "./faq";
import SocialCredits from "./socialCredits";
import Profile from "./profile";
import SimuLationReturn from "../simulation";
import { Container } from "../../../../styles/bases";
import {
  TabWrapper,
  TabMenu,
  TabContentWrapper,
  TabMenuList,
  TabMenuOnlyShowMobile
} from "./styled";

export interface TabHomeState {
  page: number;
}

class TabHome extends React.Component<{}, TabHomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 1
    };
    this.renderTabContent = this.renderTabContent.bind(this);
  }

  renderTabContent() {
    const { page } = this.state;
    switch (page) {
      case 0:
        return (
          <p>
            <SimuLationReturn />
          </p>
        );
      case 1:
        return <Profile />;
      case 2:
        return <FaqTab />;
      case 3:
        return <SocialCredits />;
      default:
        return <SimuLationReturn />;
    }
  }

  render() {
    const { page } = this.state;
    return (
      <React.Fragment>
        <TabWrapper>
          <Container>
            <TabMenu>
              <TabMenuOnlyShowMobile
                onClick={() => this.setState({ page: 0 })}
                activePage={page === 0}
              >
                <span>Simulate Return</span>
              </TabMenuOnlyShowMobile>
              <TabMenuList
                onClick={() => this.setState({ page: 1 })}
                activePage={page === 1}
              >
                <span>Campaign</span>
              </TabMenuList>
              <TabMenuList
                onClick={() => this.setState({ page: 2 })}
                activePage={page === 2}
              >
                <span>FAQ</span>
              </TabMenuList>
              <TabMenuList
                onClick={() => this.setState({ page: 3 })}
                activePage={page === 3}
              >
                <span>What people say</span>
              </TabMenuList>
            </TabMenu>
          </Container>
        </TabWrapper>
        <TabContentWrapper>
          <Container>{this.renderTabContent()}</Container>
        </TabContentWrapper>
      </React.Fragment>
    );
  }
}

export default TabHome;
