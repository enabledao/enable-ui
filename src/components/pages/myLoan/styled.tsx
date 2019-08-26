import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const MyLoanWrapper = styled.div`
  padding: 100px 0;
  background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
  ${MaxWidth.md`
    padding: 80px 0;
  `}

  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

const HeroWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  min-height: calc(100vh - (60px + 68px));
  padding-top: 40px;
  &::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 50%);
    bottom: 0;
    background-color: #363bd3;
    content: "";
  }
`;

const HeroContent = styled.div`
  background-color: white;
  padding: 50px;
  position: relative;
  height: auto;
  display: block;
  margin-bottom: 80px;
`;

const BoxStats = styled.div`
  background-color: #272b90;
  color: white;
  padding: 24px 30px;
`;

const TableCard = styled.div`
  background-color: white;
  border-top: 2px solid #e7ebf2;
  padding: 16px;
  transition: all ease-in-out 0.4s;
  ${MaxWidth.sm`
    padding-top: 20px;
  `}
  &:last-child {
    background-color: #f7f7f7;
    color: black;
  }
`;

const TableInline = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
  p {
    margin-bottom: 0;
  }
  &:last-child {
    text-align: right;
  }
  ${MaxWidth.sm`
    width: 100%;
    margin-bottom: 8px;
    &:last-child {
      text-align: left;
    }
  `}
`;

const TableTitleWrapper = styled.div`
  padding: 16px;
  color: #6c6d7a;
  border-bottom: 2px solid #e7ebf2;
`;

const TableTitle = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  ${MaxWidth.sm`
    display: none;
  `}
  &:last-child {
    text-align: right;
  }
`;

const TableTitleMobile = styled.small`
  display: none;
  ${MaxWidth.sm`
    display: block;
    font-weight: 600;
  `}
`;

export {
  MyLoanWrapper,
  HeroWrapper,
  HeroContent,
  BoxStats,
  TableCard,
  TableInline,
  TableTitleWrapper,
  TableTitle,
  TableTitleMobile
};
