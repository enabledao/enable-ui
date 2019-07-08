// Component app
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NormalizeStyle } from "./styles/bases";
import Home from "./components/pages/home";
import {
  PersonalInfo,
  LoanAmount,
  LoanOfferThankYou
} from "./components/pages/loanOffer";
import { AppPath } from "./constant/appPath";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NormalizeStyle />
      <Router>
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
      </Router>
    </React.Fragment>
  );
};

export default App;
