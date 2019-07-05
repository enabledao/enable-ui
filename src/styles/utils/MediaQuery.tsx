import styled, { css, ThemedCssFunction } from "styled-components";

// Size of breakpoints
const Size = {
  xl: 1440,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576
};

// Iterate through the Size and create a media template minimum width
const MinWidth = (Object.keys(Size) as Array<keyof typeof Size>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${Size[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof Size]: ThemedCssFunction<{ theme: any }> }
);

// Iterate through the Size and create a media template maximum width
const MaxWidth = (Object.keys(Size) as Array<keyof typeof Size>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${Size[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof Size]: ThemedCssFunction<{ theme: any }> }
);

const MobileTextCenter = styled.div`
  ${MaxWidth.sm`
    text-align: center;
  `}
`;

export { MinWidth, MaxWidth, MobileTextCenter };
