import React from "react";
import { Row, Col, Avatar } from "../../lib";
import { Padding } from "../../../styles/utils";
import BloomLogo from "../../../images/bloomLogo.png";
import AvatarFadilla from "../../../images/avatar/fadilla.jpg";

const listContributor = [
  {
    name: "Alex",
    status: "Colleague",
    avatar: AvatarFadilla
  },
  {
    name: "Averie",
    status: "Colleague",
    avatar: AvatarFadilla
  },
  {
    name: "Brooke",
    status: "Colleague",
    avatar: AvatarFadilla
  },
  {
    name: "Ivana",
    status: "Colleague",
    avatar: AvatarFadilla
  },
  {
    name: "Shamanta",
    status: "Colleague",
    avatar: AvatarFadilla
  }
];

const ModalListGuarantor: React.FC = () => (
  <React.Fragment>
    <h4>List of Gurantors</h4>
    <Row>
      {listContributor.map(res => (
        <Col lg={4} md={6} sm={12} key={res.name}>
          <div style={{ display: "inline-block" }}>
            <div style={{ position: "absolute" }}>
              <Avatar size="sm" circle={true}>
                <img src={res.avatar} alt="Avatar - User" />
              </Avatar>
            </div>
            <Padding left={60}>
              <h6>{res.name}</h6>
              <p>{res.status}</p>
            </Padding>
          </div>
          <p style={{ float: "right" }}>
            <img src={BloomLogo} alt="Bloom - logo" />
          </p>
        </Col>
      ))}
    </Row>
  </React.Fragment>
);

export default ModalListGuarantor;
