import styled from "styled-components";

const HeroWrapper = styled.div`
  padding: 80px 0;
  position: relative;
  min-height: 100vh;
  display: table;
  width: 100%;
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

export { HeroWrapper, HeroCell };
