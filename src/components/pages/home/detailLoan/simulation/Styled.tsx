// Style of simulation credit
import styled from "styled-components";

const RadioButton = styled.div`
  display: inline-flex;
  margin-right: 8px;
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
        background-color: #76bbe3;
        color: white;
      }
    }
  }
`;

export { RadioButton };
