import React, { Component } from 'react';
import '../../less/global.less';
import { Button } from 'antd';

class Progress extends Component {
  handleClick = () => {
    console.log('this: %o', this.handleClick)
  }

  render() {
    return (
      <div className="center">
        <Button onClick={this.handleClick}>按钮</Button>
      </div >
    );
  }
}

export default Progress;