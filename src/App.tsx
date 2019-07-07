// Component app
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NormalizeStyle } from "./styles/bases";
import Home from "./components/pages/home";
import {
  LoanOfferStepOne,
  LoanOfferStepTwo
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
          path={AppPath.loanOfferStepOne}
          component={LoanOfferStepOne}
        />
        <Route
          exact={true}
          path={AppPath.loanOfferStepTwo}
          component={LoanOfferStepTwo}
        />
      </Router>
    </React.Fragment>
  );
};

export default App;
