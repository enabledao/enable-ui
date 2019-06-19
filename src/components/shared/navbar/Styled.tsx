// Style of navbar component
import styled from "styled-components";

const NavbarWrapper = styled.div`
  border-bottom: 1px solid #e7ebf2;
`;

const NavbarBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarBrand = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const NavbarMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const NavbarItems = styled.li`
  padding: 0 12px;
  font-weight: 700;
  &:last-child {
    padding-right: 0;
  }
`;

export { NavbarWrapper, NavbarBox, NavbarBrand, NavbarMenu, NavbarItems };
