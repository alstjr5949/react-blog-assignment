import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 100%;
  }
  a{
    text-decoration : none;
    color : inherit;
  }
  button{
    border : none;
    cursor : pointer;
  }
  *{
  box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);
