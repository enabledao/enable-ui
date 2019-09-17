import React from "react";
import {withNavbarAndFooter} from "../../hoc";
import HomeHero from "./hero";
import TabHome from "./tab";
import ModalWip from "./modalWip";
import {getDeployedFromConfig} from "../../../utils/getDeployed";
import contractAddresses from "../../../config/ines.fund";
import {PayeeAddedEvent, shares} from "../../../utils/repaymentManager";
import {getTokenDetailsFromAddress} from "../../../utils/paymentToken";
import {getPrincipalToken} from "../../../utils/termsContract";
import {ShowModal} from "../../lib";

export interface HomeState {
    contributors: any;
    paymentToken: object;
    crowdloan: object;
}

class Home extends React.Component<{}, HomeState> {
    state = {
        contributors: [],
        paymentToken: null,
        crowdloan: null
    };
    componentDidMount = async () => {
        ShowModal(<ModalWip />);

        const crowdloan = await getDeployedFromConfig("Crowdloan", contractAddresses);
        const paymentToken = await getTokenDetailsFromAddress(
            await getPrincipalToken(crowdloan)
        );

        const repaymentManagerInstance = await getDeployedFromConfig(
            "RepaymentManager",
            contractAddresses
        );

        const payeeAddedEvents = await PayeeAddedEvent(repaymentManagerInstance, {
            fromBlock: 0,
            toBlock: "latest"
        });

        const contributors = await Promise.all(
            payeeAddedEvents
                .map(async event => {
                    const address = event.returnValues.account;
                    const amount = await shares(repaymentManagerInstance, address);
                    return {address, amount};
                })
                .sort((a, b) => (+a.amount > +b.amount ? 1 : -1)) // Sort contributors from the highest lending amount to the lending amount
        );

        this.setState({
            contributors,
            paymentToken,
            crowdloan
        });
    };

    render() {
        return (
            <React.Fragment>
                <HomeHero contributors={this.state.contributors} />
                <TabHome contributors={this.state.contributors} paymentToken={this.state.paymentToken} crowdloan={this.state.crowdloan} />
            </React.Fragment>
        );
    }
}

export default withNavbarAndFooter(Home);
