import React from "react";
import { listContributor } from "./";
import { Margin, Padding } from "../../../../styles/utils";
import { Avatar, Row, Col } from "../../../lib";
import listIcon from "../../../../images/icons/list.svg";

const ModalListContributor: React.FC = () => (
  <React.Fragment>
    <img
      src={listIcon}
      alt="Icon - List"
      width={34}
      style={{ position: "absolute" }}
    />
    <Padding left={48}>
      <h4>List of contributing lenders</h4>
    </Padding>
    <Margin top={24}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        provident laudantium ratione atque! Impedit autem velit illum dolore ad
        unde, porro a nostrum dolorem modi laboriosam suscipit consequatur
        temporibus iure.
      </p>
    </Margin>
    <Row>
      {listContributor.map(res => (
        <Col lg={4} md={6} sm={12} key={res.name}>
          <Avatar size="sm" circle={true} style={{ position: "absolute" }}>
            <img src={res.image} alt="Avatar - Ines" />
          </Avatar>
          <Padding left={60}>
            <h6>{res.name}</h6>
            <small>
              <p>{res.address}</p>
            </small>
            <p>
              Contribute <b>{res.lendNumber}</b> Dai
            </p>
          </Padding>
        </Col>
      ))}
    </Row>
  </React.Fragment>
);

export default ModalListContributor;
