import React, { Component } from 'react';
import '../../less/global.less';
import { store } from '../../redux';
import { Button } from 'antd';

class Group extends Component {
  constructor(props) {
    super(props);
    const { counter } = store.getState();
    this.state = { counter }
  }

  increment = () => {
    store.dispatch({ type: 'INCREMENT' })
    const { counter } = store.getState()
    this.setState({ counter })
  }

  decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
    const { counter } = store.getState()
    this.setState({ counter })
  }

  render() {
    console.table(store.getState())
    return (
      <div className="center">
        <h1> redux 计数器案例</h1>
        <Button onClick={this.increment}>增加</Button>
        <Button onClick={this.decrement}>减少</Button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Group;