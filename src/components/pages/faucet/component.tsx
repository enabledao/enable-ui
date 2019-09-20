import React from "react";
import walletIcon from "../../../images/icons/wallet.svg";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Container} from "../../../styles/bases";
import {Margin, Padding} from "../../../styles/utils";
import {Row, Col, Button} from "../../lib";
import {FaucetActionMobile, FaucetBox, FaucetWrapper} from "./styled";
import contractAddresses from "../../../config/ines.fund.js";
import {
    prepBigNumber
} from "../../../utils/web3Utils";
import { getDeployedFromConfig } from "../../../utils/getDeployed";
import { request } from '../../../utils/tokenFaucet';
import { balanceOf, getTokenDetailsFromAddress, getInstance } from '../../../utils/paymentToken';
import { getPrincipalToken } from '../../../utils/crowdloan';

interface FaucetState {
    paymentToken: object,
    paymentTokenInstance: object;
    faucetInstance: object;
    faucetBalance: string;
    transacting: boolean;
}
interface FaucetProps extends RouteComponentProps<any> {}
class Faucet extends React.Component<FaucetProps, FaucetState> {
    state = {
        paymentToken: null,
        paymentTokenInstance: null,
        faucetInstance: null,
        faucetBalance: null,
        transacting: false
    };

    onRequest = async () => {
        // const {history} = this.props;
        const { paymentToken: { address }, faucetBalance, faucetInstance } = this.state;

        if (!+faucetBalance) {
            return console.error('Faucet balance empty'); 
        }

        try {
            this.setState({ transacting: true });

            const tx = await request(faucetInstance, address);
            console.log(tx);

            this.setState({ transacting: false });
            return;
        } catch (e) {
            this.setState({ transacting: false });
            return console.error(e);
        } 
    }

    componentDidMount = async () => {
        try {
            
            const crowdloanInstance = await getDeployedFromConfig('Crowdloan', contractAddresses);
            const faucetInstance = await getDeployedFromConfig('TokenFaucet', contractAddresses);

            const paymentToken = await getTokenDetailsFromAddress(await getPrincipalToken(crowdloanInstance));
            const paymentTokenInstance = await getInstance(paymentToken.address);

            const faucetBalance = await balanceOf(paymentTokenInstance, faucetInstance.options.address)

            this.setState({
                paymentToken,
                paymentTokenInstance,
                faucetInstance,
                faucetBalance
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const {paymentToken, faucetBalance, transacting} = this.state;
        return (
            <React.Fragment>
                <FaucetWrapper>
                    <Container>
                        <Row justify='center'>
                            <Col lg={10} md={12}>
                                <img
                                    src={walletIcon}
                                    alt='Icon - Wallet'
                                    width={34}
                                    style={{position: "absolute"}}
                                />
                                <Padding left={48}>
                                    <h2>Testnet Token Faucet</h2>
                                </Padding>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Margin vertical={48}>
                                    <Row text='center'>
                                        <Col lg={4} md={4} sm={4} xs={4}>
                                            <h4>{!faucetBalance ? "0" : prepBigNumber(faucetBalance, paymentToken.decimals, true)} Dai</h4>
                                            <p>Faucet Balance</p>
                                        </Col>
                                        <Col lg={4} md={4} sm={4} xs={4}>
                                            <h4>{!(paymentToken && paymentToken.balanceOf) ? "0" : prepBigNumber(paymentToken.balanceOf, paymentToken.decimals, true)} Dai</h4>
                                            <p>Account Balance</p>
                                        </Col>
                                    </Row>
                                </Margin>
                            </Col>
                        </Row>
                        <Margin bottom={48}>
                            <Row justify='center'>
                                <Col lg={10} md={12}>
                                    <FaucetBox>
                                        <Row justify='center' text='center'>
                                            <Col lg={4} md={6} sm='hidden'>
                                                <Button color='green' disabled={transacting} onClick={this.onRequest}>Request</Button>
                                            </Col>
                                        </Row>
                                    </FaucetBox>
                                    <FaucetActionMobile>
                                        <Button color='green' disabled={transacting} onClick={this.onRequest}>Request</Button>
                                    </FaucetActionMobile>
                                </Col>
                            </Row>
                        </Margin>
                    </Container>
                </FaucetWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter<FaucetProps>(Faucet);
