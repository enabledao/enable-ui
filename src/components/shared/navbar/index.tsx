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
} from "./styled";
import { AppPath } from "../../../constant/appPath";

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
            <NavLink exact={true} to={AppPath.home}>
              Inesfund
            </NavLink>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarItems>
              <NavLink
                exact={true}
                to={AppPath.home}
                activeStyle={NavbarItemActive}
              >
                Home
              </NavLink>
            </NavbarItems>
            <NavbarItems>
              <NavLink
                exact={true}
                to={AppPath.about}
                activeStyle={NavbarItemActive}
              >
                About
              </NavLink>
            </NavbarItems>
            <NavbarItems>
              <NavLink
                exact={true}
                to={AppPath.myLoan}
                activeStyle={NavbarItemActive}
              >
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
