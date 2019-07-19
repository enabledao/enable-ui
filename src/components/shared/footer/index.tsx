import React from "react";
import { Container } from "../../../styles/bases";
import FooterWrapper from "./styled";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>&copy; {year} Enable, All rights reserved</Container>
    </FooterWrapper>
  );
};

export default Footer;
