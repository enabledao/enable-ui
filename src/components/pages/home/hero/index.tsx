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
import getWeb3, {getGanacheWeb3} from '../../../../utils/getWeb3';
import TermsContract from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import RepaymentManager from '@enabledao/enable-contracts/build/contracts/RepaymentManager.json';

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
    this.state = { showModal: false, showModalVideo: false, loanPeriod: null, interestRate: null, loanEndTimestamp: null, totalShares: null, principalRequested: null, payees: null};
    this.handleModal = this.handleModal.bind(this);
    this.handleModalVideo = this.handleModalVideo.bind(this);
    this.handleLend = this.handleLend.bind(this);
  }

  // getGanacheAddresses = async () => {
  //   if (!this.ganacheProvider) {
  //     this.ganacheProvider = getGanacheWeb3();
  //   }
  //   if (this.ganacheProvider) {
  //     return await this.ganacheProvider.eth.getAccounts();
  //   }
  //   return [];
  // };

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const termsContractInstance = new web3.eth.Contract(TermsContract.abi, "0x7e664541678C4997aD9dBDb9978C6E2B5A9445bE");
    const repaymentManagerInstance = new web3.eth.Contract(RepaymentManager.abi, "0xC10Bab0f0B1db1f18ddc82a0204F79B7176dD66c");

    try {
      const loanParams = await termsContractInstance.methods.getLoanParams().call();
      const principalRequested = await termsContractInstance.methods.getPrincipalRequested().call();
      const totaShares = await repaymentManagerInstance.methods.totalShares().call();
      // To Do
      // Get # of payees

      let loanEndTimestamp;

      if (loanParams.loanStartTimestamp !== "0") {
        loanEndTimestamp = await termsContractInstance.methods.getLoanEndTimestamp().call();
      }

      this.setState({
        loanPeriod: loanParams.loanPeriod === "0" ? "N/A" : loanParams.loanPeriod,
        interestRate: loanParams.interestRate === "0" ? "N/A" : loanParams.interestRate,
        loanEndTimestamp: !loanEndTimestamp ? "N/A" : loanEndTimestamp,
        totalShares: totaShares === "0" ? "N/A" : totaShares,
        principalRequested: principalRequested === "0" ? "N/A" : principalRequested
      });
    } catch (err) {
      console.log(err)
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
                          {!this.state.totalShares ? "N/A" : this.state.totalShares} <small>Dai</small>
                        </h4>
                        <small>Raised of {!this.state.principalRequested ? "N/A" : this.state.principalRequested} goal</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.loanEndTimestamp ? "N/A" : this.state.loanEndTimestamp} <small>Days left</small>
                        </h4>
                        <small>Loan expires</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.interestRate ? "N/A" : this.state.interestRate}% <small>Interest</small>
                        </h4>
                        <small>Per annum</small>
                      </HeroStats>
                    </Col>
                    <Col lg={3} md={6}>
                      <HeroStats>
                        <h4>
                          {!this.state.loanPeriod ? "N/A" : this.state.loanPeriod } <small>Month</small>
                        </h4>
                        <small>Loan period</small>
                      </HeroStats>
                    </Col>
                  </Row>
                </Margin>
                <Row>
                  <Col lg={10} md={12}>
                    <Margin top={16}>
                      {
                        (this.state.totalShares === "N/A" || this.state.principalRequested === "N/A") ? (
                          <Progress current={0} />
                        ) : (
                          <Progress current={+this.state.principalRequested / +this.state.totalShares} />
                        )
                      }
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
