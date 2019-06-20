// Component app
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NormalizeStyle } from "./styles/bases";
import Home from "./components/pages/home";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NormalizeStyle />
      <Router>
        <Route exact={true} path="/" component={Home} />
      </Router>
    </React.Fragment>
  );
};

export default App;
