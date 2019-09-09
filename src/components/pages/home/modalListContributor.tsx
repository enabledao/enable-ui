import React from "react";
import { listContributor } from "./hero";
import { Row, Col } from "../../lib";

interface Contributor {
  address: string;
  amount: string;
}
interface ModalListContributorProps {
  contributors: Contributor[];
}

// To Do (Dennis): Missing the name of the contributor
const ModalListContributor: any = ({contributors}: ModalListContributorProps) => (
  <React.Fragment>
    <h4>List of contributing lenders</h4>
    <Row>
      {contributors.map(contributor => (
        <Col lg={4} md={6} sm={12} key={contributor.address}>
          <h6>Daniel</h6>
          <small>
            <p>{contributor.address.replace(contributor.address.substring(10, 30), ".....")}</p>
          </small>
          <p>
            Contribute <b>{contributor.amount}</b> Dai
          </p>
        </Col>
      ))}
    </Row>
  </React.Fragment>
);

export default ModalListContributor;
