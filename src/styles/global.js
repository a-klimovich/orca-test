import styled, { createGlobalStyle, css } from 'styled-components'

const reset = css`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a, button {
    cursor: revert;
  }

  ol, ul, menu {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input, textarea {
    -webkit-user-select: auto;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  pre {
    all: revert;
  }

  ::placeholder {
    color: unset;
  }

  ::marker {
    content: "";
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  :where(dialog:modal) {
    all: revert;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --white: #FFFFFF;
    --dark: #10111D;

    --bg-gray: #F3F4F9;

    --gray: #CACFDB;
    --gray-dark: #70707B;

    --blue: #0080FF;
    --pink: #E2005E;
    --orange: #FE7B1F;
    --yellow: #F8CD39;
  }

  #root {
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--bg-gray);
  }

  body {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--dark);
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Overlay {
    background-color: var(--dark);
  }
`;

export const Container = styled.div`
  background: #F3F4F9;
  width: 1240px;
  max-width: 100%;
  padding: 0 8px;
  margin: 0 auto;
`

export const Screen = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`
