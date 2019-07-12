import React from "react";
import HeroIllustration from "../../../../images/illustration/hero.svg";
import avatarAlex from "../../../../images/avatar/alex.jpg";
import avatarAverie from "../../../../images/avatar/averie.jpg";
import avatarBrooke from "../../../../images/avatar/brooke.jpg";
import avatarIvana from "../../../../images/avatar/ivana.jpg";
import avatarShamanta from "../../../../images/avatar/shamanta.jpg";
import avatarInes from "../../../../images/avatar/ines.jpeg";
import ModalListContributor from "./modalListContributor";
import { Container } from "../../../../styles/bases";
import { Margin, MobileTextCenter, Padding } from "../../../../styles/utils";
import { Row, Col, Progress, Button, Avatar, ShowModal } from "../../../lib";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import {
  HeroWrapper,
  HeroCell,
  HeroButtonLendMobile,
  HeroLink,
  HeroGoal
} from "./styled";

interface HomeHeroProps extends RouteComponentProps<any> {}

export interface HomeHeroState {
  showModal: boolean;
}

export const listContributor = [
  {
    name: "Alex",
    image: avatarAlex,
    address: "0x1239123...",
    lendNumber: 100
  },
  {
    name: "Averie",
    image: avatarAverie,
    address: "0x1239123...",
    lendNumber: 400
  },
  {
    name: "Brooke",
    image: avatarBrooke,
    address: "0x1239123...",
    lendNumber: 100
  },
  {
    name: "Ivana",
    image: avatarIvana,
    address: "0x1239123...",
    lendNumber: 200
  },
  {
    name: "Shamanta",
    image: avatarShamanta,
    address: "0x1239123...",
    lendNumber: 540
  }
];

class HomeHero extends React.Component<HomeHeroProps, HomeHeroState> {
  constructor(props: HomeHeroProps) {
    super(props);
    this.state = { showModal: false };
    this.handleModal = this.handleModal.bind(this);
    this.handleLend = this.handleLend.bind(this);
  }

  handleModal() {
    const { showModal } = this.state;
    this.setState(
      {
        showModal: !showModal
      },
      () => ShowModal(<ModalListContributor />)
    );
  }

  handleLend() {
    const { history } = this.props;
    history.push(AppPath.LoanPersonalInfo);
  }

  render() {
    return (
      <HeroWrapper>
        <HeroCell>
          <Container>
            <Row>
              <Col lg={5} md={4} sm="hidden" text="center">
                <img
                  src={HeroIllustration}
                  alt="HomeHero - Illustraion"
                  width={340}
                />
              </Col>
              <Col lg={7} md={8} sm={12}>
                <h1>Enabling Opportunity</h1>
                <p>Extend a 60,000 Dai education loan to: </p>
                <Avatar
                  size="sm"
                  circle={true}
                  style={{ position: "absolute" }}
                >
                  <img src={avatarInes} alt="Avatar - Ines" />
                </Avatar>
                <Padding left={60}>
                  <h5>Widya Imanesti</h5>
                  <p>Jakarta - Indonesia</p>
                  <p>
                    Ines is raising a 60,000 Dai loan to attend Cornell
                    University for a master's degree in HR
                  </p>
                </Padding>
                <Margin top={24}>
                  <Row>
                    <Col lg={3} md={6}>
                      <HeroGoal>
                        <h4>
                          2,900 <small>Dai</small>
                        </h4>
                        <small>Raised 0f 60,000 goal</small>
                      </HeroGoal>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>29</h4>
                      <small>days left loan expires</small>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>6%</h4>
                      <small>Interest per annum</small>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>12</h4>
                      <small>Month of loan period</small>
                    </Col>
                  </Row>
                </Margin>
                <Row>
                  <Col lg={10} md={12}>
                    <Margin top={16}>
                      <Progress current={20} />
                    </Margin>
                  </Col>
                </Row>
                <Margin top={20}>
                  <MobileTextCenter>
                    {listContributor.map(res => (
                      <Avatar
                        key={res.name}
                        size="sm"
                        circle={true}
                        tooltip={res.name}
                      >
                        <img src={res.image} alt="Avatar - User" />
                      </Avatar>
                    ))}
                  </MobileTextCenter>
                </Margin>
                <Margin top={16}>
                  <MobileTextCenter>
                    <small>
                      <HeroLink onClick={this.handleModal}>
                        Powered by 39 contributors
                      </HeroLink>
                    </small>
                  </MobileTextCenter>
                </Margin>
                <Row align="center">
                  <Col lg={6} md={12} sm="hidden">
                    <Margin top={24}>
                      <Button color="purple" onClick={this.handleLend}>
                        Start lending now
                      </Button>
                    </Margin>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <MobileTextCenter>
                      <Margin top={16}>
                        <HeroLink>Watch a video</HeroLink>
                      </Margin>
                    </MobileTextCenter>
                  </Col>
                </Row>
                <HeroButtonLendMobile>
                  <Button color="purple" onClick={this.handleLend}>
                    Start lending now
                  </Button>
                </HeroButtonLendMobile>
              </Col>
            </Row>
          </Container>
        </HeroCell>
      </HeroWrapper>
    );
  }
}

export default withRouter<HomeHeroProps>(HomeHero);
