// Component app
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NormalizeStyle } from "./styles/bases";
import Home from "./components/pages/home";
import ErrorNotFound from "./components/pages/error";
import {
  PersonalInfo,
  LoanAmount,
  LoanOfferThankYou
} from "./components/pages/loanOffer";
import MyLoan from "./components/pages/myLoan";
import { AppPath } from "./constant/appPath";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NormalizeStyle />
      <Router>
        <Switch>
          <Route exact={true} path={AppPath.home} component={Home} />
          <Route
            exact={true}
            path={AppPath.LoanPersonalInfo}
            component={PersonalInfo}
          />
          <Route
            exact={true}
            path={AppPath.LoanOfferAmount}
            component={LoanAmount}
          />
          <Route
            exact={true}
            path={AppPath.LoanOfferThankYou}
            component={LoanOfferThankYou}
          />
          <Route exact={true} path={AppPath.myLoan} component={MyLoan} />
          <Route component={ErrorNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
