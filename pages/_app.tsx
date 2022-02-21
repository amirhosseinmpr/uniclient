import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
