import styled from "styled-components";
import { MaxWidth } from "../../../../../../styles/utils";

const WhyMeListWrapper = styled.ul`
  padding: 8px 24px;
`;

const WhyMeCardWrapper = styled.div`
  ${MaxWidth.md`
    display: none;
  `}
`;

const WhyMeCard = styled.div`
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

const WhyMeCardAccordion = styled.div`
  display: none;
  ${MaxWidth.md`
    display: block;
  `}
`;

export { WhyMeListWrapper, WhyMeCardWrapper, WhyMeCardAccordion, WhyMeCard };
