import { createGlobalStyle, css } from "styled-components";

// normalize style css
const resetStyle = css`
  /* latin-ext */
  @font-face {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Oxygen Regular"), local("Oxygen-Regular"),
      url(https://fonts.gstatic.com/s/oxygen/v8/2sDfZG1Wl4LcnbuKgE0mRUe0A4Uc.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Oxygen Regular"), local("Oxygen-Regular"),
      url(https://fonts.gstatic.com/s/oxygen/v8/2sDfZG1Wl4LcnbuKjk0mRUe0Aw.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Oxygen Bold"), local("Oxygen-Bold"),
      url(https://fonts.gstatic.com/s/oxygen/v8/2sDcZG1Wl4LcnbuCNWgzZmW5Kb8VZBHR.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Oxygen Bold"), local("Oxygen-Bold"),
      url(https://fonts.gstatic.com/s/oxygen/v8/2sDcZG1Wl4LcnbuCNWgzaGW5Kb8VZA.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  *,
  &:after,
  &:before {
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  input,
  button,
  textarea,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font: inherit;
  }
  input[type="checkbox"] {
    appearance: checkbox;
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
  }
  input[type="radio"] {
    appearance: radio;
    -webkit-appearance: radio;
    -moz-appearance: radio;
  }
  ul,
  ol {
    margin-left: 0;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    font-family: "Oxygen", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
    font-size: 1.4rem;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 8px;
  }
  h1 {
    font-size: 3.6rem;
  }
  h2 {
    font-size: 3.2rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2.6rem;
  }
  h5 {
    font-size: 2rem;
  }
  h6 {
    font-size: 1.6rem;
  }
  p {
    line-height: 1.6;
    margin-bottom: 4px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  label {
    font-size: 14px;
    font-weight: 600;
  }
  form {
    display: block;
    width: 100%;
  }
  strong,
  b {
    font-weight: 600;
  }
  img,
  embed,
  object,
  video {
    max-width: 100%;
  }
`;

const NormalizeStyle = createGlobalStyle`
  ${resetStyle}
`;

export default NormalizeStyle;
