import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #f6f7fb;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 100px;
  border: 1px solid #e7ebf2;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background: #36b37e;
    cursor: pointer;
    border-radius: 100px;
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: #36b37e;
    cursor: pointer;
  }
`;

const OtherMenu = styled.a`
  display: inline-block;
  cursor: pointer;
  margin-top: 16px;
`;

const SliderMinMax = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const ButtonLendSimulation = styled.div`
  ${MaxWidth.sm`
    display: none;
  `}
`;

export { SliderInput, OtherMenu, SliderMinMax, ButtonLendSimulation };
