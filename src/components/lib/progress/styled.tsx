import styled from "styled-components";

const ProgressWrapper = styled.div<{ current: number }>`
  position: relative;
  width: 100%;
  height: 8px;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.current && `${props.current}%`};
    background-color: #36b37e;
    height: 100%;
    content: "";
  }
  &:before {
    position: absolute;
    background-color: #dbdbdb;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

export { ProgressWrapper };
