import { createGlobalStyle, css } from 'styled-components'

// normalize style css
const resetStyle = css`
    /* latin-ext */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Libre Franklin'), local('LibreFranklin-Regular'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizDREVItHgc8qDIbSTKq4XkRiUR2zcZiVbJsNo.woff2)
                format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Libre Franklin'), local('LibreFranklin-Regular'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizDREVItHgc8qDIbSTKq4XkRiUf2zcZiVbJ.woff2)
                format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Libre Franklin Medium'), local('LibreFranklin-Medium'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi3s-CI6q1vjitOh3oc.woff2)
                format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Libre Franklin Medium'), local('LibreFranklin-Medium'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi3s-CI0q1vjitOh.woff2)
                format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local('Libre Franklin SemiBold'), local('LibreFranklin-SemiBold'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi3A_yI6q1vjitOh3oc.woff2)
                format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local('Libre Franklin SemiBold'), local('LibreFranklin-SemiBold'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi3A_yI0q1vjitOh.woff2)
                format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Libre Franklin Bold'), local('LibreFranklin-Bold'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi2k_iI6q1vjitOh3oc.woff2)
                format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Libre Franklin Bold'), local('LibreFranklin-Bold'),
            url(https://fonts.gstatic.com/s/librefranklin/v4/jizAREVItHgc8qDIbSTKq4XkRi2k_iI0q1vjitOh.woff2)
                format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
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
    input[type='checkbox'] {
        appearance: checkbox;
        -webkit-appearance: checkbox;
        -moz-appearance: checkbox;
    }
    input[type='radio'] {
        appearance: radio;
        -webkit-appearance: radio;
        -moz-appearance: radio;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
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
        font-family: 'Libre Franklin', -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-size: 1.6rem;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: none;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        font-weight: 400;
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
        line-height: 1.4;
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
    small {
        font-size: 14px;
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
            content: '';
        }
    }
`

const NormalizeStyle = createGlobalStyle`
  ${resetStyle}
`

export default NormalizeStyle
