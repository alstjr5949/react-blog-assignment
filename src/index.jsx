import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";
import Footer from "./components/modules/Footer/Footer";
import Header from "./components/modules/Header/Header";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
  }
  body {
    background-color: #f9f9f9;
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
  <Router>
    <GlobalStyle />
    <Header />
    <App />
    <Footer />
  </Router>
);
