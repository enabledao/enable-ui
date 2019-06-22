import { createGlobalStyle, css } from "styled-components";

// normalize style css
const resetStyle = css`
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
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
    font-size: 1.4rem;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.5px;
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
`;

const NormalizeStyle = createGlobalStyle`
  ${resetStyle}
`;

export default NormalizeStyle;
