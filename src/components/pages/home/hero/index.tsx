import React from "react";
import AvatarAlex from "../../../../images/avatar/alex.jpg";
import AvatarAverie from "../../../../images/avatar/averie.jpg";
import AvatarBrooke from "../../../../images/avatar/brooke.jpg";
import AvatarIvana from "../../../../images/avatar/ivana.jpg";
import AvatarShamanta from "../../../../images/avatar/shamanta.jpg";
import HeroInes from "../../../../images/hero/home.png";
import ModalListContributor from "./modalListContributor";
import ModalVideo from "./modalVideo";
import { Container } from "../../../../styles/bases";
import { Margin, MobileTextCenter } from "../../../../styles/utils";
import { Row, Col, Progress, Button, Avatar, ShowModal } from "../../../lib";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { getDeployedFromConfig } from "../../../../utils/getDeployed";
import { prepBigNumber, prepNumber } from '../../../../utils/web3Utils';
import { getTokenDetailsFromAddress } from '../../../../utils/paymentToken';
import { totalShares } from '../../../../utils/repaymentManager';
import { getInterestRate, getLoanEndTimestamp, getLoanStartTimestamp, getNumScheduledPayments,getPrincipalRequested, getPrincipalToken } from '../../../../utils/termsContract';

import contractAddresses from '../../../../config/ines.fund';

import {
  HeroWrapper,
  HeroCell,
  HeroButtonLendMobile,
  HeroLink,
  HeroStats,
  HeroImage
} from "./styled";

interface HomeHeroProps extends RouteComponentProps<any> {}

export interface HomeHeroState {
  showModal: boolean;
  showModalVideo: boolean;
  loanPeriod: string;
  interestRate: string;
  loanEndTimestamp: string;
  totalShares: string;
  principalRequested: string;
  payees: string;
  paymentToken: any;
}

export const listContributor = [
  {
    name: "Alex",
    image: AvatarAlex,
    address: "0x1239123...",
    lendNumber: 100
  },
  {
    name: "Averie",
    image: AvatarAverie,
    address: "0x1239123...",
    lendNumber: 400
  },
  {
    name: "Brooke",
    image: AvatarBrooke,
    address: "0x1239123...",
    lendNumber: 100
  },
  {
    name: "Ivana",
    image: AvatarIvana,
    address: "0x1239123...",
    lendNumber: 200
  },
  {
    name: "Shamanta",
    image: AvatarShamanta,
    address: "0x1239123...",
    lendNumber: 540
  }
];

const DECIMALS = 2;//Denominator for interestRate in contracts
class HomeHero extends React.Component<HomeHeroProps, HomeHeroState> {
  constructor(props: HomeHeroProps) {
    super(props);
    this.state = {
      showModal: false,
      showModalVideo: false,
      loanPeriod: null,
      interestRate: null,
      loanEndTimestamp: null,
      totalShares: null,
      principalRequested: null,
      payees: null,
      paymentToken: {}
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleModalVideo = this.handleModalVideo.bind(this);
    this.handleLend = this.handleLend.bind(this);
  }

  componentDidMount = async () => {

    // Get the contract instances for Ines (We'll just bake these in for now).
    const termsContractInstance = await getDeployedFromConfig('TermsContract', contractAddresses);
    const repaymentManagerInstance = await getDeployedFromConfig('RepaymentManager', contractAddresses);

    try {
      const loanPeriod = await getNumScheduledPayments(termsContractInstance);
      const principalRequested = await getPrincipalRequested(termsContractInstance);
      const interestRate = await getInterestRate(termsContractInstance);
      const loanStartTimestamp = await getLoanStartTimestamp(termsContractInstance);
      const totaShares = await totalShares(repaymentManagerInstance);
      const paymentToken = await getTokenDetailsFromAddress(await getPrincipalToken(termsContractInstance));
      
      let loanEndTimestamp;

      if (loanStartTimestamp !== "0") {
        loanEndTimestamp = await getLoanEndTimestamp(termsContractInstance);
      }

      this.setState({
        loanPeriod: loanPeriod || "0",
        interestRate: interestRate || "0",
        loanEndTimestamp: loanEndTimestamp || 0,
        totalShares: totaShares || 0,
        principalRequested: principalRequested || 0,
        paymentToken
      });
    } catch (err) {
      console.error(err);
    }
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

  handleModalVideo() {
    const { showModalVideo } = this.state;
    this.setState(
      {
        showModalVideo: !showModalVideo
      },
      () => ShowModal(<ModalVideo />)
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
              <Col lg={7} md={8} sm={12}>
                <h1>Enabling opportunity with Enable</h1>
                <p>
                  Enable is an p2p stablecoin loan marketplace, we use the Dai
                  stablecoin and smart contracts to expand opportunity to
                  emerging market borrowers through borderless credit, Our first
                  crowdfunded loan is Extend a 60,000 Dai education loan to:
                </p>
                <Margin top={16}>
                  <h6>
                    Widya Imanesti -&nbsp;
                    <small>Jakarta, Indonesia</small>
                  </h6>
                  <p>
                    Ines is raising a 60,000 Dai loan to attend Cornell
                    University for a master's degree in HR
                  </p>
                </Margin>
                <Margin top={16}>
                  <Row>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.totalShares ? "0" : this.state.totalShares} <small>Dai</small>
                        </h4>
                        <small>Raised of {!this.state.principalRequested ? "0" : prepBigNumber(this.state.principalRequested, this.state.paymentToken.decimals, true)} goal</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.loanEndTimestamp ? "0" : this.state.loanEndTimestamp} <small>Days left</small>
                        </h4>
                        <small>Loan expires</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.interestRate ? "0" : prepNumber(this.state.interestRate, DECIMALS, true)}% <small>Interest</small>
                        </h4>
                        <small>Per annum</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.loanPeriod ? "0" : this.state.loanPeriod } <small>Month</small>
                        </h4>
                        <small>Loan period</small>
                      </HeroStats>
                    </Col>
                  </Row>
                </Margin>
                <Row>
                  <Col lg={10} md={12}>
                    <Margin top={16}>
                      {this.state.totalShares === "0" ||
                      this.state.principalRequested === "0" ? (
                        <Progress current={0} />
                      ) : (
                        <Progress
                          current={
                            +this.state.principalRequested / +this.state.totalShares
                          }
                        />
                      )}
                    </Margin>
                  </Col>
                </Row>
                <Margin top={24}>
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
                <Row>
                  <Col lg={6} md={12} sm="hidden">
                    <Margin top={24}>
                      <Button color="purple" onClick={this.handleLend}>
                        Start lending now
                      </Button>
                    </Margin>
                  </Col>
                  <Col lg="hidden" sm={12}>
                    <MobileTextCenter>
                      <Margin top={16}>
                        <HeroLink onClick={this.handleModalVideo}>
                          Watch a video
                        </HeroLink>
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
              <Col lg={5} md={4} sm="hidden" text="center">
                <HeroImage>
                  <HeroLink onClick={this.handleModalVideo}>
                    <img src={HeroInes} alt="HomeHero - Illustraion" />
                  </HeroLink>
                </HeroImage>
              </Col>
            </Row>
          </Container>
        </HeroCell>
      </HeroWrapper>
    );
  }
}

export default withRouter<HomeHeroProps>(HomeHero);
