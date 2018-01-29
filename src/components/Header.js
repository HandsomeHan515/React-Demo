import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { menuBar } from '../data';
import '../less/header.less';

class Header extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        className="header"
      >
        {
          menuBar.map(item => {
            return (
              <Menu.Item key={item.id}>
                <Link to={item.path}><Icon type={item.icon} /> {item.name}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    );
  }
}

export default Header;