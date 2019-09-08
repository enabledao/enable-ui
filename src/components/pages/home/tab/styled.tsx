import styled, { css } from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const TabWrapper = styled.div`
  position: sticky;
  top: 0;
  overflow: scroll;
  background-color: #f7f7f7;
  z-index: 4;
  ${MaxWidth.sm`
    background-color: #fff;
  `}
`;

const TabContentWrapper = styled.div<{ ref: any }>`
  padding: 0 0 80px 0;
  background-color: #f7f7f7;
`;

const TabContent = styled.div`
  padding: 20px 50px;
  background-color: #fff;
`;

const TabMenu = styled.ul`
  white-space: nowrap;
  background-color: #fff;
  padding: 0 50px;
  border-bottom: 1px solid #e7ebf2;
  li {
    margin-right: 32px;
    a {
      color: #262626;
    }
  }
`;

const TabMenuList = styled.li<{ activePage: boolean }>`
  display: inline-block;
  padding: 24px 0;
  cursor: pointer;
  ${props =>
    props.activePage &&
    css`
      border-bottom: 4px solid #36b37e;
      font-weight: 600;
    `}
`;
const TabMenuOnlyShowMobile = styled.li<{ activePage: boolean }>`
  display: none;
  padding: 24px 0;
  cursor: pointer;
  ${MaxWidth.md`
    display: inline-block;
  `}
  ${props =>
    props.activePage &&
    css`
      border-bottom: 4px solid #36b37e;
      font-weight: 600;
    `}
`;

const StaticLinkWrapper = styled.div`
  position: relative;
  border: 1px solid #e7ebf2;
  border-radius: 4px;
  > div {
    display: inline-block;
    vertical-align: top;
    width: calc(100% / 2);
    padding: 20px;
    color: #6713c4;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid #e7ebf2;
    }
    &:last-child {
      border-left: 1px solid #e7ebf2;
    }
  }
`;

export {
  TabWrapper,
  TabContentWrapper,
  TabMenu,
  TabMenuList,
  TabMenuOnlyShowMobile,
  StaticLinkWrapper,
  TabContent
};
