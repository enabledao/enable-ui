import React from "react";
import AvatarAlex from "../../../../images/avatar/alex.jpg";
import AvatarAverie from "../../../../images/avatar/averie.jpg";
import AvatarBrooke from "../../../../images/avatar/brooke.jpg";
import AvatarIvana from "../../../../images/avatar/ivana.jpg";
import AvatarShamanta from "../../../../images/avatar/shamanta.jpg";
import HeroInes from "../../../../images/hero/home.png";
import ModalListContributor from "../modalListContributor";
import ModalVideo from "./modalVideo";
import { Container } from "../../../../styles/bases";
import { Margin, MobileTextCenter } from "../../../../styles/utils";
import { Row, Col, Progress, Button, ShowModal } from "../../../lib";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { getDeployedFromConfig } from "../../../../utils/getDeployed";
import { prepBigNumber } from "../../../../utils/web3Utils";
import { getTokenDetailsFromAddress } from "../../../../utils/paymentToken";
import {
  totalContributed,
  getCrowdfundEnd,
  getPrincipalRequested,
  getPrincipalToken
} from "../../../../utils/crowdloan";
import { formatBN } from "../../../../utils/formatters";
import {
    getMinimumRepayment,
    getRepaymentStart
} from "../../../../utils/metadata";
import PatternImage from "../../../../images/pattern.png";
import contractAddresses from "../../../../config/ines.fund";
import {
  MILLISECONDS,
  MONTHS_IN_YEAR,
  ZERO
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

interface HomeHeroProps extends RouteComponentProps<any> {
  loanPeriod: string;
  interestRate: string;
  contributors: object[];
  loanMetadata: object;
}

export interface HomeHeroState {
  showModal: boolean;
  showModalVideo: boolean;
  loanPeriod: string;
  interestRate: string;
  loanEndTimestamp: string;
  repaymentStart: any;
  minRepayment: any;
  totalContributed: string;
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
      repaymentStart: null,
      minRepayment: null,
      totalContributed: null,
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
    const crowdloanInstance = await getDeployedFromConfig(
      "Crowdloan",
      contractAddresses
    );
    const { loanMetadata } = this.props;

    try {
      const minRepayment = await getMinimumRepayment(loanMetadata);
      const repaymentStart = await getRepaymentStart(loanMetadata);
      
      const principalRequested = await getPrincipalRequested(
        crowdloanInstance
      );
      const loanStartTimestamp = await getCrowdfundEnd(
        crowdloanInstance
      );
      const _totalContributed = await totalContributed(crowdloanInstance);
      const paymentToken = await getTokenDetailsFromAddress(
        await getPrincipalToken(crowdloanInstance)
      );

      let loanEndTimestamp;

      if (+loanStartTimestamp !== ZERO) {
        const DAYINMILLISECONDS = 86400 * MILLISECONDS;
        let endTimestamp = + (await getCrowdfundEnd(crowdloanInstance));
        endTimestamp = new Date(endTimestamp * MILLISECONDS).getTime();
        const now: any = new Date().getTime();

        loanEndTimestamp = Math.ceil((endTimestamp - now) / DAYINMILLISECONDS);
      }

      this.setState({
        loanEndTimestamp: loanEndTimestamp || 0,
        repaymentStart: repaymentStart || 0,
        minRepayment: minRepayment.toString() || 0,
        totalContributed: _totalContributed || 0,
        principalRequested: principalRequested || 0,
        paymentToken
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleModal() {
    const { showModal } = this.state;
    const { contributors } = this.props;
    this.setState(
      {
        showModal: !showModal
      },
      () => ShowModal(<ModalListContributor contributors={contributors} />)
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
    const { contributors } = this.props;
    return (
      <HeroWrapper>
        <img
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            left: 0,
            transform: "scaleX(-1)"
          }}
          src={PatternImage}
          alt="pattern"
        />
        <img
          style={{ position: "absolute", top: 0, height: "100%", right: 0 }}
          src={PatternImage}
          alt="pattern"
        />
        <Container>
          <HeroCell>
            <Row>
              <Col lg={7} md={12} sm={12} text="center">
                <HeroImage>
                  <HeroLink onClick={this.handleModalVideo}>
                    <img src={HeroInes} alt="HomeHero - Illustraion" />
                  </HeroLink>
                </HeroImage>
              </Col>
              <Col lg={5} md={12} sm={12}>
                <b>
                  <p style={{ color: "#6c6d7a" }}>
                    INCOME SHARE AGREEMENT // EDUCATION
                  </p>
                </b>
                <h2>Help me raise 60,000 Dai to attend Cornell University</h2>
                <Margin top={32}>
                  <HeroStats>
                    <h5>
                      {!this.state.totalContributed
                        ? "0"
                        : formatBN(prepBigNumber(
                            this.state.totalContributed,
                            this.state.paymentToken.decimals,
                            true
                          ))}
                      {" Dai "}
                      <small>
                        of&nbsp;
                        {!this.state.principalRequested
                          ? "0"
                          : formatBN(prepBigNumber(
                              this.state.principalRequested,
                              this.state.paymentToken.decimals,
                              true
                            ))}{" "}
                        goal
                      </small>
                    </h5>
                  </HeroStats>
                  <HeroStatsRight>
                    <p>1 Dai = 1 USD</p>
                  </HeroStatsRight>
                </Margin>
                <Margin vertical={8}>
                  {!this.state.totalContributed || !this.state.principalRequested ? (
                    <Progress current={0} />
                  ) : (
                    <Progress
                      current={
                        (+prepBigNumber(
                          this.state.totalContributed,
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
                    <HeroLink onClick={this.handleModal}>
                      Powered by
                      <b> { !contributors ? "0" : contributors.length } </b>
                      contributors
                    </HeroLink>
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
                    <Col lg={2} sm={6}>
                      <HeroStats>
                        <h4>
                          {!this.props.interestRate
                            ? "0"
                            : this.props.interestRate
                          }
                          %
                        </h4>
                        <p>ISA</p>
                      </HeroStats>
                    </Col>
                    <Col lg={3} sm={6}>
                      <HeroStats>
                        <h4>
                          {!this.props.loanPeriod ? "0" : Math.ceil((+this.props.loanPeriod)/MONTHS_IN_YEAR)}{" "}
                          yr.
                        </h4>
                        <p>Duration</p>
                      </HeroStats>
                    </Col>
                    <Col lg={4}>
                      <HeroStats>
                        <h4>
                          {!this.state.minRepayment
                            ? "0"
                            : formatBN(prepBigNumber(
                                this.state.minRepayment,
                                this.state.paymentToken.decimals,
                                true
                              ))}{" "}
                              Dai
                        </h4>
                        <p>Min Repayment</p>
                      </HeroStats>
                    </Col>
                    <Col lg={3}>
                      <HeroStats>
                        <h4>
                          {!this.state.minRepayment
                            ? "0"
                            : new Date(this.state.repaymentStart * MILLISECONDS).getFullYear()
                              }</h4>
                        <p>ISA Start</p>
                      </HeroStats>
                    </Col>
                  </Row>
                  <p style={{ color: "#6c6d7a" }}>
                    <small>
                      Income Share Agreement (ISA) is monthly percentage of post-graduation income that will be shared to
                      investors proportionally by the amount of contribution within the duration or until cap is reached
                    </small>
                  </p>
                </Margin>
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <Margin top={16}>
                      <Button color="green" onClick={this.handleLend}>
                        Invest Now
                      </Button>
                    </Margin>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <Margin top={16}>
                      <Button color="green" outline onClick={() => window.open("#")}>
                        Video Interview
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
