import React, { Fragment } from "react";
import BorrowerActions from "../borrowerActions";
import Withdrawal from "../withdrawals";
import RepaymentStatus from "../repaymentStatus";
import { Container } from "../../../../styles/bases";
import {
  TabWrapper,
  TabMenu,
  TabContentWrapper,
  TabMenuList,
  TabMenuOnlyShowMobile,
  TabContent
} from "./styled";

export interface TabHomeState {
  page: number;
}

interface TabHomeProps {
  borrower?: boolean;
  transacting?: boolean;
  loanStatus?: string;
  withdrawals?: object;
  repayments?: object;
  onborrowerwithdraw?: () => {}
  onrepay?: () => {}
  onstartcrowdfund?: () => {}
  onWithdraw?: () => {}
}

class TabHome extends React.Component<TabHomeProps, TabHomeState> {
  tabContentNode: React.RefObject<Element>;
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.renderTabContent = this.renderTabContent.bind(this);
    this.tabContentNode = React.createRef();
  }

  scrollToElement() {
    window.scrollBy(
      0,
      this.tabContentNode.current.getBoundingClientRect().top - 75
    );
  }

  renderTabContent() {
    const { page } = this.state;
    const {
      transacting,
      loanStatus,
      withdrawals,
      repayments,
      onborrowerwithdraw,
      onrepay,
      onstartcrowdfund,
      onWithdraw
    } = this.props;

    switch (page) {
      case 0:
        return (
          <Fragment>
            <Withdrawal
              withdrawals={withdrawals}
              transacting={transacting}
              onWithdraw={onWithdraw}
              />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <RepaymentStatus repayments={repayments}/>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <BorrowerActions
              loanStatus={loanStatus}
              onborrowerwithdraw={onborrowerwithdraw}
              onrepay={onrepay}
              onstartcrowdfund={onstartcrowdfund} />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <RepaymentStatus repayments={repayments}/>
          </Fragment>
        );
    }
  }

  renderBorrowerMenu = () => {
    const { page } = this.state;
    return (
      <TabMenu>
        <TabMenuOnlyShowMobile
          onClick={() => {
            this.setState({ page: 1 });
          }}
          activePage={page === 1}
        >
          <span>Income Share</span>
        </TabMenuOnlyShowMobile>
        <TabMenuList
          onClick={() => {
            this.setState({ page: 2 });
          }}
          activePage={page === 2}
        >
          <span>Borrower Actions</span>
        </TabMenuList>
      </TabMenu>
    );
  }

  renderLenderMenu = () => {
    const { page } = this.state;
    return (
      <TabMenu>
        <TabMenuOnlyShowMobile
          onClick={() => {
            this.setState({ page: 0 });
          }}
          activePage={page === 0}
        >
          <span>Withdrawal</span>
        </TabMenuOnlyShowMobile>
        <TabMenuList
          onClick={() => {
            this.setState({ page: 1 });
          }}
          activePage={page === 1}
        >
          <span>Income Share</span>
        </TabMenuList>
      </TabMenu>
    );
  }

  render() {
    const { borrower } = this.props;
    return (
      <React.Fragment>
        <TabWrapper>
          { borrower ?
            this.renderBorrowerMenu() :
            this.renderLenderMenu()
          }
        </TabWrapper>
        <TabContentWrapper ref={this.tabContentNode}>
          <TabContent>
            <Container>
              {this.renderTabContent()}
            </Container>
          </TabContent>
        </TabContentWrapper>
      </React.Fragment>
    );
  }
}

export default TabHome;
