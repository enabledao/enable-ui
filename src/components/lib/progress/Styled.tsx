// Style of progress
import styled from "styled-components";

const ProgressWrapper = styled.div<{ current: number }>`
  position: relative;
  background-color: #f9cec3;
  width: 100%;
  height: 16px;
  border-radius: 100px;
  overflow: hidden;
  &:before {
    position: absolute;
    border-radius: 100px;
    top: 0;
    left: 0;
    width: ${props => props.current && `${props.current}%`};
    background-color: #0077f7;
    height: 100%;
    content: "";
  }
`;

export { ProgressWrapper };
