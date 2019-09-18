import React, { Fragment } from "react";
import InvestmentBreakdown from "./investmentBreakdown";
import Profile from "./profile";
import SimuLationReturn from "../simulation";
import { Container } from "../../../../styles/bases";
import {
  TabWrapper,
  TabMenu,
  TabContentWrapper,
  TabMenuList,
  TabMenuOnlyShowMobile,
  TabContent
} from "./styled";

export interface TabHomeState {
  page: number;
}

interface TabHomeProps {
  contributors: any;
  paymentToken?: any
  termsContract?: any;
}

class TabHome extends React.Component<TabHomeProps, TabHomeState> {
  tabContentNode: React.RefObject<Element>;
  constructor(props: {contributors, paymentToken, termsContract}) {
    super(props);
    this.state = {
      page: 1
    };
    this.renderTabContent = this.renderTabContent.bind(this);
    this.tabContentNode = React.createRef();
  }

  scrollToElement() {
    window.scrollBy(
      0,
      this.tabContentNode.current.getBoundingClientRect().top - 75
    );
  }

  renderTabContent() {
    const { page } = this.state;
    const { contributors } = this.props;
    switch (page) {
      case 0:
        return (
          <Fragment>
            <SimuLationReturn contributors={contributors} paymentToken={this.props.paymentToken} />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Profile contributors={contributors} paymentToken={this.props.paymentToken} termsContract={this.props.termsContract} />
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <InvestmentBreakdown />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <SimuLationReturn contributors={contributors} paymentToken={this.props.paymentToken} />
          </Fragment>
        );
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
                onClick={() => {
                  this.scrollToElement();
                  this.setState({ page: 0 });
                }}
                activePage={page === 0}
              >
                <span>Simulate Return</span>
              </TabMenuOnlyShowMobile>
              <TabMenuList
                onClick={() => {
                  this.scrollToElement();
                  this.setState({ page: 1 });
                }}
                activePage={page === 1}
              >
                <span>Campaign</span>
              </TabMenuList>
              <TabMenuList
                onClick={() => {
                  this.scrollToElement();
                  this.setState({ page: 2 });
                }}
                activePage={page === 2}
              >
                <span>Investment Breakdown</span>
              </TabMenuList>
            </TabMenu>
          </Container>
        </TabWrapper>
        <TabContentWrapper ref={this.tabContentNode}>
          <Container>
            <TabContent>{this.renderTabContent()}</TabContent>
          </Container>
        </TabContentWrapper>
      </React.Fragment>
    );
  }
}

export default TabHome;
