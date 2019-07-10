import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: inline-block;
`;

const CheckboxStyle = styled.input`
  position: absolute;
  opacity: 0;
  &:focus {
    & + label {
      &:before {
        border: 1px solid;
        border-color: #76bbe3;
      }
    }
  }
  & + label {
    cursor: pointer;
    position: relative;
    font-weight: 400;
    margin-bottom: 0;
    padding-left: 24px;
    display: block;
    &:before {
      content: "";
      margin-right: 8px;
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      height: 16px;
      background-color: white;
      border: 1px solid #e7ebf2;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 1px;
    }
  }
  &:checked + label {
    &:before {
      background-color: #36b37e;
      border-color: #36b37e;
    }
    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      display: block;
      width: 6px;
      height: 10px;
      border: solid;
      border-width: 0 2px 2px 0;
      border-color: white;
      transform: rotate(45deg);
    }
  }
  &:disabled {
    & + label {
      color: #777777;
      cursor: not-allowed;
      &:before {
        background-color: #777777;
        border: 1px solid #f8f9f9;
      }
      &:after {
        border-color: #777777;
      }
    }
  }
`;

export { CheckboxWrapper, CheckboxStyle };
