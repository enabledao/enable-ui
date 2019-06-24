// Style of hero homepage
import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const HomeHero = styled.div`
  background-image: linear-gradient(0deg, #0077f7 0%, #0042eb 100%);
  color: white;
  height: 480px;
  text-align: center;
  position: relative;
  padding-top: 80px;
`;

const HomeLoanWrapper = styled.div`
  background-color: white;
  color: #313131;
  margin: 48px 0;
  position: absolute;
  border: 1px solid #e7ebf2;
  box-shadow: 0 8px 16px 0 rgba(78, 81, 144, 0.18);
  border-radius: 6px;
  z-index: 2;
  width: calc(100% - 32px);
  display: flex;
  ${MaxWidth.sm`
    display: block;
  `}
`;

const HomeLoanBox = styled.div`
  padding: 40px 56px 40px 32px;
  width: 100%;
  ${MaxWidth.sm`
    padding: 24px;
  `}
`;

const HomeLoanShortProfile = styled.div`
  display: inline-block;
  width: 100%;
  padding-left: 56px;
`;

const HomeAva = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-bottom: 16px;
`;

const HomeBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${MaxWidth.sm`
    position: relative;
    margin: 8px 0;
  `}
`;

const HomeDesc = styled.div`
  margin-top: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const HomeBoxInfo = styled.div`
  padding-left: 56px;
  ${MaxWidth.sm`
    padding-left: 0;
  `}
`;

export {
  HomeHero,
  HomeAva,
  HomeLoanWrapper,
  HomeLoanBox,
  HomeLoanShortProfile,
  HomeBadge,
  HomeDesc,
  HomeBoxInfo
};
