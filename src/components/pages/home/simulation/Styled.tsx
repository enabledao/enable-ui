// Style of simulation credit
import styled from "styled-components";

const SimulateWrapper = styled.div`
  padding: 100px 0;
  border-bottom: 1px solid #e7ebf2;
`;

const RadioButton = styled.div`
  display: inline-flex;
  margin: 8px 8px 0 0;
  input {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
    + label {
      background-color: white;
      cursor: pointer;
      padding: 8px 16px;
      border: 1px solid #e7ebf2;
      border-radius: 4px;
    }

    &:checked {
      + label {
        background-color: #6713c4;
        color: white;
      }
    }
  }
`;

export { RadioButton, SimulateWrapper };
