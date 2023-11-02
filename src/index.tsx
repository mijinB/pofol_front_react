import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { createGlobalStyle } from "styled-components";

import PretendardThinTTF from "./assets/fonts/Pretendard/Pretendard-Thin.ttf";
import PretendardExtraLightTTF from "./assets/fonts/Pretendard/Pretendard-ExtraLight.ttf";
import PretendardLightTTF from "./assets/fonts/Pretendard/Pretendard-Light.ttf";
import PretendardRegularTTF from "./assets/fonts/Pretendard/Pretendard-Regular.ttf";
import PretendardMediumTTF from "./assets/fonts/Pretendard/Pretendard-Medium.ttf";
import PretendardSemiBoldTTF from "./assets/fonts/Pretendard/Pretendard-SemiBold.ttf";
import PretendardBoldTTF from "./assets/fonts/Pretendard/Pretendard-Bold.ttf";
import PretendardExtraBoldTTF from "./assets/fonts/Pretendard/Pretendard-ExtraBold.ttf";
import PretendardBlackTTF from "./assets/fonts/Pretendard/Pretendard-Black.ttf";
import PretendardThinWOFF2 from "./assets/fonts/Pretendard/Pretendard-Thin.woff2";
import PretendardExtraLightWOFF2 from "./assets/fonts/Pretendard/Pretendard-ExtraLight.woff2";
import PretendardLightWOFF2 from "./assets/fonts/Pretendard/Pretendard-Light.woff2";
import PretendardRegularWOFF2 from "./assets/fonts/Pretendard/Pretendard-Regular.woff2";
import PretendardMediumWOFF2 from "./assets/fonts/Pretendard/Pretendard-Medium.woff2";
import PretendardSemiBoldWOFF2 from "./assets/fonts/Pretendard/Pretendard-SemiBold.woff2";
import PretendardBoldWOFF2 from "./assets/fonts/Pretendard/Pretendard-Bold.woff2";
import PretendardExtraBoldWOFF2 from "./assets/fonts/Pretendard/Pretendard-ExtraBold.woff2";
import PretendardBlackWOFF2 from "./assets/fonts/Pretendard/Pretendard-Black.woff2";
import PretendardThinWOFF from "./assets/fonts/Pretendard/Pretendard-Thin.woff";
import PretendardExtraLightWOFF from "./assets/fonts/Pretendard/Pretendard-ExtraLight.woff";
import PretendardLightWOFF from "./assets/fonts/Pretendard/Pretendard-Light.woff";
import PretendardRegularWOFF from "./assets/fonts/Pretendard/Pretendard-Regular.woff";
import PretendardMediumWOFF from "./assets/fonts/Pretendard/Pretendard-Medium.woff";
import PretendardSemiBoldWOFF from "./assets/fonts/Pretendard/Pretendard-SemiBold.woff";
import PretendardBoldWOFF from "./assets/fonts/Pretendard/Pretendard-Bold.woff";
import PretendardExtraBoldWOFF from "./assets/fonts/Pretendard/Pretendard-ExtraBold.woff";
import PretendardBlackWOFF from "./assets/fonts/Pretendard/Pretendard-Black.woff";
import PretendardThinOTF from "./assets/fonts/Pretendard/Pretendard-Thin.otf";
import PretendardExtraLightOTF from "./assets/fonts/Pretendard/Pretendard-ExtraLight.otf";
import PretendardLightOTF from "./assets/fonts/Pretendard/Pretendard-Light.otf";
import PretendardRegularOTF from "./assets/fonts/Pretendard/Pretendard-Regular.otf";
import PretendardMediumOTF from "./assets/fonts/Pretendard/Pretendard-Medium.otf";
import PretendardSemiBoldOTF from "./assets/fonts/Pretendard/Pretendard-SemiBold.otf";
import PretendardBoldOTF from "./assets/fonts/Pretendard/Pretendard-Bold.otf";
import PretendardExtraBoldOTF from "./assets/fonts/Pretendard/Pretendard-ExtraBold.otf";
import PretendardBlackOTF from "./assets/fonts/Pretendard/Pretendard-Black.otf";

const GlobalFont = createGlobalStyle`
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 100; 
  src: 
  url(${PretendardThinWOFF2}) format("woff2"), 
  url(${PretendardThinWOFF}) format("woff"), 
  url(${PretendardThinOTF}) format("opentype"), 
  url(${PretendardThinTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 200; 
  src: 
  url(${PretendardExtraLightWOFF2}) format("woff2"), 
  url(${PretendardExtraLightWOFF}) format("woff"), 
  url(${PretendardExtraLightOTF}) format("opentype"), 
  url(${PretendardExtraLightTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 300; 
  src: 
  url(${PretendardLightWOFF2}) format("woff2"), 
  url(${PretendardLightWOFF}) format("woff"), 
  url(${PretendardLightOTF}) format("opentype"), 
  url(${PretendardLightTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 400; 
  src: 
  url(${PretendardRegularWOFF2}) format("woff2"), 
  url(${PretendardRegularWOFF}) format("woff"), 
  url(${PretendardRegularOTF}) format("opentype"), 
  url(${PretendardRegularTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 500; 
  src: 
  url(${PretendardMediumWOFF2}) format("woff2"), 
  url(${PretendardMediumWOFF}) format("woff"), 
  url(${PretendardMediumOTF}) format("opentype"), 
  url(${PretendardMediumTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 600; 
  src: 
  url(${PretendardSemiBoldWOFF2}) format("woff2"), 
  url(${PretendardSemiBoldWOFF}) format("woff"), 
  url(${PretendardSemiBoldOTF}) format("opentype"), 
  url(${PretendardSemiBoldTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 700; 
  src: 
  url(${PretendardBoldWOFF2}) format("woff2"), 
  url(${PretendardBoldWOFF}) format("woff"), 
  url(${PretendardBoldOTF}) format("opentype"), 
  url(${PretendardBoldTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 800; 
  src: 
  url(${PretendardExtraBoldWOFF2}) format("woff2"), 
  url(${PretendardExtraBoldWOFF}) format("woff"), 
  url(${PretendardExtraBoldOTF}) format("opentype"), 
  url(${PretendardExtraBoldTTF}) format("truetype"); 
}
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 900; 
  src: 
  url(${PretendardBlackWOFF2}) format("woff2"), 
  url(${PretendardBlackWOFF}) format("woff"), 
  url(${PretendardBlackOTF}) format("opentype"), 
  url(${PretendardBlackTTF}) format("truetype"); 
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
  font-weight: 400;
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
