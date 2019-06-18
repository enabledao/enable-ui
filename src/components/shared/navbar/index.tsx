// Shared navbar component
import React from "react";
import { Container } from "../../../styles/bases";
import {
  NavbarWrapper,
  NavbarBox,
  NavbarBrand,
  NavbarMenu,
  NavbarItems
} from "./Styled";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarBox>
          <NavbarBrand>
            <span>Enable</span>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarItems>
              <a href="/">Home</a>
            </NavbarItems>
            <NavbarItems>
              <a href="/">How it works</a>
            </NavbarItems>
            <NavbarItems>
              <a href="/">Loan</a>
            </NavbarItems>
            <NavbarItems>
              <a href="/">Features</a>
            </NavbarItems>
            <NavbarItems>
              <a href="/">Protocol Integrations</a>
            </NavbarItems>
          </NavbarMenu>
        </NavbarBox>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
