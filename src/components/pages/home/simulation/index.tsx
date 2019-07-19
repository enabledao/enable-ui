import React from "react";
import calculatorIcon from "../../../../images/icons/calculator.svg";
import { TextField, Row, Col, Button } from "../../../lib";
import { Margin, Padding } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import {
  SliderInput,
  OtherMenu,
  SliderMinMax,
  ButtonLendSimulation
} from "./styled";

interface SimuLationReturnProps extends RouteComponentProps<any> {}

export interface SimuLationReturnState {
  textfieldShow: boolean;
  sliderValue: number;
  sliderMin: number;
  sliderMax: number;
}

class SimuLationReturn extends React.Component<
  SimuLationReturnProps,
  SimuLationReturnState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      textfieldShow: false,
      sliderValue: 5000 / 2,
      sliderMin: 100,
      sliderMax: 5000
    };
    this.handleLend = this.handleLend.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.handleClickOther = this.handleClickOther.bind(this);
    this.handleChangeTextfield = this.handleChangeTextfield.bind(this);
  }

  handleLend() {
    const { history } = this.props;
    history.push(AppPath.LoanPersonalInfo);
  }

  handleChangeSlider(e) {
    this.setState({
      sliderValue: Number(e.target.value)
    });
  }

  handleClickOther() {
    const { textfieldShow } = this.state;
    this.setState({ textfieldShow: !textfieldShow });
  }

  handleChangeTextfield(e) {
    this.setState({
      sliderValue: Number(e.target.value)
    });
  }

  render() {
    const { textfieldShow, sliderValue, sliderMin, sliderMax } = this.state;
    return (
      <Row justify="flex-end">
        <Col lg={11} sm={12}>
          <img
            src={calculatorIcon}
            alt="Icon - Calculator"
            width={34}
            style={{ position: "absolute" }}
          />
          <Padding left={48}>
            <h5>Simulated Returns</h5>
            <p>Use this feature to measure the amount of your return.</p>
          </Padding>
          <Margin top={24}>
            <h6>If you lend:</h6>
          </Margin>
          <Margin top={16}>
            <SliderInput
              type="range"
              min={sliderMin}
              max={sliderMax}
              value={sliderValue}
              onChange={this.handleChangeSlider}
            />
            <SliderMinMax>
              <b>
                <p>{sliderMin} Dai</p>
              </b>
              <b>
                <p>{sliderMax} Dai</p>
              </b>
            </SliderMinMax>
            <OtherMenu onClick={this.handleClickOther}>Other</OtherMenu>
            {textfieldShow && (
              <Row>
                <Col lg={12}>
                  <Margin top={8}>
                    <TextField
                      label="Loan amount"
                      type="number"
                      placeholder="Enter the number You want to lend"
                      value={sliderValue === 0 ? "" : sliderValue}
                      onChange={this.handleChangeTextfield}
                    />
                  </Margin>
                </Col>
              </Row>
            )}
          </Margin>
          <Margin top={24} bottom={16}>
            <p>You can expect to earn a total interest of:</p>
          </Margin>
          <Margin vertical={24}>
            <h4>
              {((sliderValue * 0.5) / 100) * 12}
              &nbsp;<small>Dai</small>
            </h4>
          </Margin>
          <ButtonLendSimulation>
            <Margin bottom={24}>
              <Button color="purple" onClick={this.handleLend}>
                Start lending now
              </Button>
            </Margin>
          </ButtonLendSimulation>
          <p>
            By using this service, you are agreeing to the disclaimer for
            simulate returns. Simulated return also does not count gas fees
          </p>
        </Col>
      </Row>
    );
  }
}

export default withRouter<SimuLationReturnProps>(SimuLationReturn);
