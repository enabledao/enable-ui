import styled from "styled-components";
import { MinWidth } from "../utils";

const Container = styled.div`
  ${MinWidth.xs`
    max-width: auto;
    min-width: auto;
  `}
  ${MinWidth.sm`
    max-width: 750px;
    min-width: 750px;
  `}
  ${MinWidth.md`
    max-width: 970px;
    min-width: 970px;
  `}
  ${MinWidth.lg`
    max-width: 1170px;
    min-width: 1170px;
  `}
  padding: 0 16px;
  margin: 0 auto;
`;

const ContainerFluid = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export { Container, ContainerFluid };
