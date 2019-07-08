import { createGlobalStyle, css } from "styled-components";

// normalize style css
const resetStyle = css`
  /* devanagari */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Poppins Regular"), local("Poppins-Regular"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2)
        format("woff2");
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Poppins Regular"), local("Poppins-Regular"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Poppins Regular"), local("Poppins-Regular"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
        format("woff2");
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
      url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
    font-size: 1.4rem;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #262626;
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
    line-height: 1.8;
  }
  p {
    line-height: 2.2;
    margin-bottom: 4px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #0042eb;
    &:hover {
      color: blue;
    }
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
  #enableInterfaceModal {
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.7;
      width: 100%;
      height: 100%;
      content: "";
    }
  }
`;

const NormalizeStyle = createGlobalStyle`
  ${resetStyle}
`;

export default NormalizeStyle;
