import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import '../../less/global.less';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';

import { Button } from 'antd';

class Ad extends Component {
  componentDidMount() {
    this.props.ad()
  }

  render() {
    return (
      <div className="center">
        {
          this.props.adStatus.isFetching ?
            <Button shape="circle" loading />
            :
            this.props.ads.map(item => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img style={{ height: 300, width: 600 }} src={item.image} alt={item.title} />
                </div>
              )
            })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ads: state.ads,
    adStatus: state.status.ads
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ad: actions.ad
  }, dispatch)
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad);