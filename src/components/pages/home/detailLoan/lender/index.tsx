// Pages social credit component
import React from "react";
import { Row, Col } from "../../../../lib";
import { Margin } from "../../../../../styles/utils";
import AverieAva from "../../../../../images/avatar/averie.jpg";
import BrookeAva from "../../../../../images/avatar/brooke.jpg";
import IvanaAva from "../../../../../images/avatar/ivana.jpg";
import {
  LenderWrapper,
  LenderListWrapper,
  LenderListAvatar,
  LenderListInfo
} from "./Styled";

const ContributingLenders: React.FC = () => (
  <React.Fragment>
    <h5>Contributing Lenders</h5>
    <Row text="center">
      <Col lg={6} md={12} sm={6}>
        <LenderWrapper>
          <h4>29,000</h4>
          <small>Dai Raised</small>
        </LenderWrapper>
      </Col>
      <Col lg={6} md={12} sm={6}>
        <LenderWrapper>
          <h4>3</h4>
          <small>Lender</small>
        </LenderWrapper>
      </Col>
    </Row>
    <Margin top={16}>
      <LenderListWrapper>
        <LenderListAvatar>
          <img src={AverieAva} alt="Avatar - Averie" />
        </LenderListAvatar>
        <LenderListInfo>
          <h6>Averie</h6>
          <small>
            <p>0x129391823...</p>
          </small>
        </LenderListInfo>
      </LenderListWrapper>
      <LenderListWrapper>
        <LenderListAvatar>
          <img src={BrookeAva} alt="Avatar - Brooke" />
        </LenderListAvatar>
        <LenderListInfo>
          <h6>Brooke</h6>
          <small>
            <p>0x129391823...</p>
          </small>
        </LenderListInfo>
      </LenderListWrapper>
      <LenderListWrapper>
        <LenderListAvatar>
          <img src={IvanaAva} alt="Avatar - Ivana" />
        </LenderListAvatar>
        <LenderListInfo>
          <h6>Ivana</h6>
          <small>
            <p>0x129391823...</p>
          </small>
        </LenderListInfo>
      </LenderListWrapper>
    </Margin>
    <Margin top={16}>
      <a href="/">See more ...</a>
    </Margin>
  </React.Fragment>
);

export default ContributingLenders;
