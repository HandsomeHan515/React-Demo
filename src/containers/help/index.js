import React, { Component } from 'react';
import '../../less/global.less';

import Header from './Header';
import { Input } from 'antd';

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
    }
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="center">
        <Header title={this.state.title} />
        <Input
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Help;