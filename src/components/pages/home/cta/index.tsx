import React from "react";
import { Container } from "../../../../styles/bases";
import { CtaWrapper, CtaContent } from "./styled";
import { Row, Col, Button } from "../../../lib";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";

interface CtaProps extends RouteComponentProps<any> {}

class Cta extends React.Component<CtaProps, {}> {
  constructor(props: CtaProps) {
    super(props);
    this.handleLend = this.handleLend.bind(this);
  }

  handleLend() {
    const { history } = this.props;
    history.push(AppPath.LoanPersonalInfo);
  }

  render() {
    return (
      <CtaWrapper>
        <Container>
          <CtaContent>
            <Row justify="center" align="center">
              <Col lg={9} md={12}>
                <h1>Ready to help Ines?</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio veniam soluta modi? Dolores praesentium voluptas, iusto,
                  officiis odit adipisci error harum pariatur incidunt quo
                  molestias fuga a excepturi dolore quidem.
                </p>
              </Col>
              <Col lg={3} md={12}>
                <Button color="purple" onClick={this.handleLend}>
                  Start lending now
                </Button>
              </Col>
            </Row>
          </CtaContent>
        </Container>
      </CtaWrapper>
    );
  }
}

export default withRouter<CtaProps>(Cta);
