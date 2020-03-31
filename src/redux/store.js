/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-31 16:28:02
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 17:17:44
 * @FilePath: /react_redux/src/redux/store.js
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
