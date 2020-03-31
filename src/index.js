/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-29 19:55:44
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 16:44:33
 * @FilePath: /react_redux/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
