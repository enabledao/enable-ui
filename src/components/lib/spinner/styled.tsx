import styled from "styled-components";

const StyledSpinner = styled.svg<{ size: string, color: string }>`
  animation: rotate 1s linear infinite;
  margin: 0px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    animation: dash 1.7s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export { StyledSpinner };
