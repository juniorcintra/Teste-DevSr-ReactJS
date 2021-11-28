import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

import Delicious from "../assets/fonts/FONTSFREE-NET-BEAUTIFULLYDELICIOUS.TTF";
import BrandonBlack from "../assets/fonts/hvd-fonts-brandontext-black-webfont.ttf";
import BrandonBlackItalic from "../assets/fonts/hvd-fonts-brandontext-blackitalic-webfont.ttf";
import BrandonBold from "../assets/fonts/hvd-fonts-brandontext-bold-webfont.ttf";
import BrandonBoldItalic from "../assets/fonts/hvd-fonts-brandontext-bolditalic-webfont.ttf";
import BrandonLight from "../assets/fonts/hvd-fonts-brandontext-light-webfont.ttf";
import BrandonLightItalic from "../assets/fonts/hvd-fonts-brandontext-lightitalic-webfont.ttf";
import BrandonMedium from "../assets/fonts/hvd-fonts-brandontext-medium-webfont.ttf";
import BrandonMediumItalic from "../assets/fonts/hvd-fonts-brandontext-mediumitalic-webfont.ttf";
import BrandonRegular from "../assets/fonts/hvd-fonts-brandontext-regular-webfont.ttf";
import BrandonRegularItalic from "../assets/fonts/hvd-fonts-brandontext-regularitalic-webfont.ttf";
import PlayFair from "../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Delicious";
  src: url(${Delicious}) format("opentype");
}

@font-face {
  font-family: "BrandonBlack";
  src: url(${BrandonBlack}) format("opentype");
}

@font-face {
  font-family: "BrandonBlackItalic";
  src: url(${BrandonBlackItalic}) format("opentype");
}

@font-face {
  font-family: "BrandonBold";
  src: url(${BrandonBold}) format("opentype");
}

@font-face {
  font-family: "BrandonBoldItalic";
  src: url(${BrandonBoldItalic}) format("opentype");
}

@font-face {
  font-family: "BrandonLight";
  src: url(${BrandonLight}) format("opentype");
}

@font-face {
  font-family: "BrandonLightItalic";
  src: url(${BrandonLightItalic}) format("opentype");
}

@font-face {
  font-family: "BrandonMedium";
  src: url(${BrandonMedium}) format("opentype");
}

@font-face {
  font-family: "BrandonMediumItalic";
  src: url(${BrandonMediumItalic}) format("opentype");
}

@font-face {
  font-family: "BrandonRegular";
  src: url(${BrandonRegular}) format("opentype");
}

@font-face {
  font-family: "BrandonRegularItalic";
  src: url(${BrandonRegularItalic}) format("opentype");
}

@font-face {
  font-family: "PlayFair";
  src: url(${PlayFair}) format("opentype");
}

@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html,
body,
#root {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background:${colors.white};
  color:${colors.veryDarkBlue};
  font-family: "MuseoSans500", sans-serif;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

div {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button {
  font-family: "MuseoSans500", sans-serif;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}

input {
}
ul {
  list-style: none;
}
`;

export default GlobalStyle;
