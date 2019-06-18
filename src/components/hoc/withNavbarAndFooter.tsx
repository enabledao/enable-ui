// HOC with Navbar and Footer

import React from "react";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

function withNavbarAndFooter<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <React.Fragment>
      <Navbar />
      <Component {...props} />
      <Footer />
    </React.Fragment>
  );
}

export default withNavbarAndFooter;
