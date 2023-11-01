import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 100; 
  src: 
  url("./assets/fonts/Pretendard-Thin.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Thin.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Thin.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Thin.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 200; 
  src: 
  url("./assets/fonts/Pretendard-ExtraLight.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-ExtraLight.woff") format("woff"), 
  url("./assets/fonts/Pretendard-ExtraLight.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-ExtraLight.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 300; 
  src: 
  url("./assets/fonts/Pretendard-Light.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Light.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Light.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Light.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 400; 
  src: 
  url("./assets/fonts/Pretendard-Regular.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Regular.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Regular.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Regular.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 500; 
  src: 
  url("./assets/fonts/Pretendard-Medium.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Medium.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Medium.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Medium.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 600; 
  src: 
  url("./assets/fonts/Pretendard-SemiBold.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-SemiBold.woff") format("woff"), 
  url("./assets/fonts/Pretendard-SemiBold.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-SemiBold.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 700; 
  src: 
  url("./assets/fonts/Pretendard-Bold.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Bold.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Bold.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Bold.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 800; 
  src: 
  url("./assets/fonts/Pretendard-ExtraBold.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-ExtraBold.woff") format("woff"), 
  url("./assets/fonts/Pretendard-ExtraBold.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-ExtraBold.ttf") format("truetype"); 
}

@font-face { 
  font-family: "Pretendard"; 
  font-style: normal; 
  font-weight: 900; 
  src: 
  url("./assets/fonts/Pretendard-Black.woff2") format("woff2"), 
  url("./assets/fonts/Pretendard-Black.woff") format("woff"), 
  url("./assets/fonts/Pretendard-Black.otf") format("opentype"), 
  url("./assets/fonts/Pretendard-Black.ttf") format("truetype"); 
}

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
        <RouterProvider router={router} />
    </>
);
