import React, { Fragment } from "react";
import FaqTab from "./faq";
import SocialCredits from "./socialCredits";
import Profile from "./profile";
import SimuLationReturn from "../simulation";
import { Container } from "../../../../styles/bases";
import { Row, Col } from "../../../lib";
import { Margin, Padding } from "../../../../styles/utils";
import {
  TabWrapper,
  TabMenu,
  TabContentWrapper,
  TabMenuList,
  TabMenuOnlyShowMobile,
  StaticLinkWrapper
} from "./styled";
import chevron from "../../../../images/icons/chevron-bottom.svg";

export interface TabHomeState {
  page: number;
}

class TabHome extends React.Component<{}, TabHomeState> {
  tabContentNode: React.RefObject<Element>;
  constructor(props: {}) {
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
    switch (page) {
      case 0:
        return (
          <Fragment>
            <SimuLationReturn />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Profile />
            <Row>
              <Col lg={8} md={12}>
                <Margin top={24}>
                  <StaticLinkWrapper>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 3 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>What people say</h5>
                      </Padding>
                    </div>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 2 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(-90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>FAQ</h5>
                      </Padding>
                    </div>
                  </StaticLinkWrapper>
                </Margin>
              </Col>
            </Row>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <FaqTab />
            <Row>
              <Col lg={12}>
                <Margin top={24}>
                  <StaticLinkWrapper>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 1 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>Campaign</h5>
                      </Padding>
                    </div>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 3 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(-90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>What people say</h5>
                      </Padding>
                    </div>
                  </StaticLinkWrapper>
                </Margin>
              </Col>
            </Row>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <SocialCredits />
            <Row>
              <Col lg={12}>
                <Margin top={24}>
                  <StaticLinkWrapper>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 2 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>FAQ</h5>
                      </Padding>
                    </div>
                    <div
                      onClick={() => {
                        this.scrollToElement();
                        this.setState({ page: 1 });
                      }}
                    >
                      <img
                        src={chevron}
                        alt="Icon - ArrowLeft"
                        width={32}
                        style={{
                          position: "absolute",
                          transform: "rotate(-90deg)"
                        }}
                      />
                      <Padding left={48}>
                        <p>See more</p>
                        <h5>Campaign</h5>
                      </Padding>
                    </div>
                  </StaticLinkWrapper>
                </Margin>
              </Col>
            </Row>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <SimuLationReturn />
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
                <span>FAQ</span>
              </TabMenuList>
              <TabMenuList
                onClick={() => {
                  this.scrollToElement();
                  this.setState({ page: 3 });
                }}
                activePage={page === 3}
              >
                <span>What people say</span>
              </TabMenuList>
            </TabMenu>
          </Container>
        </TabWrapper>
        <TabContentWrapper ref={this.tabContentNode}>
          <Container>{this.renderTabContent()}</Container>
        </TabContentWrapper>
      </React.Fragment>
    );
  }
}

export default TabHome;
