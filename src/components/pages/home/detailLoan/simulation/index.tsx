// Pages social credit component
import React from "react";
import { TextField } from "../../../../lib";
import { Margin } from "../../../../../styles/utils";
import { RadioButton } from "./Styled";

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
      <React.Fragment>
        <h5>Simulated Returns</h5>
        <p>If you lend:</p>
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
              onChange={e => this.setState({ textfieldShow: e.target.checked })}
            />
            <label htmlFor="other">Other</label>
          </RadioButton>
          {textfieldShow && (
            <Margin top={16}>
              <TextField />
            </Margin>
          )}
        </Margin>
        <Margin top={24} bottom={16}>
          <p>You can expect to earn a total interest of:</p>
        </Margin>
        <Margin top={24}>
          <h4>0.42 Dai</h4>
        </Margin>
        <Margin vertical={16}>
          <a href="/">More info ...</a>
        </Margin>
        <small>
          By using this service, you are agreeing to the disclaimer for simulate
          returns. Simulated return also does not count gas fees
        </small>
      </React.Fragment>
    );
  }
}

export default SimuLationReturn;
