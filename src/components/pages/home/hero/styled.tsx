import styled from "styled-components";
import { MaxWidth, MinWidth } from "../../../../styles/utils";

const HeroWrapper = styled.div`
  padding: 100px 0;
  position: relative;
  display: table;
  width: 100%;
  ${MinWidth.lg`
    min-height: 100vh;
  `}
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.3;
    top: 0;
    left: 0;
    background-image: linear-gradient(157deg, #ffffff 0%, #f9cec3 86%);
  }
`;

const HeroCell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const HeroButtonLendMobile = styled.div`
  display: none;
  ${MaxWidth.sm`
    display: block;
    position: fixed;
    bottom: 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-top: 1px solid #e7ebf2;
    width: 100%;
    left: 0;
    z-index: 4;
  `}
`;

const HeroLink = styled.div`
  color: #0042eb;
  cursor: pointer;
`;

export { HeroWrapper, HeroCell, HeroButtonLendMobile, HeroLink };