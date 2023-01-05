import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
body,
html {
  // font-family: "Lato", sans-serif;
  line-height: 1.6;
}
body {
  background-color: #edf0f1;
}
h2,
h3,
p {
  margin-bottom: 1.2rem;
}
h1,
h2,
h3 {
  color: #246397;
}
a,
p,
h2,
h3,
label,
li {
  text-decoration: none;
}

h2,
h3,
p {
  padding-left: 1.1rem;
}

.portfolioContainer {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";
}

.header {
  grid-area: header;
}

main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
`;
