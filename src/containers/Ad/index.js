import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import '../../less/global.less';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';

class Ad extends Component {
  componentDidMount() {
    this.props.ad()
  }

  render() {
    return (
      <div className="center">
        {
          this.props.ads.map(item => {
            return (
              <div key={item.id}>
                {item.title}
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
    ads: state.ads
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