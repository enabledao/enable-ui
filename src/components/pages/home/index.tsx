import React from "react";
import {withNavbarAndFooter} from "../../hoc";
import HomeHero from "./hero";
import TabHome from "./tab";
import ModalWip from "./modalWip";
import {getDeployedFromConfig} from "../../../utils/getDeployed";
import contractAddresses from "../../../config/ines.fund";
import {getTokenDetailsFromAddress} from "../../../utils/paymentToken";
import {getPrincipalToken, amountContributed, FundEvent} from "../../../utils/crowdloan";
import {ShowModal} from "../../lib";

export interface HomeState {
    contributors: any;
    paymentToken: object;
    crowdloanInstance: object;
}

class Home extends React.Component<{}, HomeState> {
    state = {
        contributors: [],
        paymentToken: null,
        crowdloanInstance: null
    };
    componentDidMount = async () => {
        ShowModal(<ModalWip />);

        const crowdloanInstance = await getDeployedFromConfig(
            "Crowdloan",
            contractAddresses
        );
        const paymentToken = await getTokenDetailsFromAddress(
            await getPrincipalToken(crowdloanInstance)
        );

        const fundEvents:any[] = await FundEvent(crowdloanInstance, {
            fromBlock: 0,
            toBlock: "latest"
        });

        const contributors = (await Promise.all(
            [...Object.values(
                new Set(fundEvents.map( event => event.returnValues.sender))
            )]
            .map(async address => {
                const amount = await amountContributed(crowdloanInstance, address);
                return {address, amount};
            })
            ))
            .sort((a, b) => (+a.amount > +b.amount ? 1 : -1)); // Sort contributors from the highest lending amount to the lending amount

        this.setState({
            contributors,
            paymentToken,
            crowdloanInstance
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
