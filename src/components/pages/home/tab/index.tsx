import React from "react";
import FaqTab from "./faq";
import WhyUs from "./whyUs";
import SocialCredits from "./socialCredits";
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
            0 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum!
          </p>
        );
      case 1:
        return (
          <p>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! 1 Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem aspernatur ratione
            eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! 1 Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem aspernatur ratione
            eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! 1 Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem aspernatur ratione
            eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! 1 Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem aspernatur ratione
            eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum! harum! 1 Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem aspernatur
            ratione eum reprehenderit! Debitis dolores optio odio quo culpa enim
            laboriosam eos incidunt? Corrupti provident vitae cumque iste totam
            harum! harum! 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aspernatur ratione eum reprehenderit! Debitis
            dolores optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum!
          </p>
        );
      case 2:
        return <FaqTab />;
      case 3:
        return <WhyUs />;
      case 4:
        return <SocialCredits />;
      default:
        return (
          <p>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur ratione eum reprehenderit! Debitis dolores
            optio odio quo culpa enim laboriosam eos incidunt? Corrupti
            provident vitae cumque iste totam harum!
          </p>
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
                <span>Payback plan</span>
              </TabMenuList>
              <TabMenuList
                onClick={() => this.setState({ page: 4 })}
                activePage={page === 4}
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
