import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import RouterProvider from "./router";
import "./assets/general-style.scss";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes/theme.js";
import { Provider } from "react-redux";
import store from "./store/index.js";
// ! Remove - came from API
import "./services/mock-data/cafe-mock-server.js";

// for rtl
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// function RTL(props) {
//   return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
// }
//

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // *comented because of double rendering
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <RouterProvider />
      </CacheProvider>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
