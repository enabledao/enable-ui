// Component app
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NormalizeStyle } from "./styles/bases";
import Home from "./components/pages/home";
import Loan from "./components/pages/loan";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NormalizeStyle />
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/loan/1" component={Loan} />
      </Router>
    </React.Fragment>
  );
};

export default App;
