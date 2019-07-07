// Pages social credit component
import React from "react";
import calculatorIcon from "../../../../images/icons/calculator.svg";
import { TextField, Row, Col } from "../../../lib";
import { Margin, Padding } from "../../../../styles/utils";
import { RadioButton, SimulateWrapper } from "./styled";
import { Container } from "../../../../styles/bases";

export interface SimuLationReturnState {
  textfieldShow: boolean;
}

class SimuLationReturn extends React.Component<{}, SimuLationReturnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      textfieldShow: false
    };
  }
  render() {
    const { textfieldShow } = this.state;
    return (
      <Container>
        <SimulateWrapper>
          <Row justify="center">
            <Col lg={10} md={12}>
              <img
                src={calculatorIcon}
                alt="Icon - Calculator"
                width={34}
                style={{ position: "absolute" }}
              />
              <Padding left={48}>
                <h2>Simulated Returns</h2>
              </Padding>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Margin top={24}>
                <h6>If you lend:</h6>
              </Margin>
              <Margin top={16}>
                <RadioButton>
                  <input
                    id="7Dai"
                    type="radio"
                    name="gender"
                    value="7Dai"
                    onChange={() => this.setState({ textfieldShow: false })}
                    defaultChecked={true}
                  />
                  <label htmlFor="7Dai">7 Dai</label>
                </RadioButton>
                <RadioButton>
                  <input
                    id="25Dai"
                    type="radio"
                    name="gender"
                    value="25Dai"
                    onChange={() => this.setState({ textfieldShow: false })}
                  />
                  <label htmlFor="25Dai">25 Dai</label>
                </RadioButton>
                <RadioButton>
                  <input
                    id="100Dai"
                    type="radio"
                    name="gender"
                    value="100Dai"
                    onChange={() => this.setState({ textfieldShow: false })}
                  />
                  <label htmlFor="100Dai">100 Dai</label>
                </RadioButton>
                <RadioButton>
                  <input
                    id="1000Dai"
                    type="radio"
                    name="gender"
                    value="1000Dai"
                    onChange={() => this.setState({ textfieldShow: false })}
                  />
                  <label htmlFor="1000Dai">1000 Dai</label>
                </RadioButton>
                <RadioButton>
                  <input
                    id="other"
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={e =>
                      this.setState({ textfieldShow: e.target.checked })
                    }
                  />
                  <label htmlFor="other">Other</label>
                </RadioButton>
                {textfieldShow && (
                  <Row>
                    <Col sm={12} lg={6}>
                      <Margin top={16}>
                        <TextField
                          type="number"
                          placeholder="Enter the number you want to lend"
                        />
                      </Margin>
                    </Col>
                  </Row>
                )}
              </Margin>
              <Margin top={24} bottom={16}>
                <p>You can expect to earn a total interest of:</p>
              </Margin>
              <Margin top={24}>
                <h3>0.42 Dai</h3>
              </Margin>
              <Margin vertical={16}>
                <a href="/">More info ...</a>
              </Margin>
              <p>
                By using this service, you are agreeing to the disclaimer for
                simulate returns. Simulated return also does not count gas fees
              </p>
            </Col>
          </Row>
        </SimulateWrapper>
      </Container>
    );
  }
}

export default SimuLationReturn;
