// HOC with Navbar only

import React from "react";
import Navbar from "../shared/navbar";

function withNavbar<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <React.Fragment>
      <Navbar />
      <Component {...props} />
    </React.Fragment>
  );
}

export default withNavbar;
