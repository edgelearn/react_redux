import React, { Component } from 'react';
import store from './store.js';
import { connect } from 'react-redux'


class App extends Component {
  count_up(){
      const action = {type: 'ADD_ONE'};
      store.dispatch(action);  // store's method dispatch calls an action
  }

  count_down() {
      store.dispatch({type: 'SUBSTRACT_ONE'});  // same action call, just shorter syntax
  }

  render(){
    return (
        <div>
            <div>{this.props.count}</div>
              <button onClick={this.count_up}>+</button>
              <button onClick={this.count_down}>-</button>
          </div>
      );
  }
}

// container component
export default connect(
  function mapStateToProps(state) {
      return {
          count: state
        };
    }
)(App);
