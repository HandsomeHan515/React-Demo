import React, { Component } from 'react';
import '../../less/global.less';
import { store } from '../../redux';
import { Button } from 'antd';

class Group extends Component {
  render() {
    return (
      <div className="center">
        <Button onClick={() => { store.dispatch({ type: 'INCREMENT' }) }}>增加</Button>
        <Button onClick={() => { store.dispatch({ type: 'DECREMENT' }); }}>减少</Button>
      </div>
    );
  }
}

export default Group;