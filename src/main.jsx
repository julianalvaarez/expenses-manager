import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GestorApp } from "./GestorApp";
import { BrowserRouter } from "react-router-dom";
import { GestorContextProvider } from "./gestor/context";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GestorContextProvider>
        <NextUIProvider>
          <BrowserRouter>
            <GestorApp />
          </BrowserRouter>
        </NextUIProvider>
      </GestorContextProvider>
    </Provider>
  </React.StrictMode>
);
