/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-31 16:28:47
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 17:02:52
 * @FilePath: /react_redux/src/redux/actions/index.js
 */
import { INCREMENT, DECREMENT } from "../constant";

export const _increment = number => {
  return {
    type: INCREMENT,
    number
  };
};

export const _decrement = () => {
  return {
    type: DECREMENT
  };
};
