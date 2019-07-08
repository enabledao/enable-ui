// Style of navbar component
import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: relative;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.2;
    top: 0;
    left: 0;
    background-image: linear-gradient(157deg, #ffffff 0%, #f9cec3 86%);
  }
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
  font-weight: 600;
  a {
    color: black;
  }
`;

const NavbarMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const NavbarItems = styled.li`
  padding: 0 12px;
  font-weight: 600;
  &:last-child {
    padding-right: 0;
  }
  a {
    color: black;
  }
`;

export { NavbarWrapper, NavbarBox, NavbarBrand, NavbarMenu, NavbarItems };
