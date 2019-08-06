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
import { RepaymentManager, TermsContract } from '../../../../utils/contractData';
import { getContractInstance } from "../../../../utils/getDeployed";
import { contractMethodCall, getNetworkId } from '../../../../utils/web3Utils';

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
      payees: null
    };
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

    const networkId = await getNetworkId();
    const termsContractAddress = contractAddresses[networkId]['TermsContract'];
    const repaymentManagerAddress = contractAddresses[networkId]['RepaymentManager'];

    // Get the contract instances for Ines (We'll just bake these in for now).
    const termsContractInstance = await getContractInstance(
      TermsContract.abi,
      termsContractAddress
    );

    const repaymentManagerInstance = await getContractInstance(
      RepaymentManager.abi,
      repaymentManagerAddress
    );

    console.log(termsContractInstance.methods);
    console.log(repaymentManagerInstance.methods);

    try {
      const loanParams = await contractMethodCall(termsContractInstance, 'getLoanParams');

      const totaShares = await contractMethodCall(repaymentManagerInstance, 'totalShares');

      const principalRequested = loanParams.principalRequested;
      // const payees = await repaymentManagerInstance.methods._payees();

      let loanEndTimestamp;

      if (loanParams.loanStartTimestamp !== "0") {
        loanEndTimestamp = await contractMethodCall(termsContractInstance, 'getLoanEndTimestamp');
      }

      this.setState({
        loanPeriod:
          loanParams.loanPeriod === "0" ? "0" : loanParams.loanPeriod,
        interestRate:
          loanParams.interestRate === "0" ? "0" : loanParams.interestRate,
        loanEndTimestamp: !loanEndTimestamp ? "0" : loanEndTimestamp,
        totalShares: totaShares === "0" ? "0" : totaShares,
        principalRequested: principalRequested === "0" ? "0" : principalRequested
      });
    } catch (err) {
      console.log(err);
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
                        <small>Raised of {!this.state.principalRequested ? "0" : this.state.principalRequested} goal</small>
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
                          {!this.state.interestRate ? "0" : this.state.interestRate}% <small>Interest</small>
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
