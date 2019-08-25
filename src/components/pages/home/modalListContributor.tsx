import React from "react";
import { listContributor } from "./hero";
import { Row, Col } from "../../lib";

const ModalListContributor: React.FC = () => (
  <React.Fragment>
    <h4>List of contributing lenders</h4>
    <Row>
      {listContributor.map(res => (
        <Col lg={4} md={6} sm={12} key={res.name}>
          <h6>{res.name}</h6>
          <small>
            <p>{res.address}</p>
          </small>
          <p>
            Contribute <b>{res.lendNumber}</b> Dai
          </p>
        </Col>
      ))}
    </Row>
  </React.Fragment>
);

export default ModalListContributor;
