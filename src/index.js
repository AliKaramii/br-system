import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import RouterProvider from "./router";
import "./assets/general-style.scss";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes/theme.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // *comented because of double rendering
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
