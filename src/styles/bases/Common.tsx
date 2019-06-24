import styled from "styled-components";
import { MinWidth, MaxWidth } from "../utils";

const Container = styled.div`
  ${MinWidth.xxl`
    max-width: 1480px;
  `}
  ${MaxWidth.xxl`
    max-width: 1366px;
    min-width: 1366px;
  `}
  ${MaxWidth.xl`
    max-width: 1200px;
    min-width: 1200px;
  `}
  ${MaxWidth.lg`
    max-width: 960px;
    min-width: 960px;
  `}
  ${MaxWidth.md`
    max-width: 100%;
    min-width: 100%;
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
