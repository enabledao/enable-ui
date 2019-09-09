import React from "react";
import {withNavbarAndFooter} from "../../hoc";
import HomeHero from "./hero";
import TabHome from "./tab";
import ModalWip from "./modalWip";
import {getDeployedFromConfig} from "../../../utils/getDeployed";
import contractAddresses from "../../../config/ines.fund";
import {PayeeAddedEvent, shares} from "../../../utils/repaymentManager";
import {ShowModal} from "../../lib";

export interface HomeState {
    contributors: any;
}

class Home extends React.Component<{}, HomeState> {
    state = {
        contributors: []
    };
    componentDidMount = async () => {
        ShowModal(<ModalWip />);

        const repaymentManagerInstance = await getDeployedFromConfig(
            "RepaymentManager",
            contractAddresses
        );

        const payeeAddedEvents = await PayeeAddedEvent(repaymentManagerInstance, {
            fromBlock: 0,
            toBlock: "latest"
        });

        const contributors = await Promise.all(
            payeeAddedEvents.map(async event => {
                const address = event.returnValues.account;
                // To DO (Dennis) Need to calculate the big number using prepBigNumber function

                const amount = await shares(repaymentManagerInstance, address);
                return {address, amount};
            })
        );

        this.setState({
            contributors
        });
    };

    render() {
        return (
            <React.Fragment>
                <HomeHero />
                <TabHome contributors={this.state.contributors} />
            </React.Fragment>
        );
    }
}

export default withNavbarAndFooter(Home);
