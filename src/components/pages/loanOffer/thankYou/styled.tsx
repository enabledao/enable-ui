import styled from "styled-components";

const HeroWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  min-height: calc(100vh - (60px + 68px));
  padding-top: 40px;
  &::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 60%);
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
`;

export { HeroWrapper, HeroContent };
