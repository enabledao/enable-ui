import React from "react";
import { TextField, Row, Col, Button, ShowModal } from "../../../lib";
import { Margin, Padding } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CornellLogo from "../../../../images/cornell.png";
import BloomLogo from "../../../../images/bloomLogo.png";
import BoxLogo from "../../../../images/3boxLogo.png";
import InesSquare from "../../../../images/inesSquare.png";
import { AppPath } from "../../../../constant/appPath";
import {
    ButtonLendSimulation,
    SimulationWrapper,
    SocialContent,
    SocialAvatar,
    IdentityBox,
    ProfileSocialLink
} from "./styled";
import ModalListContributor from "../modalListContributor";
import AvatarBrahma from "../../../../images/avatar/brahma.jpg";
import Linkedin from "../../../../images/socialMedia/linkedin.svg";
import Instagram from "../../../../images/socialMedia/instagram.svg";
import Twitter from "../../../../images/socialMedia/twitter.svg";
import Facebook from "../../../../images/socialMedia/facebook.svg";
import { prepBigNumber } from "../../../../utils/web3Utils";
interface SimuLationReturnProps extends RouteComponentProps<any> {
    contributors?: any;
    expectedSalary?: any;
    paymentToken: any;
    simulateInterest: (contribution: string | number, salary?: string) => any;
}

export interface SimuLationReturnState {
    textfieldShow: boolean;
    sliderValue: number;
    simulated: any;
    sliderMin: number;
    sliderMax: number;
    showModal: boolean;
    showModalGuarantor: boolean;
}

export const listContributor = [
    {
        name: "Alex",
        address: "0x141A9B0….a381581",
        lendNumber: 100
    },
    {
        name: "Averie",
        address: "0x141A9B0….a381581",
        lendNumber: 400
    },
    {
        name: "Brooke",
        address: "0x141A9B0….a381581",
        lendNumber: 100
    },
    {
        name: "Ivana",
        address: "0x141A9B0….a381581",
        lendNumber: 200
    },
    {
        name: "Shamanta",
        address: "0x141A9B0….a381581",
        lendNumber: 540
    }
];

class SimuLationReturn extends React.Component<
    SimuLationReturnProps,
    SimuLationReturnState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            textfieldShow: false,
            sliderValue: 30000 / 2,
            sliderMin: 50,
            sliderMax: 30000,
            showModal: false,
            showModalGuarantor: false,
            simulated: null
        };
    }

    handleLend = () => {
        const { history } = this.props;
        history.push(AppPath.LoanPersonalInfo);
    };

    handleChangeSlider = e => {
        this.setState({
            sliderValue: Number(e.target.value)
        });
    };

    handleClickOther = () => {
        const { textfieldShow } = this.state;
        this.setState({ textfieldShow: !textfieldShow });
    };

    handleChangeTextfield = e => {
        this.setState({
            sliderValue: Number(e.target.value)
        });
    };

    handleModalContributor = () => {
        const { showModal } = this.state;
        this.setState(
            {
                showModal: !showModal
            },
            () =>
                ShowModal(
                    <ModalListContributor
                        contributors={this.props.contributors}
                        paymentToken={this.props.paymentToken}
                    />
                )
        );
    };

    getSimulated = () => {
        return this.props.simulateInterest(
            prepBigNumber(
                this.state.sliderValue,
                this.props.paymentToken.decimals
            )
        );
    };

    render() {
        const { sliderValue } = this.state;
        let { expectedSalary } = this.props;

        return (
            <React.Fragment>
                <Margin top={20} bottom={60}>
                    <IdentityBox>
                        <Row>
                            <Col lg={6}>
                                <h5>Identity</h5>
                            </Col>
                            <Col lg={6} text="right">
                                <img src={BloomLogo} alt="Bloom - logo" />
                                <img src={BoxLogo} alt="3DBox - logo" />
                            </Col>
                        </Row>
                        <div style={{ position: "absolute" }}>
                            <img src={InesSquare} alt="Ines - Square" />
                        </div>
                        <Padding left={124}>
                            <h5>Widya Imanesti</h5>
                            <p>Jakarta - Indonesia</p>
                            <Margin top={16}>
                                <ProfileSocialLink
                                    href="https://id.linkedin.com/in/widya-imanesti"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Linkedin}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://www.instagram.com/wimanesti/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Instagram}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://twitter.com/itsenamiw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Twitter}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://www.facebook.com/widya.imanesti"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Facebook}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                            </Margin>
                        </Padding>
                        <div
                            style={{
                                backgroundColor: "#f7f7f7",
                                padding: 16,
                                marginTop: 24
                            }}
                        >
                            <b>
                                <small>ETH Wallet Key</small>
                            </b>
                            <small>
                                <p>
                                    0x141A9B024934Bc61d6A07C28B866C0191a381581
                                </p>
                            </small>
                        </div>
                        <Margin top={24}>
                            <h6 style={{ color: "#21b549", cursor: "pointer" }}>
                                Admission Proof Document
                            </h6>
                        </Margin>
                    </IdentityBox>
                </Margin>
                <Margin top={40}>
                    <h5>Social Credits</h5>
                    <p>Attested by 4 guarantors</p>
                </Margin>
                <Margin top={8}>
                    <SocialContent>
                        <SocialAvatar>
                            <img src={AvatarBrahma} alt="Avatar - User" />
                        </SocialAvatar>
                        <Padding left={56}>
                            <div style={{ display: "inline-block" }}>
                                <h6>Brahma Adhiyasa</h6>
                                <small>Colleague</small>
                            </div>
                            <p style={{ float: "right" }}>
                                <img src={BloomLogo} alt="Bloom - logo" />
                            </p>
                        </Padding>
                    </SocialContent>
                </Margin>
                <Margin top={8}>
                    <SocialContent>
                        <SocialAvatar>
                            <img src={AvatarBrahma} alt="Avatar - User" />
                        </SocialAvatar>
                        <Padding left={56}>
                            <div style={{ display: "inline-block" }}>
                                <h6>Brahma Adhiyasa</h6>
                                <small>Colleague</small>
                            </div>
                            <p style={{ float: "right" }}>
                                <img src={BloomLogo} alt="Bloom - logo" />
                            </p>
                        </Padding>
                    </SocialContent>
                </Margin>
                <Margin vertical={40}>
                    <h5>Simulate Returns</h5>
                </Margin>
                <SimulationWrapper>
                    <Row justify="flex-end">
                        <Col lg={12} sm={12}>
                            <Margin top={16}>
                                <Row>
                                    <Col lg={12}>
                                        <Margin top={8}>
                                            <TextField
                                                label="Investment Amount"
                                                type="number"
                                                placeholder="Enter the number You want to lend"
                                                value={
                                                    sliderValue === 0
                                                        ? ""
                                                        : sliderValue
                                                }
                                                onChange={
                                                    this.handleChangeTextfield
                                                }
                                            />
                                        </Margin>
                                    </Col>
                                </Row>
                            </Margin>
                            <Margin vertical={24}>
                                <h4>
                                    {!this.props.paymentToken
                                        ? "0"
                                        : prepBigNumber(
                                              this.getSimulated().totalAmount,
                                              this.props.paymentToken.decimals,
                                              true
                                          )}
                                    &nbsp;<small>Dai</small>
                                </h4>
                                <p>Expected Total Return</p>
                            </Margin>
                            <hr />
                            <Margin vertical={24}>
                                <b>
                                    {!this.props.paymentToken
                                        ? "0"
                                        : this.getSimulated().percentage.toFixed(
                                              4
                                          )}
                                </b>
                                % <b>ISA</b> from expected starting salary of{" "}
                                <b>
                                    $
                                    {!expectedSalary
                                        ? "0"
                                        : prepBigNumber(
                                              expectedSalary,
                                              this.props.paymentToken.decimals,
                                              true
                                          )}
                                    /year
                                </b>
                            </Margin>
                            <div style={{ position: "absolute" }}>
                                <img src={CornellLogo} alt="cornell - logo" />
                            </div>
                            <Padding left={80}>
                                <p>
                                    Expected salary based on data released by
                                    Cornell University
                                </p>
                                <b>
                                    <p>Learn More</p>
                                </b>
                            </Padding>
                            <br />
                            <hr />
                            <Margin vertical={24}>
                                <p style={{ display: "inline-block" }}>
                                    <b>Minimum payment ?</b>
                                </p>
                                <p style={{ float: "right" }}>$35,000</p>
                            </Margin>
                            <ButtonLendSimulation>
                                <Margin vertical={24}>
                                    <Button
                                        color="green"
                                        onClick={this.handleLend}
                                    >
                                        Invest Now
                                    </Button>
                                </Margin>
                            </ButtonLendSimulation>
                        </Col>
                    </Row>
                </SimulationWrapper>
                <Margin vertical={40}>
                    <h5>Thank You Gifts</h5>
                    <p>Additional rewards from Ines</p>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Invest 100 Dai or more</h5>
                        <p>- I will send personal thank you emails</p>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Invest 100 Dai or more</h5>
                        <p>- Personal thank you emails</p>
                        <p>- Personal thank you call</p>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Invest 5,000 Dai or more</h5>
                        <p>- Personal thank you emails</p>
                        <p>- Personal thank you call</p>
                        <p>- Your sticker on my Laptop and Graduation Robe</p>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Invest 10,000 Dai or more</h5>
                        <p>- Personal thank you emails</p>
                        <p>- Personal thank you call</p>
                        <p>- Your sticker on my Laptop and Graduation Robe</p>
                        <p>- I will be Campus Ambassador for your company</p>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Invest 30,000 Dai or more</h5>
                        <p>- Personal thank you emails</p>
                        <p>- Personal thank you call</p>
                        <p>- Your sticker on my Laptop and Graduation Robe</p>
                        <p>- I will be Campus Ambassador for your company</p>
                        <p>- I will do a research project for your company</p>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={40}>
                    <h5>Contributors</h5>
                    <p>Highest contributors to date</p>
                </Margin>
                <Margin top={40} bottom={24}>
                    <Row>
                        {
                            // To Do (Dennis): Missing the name of the contributor and the date of contribution
                        }
                        {this.props.contributors &&
                            this.props.contributors.map(contributor => (
                                <React.Fragment key={contributor.address}>
                                    <Col lg={6}>
                                        <h6>Daniel</h6>
                                        <small>
                                            <p
                                                style={{
                                                    backgroundColor: "#f7f7f7",
                                                    padding: 8,
                                                    display: "inline-block"
                                                }}
                                            >
                                                {contributor.address.replace(
                                                    contributor.address.substring(
                                                        10,
                                                        30
                                                    ),
                                                    "....."
                                                )}
                                            </p>
                                        </small>
                                    </Col>
                                    <Col lg={6} text="right">
                                        <h6>
                                            <b>
                                                {prepBigNumber(
                                                    contributor.amount || 0,
                                                    this.props.paymentToken
                                                        .decimals,
                                                    true
                                                )}
                                            </b>{" "}
                                            Dai
                                        </h6>
                                        <small>
                                            <p>12 Days ago</p>
                                        </small>
                                    </Col>
                                    <Margin vertical={50} />
                                </React.Fragment>
                            ))}
                    </Row>
                    <Margin top={16}>
                        <h6
                            style={{ color: "#21b549", cursor: "pointer" }}
                            onClick={this.handleModalContributor}
                        >
                            See All
                        </h6>
                    </Margin>
                </Margin>
            </React.Fragment>
        );
    }
}

export default withRouter<SimuLationReturnProps>(SimuLationReturn);
