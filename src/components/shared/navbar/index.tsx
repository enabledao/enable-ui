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
  color: "blue"
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
              <NavLink to="/loan/1" activeStyle={NavbarItemActive}>
                Loan
              </NavLink>
            </NavbarItems>
          </NavbarMenu>
        </NavbarBox>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
