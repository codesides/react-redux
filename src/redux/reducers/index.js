/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-31 16:28:53
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 16:42:43
 * @FilePath: /react_redux/src/redux/reducers/index.js
 */
import { combineReducers } from "redux";
import counterReducer from "./counter";

const reducers = combineReducers({
  counterReducer
});
export default reducers;
