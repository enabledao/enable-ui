import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const WhyUsWrapper = styled.div`
  background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
`;

const WhyUsContent = styled.div`
  padding: 100px 0;
  border-top: 1px solid #e7ebf2;
  border-bottom: 1px solid #e7ebf2;
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

const WhyUsListWrapper = styled.ul`
  padding: 8px 24px;
`;

const WhyUsCardWrapper = styled.div`
  ${MaxWidth.md`
    display: none;
  `}
`;

const WhyUsCard = styled.div`
  background-color: white;
  border: 1px solid #e7ebf2;
  padding: 24px;
  border-radius: 8px;
  h6 {
    padding-bottom: 16px;
    border-bottom: 1px solid #e7ebf2;
    margin-bottom: 24px;
  }
  transition: all ease-in-out 0.4s;
  &:hover {
    box-shadow: rgba(78, 81, 144, 0.18) 0px 4px 8px 0px;
    border: 1px solid #6713c4;
  }
`;

const WhyUsCardAccordion = styled.div`
  display: none;
  ${MaxWidth.md`
    display: block;
  `}
`;

export {
  WhyUsWrapper,
  WhyUsContent,
  WhyUsListWrapper,
  WhyUsCardWrapper,
  WhyUsCardAccordion,
  WhyUsCard
};
