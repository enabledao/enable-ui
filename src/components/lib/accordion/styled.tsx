import styled, { css } from "styled-components";

const AccordionWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid #e7ebf2;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

const AccordionTitle = styled.div`
  position: relative;
  padding-right: 32px;
  h6 {
    margin-bottom: 0;
  }
`;

const AccordionDesc = styled.div`
  position: relative;
  margin-top: 16px;
`;

const AccordionIcon = styled.img<{ activeStyle: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all ease-in-out 0.4s;
  ${props =>
    props.activeStyle &&
    css`
      transform: rotate(180deg);
    `}
`;

export { AccordionWrapper, AccordionTitle, AccordionDesc, AccordionIcon };
