import React from "react";
import { Container } from "../../../styles/bases";
import { FooterWrapper, FooterContent } from "./styled";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>&copy; {year} Enable, All rights reserved</FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
