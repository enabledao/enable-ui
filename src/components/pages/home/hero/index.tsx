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
import { Row, Col, Progress, Button, ShowModal } from "../../../lib";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { getDeployedFromConfig } from "../../../../utils/getDeployed";
import { prepBigNumber, prepNumber } from "../../../../utils/web3Utils";
import { getTokenDetailsFromAddress } from "../../../../utils/paymentToken";
import { totalShares } from "../../../../utils/repaymentManager";
import {
  getInterestRate,
  getLoanEndTimestamp,
  getLoanStartTimestamp,
  getNumScheduledPayments,
  getPrincipalRequested,
  getPrincipalToken
} from "../../../../utils/termsContract";

import contractAddresses from "../../../../config/ines.fund";
import {
  INTEREST_DECIMALS,
  LoanStatuses,
  MILLISECONDS
} from "../../../../config/constants";

import {
  HeroWrapper,
  HeroCell,
  HeroButtonLendMobile,
  HeroLink,
  HeroStats,
  HeroImage,
  HeroStatsRight
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
    const termsContractInstance = await getDeployedFromConfig(
      "TermsContract",
      contractAddresses
    );
    const repaymentManagerInstance = await getDeployedFromConfig(
      "RepaymentManager",
      contractAddresses
    );

    try {
      const loanPeriod = await getNumScheduledPayments(termsContractInstance);
      const principalRequested = await getPrincipalRequested(
        termsContractInstance
      );
      const interestRate = await getInterestRate(termsContractInstance);
      const loanStartTimestamp = await getLoanStartTimestamp(
        termsContractInstance
      );
      const totaShares = await totalShares(repaymentManagerInstance);
      const paymentToken = await getTokenDetailsFromAddress(
        await getPrincipalToken(termsContractInstance)
      );

      let loanEndTimestamp;

      if (+loanStartTimestamp !== LoanStatuses.NOT_STARTED) {
        const DAYINMILLISECONDS = 86400 * MILLISECONDS;
        let endTimestamp = await getLoanEndTimestamp(termsContractInstance);
        endTimestamp = new Date(+endTimestamp * MILLISECONDS);
        const now: any = new Date();
        loanEndTimestamp = Math.ceil((endTimestamp - now) / DAYINMILLISECONDS);
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
  };

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
        <Container>
          <HeroCell>
            <Row>
              <Col lg={7} md={8} sm="hidden" text="center">
                <HeroImage>
                  <HeroLink onClick={this.handleModalVideo}>
                    <img src={HeroInes} alt="HomeHero - Illustraion" />
                  </HeroLink>
                </HeroImage>
              </Col>
              <Col lg={5} md={4} sm={12}>
                <b>
                  <p style={{ color: "#6c6d7a" }}>
                    INCOME SHARE AGREEMENT // EDUCATION
                  </p>
                </b>
                <h2>Help me raise 60,000 Dai to attend Cornell University</h2>
                <Margin top={32}>
                  <HeroStats>
                    <h5>
                      {!this.state.totalShares
                        ? "0"
                        : prepBigNumber(
                            this.state.totalShares,
                            this.state.paymentToken.decimals,
                            true
                          )}
                      {" Dai "}
                      <small>
                        of&nbsp;
                        {!this.state.principalRequested
                          ? "0"
                          : prepBigNumber(
                              this.state.principalRequested,
                              this.state.paymentToken.decimals,
                              true
                            )}{" "}
                        goal
                      </small>
                    </h5>
                  </HeroStats>
                  <HeroStatsRight>
                    <p>1 Dai = 1 USD</p>
                  </HeroStatsRight>
                </Margin>
                <Margin vertical={8}>
                  {!this.state.totalShares || !this.state.principalRequested ? (
                    <Progress current={0} />
                  ) : (
                    <Progress
                      current={
                        (+prepBigNumber(
                          this.state.totalShares,
                          this.state.paymentToken.decimals,
                          true
                        ) *
                          100) /
                        +prepBigNumber(
                          this.state.principalRequested,
                          this.state.paymentToken.decimals,
                          true
                        )
                      }
                    />
                  )}
                </Margin>
                <Margin top={8}>
                  <HeroStats>
                    <p>
                      <HeroLink onClick={this.handleModal}>
                        Powered by
                        <b> 32 </b>
                        contributors
                      </HeroLink>
                    </p>
                  </HeroStats>
                  <HeroStatsRight>
                    <p style={{ color: "black" }}>
                      <b>
                        {!this.state.loanEndTimestamp
                          ? "0"
                          : this.state.loanEndTimestamp}{" "}
                      </b>
                      <small>Days left</small>
                    </p>
                  </HeroStatsRight>
                </Margin>
                <Margin top={24}>
                  <Row>
                    <Col lg={4}>
                      <HeroStats>
                        <h4>
                          {!this.state.interestRate
                            ? "0"
                            : prepNumber(
                                this.state.interestRate,
                                INTEREST_DECIMALS,
                                true
                              )}
                          %
                        </h4>
                        <p>ISA</p>
                      </HeroStats>
                    </Col>
                    <Col lg={4}>
                      <HeroStats>
                        <h4>
                          {!this.state.loanPeriod ? "0" : this.state.loanPeriod}{" "}
                        </h4>
                        <p>Duration</p>
                      </HeroStats>
                    </Col>
                    <Col lg={4}>
                      <HeroStats>
                        <h4>2021</h4>
                        <p>Repayment Start</p>
                      </HeroStats>
                    </Col>
                  </Row>
                  <p style={{ color: "#6c6d7a" }}>
                    <small>
                      Income Share Agreement (ISA) percentage will be divided
                      proportionally by the amount of contribution
                    </small>
                  </p>
                </Margin>
                <Row>
                  <Col lg={8} md={12} sm={12}>
                    <Margin top={16}>
                      <Button color="green" onClick={this.handleLend}>
                        Invest Now
                      </Button>
                    </Margin>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <Margin top={16}>
                      <Button color="green" outline>
                        Share
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
                  <Button color="green" onClick={this.handleLend}>
                    Invest Now
                  </Button>
                </HeroButtonLendMobile>
              </Col>
            </Row>
          </HeroCell>
        </Container>
      </HeroWrapper>
    );
  }
}

export default withRouter<HomeHeroProps>(HomeHero);
