import styled, { css } from "styled-components";

const TestimonialAvatar = styled.div<{ activeStyle: boolean }>`
  background-color: #fff;
  border: 1px solid #e7ebf2;
  margin-bottom: 24px;
  margin-right: 24px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  display: inline-flex;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 100px;
  img {
    border-radius: 100px;
  }
  ${props =>
    props.activeStyle &&
    css`
      &:before {
        position: absolute;
        content: "";
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 16px);
        height: calc(100% + 16px);
        border: 2px solid #6713c4;
        z-index: 2;
        border-radius: 100px;
      }
      &:after {
        position: absolute;
        content: "";
        bottom: -24px;
        left: 50%;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        background-color: #6713c4;
        z-index: 2;
        border-radius: 100px;
      }
    `}
`;

export { TestimonialAvatar };
