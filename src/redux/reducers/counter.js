/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-31 16:31:51
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 17:03:17
 * @FilePath: /react_redux/src/redux/reducers/counter.js
 */
import { INCREMENT, DECREMENT } from "../constant";

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      const { number } = action;
      return state + number;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
