import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./redux/reducers";
import ReactDOM from "react-dom";
import DevHire from "./DevHire";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={configureStore({ reducer })}>
    <DevHire />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
