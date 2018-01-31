import React, { Component } from 'react';
import '../../less/global.less';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/action';

class Progress extends Component {
  componentDidMount() {
    this.props.getAds()
  }

  handleClick = () => {
    console.log('this: %o', this.handleClick)
  }

  render() {
    return (
      <div className="center">
        <Button onClick={this.handleClick}>按钮</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ads: state.ads
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getAds: actions.getAds
  }, dispatch)
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress);