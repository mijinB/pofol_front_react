import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { createGlobalStyle } from "styled-components";

import PretendardThin from "./assets/fonts/Pretendard/Pretendard-Thin.ttf";
import PretendardExtraLight from "./assets/fonts/Pretendard/Pretendard-ExtraLight.ttf";
import PretendardLight from "./assets/fonts/Pretendard/Pretendard-Light.ttf";
import PretendardRegular from "./assets/fonts/Pretendard/Pretendard-Regular.ttf";
import PretendardMedium from "./assets/fonts/Pretendard/Pretendard-Medium.ttf";
import PretendardSemiBold from "./assets/fonts/Pretendard/Pretendard-SemiBold.ttf";
import PretendardBold from "./assets/fonts/Pretendard/Pretendard-Bold.ttf";
import PretendardExtraBold from "./assets/fonts/Pretendard/Pretendard-ExtraBold.ttf";
import PretendardBlack from "./assets/fonts/Pretendard/Pretendard-Black.ttf";

const GlobalFont = createGlobalStyle`
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 100; 
  src: url(${PretendardThin}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 200; 
  src: url(${PretendardExtraLight}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 300; 
  src: url(${PretendardLight}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 400; 
  src: url(${PretendardRegular}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 500; 
  src: url(${PretendardMedium}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 600; 
  src:  url(${PretendardSemiBold}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 700; 
  src: url(${PretendardBold}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 800; 
  src: url(${PretendardExtraBold}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 900; 
  src: url(${PretendardBlack}) format("truetype"); 
}
`;

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  font-family: 'Pretendard';
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html, body {
  height: 100%;
  > div {
    height: 100%;
  }
}
body {
	line-height: 1;
  color: #37352F;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration:none;
  color:inherit;
}
* {
  box-sizing: border-box;
}
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.05);
  }
}
p {
  word-break: keep-all;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
        <GlobalStyle />
        <GlobalFont />
        <RouterProvider router={router} />
    </>
);
