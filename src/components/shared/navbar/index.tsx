// Shared navbar component
import React from "react";
import { Container } from "../../../styles/bases";
import { NavLink } from "react-router-dom";
import {
  NavbarWrapper,
  NavbarBox,
  NavbarBrand,
  NavbarMenu,
  NavbarItems
} from "./Styled";

const NavbarItemActive: any = {
  fontWeight: 700,
  color: "#6713c4"
};

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarBox>
          <NavbarBrand>
            <NavLink to="/">Enable</NavLink>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarItems>
              <NavLink to="/" activeStyle={NavbarItemActive}>
                Home
              </NavLink>
            </NavbarItems>
            <NavbarItems>
              <NavLink to="/about" activeStyle={NavbarItemActive}>
                About
              </NavLink>
            </NavbarItems>
            <NavbarItems>
              <NavLink to="/my-loan" activeStyle={NavbarItemActive}>
                My Loan
              </NavLink>
            </NavbarItems>
          </NavbarMenu>
        </NavbarBox>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
