import React from "react";
import { Container } from "../../../styles/bases";
import { Margin } from "../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../constant/appPath";
import { Row, Col, Button } from "../../lib";
import { ErrorWrapper } from "./styled";
import SadIllustration from "../../../images/illustration/sad.svg";

interface ErrorNotFoundProps extends RouteComponentProps<any> {}

const ErrorNotFound: React.FC<ErrorNotFoundProps> = ({ history }) => (
  <ErrorWrapper>
    <Container>
      <Row justify="center" text="center">
        <Col lg={6} md={12}>
          <Margin bottom={48}>
            <img
              src={SadIllustration}
              alt="NotFound - Illustration"
              width={280}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Sorry, Ines is not here!</h4>
          </Margin>
          <p>Go back to helping Ines get her master’s degree.</p>
          <Row justify="center">
            <Col lg={6} md={12}>
              <Margin top={32}>
                <Button
                  color="purple"
                  onClick={() => history.push(AppPath.home)}
                >
                  Back to Home
                </Button>
              </Margin>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </ErrorWrapper>
);

export default withRouter<ErrorNotFoundProps>(ErrorNotFound);
