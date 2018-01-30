import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('1', Date.now());
  }
  componentWillMount() {
    console.log('2', Date.now());
  }

  render() {
    console.log('3', Date.now());

    return (
      <h1>
        {this.props.title}
      </h1>
    );
  }

  componentDidMount() {
    console.log('4', Date.now())
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props: %o', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('next props: %o,next state: %o', nextProps, nextState)
    return true
  }

  componentWillUpdate() {
    console.log('6')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('7')
    console.log('prev props: %o,prev state: %o', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('5')
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: '首页'
}

export default Header;