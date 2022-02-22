// ? Adds global stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import store from "../src/redux/store";

// ? Adds redux-store, and dnd provider
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Provider>
  );
}
export default MyApp;
