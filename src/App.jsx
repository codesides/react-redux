/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-29 19:58:48
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 17:03:44
 * @FilePath: /react_redux/src/App.jsx
 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

class App extends React.Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  _add = number => {
    this.props.actions._increment(number);
  };
  _minus = () => {
    this.props.actions._decrement();
  };
  render() {
    return (
      <div>
        App
        <p>counter: {this.props.counter}</p>
        <button onClick={() => this._add(5)}>增加</button>
        <button onClick={this._minus}>减少</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
