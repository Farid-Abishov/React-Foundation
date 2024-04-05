import React, { Component } from "react";
import {connect} from 'react-redux'
import { decrement, increment } from "../redux/counterSlice";

class CounterButton extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.increase()}>increase</button>
        <button onClick={()=>this.props.decrease()}>decrease</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increment()),
    decrease:()=>dispatch(decrement())
  };
};
export default connect(null, mapDispatchToProps)(CounterButton);
